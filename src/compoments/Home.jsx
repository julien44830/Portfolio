// import { NavLink } from "react-router-dom";
import TextHome from "./TextHome";
import Stack from "./Stack";
import "../styles/stack.css";
import "../styles/header.css";
import "../styles/index.css";
import '../styles/home.css';

function Home() {
    return (
        <>
            {/* <NavLink to="/login">Login</NavLink> */}
            <header className="header-home">
                <h1 className="h1-home">{"developpeur web fullStack"}</h1>
            </header>
            <section className="section-home">
                <TextHome />
                <Stack />
            </section>
        </>
    );
}

export default Home;
