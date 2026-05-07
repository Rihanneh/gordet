import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { siteConfig } from "../config/siteConfig";
import "./legal.css";

const { company, website, hosting } = siteConfig;

export default function MentionsLegales() {
    return (
        <>
            <div className="legal-hero">
                <NavBar />
                <h1>Mentions légales</h1>
            </div>

            <main className="legal-content">
                <div className="container">

                    <section className="legal-section">
                        <h2>Éditeur du site</h2>
                        <p>
                            Le site <strong>{website.name}</strong> est édité par la société{" "}
                            <strong>{company.name}</strong>, {company.legalForm} au capital de{" "}
                            {company.capital}, immatriculée sous le numéro SIRET{" "}
                            {company.siret}.
                        </p>
                        <p>
                            Siège social : {company.address}, {company.postalCode} {company.city}
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>Hébergement</h2>
                        <p>
                            Le site est hébergé par <strong>{hosting.name}</strong>,{" "}
                            {hosting.address}, {hosting.postalCode} {hosting.city},{" "}
                            {hosting.country}.
                        </p>
                        {hosting.website && hosting.website !== "À compléter" && (
                            <p>
                                Site web :{" "}
                                <a href={hosting.website} target="_blank" rel="noreferrer">
                                    {hosting.website}
                                </a>
                            </p>
                        )}
                    </section>

                    <section className="legal-section">
                        <h2>Propriété intellectuelle</h2>
                        <p>
                            L'ensemble des contenus présents sur le site{" "}
                            <strong>{website.name}</strong> (textes, images, graphismes, logo,
                            icônes, sons, logiciels…) est la propriété exclusive de{" "}
                            <strong>{company.name}</strong>, à l'exception des marques, logos ou
                            contenus appartenant à d'autres sociétés partenaires ou auteurs.
                        </p>
                        <p>
                            Toute reproduction, représentation, modification, publication,
                            transmission ou dénaturation, totale ou partielle du site ou de son
                            contenu est interdite sans l'autorisation écrite préalable de{" "}
                            <strong>{company.name}</strong>.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>Données personnelles</h2>
                        <p>
                            Dans le cadre de l'utilisation du site, des données personnelles
                            peuvent être collectées. Pour en savoir plus sur leur traitement, veuillez
                            consulter notre{" "}
                            <Link to="/protection-des-donnees">
                                politique de protection des données
                            </Link>
                            .
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>Cookies</h2>
                        <p>
                            Le site peut être amené à utiliser des cookies afin d'améliorer
                            l'expérience de navigation. Ces cookies sont déposés uniquement avec
                            votre consentement. Vous pouvez configurer votre navigateur pour refuser
                            les cookies ou être informé de leur dépôt.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>Limitation de responsabilité</h2>
                        <p>
                            <strong>{company.name}</strong> ne saurait être tenu responsable des
                            dommages directs ou indirects résultant de l'utilisation du site ou de
                            l'impossibilité d'y accéder. Les informations présentes sur le site sont
                            fournies à titre indicatif et peuvent être modifiées à tout moment.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>Droit applicable</h2>
                        <p>
                            Le présent site et ses mentions légales sont soumis au droit français.
                            En cas de litige, les tribunaux français seront seuls compétents.
                        </p>
                    </section>

                </div>
            </main>

            <Footer />
        </>
    );
}
