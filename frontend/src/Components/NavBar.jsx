import Button from "./Button";
import { Link, NavLink } from "react-router-dom";

import "./NavBar.css";

import { useState } from "react";
import mainLogo from "../../assets/logo_sm.png";
import menuIcon from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/close.svg";
import { navLinks } from "../config/navLinks";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header>
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
                    {navLinks
                        .filter(({ path }) => path !== "/contact")
                        .map(({ label, path }) => (
                            <li key={path}>
                                <NavLink
                                    to={path}
                                    end={path === "/"}
                                    onClick={closeMenu}
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    <li className="navbar_links_button">
                        <Button
                            title="Nous contacter"
                            path="/contact"
                            extraClass="btn-small"
                            onClick={closeMenu}
                        />
                    </li>
                </ul>
                <Button
                    title="Contact"
                    path="/contact"
                    extraClass="btn-small navbar_desktop_button"
                />
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
        </header>
    );
}
