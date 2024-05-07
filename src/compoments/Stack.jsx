import { TypeAnimation } from "react-type-animation";

const Stack = () => {
    return (
        <div className="container-stack">
            <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                    "",
                    2000,
                    "Front-end \n \n Html/CSS \n JavaScript \n React \n Vite Js \n Type-Script",
                    4000,
                    "Back-end \n \n Node \n Express",
                    4000,
                    "\n\nGit \n gitHub",
                    4000,
                ]}
                wrapper="h2"
                speed={10}
                deletionSpeed={90}
                style={{ 
                    fontSize: "1.4em", 
                    display: "block",
                    whiteSpace: 'pre-line', 
                }}
                repeat={Infinity}
                className={"stack"}
            />
        </div>
    );
};

export default Stack;
