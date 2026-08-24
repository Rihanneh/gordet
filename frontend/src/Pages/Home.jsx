import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import ContactUs from "../Components/ContactUs";
import ProjectsList from "../Components/ProjectsList";
import "./Home.css";

import aboutImg1 from "../../assets/projets/sol-foncé-vitre.jpg";
import aboutImg2 from "../../assets/projets/sol-bois-salon.jpg";
import escaliers from "../../assets/projets/escalier2.jpg";
import spaImg from "../../assets/projets/murs-spa.jpg";
import textDecoration from "../../assets/icons/text-decoration.svg";
import triangleCarrelage from "../../assets/triangle-carrelage.png";
import triangleDur from "../../assets/triangle-dur.png";
import triangleSouple from "../../assets/triangle-souple.png";
import triangleMoquette from "../../assets/triangle-moquette.png";

const companyLogos = Object.entries(
    import.meta.glob("../../assets/companies/*.{png,jpg,jpeg,svg,webp}", {
        eager: true,
        query: "?url",
        import: "default",
    })
)
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([path, src]) => ({
        src,
        name: path
            .split("/")
            .pop()
            .replace(/\.\w+$/, "")
            .replace(/-/g, " "),
    }));

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
                    <Link to="/prestations#faiences-gres-mosaïque" className="box service-dur">
                        <img src={triangleCarrelage} alt="Faïence" className="icon" />
                        <h3>Faïences, grès, mosaïque</h3>
                        <p className="arrow">➔</p>
                    </Link>
                    <Link to="/prestations#sols-durs" className="box service-souple">
                        <img src={triangleDur} alt="Sols durs" className="icon" />
                        <h3>Sols durs</h3>
                        <p className="arrow">➔</p>
                    </Link>
                    <Link to="/prestations#sols-souples" className="box service-carlage">
                        <img src={triangleSouple} alt="Sols souples" className="icon" />
                        <h3>Sols souples</h3>
                        <p className="arrow">➔</p>
                    </Link>
                    <Link to="/prestations#sols-textiles" className="box service-carlage">
                        <img src={triangleMoquette} alt="Sols textiles" className="icon" />
                        <h3>Sols textiles</h3>
                        <p className="arrow">➔</p>
                    </Link>
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
                                Du lundi au vendredi de 8H30 à 17H30
                            </p>
                            <Button
                                title="Nous contacter"
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
                <div className="container">
                    <p className="subtitle text-center carousel-title">
                        Ils nous ont fait confiance
                    </p>
                </div>
                <div className="carousel">
                    <div className="carousel-track">
                        {[...companyLogos, ...companyLogos].map(
                            (logo, index) => {
                                const isClone = index >= companyLogos.length;
                                return (
                                    <div
                                        className="carousel-item"
                                        key={`${logo.name}-${index}`}
                                        aria-hidden={isClone}
                                    >
                                        <img
                                            src={logo.src}
                                            alt={isClone ? "" : logo.name}
                                        />
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
            </section>
            <section>
                <div className="projects-wrapper bg-light">
                    <div className="container">
                        <p className="subtitle text-center">Nos projets</p>
                        <h2 className="text-center">Découvrez nos dernières réalisations</h2>
                        <ProjectsList
                            showLink={true}
                            limit={3}
                        />
                    </div>
                </div>
            </section>
            <ContactUs />
            <Footer />
        </>
    );
}
