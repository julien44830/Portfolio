import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const Particules = () => {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = () => {
    };

    const options = useMemo(
        () => ({
            autoPlay: true,
            background: {
                color: {
                    value: "#555",
                },
                image: "",
                position: "",
                repeat: "",
                size: "",
                opacity: 1,
            },
            detectRetina: true,
            duration: 0,
            fpsLimit: 120,
            interactivity: {
                detectsOn: "window",
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "grab",
                        parallax: {
                            enable: true,
                            force: 400, // *vitesse Parallax
                            smooth: 10, // *puissance Parallax
                        },
                    },
                },
                modes: {
                    grab: {
                        distance: 200, // *distance d'accroche
                    },
                    remove: {
                        quantity: 20,
                    },
                },
            },
            manualParticles: [],
            particles: {
                groups: {},
                move: {
                    enable: true,
                },
                // *nombre de particules
                number: {
                    limit: {
                        mode: "delete",
                        value: 100, // *suprime au dela de ....
                    },
                    value: 80, // *nombre de particules
                },
                opacity: {
                    value: {
                        min: 0.1,
                        max: 1,
                    },
                },
                // *parametre de scintillement
                size: {
                    value: {
                        min: 1,
                        max: 4,
                    },
                    animation: {
                        count: 0,
                        enable: true, // *active le scintillement
                        speed: 10,
                        decay: 0,
                        delay: 1,
                        sync: false,
                        mode: "auto",
                        startValue: "random",
                        destroy: "none",
                    },
                },
                // *lien entre les particules
                links: {
                    distance: 150,
                    enable: true,
                    frequency: 1,
                    opacity: 0.5,
                    shadow: {
                        blur: 5,
                        color: {
                            value: "#000",
                        },
                        enable: false,
                    },
                    triangles: {
                        enable: false,
                        frequency: 1,
                    },
                    width: 1,
                    warp: false,
                },
            },

            responsive: [],
            smooth: false,
            style: {},
            themes: [],
            zLayers: 100,
            name: "Parallax",
        }),
        []
    );
    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
            />
        );
    }
    return <></>;
};

export default Particules;
