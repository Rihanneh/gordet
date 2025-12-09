import { useEffect } from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import ContactUs from "../Components/ContactUs";

import "photoswipe/style.css";
import "./Services.css";

import textDecoration from "../../assets/icons/text-decoration.svg";
import prestationService1 from "../../assets/prestation-dur-1.jpeg"
import prestationService2 from "../../assets/prestation-dur-2.jpeg"
import prestationService3 from "../../assets/prestation-dur-3.jpeg"
import prestationService4 from "../../assets/prestation-faience-1.jpeg"
import prestationService5 from "../../assets/prestation-faience-2.jpeg"
import prestationService6 from "../../assets/prestation-faience-3.jpeg"
import prestationService7 from "../../assets/prestation-souple-1.jpeg"
import prestationService8 from "../../assets/prestation-souple-2.jpeg"
import prestationService9 from "../../assets/prestation-souple-3.jpeg"
import prestationService10 from "../../assets/prestation-textile-1.jpeg"
import prestationService11 from "../../assets/prestation-textile-2.jpeg"
import prestationService12 from "../../assets/prestation-textile-3.jpeg"
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
                        <p className="subtitle text-center">Excellence et savoir-faire depuis plus de 30 ans</p>
                    </div>
                </section>

                <section id="faiences-gres-marbres" className="service-section">
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
                                    , grès, marbres
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <p>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                    anim id est laborum.
                                </p>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Consectetur adipiscing elit</li>
                                    <li>Sed do eiusmod tempor incididunt</li>
                                    <li>Ut labore et dolore magna aliqua</li>
                                </ul>
                            </div>
                            <div className="service-gallery masonry-grid">
                                <a
                                    href={prestationService1}
                                    data-pswp-width="554"
                                    data-pswp-height="739"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={prestationService1} alt="Faïence 1" />
                                </a>
                                <a
                                    href={prestationService2}
                                    data-pswp-width="640"
                                    data-pswp-height="854"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={prestationService2} alt="Faïence 2" />
                                </a>
                                <a
                                    href={prestationService3}
                                    data-pswp-width="640"
                                    data-pswp-height="854"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={prestationService3} alt="Faïence 3" />
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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <p>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                    anim id est laborum.
                                </p>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Consectetur adipiscing elit</li>
                                    <li>Sed do eiusmod tempor incididunt</li>
                                    <li>Ut labore et dolore magna aliqua</li>
                                </ul>
                            </div>
                            <div className="service-gallery masonry-grid">
                                <a
                                    href={prestationService4}
                                    data-pswp-width="1280"
                                    data-pswp-height="1707"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={prestationService4} alt="Sol dur 1" />
                                </a>
                                <a
                                    href={prestationService5}
                                    data-pswp-width="739"
                                    data-pswp-height="554"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={prestationService5} alt="Sol dur 2" />
                                </a>
                                <a
                                    href={prestationService6}
                                    data-pswp-width="709"
                                    data-pswp-height="399"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={prestationService6} alt="Sol dur 3" />
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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <p>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                    anim id est laborum.
                                </p>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Consectetur adipiscing elit</li>
                                    <li>Sed do eiusmod tempor incididunt</li>
                                    <li>Ut labore et dolore magna aliqua</li>
                                </ul>
                            </div>
                            <div className="service-gallery masonry-grid">
                                <a
                                    href={prestationService7}
                                    data-pswp-width="1024"
                                    data-pswp-height="768"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={prestationService7} alt="Sol souple 1" />
                                </a>
                                <a
                                    href={prestationService8}
                                    data-pswp-width="1024"
                                    data-pswp-height="768"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={prestationService8} alt="Sol souple 2" />
                                </a>
                                <a
                                    href={prestationService9}
                                    data-pswp-width="640"
                                    data-pswp-height="854"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={prestationService9} alt="Sol souple 3" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="sols-textiles" className="service-section bg-light">
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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <p>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                    anim id est laborum.
                                </p>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Consectetur adipiscing elit</li>
                                    <li>Sed do eiusmod tempor incididunt</li>
                                    <li>Ut labore et dolore magna aliqua</li>
                                </ul>
                            </div>
                            <div className="service-gallery masonry-grid">
                                <a
                                    href={prestationService10}
                                    data-pswp-width="1008"
                                    data-pswp-height="756"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={prestationService10} alt="Sol textile 1" />
                                </a>
                                <a
                                    href={prestationService11}
                                    data-pswp-width="640"
                                    data-pswp-height="854"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={prestationService11} alt="Sol textile 2" />
                                </a>
                                <a
                                    href={prestationService12}
                                    data-pswp-width="640"
                                    data-pswp-height="854"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={prestationService12} alt="Sol textile 3" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <ContactUs />
            </main>

            <Footer />
        </>
    )

}
