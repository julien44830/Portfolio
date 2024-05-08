import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

function Text3D() {
    const containerRef = useRef();
    const rendererRef = useRef();
    const sceneRef = useRef();
    const cameraRef = useRef();
    const directionalLightRef = useRef();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
                    depth: 0.3, // Ajustez la profondeur ici
                });

                const material = new THREE.MeshStandardMaterial({
                    color: 0xffffff,
                    // transparent: true,
                    // opacity: 0.8,
                    side: THREE.DoubleSide,
                });

                const mesh = new THREE.Mesh(geometry, material);
                scene.add(mesh);

                const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
                scene.add(ambientLight);

                const directionalLight = new THREE.DirectionalLight(
                    0xffffff,
                    10
                );
                scene.add(directionalLight);
                directionalLightRef.current = directionalLight;

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

        const handleMouseMove = (event) => {
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            setMousePosition({ x: mouseX, y: mouseY });
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            renderer.dispose();
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useEffect(() => {
        if (directionalLightRef.current) {
            const updateLightPosition = (light) => {
                if (light) {
                    const { x, y } = mousePosition;
                    const width = window.innerWidth;
                    const height = window.innerHeight;
            
                    // Map mouse position to light position
                    const lightX = (x / width) * 2 - 1;
                    const lightY = -(y / height) * 2 + 1;
            
                    light.position.set(lightX, lightY, 1);
                }
            };

            updateLightPosition(directionalLightRef.current);
            rendererRef.current.render(
                sceneRef.current,
                cameraRef.current
            );
        }
    }, [mousePosition]);

    return <div ref={containerRef}></div>;
}

export default Text3D;
