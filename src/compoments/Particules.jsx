import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Chargement léger

const Particules = () => {
    const [init, setInit] = useState(false);
    console.log("%c⧭", "color: #00e600", init);

    // Initialisation du moteur Particles
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine); // Version allégée
        }).then(() => {
            setInit(true);
        });
    }, []);

    // Options de configuration optimisées
    const options = useMemo(
        () => ({
            background: {
                // color: "#000", // Fond noir par défaut
            },
            fullScreen: {
                enable: true,
                zIndex: -1, // en arrière-plan
            },
            particles: {
                number: {
                    value: 15, // Moins de particules = meilleure perf
                    limit: 50,
                },
                size: {
                    value: { min: 1, max: 2 }, // Taille réduite
                },
                move: {
                    enable: true,
                    speed: 0.5, // Mouvement plus lent
                },
                opacity: {
                    value: 0.5,
                },
                links: {
                    enable: false, // Désactivé pour gain de perf
                },
            },
            interactivity: {
                events: {
                    onClick: { enable: false },
                    onHover: { enable: false },
                },
            },
            detectRetina: true,
        }),
        []
    );

    if (!init) {
        // Affiche un fond pendant le chargement
        return (
            <>
                <div className="w-full h-screen " />
                <p>test</p>
            </>
        );
    }

    return (
        <Particles
            id="tsparticles"
            options={options}
            className="particles"
        />
    );
};

export default Particules;
