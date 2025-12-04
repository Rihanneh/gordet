import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import ContactUs from "../Components/ContactUs";
import "./Home.css";

import arkea from "../../assets/companies/arkea.jpg";
import salleDeBain from "../../assets/projets/carlage-salle-de-bain.jpg";
import solbois from "../../assets/projets/sol-bois-arkea.jpg";
import solVert from "../../assets/projets/sol-vert.jpg";
import aboutImg1 from "../../assets/projets/sol-foncé-vitre.jpg";
import aboutImg2 from "../../assets/projets/sol-bois-salon.jpg";
import escaliers from "../../assets/projets/escalier2.jpg";
import spaImg from "../../assets/projets/murs-spa.jpg";
import textDecoration from "../../assets/icons/text-decoration.svg";
import triangleCarrelage from "../../assets/triangle-carrelage.png";
import triangleDur from "../../assets/triangle-dur.png";
import triangleSouple from "../../assets/triangle-souple.png";
import triangleMoquette from "../../assets/triangle-moquette.png";

export default function Home() {
    return (
        <>
            <section>
                <Hero />
            </section>
            <section>
                <div className="container">
                    <div className="about">
                        <div className="about-title">
                            <p className="subtitle">Nos actions</p>
                            <h2>
                                Pour les{" "}
                                <span className="text-decorated">
                                    <span className="text-decoration">
                                        <ReactSVG src={textDecoration} />
                                    </span>
                                    <span className="text-decorated">
                                        professionnels
                                    </span>{" "}
                                </span>{" "}
                                et les{" "}
                                <span className="text-decorated">
                                    <span className="text-decoration">
                                        <ReactSVG src={textDecoration} />
                                    </span>
                                    <span className="text-decorated">
                                        collectivités
                                    </span>
                                </span>
                            </h2>
                        </div>
                        <div className="about-text">
                            <p>
                                Depuis plus de 30 ans l’entreprise Gordet est
                                rodée aux marchés publics tout comme aux marchés
                                privés/promotion immobilière
                            </p>
                            <p>
                                Entreprise certifiée Qualibat, nous nous formons
                                en continu à la qualité et veillons à la
                                sécurité de nos poseurs.
                            </p>
                        </div>
                    </div>
                    <div className="about">
                        <div className="about-text">
                            <p>
                                En neuf ou rénovation, le savoir-faire artisanal
                                de nos carreleurs vous garantit une pose
                                soignée, des joints fins et un rendu harmonieux
                                dans le respect des normes en vigueur et de
                                l’environnement.
                            </p>
                            <p>
                                Nous pouvons poser tous types de
                                revêtements&nbsp;: grès cérame, grès émaillé,
                                faïence, marbre, pierre. Mais aussi des sols
                                souple vinyle en lames ou lès, des sols textile,
                                moquette.
                            </p>
                        </div>
                        <div className="about-title">
                            <h2>
                                Pour les{" "}
                                <span className="text-decorated">
                                    <span className="text-decoration">
                                        <ReactSVG src={textDecoration} />
                                    </span>
                                    <span className="text-decorated">
                                        particuliers
                                    </span>
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="container services">
                    <div className="box service-dur">
                        <img src={triangleCarrelage} alt="Faïence" className="icon" />
                        <h3>Faïences, grès, marbres</h3>
                        <p className="arrow">➔</p>
                    </div>
                    <div className="box service-souple">
                        <img src={triangleDur} alt="Sols durs" className="icon" />
                        <h3>Sols durs</h3>
                        <p className="arrow">➔</p>
                    </div>
                    <div className="box service-carlage">
                        <img src={triangleSouple} alt="Sols souples" className="icon" />
                        <h3>Sols souples</h3>
                        <p className="arrow">➔</p>
                    </div>
                    <div className="box service-carlage">
                        <img src={triangleMoquette} alt="Sols textiles" className="icon" />
                        <h3>Sols textiles</h3>
                        <p className="arrow">➔</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="who-we-are">
                        <div className="who-we-are-images">
                            <img src={aboutImg1} />
                            <img src={aboutImg2} />
                        </div>

                        <div className="who-we-are-content">
                            <p className="subtitle">Notre force</p>
                            <br />
                            <h2>Une équipe dédiée</h2>
                            <br />
                            <p className="who-we-are-text">
                                Dans les bureaux, notre équipe se charge du
                                respect des normes et reste en permanence à
                                l’écoute de l’évolution de notre métier en
                                matière d’innovation, mais aussi de
                                développement durable.
                            </p>
                            <p className="who-we-are-hours">
                                Du lundi au vendredi de 9H à 18H
                            </p>
                            <Button
                                title="Prendre rendez-vous"
                                path="/contact"
                                extraClass="btn-secondary"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="what-we-do">
                    <div className="what-we-do-content">
                        <p className="subtitle">Notre accompagnement</p>
                        <br />
                        <h2 className="header">
                            Une expérience de{" "}
                            <span className="text-decorated">
                                <span className="text-decoration">
                                    <ReactSVG src={textDecoration} />
                                </span>
                                <span className="text-decorated">+30 ans</span>
                            </span>
                        </h2>
                        <br />
                        <p className="text">
                            Notre structure à taille humaine ainsi que nos
                            effectifs, permettent de répondre à des appels
                            d’offre de tailles variées. Ecoles, gymnases, salles
                            polyvalentes, piscines municipales, complexes
                            hôteliers, bailleurs sociaux, notre expérience vous
                            assure un chantier toujours mené à bien.
                        </p>
                    </div>
                    <div className="what-we-do-image">
                        <img src={escaliers} alt="" />
                    </div>
                    <div className="what-we-do-box-image">
                        <img src={spaImg} alt="" />
                    </div>
                    <div className="what-we-do-box-text">
                        <div>
                            <h3 className="white">Expérience</h3>
                            <p className="white">
                                Une partie de nos équipes se consacre aux
                                particuliers et aux commerces, l’autre est
                                spécialisée dans les chantiers de collectivités
                                (mairies, écoles, hôpitaux, logements, ...)
                            </p>
                        </div>
                        <div>
                            <h3 className="white">Savoir-faire</h3>
                            <p className="white">
                                Nous sommes en mesure de vous proposer des
                                calepinages esthétiques et originaux ou de
                                réaliser celui que vous souhaitez.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="carousel">
                    <div className="carousel-items">
                        <div className="carousel-item">
                            <img src={arkea} alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src={arkea} alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src={arkea} alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src={arkea} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="projects-wrapper">
                    <div className="projects container">
                        <p className="subtitle">Lorem ipsum</p>
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <div className="projects-grid">
                            <div className="project-card">
                                <div className="project-card-image">
                                    <img src={salleDeBain} alt="" />
                                </div>
                                <div className="project-card-content">
                                    <p className="project-card-label">
                                        Appartment
                                    </p>
                                    <h3 className="project-card-title">
                                        Lorem ipsum, dolor sit amet consectetur
                                        elit.
                                    </h3>
                                </div>
                            </div>
                            <div className="project-card">
                                <div className="project-card-image">
                                    <img src={solVert} alt="" />
                                </div>
                                <div className="project-card-content">
                                    <p className="project-card-label">
                                        Appartment
                                    </p>
                                    <h3 className="project-card-title">
                                        Lorem ipsum, dolor sit amet consectetur
                                        elit.
                                    </h3>
                                </div>
                            </div>
                            <div className="project-card">
                                <div className="project-card-image">
                                    <img src={solbois} alt="" />
                                </div>
                                <div className="project-card-content">
                                    <p className="project-card-label">
                                        Appartment
                                    </p>
                                    <h3 className="project-card-title">
                                        Lorem ipsum, dolor sit amet consectetur
                                        elit.
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <p className="projects-link">
                            <Link to="/projects">Voir plus</Link>
                        </p>
                    </div>
                </div>
            </section>
            <ContactUs />
            <Footer />
        </>
    );
}
