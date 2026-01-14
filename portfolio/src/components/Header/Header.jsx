import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import logo from "../../assets/logo_portfolio.png";
import "./Header.scss";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggle = (isOpen) => {
        setIsMenuOpen(isOpen);
    };

    const handleClose = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header" role="banner">
            <Link to="/" className="header-logo-link" aria-label="Accueil">
                <img src={logo} alt="Logo portfolio" className="header-logo" />
            </Link>

            {/* Navigation Desktop */}
            <nav
                className="header-nav-desktop"
                role="navigation"
                aria-label="Navigation principale"
            >
                <ul className="nav-list">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "nav-link-active" : ""}`
                            }
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/projets"
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "nav-link-active" : ""}`
                            }
                        >
                            Mes projets
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "nav-link-active" : ""}`
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>

            {/* Navigation Mobile */}
            <nav
                className="header-nav-mobile"
                role="navigation"
                aria-label="Menu mobile"
            >
                <Dropdown onToggle={handleToggle} show={isMenuOpen}>
                    <Dropdown.Toggle
                        variant="link"
                        id="dropdown-mobile"
                        className="header-dropdown-toggle"
                        aria-label={
                            isMenuOpen
                                ? "Fermer le menu de navigation mobile"
                                : "Ouvrir le menu de navigation mobile"
                        }
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? "✕" : "☰"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                        className="mobile-dropdown-menu"
                        role="menu"
                        align="end"
                    >
                        <ul className="dropdown-list" role="menu">
                            <li>
                                <Dropdown.Item
                                    as={NavLink}
                                    to="/"
                                    onClick={handleClose}
                                >
                                    Accueil
                                </Dropdown.Item>
                            </li>
                            <li>
                                <Dropdown.Item
                                    as={NavLink}
                                    to="/projets"
                                    onClick={handleClose}
                                >
                                    Mes projets
                                </Dropdown.Item>
                            </li>
                            <li>
                                <Dropdown.Item
                                    as={NavLink}
                                    to="/contact"
                                    onClick={handleClose}
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
