import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import logo from "../../assets/Logo portfolio.png";
import "./Header.scss";

function Header() {
    return (
        <header className="header" role="banner">

            <Link to="/" className="header-logo-link" aria-label="Accueil">
                <img
                    src={logo}
                    alt="Logo portfolio"
                    className="header-logo"
                />
            </Link>

            {/* Desktop Navigation */}
            <nav className="header-nav-desktop" role="navigation" aria-label="Navigation principale">
                <ul className="nav-list">
                    <li><Link to="/" className="nav-link">Accueil</Link></li>
                    <li><Link to="/projets" className="nav-link">Mes projets</Link></li>
                    <li><Link to="/contact" className="nav-link">Contact</Link></li>
                </ul>
            </nav>

            {/* Mobile Dropdown */}
            <nav className="header-nav-mobile" role="navigation" aria-label="Menu mobile">
                <Dropdown>
                    <Dropdown.Toggle
                        variant="link"
                        id="dropdown-mobile"
                        className="header-dropdown-toggle"
                        aria-label="Ouvrir le menu de navigation mobile"
                        aria-expanded={false}
                    >
                        ☰
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="mobile-dropdown-menu" role="menu">
                        <ul className="dropdown-list" role="menu">
                            <li role="none">
                                <Dropdown.Item 
                                    as={Link} 
                                    to="/" 
                                    className="dropdown-link" 
                                    role="menuitem"
                                >
                                    Accueil
                                </Dropdown.Item>
                            </li>
                            <li role="none">
                                <Dropdown.Item 
                                    as={Link} 
                                    to="/projets" 
                                    className="dropdown-link" 
                                    role="menuitem"
                                >
                                    Mes projets
                                </Dropdown.Item>
                            </li>
                            <li role="none">
                                <Dropdown.Item 
                                    as={Link} 
                                    to="/contact" 
                                    className="dropdown-link" 
                                    role="menuitem"
                                >
                                    Contact
                                </Dropdown.Item>
                            </li>
                        </ul>
                    </Dropdown.Menu>
                </Dropdown>
            </nav>
        </header>
    );
}

export default Header;
