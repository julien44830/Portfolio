import { TypeAnimation } from "react-type-animation";

const Stack = () => {
    return (
        <div className="container-stack">
            <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                    "",
                    1000,
                    "Front-end \n \n Html/CSS \n JavaScript \n React \n Vite Js \n Typescript",
                    4000,
                    "Back-end \n \n Node \n Express \n SQL \n My SQL \n Maria DB",
                    4000,
                    "\n\nGit \n gitHub \n Méthode Agile",
                    4000,
                ]}
                wrapper="h2"
                speed={10}
                deletionSpeed={90}

                repeat={Infinity}
                className={"stack"}  
            />
        </div>
    );
};

export default Stack;
