import PropTypes from "prop-types";

export default function ModalProjet({ projet, onClose }) {
    if (!projet) return null;

    return (
        <div
            className="modal-overlay"
            onClick={onClose}
        >
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="modal-close"
                    onClick={onClose}
                >
                    X
                </button>
                <img
                    src={projet.img}
                    alt={projet.title}
                />
                <h2>{projet.title}</h2>
                <p>{projet.details}</p>
                <a
                    href={projet.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visiter le projet
                </a>
            </div>
        </div>
    );
}

ModalProjet.propTypes = {
    projet: PropTypes.shape({
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        details: PropTypes.string,
        link: PropTypes.string.isRequired,
    }),
    onClose: PropTypes.func.isRequired,
};
