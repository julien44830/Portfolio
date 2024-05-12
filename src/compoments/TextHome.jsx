import { TypeAnimation } from "react-type-animation";
import "../styles/textHome.css";

function TextHome() {
    return (
        <section className="section-text-home">
            <article className="article-text-home">
                <TypeAnimation
                    preRenderFirstString={true}
                    cursor={false}
                    sequence={[
                        "",
                        500,
                        "C:\\Users\\DeniaudJulien\\deloppeur_Web > $ ...",
                        2000,
                    ]}
                    wrapper="h2"
                    speed={80}
                    deletionSpeed={90}
                    style={{
                        fontSize: "1.2em",
                        display: "block",
                        whiteSpace: "pre-line",
                    }}
                    className={"h2-text-home"}
                />

                <TypeAnimation
                    preRenderFirstString={true}
                    sequence={[
                        "",
                        3000,
                        "    En reconversion vers le développement informatique, ma passion pour JavaScript incarne ma fascination pour ce langage polyvalent. \n\n    En tant que développeur junior, j'explore constamment de nouvelles techniques pour améliorer mes compétences. \n\n    J'apprécie la flexibilité syntaxique de JavaScript et sa capacité à simplifier des tâches complexes pour créer des expériences utilisateur dynamiques. \n\n    Fort d'une expérience antérieure, je m'efforce d'apporter une perspective innovante à mon travail...",
                        2500,
                    ]}
                    wrapper="p"
                    speed={80}
                    deletionSpeed={90}
                    style={{
                        fontSize: "1.2em",
                        display: "block",
                        whiteSpace: "pre-line",
                    }}
                    className={"p-text-home"}
                />
            </article>
        </section>
    );
}

export default TextHome;
