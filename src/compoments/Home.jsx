// import { NavLink } from "react-router-dom";
import Text3D from "./Text3D";
import Particules from "./Particules";
import TextHome from "./TextHome";
import Stack from "./Stack";
import { useState, useEffect } from "react";
import "../styles/stack.css";
import "../styles/header.css";
import "../styles/index.css";
import "../styles/home.css";

function Home() {
    const [showText3D, setShowText3D] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowText3D(false); // Après 3 secondes, cache Text3D
        }, 4000);

        return () => clearTimeout(timer);
    }, []); // Le tableau vide en second argument signifie que cet effet s'exécute une seule fois après le montage initial

    return (
        <>
            {showText3D && <Text3D />}
            <header className="header-home">
                <h1 className="h1-home">{"developpeur web fullStack"}</h1>
            </header>
            <section className="section-home">
                <Particules />
                <TextHome />
                <Stack />
            </section>
        </>
    );
}

export default Home;
