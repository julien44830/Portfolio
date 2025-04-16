import { NavLink } from "react-router-dom";
import CardProjet from "../compoments/CardProjet";
import ModalProjet from "../compoments/ModalProjet";
import projets from "../data/projet";
import { useState } from "react";

function Projet() {
    const [modalProjet, setModalProjet] = useState(null);
    return (
        <div className="container-projet">
            <NavLink
                to="/"
                className="btn btn-return-projet"
            >
                <p>retour à l&apos;accueil</p>
            </NavLink>
            <h1>Mes projets</h1>
            <section className="section-projet">
                {projets.map((projet, index) => (
                    <CardProjet
                        key={index}
                        projet={projet}
                        onClick={() => {
                            console.log("Projet cliqué :", projet); // ← ici le console.log
                            setModalProjet(projet);
                        }}
                    />
                ))}
            </section>
            <ModalProjet
                projet={modalProjet}
                onClose={() => setModalProjet(null)}
            />
        </div>
    );
}

export default Projet;
