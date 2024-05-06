import { TypeAnimation } from "react-type-animation";

const Stack = () => {
    return (
        <div className="container-stack">
            <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                    // Same substring at the start will only be typed out once, initially

                    "Front-end",
                    2000, // vitesse avnt de passer a la suite
                    "Html/CSS",
                    2000,
                    "Java-Script",
                    2000,
                    "React",
                    2000,
                    "Vite-Js",
                    2000,
                    "Type-Script",
                    2000,
                    "Back-end",
                    2000,
                    "Node",
                    2000,
                    "Express",
                    2000,
                    "Git",
                    2000,
                ]}
                wrapper="span"
                speed={10}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
                className={"stack"}
            />
        </div>
    );
};

export default Stack;
