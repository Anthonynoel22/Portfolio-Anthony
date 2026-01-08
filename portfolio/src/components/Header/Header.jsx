import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo portfolio.png";
import "./Header.scss";

function Header() {
    return (
        <header className="header">
            <img 
                src={logo}
                alt="logo portfolio"
                className="header-logo"

            />
            <nav className="header-nav">
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/projets">Mes projets</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
