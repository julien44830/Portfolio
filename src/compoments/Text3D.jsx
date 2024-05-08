import { useEffect, useRef } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

function Text3D() {
    const containerRef = useRef();
    const rendererRef = useRef();
    const sceneRef = useRef();
    const cameraRef = useRef();
    const directionalLightRef = useRef();
    const lightDirection = useRef(20); // Variable pour contrôler la direction de l'animation

    useEffect(() => {
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        const width = window.innerWidth,
            height = window.innerHeight;

        const camera = new THREE.PerspectiveCamera(75, width / height, 1, 10);
        camera.position.z = 7;
        cameraRef.current = camera;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);

        if (rendererRef.current) {
            containerRef.current.removeChild(rendererRef.current.domElement);
        }

        containerRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        const loader = new FontLoader();
        loader.load(
            "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
            function (font) {
                const geometry = new TextGeometry("Developpeur \nWeb", {
                    font: font,
                    size: 1,
                    height: 1, // Hauteur du texte
                    curveSegments: 100,
                    depth: 0.5, // Ajustez la profondeur ici
                });

                const material = new THREE.MeshStandardMaterial({
                    color: 0x000000,
                    metalness: 1,   // Niveau de métallisation (1 pour un aspect métallique complet)
                    roughness: 0.9,  // Rugosité de la surface (0 pour une surface lisse)
                    side: THREE.DoubleSide,
                });

                const mesh = new THREE.Mesh(geometry, material);
                scene.add(mesh);

                const ambientLight = new THREE.AmbientLight(0xffffff, 15);
                scene.add(ambientLight);

                const directionalLight = new THREE.DirectionalLight(
                    0xffffff,
                    100
                );
                scene.add(directionalLight);
                directionalLightRef.current = directionalLight;

                // Initial light position
                directionalLight.position.set(0, -0.1, 0.01);

                // Créer un groupe et ajouter l'objet au groupe
                const group = new THREE.Group();
                group.add(mesh);

                // Ajouter le groupe à la scène
                scene.add(group);

                // Centrer la caméra devant le groupe (contenant l'objet)
                const box = new THREE.Box3().setFromObject(group);
                const center = box.getCenter(new THREE.Vector3());
                camera.lookAt(center);

                renderer.render(scene, camera);
            }
        );

        const animate = () => {
            // Déplacer la lumière dans la direction actuelle
            if (directionalLightRef.current) {
                // Modifier la vitesse de déplacement ici
                const speed = 0.0003; // Augmentez la valeur pour ralentir la vitesse
                directionalLightRef.current.position.x += speed * lightDirection.current;
        
                // Inverser la direction lorsque la lumière atteint une certaine limite
                if (directionalLightRef.current.position.x >= 1 || directionalLightRef.current.position.x <= -1) {
                    // Réduire la fréquence de l'inversion de direction
                    if (Math.random() < 10) { // Ajustez cette valeur pour modifier la fréquence d'inversion
                        lightDirection.current *= -1;
                    }
                }
        
                renderer.render(sceneRef.current, cameraRef.current);
            }
        
            requestAnimationFrame(animate);
        };
        

        animate();

        return () => {
            renderer.dispose();
        };
    }, []);

    return <div ref={containerRef}></div>;
}

export default Text3D;
