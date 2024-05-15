// import { NavLink } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import Text3D from "../compoments/Text3D";
import Particules from "../compoments//Particules";
import TextHome from "../compoments//TextHome";
import Stack from "../compoments//Stack";
import IsLoadingContext from "../contexts/HomeLoadingContext";

import "../styles/stack.css";
import "../styles/header.css";
import "../styles/index.css";
import "../styles/home.css";

function Home() {
    const { loading, setLoading } = useContext(IsLoadingContext);
    const [showText3D, setShowText3D] = useState(loading);

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
