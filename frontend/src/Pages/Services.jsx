import { useEffect } from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import ContactUs from "../Components/ContactUs";

import "photoswipe/style.css";
import "./Services.css";

import textDecoration from "../../assets/icons/text-decoration.svg";
import prestationService1 from "../../assets/prestation-dur-1.jpeg";
import prestationService2 from "../../assets/prestation-dur-2.jpeg";
import prestationService3 from "../../assets/prestation-dur-3.jpeg";
import prestationService4 from "../../assets/prestation-faience-1.jpeg";
import prestationService5 from "../../assets/prestation-faience-2.jpeg";
import prestationService6 from "../../assets/prestation-faience-3.jpeg";
import prestationService7 from "../../assets/prestation-souple-1.jpeg";
import prestationService8 from "../../assets/prestation-souple-2.jpeg";
import prestationService9 from "../../assets/prestation-souple-3.jpeg";
import prestationService10 from "../../assets/prestation-textile-1.jpeg";
import prestationService11 from "../../assets/prestation-textile-2.jpeg";
import prestationService12 from "../../assets/prestation-textile-3.jpeg";
import { ReactSVG } from "react-svg";

export default function Services() {
    useEffect(() => {
        const lightbox = new PhotoSwipeLightbox({
            gallery: ".service-gallery",
            children: "a",
            pswpModule: () => import("photoswipe"),
        });
        lightbox.init();

        return () => {
            lightbox.destroy();
        };
    }, []);

    return (
        <>
            <NavBar />

            <main>
                <section className="secondary-hero">
                    <div className="container">
                        <h1>Les prestations</h1>
                        <p className="subtitle text-center">
                            Excellence et savoir-faire depuis plus de 30 ans
                        </p>
                    </div>
                </section>

                <section
                    id="faiences-gres-mosaïque"
                    className="service-section"
                >
                    <div className="container">
                        <div className="service-content">
                            <div className="service-text">
                                <h2>
                                    <span className="text-decorated">
                                        <span className="text-decoration">
                                            <ReactSVG src={textDecoration} />
                                        </span>
                                        <span className="text-decorated">
                                            Faïences
                                        </span>{" "}
                                    </span>{" "}
                                    , grès, mosaïque
                                </h2>
                                <p>
                                    La faïence, le grès et la mosaïque offrent
                                    une grande liberté pour créer des espaces à
                                    la fois esthétiques, durables et
                                    personnalisés.
                                </p>
                                <p>
                                    La société GORDET vous accompagne dans le
                                    choix et la mise en œuvre de ces matériaux,
                                    en portant une attention particulière aux
                                    finitions, aux formats et aux détails de
                                    pose.
                                </p>
                                <p>
                                    Du projet résidentiel aux espaces
                                    professionnels, nous mettons notre
                                    savoir-faire au service de réalisations
                                    soignées, adaptées à chaque environnement et
                                    à chaque usage.
                                </p>
                            </div>
                            <div className="service-gallery masonry-grid">
                                <a
                                    href={prestationService1}
                                    data-pswp-width="554"
                                    data-pswp-height="739"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={prestationService1}
                                        alt="Faïence 1"
                                    />
                                </a>
                                <a
                                    href={prestationService2}
                                    data-pswp-width="640"
                                    data-pswp-height="854"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={prestationService2}
                                        alt="Faïence 2"
                                    />
                                </a>
                                <a
                                    href={prestationService3}
                                    data-pswp-width="640"
                                    data-pswp-height="854"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={prestationService3}
                                        alt="Faïence 3"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="sols-durs" className="service-section bg-light">
                    <div className="container">
                        <div className="service-content">
                            <div className="service-text">
                                <h2>
                                    Sols{" "}
                                    <span className="text-decorated">
                                        <span className="text-decoration">
                                            <ReactSVG src={textDecoration} />
                                        </span>
                                        <span className="text-decorated">
                                            durs
                                        </span>
                                    </span>
                                </h2>
                                <p>
                                    Robustes et durables, les sols durs
                                    répondent aux exigences de nombreux projets,
                                    aussi bien en intérieur qu’en extérieur.
                                    Nous réalisons la pose de revêtements
                                    adaptés à chaque espace, en tenant compte de
                                    son usage, de ses contraintes et de
                                    l’esthétique recherchée. Grâce à une mise en
                                    œuvre précise et à un soin particulier
                                    apporté aux finitions, nous contribuons à
                                    créer des sols durables, fonctionnels et
                                    harmonieux.
                                </p>
                            </div>
                            <div className="service-gallery masonry-grid">
                                <a
                                    href={prestationService4}
                                    data-pswp-width="1280"
                                    data-pswp-height="1707"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={prestationService4}
                                        alt="Sol dur 1"
                                    />
                                </a>
                                <a
                                    href={prestationService5}
                                    data-pswp-width="739"
                                    data-pswp-height="554"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={prestationService5}
                                        alt="Sol dur 2"
                                    />
                                </a>
                                <a
                                    href={prestationService6}
                                    data-pswp-width="709"
                                    data-pswp-height="399"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={prestationService6}
                                        alt="Sol dur 3"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="sols-souples" className="service-section">
                    <div className="container">
                        <div className="service-content">
                            <div className="service-text">
                                <h2>
                                    Sols{" "}
                                    <span className="text-decorated">
                                        <span className="text-decoration">
                                            <ReactSVG src={textDecoration} />
                                        </span>
                                        <span className="text-decorated">
                                            souples
                                        </span>
                                    </span>
                                </h2>
                                <p>
                                    Les sols souples permettent de conjuguer
                                    confort, résistance et liberté esthétique.
                                    Ils s’adaptent à de nombreux environnements
                                    et offrent une large variété de teintes, de
                                    motifs et de finitions. L’entreprise GORDET
                                    vous accompagne dans la réalisation de vos
                                    projets en apportant son expertise à chaque
                                    étape, de la préparation du support jusqu’à
                                    la pose, pour garantir un résultat soigné,
                                    durable et adapté aux besoins de chaque
                                    espace.
                                </p>
                            </div>
                            <div className="service-gallery masonry-grid">
                                <a
                                    href={prestationService7}
                                    data-pswp-width="1024"
                                    data-pswp-height="768"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={prestationService7}
                                        alt="Sol souple 1"
                                    />
                                </a>
                                <a
                                    href={prestationService8}
                                    data-pswp-width="1024"
                                    data-pswp-height="768"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={prestationService8}
                                        alt="Sol souple 2"
                                    />
                                </a>
                                <a
                                    href={prestationService9}
                                    data-pswp-width="640"
                                    data-pswp-height="854"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={prestationService9}
                                        alt="Sol souple 3"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="sols-textiles"
                    className="service-section bg-light"
                >
                    <div className="container">
                        <div className="service-content">
                            <div className="service-text">
                                <h2>
                                    Sols{" "}
                                    <span className="text-decorated">
                                        <span className="text-decoration">
                                            <ReactSVG src={textDecoration} />
                                        </span>
                                        <span className="text-decorated">
                                            textiles
                                        </span>
                                    </span>
                                </h2>
                                <p>
                                    À la fois chaleureux, confortables et
                                    performants, les revêtements textiles
                                    apportent une véritable identité aux
                                    espaces. Ils permettent également de
                                    répondre à des besoins spécifiques en
                                    matière de confort acoustique, d’usage et
                                    d’ambiance. Nous mettons notre savoir-faire
                                    au service de la pose de sols textiles, avec
                                    une attention particulière portée à la
                                    qualité des finitions et à l’intégration du
                                    revêtement dans son environnement.
                                </p>
                            </div>
                            <div className="service-gallery masonry-grid">
                                <a
                                    href={prestationService10}
                                    data-pswp-width="1008"
                                    data-pswp-height="756"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={prestationService10}
                                        alt="Sol textile 1"
                                    />
                                </a>
                                <a
                                    href={prestationService11}
                                    data-pswp-width="640"
                                    data-pswp-height="854"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={prestationService11}
                                        alt="Sol textile 2"
                                    />
                                </a>
                                <a
                                    href={prestationService12}
                                    data-pswp-width="640"
                                    data-pswp-height="854"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={prestationService12}
                                        alt="Sol textile 3"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <ContactUs />
            </main>

            <Footer />
        </>
    );
}
