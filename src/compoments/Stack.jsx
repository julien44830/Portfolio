import { TypeAnimation } from "react-type-animation";

const Stack = () => {

    return (
        <TypeAnimation
            preRenderFirstString={true}
            sequence={[
                // Same substring at the start will only be typed out once, initially

                "Front-end",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Back-end",
                1000,
                "Html/CSS",
                1000,
                "Java-Script",
                1000,
                "React",
                1000,
                "Vite Js",
                1000,
                "Typre Script",
                1000,
                "Node",
                1000,
                "Express",
                1000,
                "Git",
                1000,
            ]}
            wrapper="span"
            speed={30}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
            className={"stack"}
        />
    );
};

export default Stack;
