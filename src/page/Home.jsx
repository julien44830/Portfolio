// import { NavLink } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import Text3D from "../compoments/Text3D";
import Particules from "../compoments//Particules";
import TextHome from "../compoments//TextHome";
import Stack from "../compoments//Stack";

import "../styles/stack.css";
import "../styles/header.css";
import "../styles/index.css";
import "../styles/home.css";

function Home() {
    return (
        <>
            <div className="body-home">
                <header className="header-home">
                    <h1 className="h1-home">{"developpeur web fullStack"}</h1>
                </header>
                <section className="section-home">
                    <Particules />
                    <TextHome />
                    <Stack />
                </section>
            </div>
        </>
    );
}

export default Home;
