// import { NavLink } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import Text3D from "./Text3D";
import Particules from "./Particules";
import TextHome from "./TextHome";
import Stack from "./Stack";
import IsLoadingContext from "../contexts/HomeLoadingContext";

import "../styles/stack.css";
import "../styles/header.css";
import "../styles/index.css";
import "../styles/home.css";

function Home() {
    const { loading, setLoading } = useContext(IsLoadingContext);
    const [showText3D, setShowText3D] = useState(loading);
    console.log("%c⧭", "color: #733d00", showText3D);
    console.log("%c⧭", "color: #e50000", loading);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowText3D(false); // Après 3 secondes, cache Text3D
            setLoading(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, [setLoading]); // Effect dépendant de setLoading et setShowText3D

    return (
        <>
            {showText3D === true ? (
                <Text3D />
            ) : (
                <>
                    <header className="header-home">
                        <h1 className="h1-home">
                            {"developpeur web fullStack"}
                        </h1>
                    </header>
                    <section className="section-home">
                        <Particules />
                        <TextHome />
                        <Stack />
                    </section>
                </>
            )}
        </>
    );
}

export default Home;
