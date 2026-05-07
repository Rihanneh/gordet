import { Link } from "react-router-dom";

import "./Footer.css";

import mainLogo from "../../assets/logo_sm_white.png";
import { navLinks } from "../config/navLinks";

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
                    {navLinks.map(({ label, path }) => (
                        <li key={path}>
                            <Link to={path}>{label}</Link>
                        </li>
                    ))}
                </ul>
                <ul>
                    <li className="header">Liens rapides</li>
                    <li>
                        <Link to="/mentions-legales">Mentions légales</Link>
                    </li>
                    <li>
                        <Link to="/protection-des-donnees">Protection des données</Link>
                    </li>
                    <li>
                        <Link to="/sitemap">Plan du site</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
