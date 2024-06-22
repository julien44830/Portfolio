import { NavLink } from "react-router-dom";
import "../styles/factoryPage.css";

function FactoryPage() {
    return (
        <section className="section-factory-page">
            <NavLink to="/">
                <h1 className="h1-factory-page">
                    Cette page est en construction cliqué ici pour revenir a
                    l&apos;accueil
                </h1>
            </NavLink>
            <section className="section-multimedia-factrory-page">
                <video
                    className="video-factory-page"
                    src="../assets/images/construction_page_construction.mp4"
                    type="video/mp4"
                    loop
                    autoPlay
                    muted
                />
                <div className="container-img-factory-page">
                    <img
                        className="img-factory-page"
                        src="../src/assets/images/coding_man.gif"
                        alt="je construit cette page "
                    />
                </div>
            </section>
        </section>
    );
}

export default FactoryPage;
