import { Link } from "react-router-dom";

import "./Footer.css";

import mainLogo from "../../assets/logo_sm_white.png";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div>
                    <img src={mainLogo} alt="" />
                    <p className="text">
                        Nous sommes spécialisés dans la fourniture et la pose de
                        revêtements de sols.
                    </p>
                </div>
                <ul>
                    <li className="header">Navigation</li>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="#">Services</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projets</Link>
                    </li>
                    <li>
                        <Link to="/gallery">Inspirations</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <ul>
                    <li className="header">Liens rapides</li>
                    <li>
                        <a href="#">Mentions légales</a>
                    </li>
                    <li>
                        <a href="#">Protection des données</a>
                    </li>
                    <li>
                        <a href="#">Sitemap</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
