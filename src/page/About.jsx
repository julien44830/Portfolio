import { NavLink } from "react-router-dom";
import {
    MouseParallaxContainer,
    MouseParallaxChild,
} from "react-parallax-mouse";
import "../styles/parallax.css";
import "../styles/about.css";

function About() {
    return (
        <div className="conteneur-principal">
            <div className="page">
                <div className="center"></div>
            </div>

            <div className="contenu">
                <MouseParallaxContainer
                    globalFactorX={0.1}
                    globalFactorY={0.1}
                    className="parallax-container"
                >
                    <MouseParallaxChild
                        factorX={0.3}
                        factorY={0.5}
                        className="parallax"
                    ></MouseParallaxChild>

                    <MouseParallaxChild
                        factorX={2}
                        factorY={4}
                        className="parallax-black-hole"
                    ></MouseParallaxChild>

                    <section className="a-propos-section">
                        <h1 className="h1-about">À propos de moi</h1>

                        <p>
                            Bonjour, je m&apos;appelle Julien et je suis
                            développeur junior diplômé d&apos;un bootcamp de 5
                            mois en développement full stack de la Wild Code
                            School. Lors de cette formation intensive, j&apos;ai
                            appris à maîtriser des technologies clés telles que
                            JavaScript, React, Express, Node.js, Git, GitHub,
                            ainsi que les méthodologies Agile et Scrum.
                            J&apos;ai également acquis des compétences en bases
                            de données avec MySQL et SQL.
                        </p>

                        <h2 className="h2-about">Parcours et formation</h2>
                        <p>
                            Avant de me lancer dans le développement web, j'ai
                            travaillé comme plâtrier-plaquiste. Cette expérience
                            m'a appris la rigueur, l'écoute, et l'importance du
                            travail en équipe. Aujourd'hui, je me tourne vers le
                            web, un domaine qui me passionne par ses
                            possibilités infinies et son besoin constant
                            d'apprendre et de s'adapter.
                        </p>

                        <h2 className="h2-about">Compétences techniques</h2>
                        <ul className="ul-li-about">
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Express</li>
                            <li>Node.js</li>
                            <li>Git/GitHub</li>
                            <li>Agile/Scrum</li>
                            <li>MySQL/SQL</li>
                        </ul>

                        <h2 className="h2-about">Projets personnels et académiques</h2>
                        <p>
                            Au cours de ma formation à la Wild Code School, j'ai
                            travaillé sur plusieurs projets, dont deux projets
                            de groupe :
                        </p>

                        <ul className="ul-about">
                            <li>
                                <h3 className="h3-about">H2overflow :</h3>
                                <p>
                                    Une application qui répertorie les nappes
                                    phréatiques de France, développée en React.
                                </p>
                            </li>
                            <li>
                                <h3 className="h3-about">Carte Venture :</h3>
                                <p>
                                    Un site de création de cartes postales en
                                    React.
                                </p>
                            </li>
                        </ul>

                        <p>
                            En dehors de ces projets académiques, j'ai commencé
                            à coder un site web en JavaScript Vanilla avant ma
                            formation, que je prévois de refaire entièrement en
                            React pour améliorer ses fonctionnalités et son
                            design.
                        </p>

                        <h2 className="h2-about">Projets Codewars</h2>
                        <p>
                            Pour améliorer mes compétences en algorithmes et en
                            résolution de problèmes, je suis actif sur Codewars.
                            Voici quelques exemples de mes défis résolus ici
                        

                        <NavLink to="/codewars" className="btn-to-codewars">
                            <button className="btn-to-codewars">code Wars</button>
                        </NavLink>
                        </p>

                        <h2 className="h2-about" >Objectifs professionnels</h2>
                        <p>
                            Je suis actuellement inscrit à une formation en
                            alternance pour apprendre Java et Angular, avec pour
                            objectif de devenir un développeur full stack
                            complet et polyvalent. J'aspire à rejoindre une
                            équipe dynamique où je peux continuer à apprendre, à
                            contribuer à des projets innovants, et à travailler
                            en étroite collaboration avec mes collègues.
                        </p>

                        <h2 className="h2-about">Passions et intérêts</h2>
                        <p>
                            Je suis passionné par l'astronomie, un domaine qui
                            m'émerveille par ses mystères et ses découvertes.
                            Cette passion pour l'exploration et l'apprentissage
                            se reflète dans mon parcours professionnel et
                            personnel. J'adore les travaux de groupe et je suis
                            toujours à l'écoute des nouvelles idées et des
                            connaissances à acquérir.
                        </p>

                        <h2 className="h2-about">Contact</h2>

                        <section className="contact-section">
                            <a href="mailto:deniaudjulien0@gmail.com">
                                deniaudjulien0@gmail.com
                            </a>

                            <div className="contact-btn">
                                <div className="btn">
                                    <a
                                        target="_blank"
                                        href="https://www.linkedin.com/in/julien-deniaud-917610238/"
                                    >
                                        linkedin
                                    </a>
                                    <img
                                        src="src/assets/images/icons-fleche-bas.png"
                                        alt=""
                                        className="btn-img-2"
                                    />
                                </div>

                                <div className="btn">
                                    <a
                                        target="_blank"
                                        href="https://github.com/julien44830"
                                    >
                                        GitHub
                                    </a>
                                    <img
                                        src="src/assets/images/icons-fleche-bas.png"
                                        alt=""
                                        className="btn-img-2"
                                    />
                                </div>
                            </div>
                        </section>

                        <NavLink
                            to="/"
                            className="a-btn a-btn-about"
                        >
                            <div className="btn">
                                <p>retour accueil</p>
                                <img
                                    src="./assets/images/icons-fleche-bas.png"
                                    alt=""
                                    className="btn-img-2"
                                />
                            </div>
                        </NavLink>
                    </section>
                    <MouseParallaxChild
                        factorX={0.7}
                        factorY={0.8}
                    ></MouseParallaxChild>
                </MouseParallaxContainer>
            </div>
        </div>
    );
}

export default About;
