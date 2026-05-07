import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { navLinks } from "../config/navLinks";
import "./legal.css";

const legalLinks = [
    { label: "Mentions légales", path: "/mentions-legales" },
    { label: "Protection des données", path: "/protection-des-donnees" },
    { label: "Sitemap", path: "/sitemap" },
];

export default function Sitemap() {
    return (
        <>
            <div className="legal-hero">
                <NavBar />
                <h1>Plan du site</h1>
            </div>

            <main className="legal-content">
                <div className="container">
                    <section className="legal-section">
                        <h2>Toutes les pages</h2>
                        <div className="sitemap-grid">

                            <div className="sitemap-card">
                                <h3>Navigation principale</h3>
                                <ul>
                                    {navLinks.map(({ label, path }) => (
                                        <li key={path}>
                                            <Link to={path}>{label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="sitemap-card">
                                <h3>Informations légales</h3>
                                <ul>
                                    {legalLinks.map(({ label, path }) => (
                                        <li key={path}>
                                            <Link to={path}>{label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </>
    );
}
