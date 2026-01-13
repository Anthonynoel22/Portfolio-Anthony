import React from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import logo from "../../assets/Logo portfolio.png";
import "./Header.scss";

function Header() {
    const location = useLocation();

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
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => 
                                `nav-link ${isActive ? 'nav-link-active' : ''}`
                            }
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/projets" 
                            className={({ isActive }) => 
                                `nav-link ${isActive ? 'nav-link-active' : ''}`
                            }
                        >
                            Mes projets
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/contact" 
                            className={({ isActive }) => 
                                `nav-link ${isActive ? 'nav-link-active' : ''}`
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
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
                                    as={NavLink} 
                                    to="/" 
                                    className={({ isActive }) => 
                                        `dropdown-link ${isActive ? 'dropdown-link-active' : ''}`
                                    }
                                    role="menuitem"
                                >
                                    Accueil
                                </Dropdown.Item>
                            </li>
                            <li role="none">
                                <Dropdown.Item 
                                    as={NavLink} 
                                    to="/projets" 
                                    className={({ isActive }) => 
                                        `dropdown-link ${isActive ? 'dropdown-link-active' : ''}`
                                    }
                                    role="menuitem"
                                >
                                    Mes projets
                                </Dropdown.Item>
                            </li>
                            <li role="none">
                                <Dropdown.Item 
                                    as={NavLink} 
                                    to="/contact" 
                                    className={({ isActive }) => 
                                        `dropdown-link ${isActive ? 'dropdown-link-active' : ''}`
                                    }
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

