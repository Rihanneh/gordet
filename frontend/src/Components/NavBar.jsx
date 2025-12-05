import Button from "./Button";
import { Link } from "react-router-dom";

import "./NavBar.css";

import { useState } from "react";
import mainLogo from "../../assets/logo_sm.png";
import menuIcon from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/close.svg";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar container">
            <div className="navbar_logo">
                <Link to="/">
                    <img
                        src={mainLogo}
                        alt="Logo de l'entreprise Gordet spécialisé en revêtement de sol"
                    />
                </Link>
            </div>
            <ul className={`navbar_links ${isMenuOpen ? "active" : ""}`}>
                <li>
                    <a href="#" onClick={closeMenu}>Services</a>
                </li>
                <li>
                    <Link to="/projects" onClick={closeMenu}>Projects</Link>
                </li>
                <li>
                    <Link to="/gallery" onClick={closeMenu}>Inspirations</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={closeMenu}>Contact</Link>
                </li>
                <li className="navbar_links_button">
                    <Button title="Contact Us" path="/contact" extraClass="btn-small" onClick={closeMenu} />
                </li>
            </ul>
            <Button title="Contact Us" path="/contact" extraClass="btn-small navbar_desktop_button" />
            <button
                className={`nav_burgerMenu ${isMenuOpen ? "active" : ""}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <img
                    src={isMenuOpen ? closeIcon : menuIcon}
                    alt={isMenuOpen ? "Close menu" : "Open menu"}
                />
            </button>
        </nav>
    );
}
