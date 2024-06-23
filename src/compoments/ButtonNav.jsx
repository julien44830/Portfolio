import { NavLink } from "react-router-dom";
import "../styles/btn-nav.css";

function ButtonNav() {
    return (
        <section className="section-btn">
            <NavLink
                to="/projet" 
                className="a-btn"
            >
                <div className="btn">
                    <p>projet</p>
                    <img
                        src="/images/icons-fleche-bas.png"
                        alt=""
                        className="btn-img-1"
                    />
                </div>
            </NavLink>
            <NavLink
                to="/about"
                className="a-btn"
            >
                <div className="btn">
                    <p>tout sur moi</p>
                    <img
                        src="/images/icons-fleche-bas.png"
                        alt=""
                        className="btn-img-2"
                    />
                </div>
            </NavLink>
        </section>
    );
}

export default ButtonNav;
