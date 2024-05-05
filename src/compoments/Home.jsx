import { NavLink } from "react-router-dom";
import Stack from "./Stack";
import "../styles/stack.css";
import "../styles/header.css";

function Home() {
    return (
        <>
            <header className="header-home">
                <div className="container-stack">
                    <Stack />
                </div>
                <NavLink to="/login">Login</NavLink>
            </header>
            <h1 className="h1-home">{"developpeur web fullStack"}</h1>
        </>
    );
}

export default Home;
