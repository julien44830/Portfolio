
import {
    MouseParallaxContainer,
    MouseParallaxChild
} from "react-parallax-mouse";
import "../styles/parallax.css";

function Parallax() {
    return (
        <MouseParallaxContainer
            globalFactorX={0.1}
            globalFactorY={0.1}
            >
            <MouseParallaxChild
                factorX={0.3}
                factorY={0.5}
                classNAme="parallax"
            >

                <section className="a-propos">
                    <h1>À propos de moi</h1>

                    <p>
                        Bonjour, je m&apos;appelle Julien et je suis développeur
                        junior diplômé d&apos;un bootcamp de 5 mois en
                        développement full stack de la Wild Code School. Lors de
                        cette formation intensive, j&apos;ai appris à maîtriser
                        des technologies clés telles que JavaScript, React,
                        Express, Node.js, Git, GitHub, ainsi que les
                        méthodologies Agile et Scrum. J&apos;ai également acquis
                        des compétences en bases de données avec MySQL et SQL.
                    </p>


                </section>
            </MouseParallaxChild>
            <MouseParallaxChild
                factorX={0.7}
                factorY={0.8}
            >
                <img
                    src="src/assets/images/backTest.png"
                    alt=""
                    className="parallax"
                />
            </MouseParallaxChild>
        </MouseParallaxContainer>
    );
}

export default Parallax;
