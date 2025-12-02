import "./Home.css";
import TopBar from "../Components/TopBar";
import Hero from "../Components/Hero";
import arkea from "../../assets/companies/arkea.jpg";
import salleDeBain from "../../assets/projets/carlage-salle-de-bain.jpg";
import solbois from "../../assets/projets/sol-bois-arkea.jpg";
import solVert from "../../assets/projets/sol-vert.jpg";
import aboutImg1 from "../../assets/projets/sol-foncé-vitre.jpg";
import aboutImg2 from "../../assets/projets/sol-bois-salon.jpg";
import escaliers from "../../assets/projets/escalier2.jpg";
import spaImg from "../../assets/projets/murs-spa.jpg";
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import ContactUs from "../Components/ContactUs";

export default function Home() {
    return (
        <>
            <section>
                <TopBar />
                <Hero />
            </section>
            <section>
                <div className="container about">
                    <div className="about-left" id="aboutUs">
                        <p className="subtitle">Lorem ipsum dolor sit amet.</p>
                        <br />
                        <h2>
                            Lorem ipsum, dolor sit amet consectetur adipisicing.
                            Lorem, ipsum.
                        </h2>
                    </div>
                    <div className="about-right">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Esse modi magnam architecto corporis nam
                            aspernatur labore, laborum dicta tempora voluptatum
                            enim vero autem eaque, aliquam, adipisci facere
                            earum unde ipsam!
                        </p>
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Error voluptatibus saepe tempora provident,
                            commodi nobis, eligendi libero modi ex, assumenda
                            cumque ad.
                        </p>
                    </div>
                </div>
                <div className="container services">
                    <div className="box service-dur">
                        <p className="icon">🏠</p>
                        <h3>
                            Lorem <br /> ipsum.
                        </h3>
                        <p className="arrow">➔</p>
                    </div>
                    <hr />
                    <div className="box service-souple">

                        <p className="icon">🏠</p>
                        <h3>
                            Lorem <br /> ipsum.
                        </h3>
                        <p className="arrow">➔</p>
                    </div>
                    <hr />
                    <div className="box service-carlage">
                        <p className="icon">🏠</p>
                        <h3>
                            Lorem <br /> ipsum.
                        </h3>
                        <p className="arrow">➔</p>
                    </div>
                    <hr />
                    <div className="box service-carlage">
                        <p className="icon">🏠</p>
                        <h3>
                            Lorem <br /> ipsum.
                        </h3>
                        <p className="arrow">➔</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="who-we-are">
                        <div className="who-we-are-images">
                            <img src={ aboutImg1 } />
                            <img src={ aboutImg2 } />
                        </div>

                        <div className="who-we-are-content">
                            <p className="subtitle">
                                WHO ARE WE
                            </p>
                            <br />
                            <h2>
                                Your comfort is our main priority
                            </h2>
                            <br />
                            <p className="who-we-are-text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quas sit accusamus vero
                                veritatis, repellat nobis uos praesentium
                                excepturi veniam unde, aliquam repellendus!
                                Possimus.
                            </p>
                            <p className="who-we-are-hours">
                                MON-FRI 9 AM – 22 PM <br />
                                SATURDAY 9 AM – 20 PM
                            </p>
                            <Button extraClass="btn-secondary" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="what-we-do">
                    <div className="what-we-do-content">
                        <p className="subtitle">WHAT WE DO</p>
                        <br />
                        <h2 className="header">
                            Lorem ipsum <br /> dolor sit amet consectetur
                        </h2>
                        <br />
                        <p className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Saepe
                            <br />
                            non aspernatur similique aperiam perferendis modi
                            sit nulla
                            <br />
                            labore enim molestiae quisquam, repellat id quidem
                            deleniti
                            <br /> quosullam, velit soluta tenetur?
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
                            <h3>Lorem, ipsum dolor.</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. br Iure, vel voluptatum
                                pariatur quod nobis nostrum.
                            </p>
                            <br />
                            <br />
                            <h3>Lorem, ipsum dolor.</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Fugit culpa porro
                                reprehenderit laboriosam.
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
                            Lorem ipsum dolor <a href="#">➔</a>
                        </p>
                    </div>
                </div>
            </section>
            <ContactUs />
            <Footer />
        </>
    );
}
