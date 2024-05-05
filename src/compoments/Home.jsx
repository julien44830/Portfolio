import { NavLink } from "react-router-dom";

function Home(){

    return(
        <>
        <h1>{"je suis sur la home page"}</h1>
        <NavLink  to="/login">Login</NavLink>

        </>
    )
}

export default Home;