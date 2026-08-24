import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { siteConfig } from "../config/siteConfig";
import "./legal.css";

const { company, website } = siteConfig;

export default function ProtectionDonnees() {
    return (
        <>
            <div className="legal-hero">
                <NavBar />
                <h1>Protection des données</h1>
            </div>

            <main className="legal-content">
                <div className="container">

                    <section className="legal-section">
                        <h2>Responsable du traitement</h2>
                        <p>
                            Le responsable du traitement des données collectées sur{" "}
                            <strong>{website.name}</strong> est :
                        </p>
                        <p>
                            <strong>{company.name}</strong> — {company.address},{" "}
                            {company.postalCode} {company.city}
                        </p>
                        <p>
                            Contact :{" "}
                            <a href={`mailto:${company.email}`}>{company.email}</a>
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>Données collectées et finalités</h2>

                        <h3>Formulaire de contact</h3>
                        <p>
                            Lors de l'envoi d'un message via le formulaire de contact, nous
                            collectons les données suivantes :
                        </p>
                        <ul>
                            <li>Nom et prénom</li>
                            <li>Adresse e-mail</li>
                            <li>Numéro de téléphone (facultatif)</li>
                            <li>Message</li>
                        </ul>
                        <p>
                            Ces données sont utilisées uniquement pour répondre à votre demande et
                            ne sont pas transmises à des tiers.
                        </p>

                        <h3>Navigation</h3>
                        <p>
                            Lors de votre visite, des données de navigation peuvent être
                            enregistrées de manière anonyme (pages consultées, durée de visite) à
                            des fins statistiques.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>Base légale du traitement</h2>
                        <ul>
                            <li>
                                <strong>Formulaire de contact :</strong> exécution de
                                mesures précontractuelles ou consentement de l'utilisateur
                                (art. 6.1.b et 6.1.a du RGPD).
                            </li>
                            <li>
                                <strong>Statistiques de navigation :</strong> intérêt légitime de
                                l'éditeur à améliorer le site (art. 6.1.f du RGPD).
                            </li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>Durée de conservation</h2>
                        <ul>
                            <li>
                                Données de contact : conservées pendant <strong>3 ans</strong> à
                                compter du dernier échange, puis supprimées.
                            </li>
                            <li>
                                Données de navigation : anonymisées et conservées 13 mois maximum.
                            </li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>Vos droits</h2>
                        <p>
                            Conformément au Règlement Général sur la Protection des Données
                            (RGPD — Règlement UE 2016/679) et à la loi Informatique et Libertés,
                            vous disposez des droits suivants :
                        </p>
                        <ul>
                            <li>Droit d'accès à vos données personnelles</li>
                            <li>Droit de rectification des données inexactes</li>
                            <li>Droit à l'effacement (« droit à l'oubli »)</li>
                            <li>Droit à la limitation du traitement</li>
                            <li>Droit à la portabilité de vos données</li>
                            <li>Droit d'opposition au traitement</li>
                        </ul>
                        <p>
                            Pour exercer ces droits, adressez votre demande à :{" "}
                            <a href={`mailto:${company.email}`}>{company.email}</a>. Une réponse
                            vous sera apportée dans un délai d'un mois.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>Réclamation auprès de la CNIL</h2>
                        <p>
                            Si vous estimez que vos droits ne sont pas respectés, vous pouvez
                            introduire une réclamation auprès de la Commission Nationale de
                            l'Informatique et des Libertés (CNIL) :{" "}
                            <a
                                href="https://www.cnil.fr"
                                target="_blank"
                                rel="noreferrer"
                            >
                                www.cnil.fr
                            </a>
                            .
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>Sécurité</h2>
                        <p>
                            Nous mettons en œuvre des mesures techniques et organisationnelles
                            appropriées pour protéger vos données contre tout accès non autorisé,
                            perte, altération ou divulgation.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>Mise à jour de la politique</h2>
                        <p>
                            Cette politique de protection des données peut être mise à jour
                            ponctuellement. Nous vous invitons à la consulter régulièrement.
                            Dernière mise à jour : mai 2025.
                        </p>
                    </section>

                </div>
            </main>

            <Footer />
        </>
    );
}
