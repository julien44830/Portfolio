import PropTypes from "prop-types";

export default function CardProjet({ projet, onClick }) {
    return (
        <div
            className="cardProjet"
            onClick={onClick}
        >
            <img
                src={projet.img}
                alt={projet.title}
            />
            <h2>{projet.title}</h2>
            <p>{projet.description}</p>
            <a
                href={projet.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()} // ← évite d’ouvrir la modale quand on clique sur le lien
            >
                lien projet
            </a>
        </div>
    );
}

CardProjet.propTypes = {
    projet: PropTypes.shape({
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func, // ← ajouté ici
};
