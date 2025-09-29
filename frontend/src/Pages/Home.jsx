import "./Home.css";
import TopBar from "../Components/TopBar";
import logoRSE from "../../assets/label-RSE.avif";
import logoRGE from "../../assets/Label-RGE.jpg";
import spaImg from "../../assets/projets/murs-spa.jpg";
import escaliers from "../../assets/projets/escalier2.jpg";
import arkea from "../../assets/companies/arkea.jpg";
import salleDeBain from "../../assets/projets/carlage-salle-de-bain.jpg";
import solbois from "../../assets/projets/sol-bois-arkea.jpg";
import solVert from "../../assets/projets/sol-vert.jpg";
import aboutImg1 from "../../assets/projets/sol-foncé-vitre.jpg";
import aboutImg2 from "../../assets/projets/sol-bois-salon.jpg";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import ContactUs from "../Components/ContactUs";

export default function Home() {
    return (
        <>
            {/*---- hero_banner -----------------------------*/}
            <section>
                <TopBar />
                {/* Hero Section */}
                <div className="hero_banner">
                    {/* <video  muted loop controls
            id="heroVideo" >
          <source src="../../assets/video/tile.mp4" />NO VIDEOS</video> */}
                    {/* ============================================
      HEADER
      ============================================ */}
                    <header>
                        {/* Navbar */}
                        <NavBar />
                    </header>
                    {/* hero content start ================================*/}
                    {/* hero-content-text */}
                    <div className="container hero_content">
                        <div>
                            <p className="subtitle">Lorem ipsum dolor Lorem sit amet.</p>
                            <h1>
                                Lorem Ipsum Oolor Sit amet <br />
                                Consectetur dolor sit.
                            </h1>
                        </div>
                        <div className="hero_btns">
                            <Button
                                title="Call: +1-342-342-3424"
                                href="#"
                                extraClass="btn-secondary"
                            />
                            <Button title="Make An Appointment" href="#" />
                        </div>
                        {/* hero-labels */}
                        <div className="hero_labels-box ">
                            <div className=" hero_labels-logo ">
                                <img src={logoRSE} alt="rse label" />
                                <img src={logoRGE} alt="rge label" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ============================================
      ABOUT US SECTION
      ============================================ */}
            {/* About Us part1 - services */}
            <section>
                <div className="container aboutUs">
                    <div className="aboutUs-left" id="aboutUs">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <br />
                        <h2>
                            Lorem ipsum, dolor sit amet consectetur adipisicing.
                            Lorem, ipsum.
                        </h2>
                    </div>
                    <div className="aboutUs-right">
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
                <div className="container aboutUs-services">
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
            {/* About Us part2 - who we are */}
            {/* ============================================
      WHO WE ARE SECTION
      ============================================ */}
            <section>
                <div className="container">
                    <div className="aboutUs_whoWeAre">
                        <div className="aboutUs_whoWeAre-img">
                            <img src={ aboutImg1 } />
                            <img src={ aboutImg2 } />
                        </div>

                        <div className="aboutUs_whoWeAre-content">
                            <p className="aboutUs_whoWeAre-content-title">

                                WHO ARE WE
                            </p>
                            <br />
                            <h2>
                                Your comfort is our main priority
                            </h2>
                            <br />
                            <p className="aboutUs_whoWeAre-content-texte">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quas sit accusamus vero
                                veritatis, repellat nobis uos praesentium
                                excepturi veniam unde, aliquam repellendus!
                                Possimus.
                            </p>
                            <p className="aboutUs_whoWeAre-content-workingDays">
                                MON-FRI 9 AM – 22 PM <br />
                                SATURDAY 9 AM – 20 PM
                            </p>
                            <Button extraClass="btn-secondary" />
                        </div>
                    </div>
                </div>
            </section>
            {/* About Us part3 - what we do */}
            {/* ============================================
      WHAT WE DO SECTION
      ============================================ */}
            <section>
                <div className="aboutUs_whatWeDo">
                    <div className="aboutUs_whatWeDo-content">
                        <p className="title">WHAT WE DO</p>
                        <br />
                        <h2 className="header">
                            Lorem ipsumloup <br /> dolor sit amet consectetur
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
                    <div className="aboutUs_whatWeDo-img">
                        <img src={escaliers} alt="" />
                    </div>
                    <div className="aboutUs_whatWeDo-box-img">
                        <img src={spaImg} alt="" />
                    </div>
                    <div className="aboutUs_whatWeDo-box-text">
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
            {/* ============================================
      CAROUSEL
      ============================================ */}
            <section>
                <div className="carousel">
                    <div className="companies">
                        <div className="item1">
                            <img src={arkea} alt="" />
                        </div>
                        <div className="item1">
                            <img src={arkea} alt="" />
                        </div>
                        <div className="item1">
                            <img src={arkea} alt="" />
                        </div>
                        <div className="item1">
                            <img src={arkea} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* ============================================
      PROJECT SECTION
      ============================================ */}
            <section>
                <div className="projectBox">
                    <div className="project container">
                        <p className="title">Lorem ipsum</p>
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <div className="project_box">
                            <div className="project_box-item">
                                <div className="project_box-item-img">
                                    <img src={salleDeBain} alt="" />
                                </div>
                                <div className="project_box-item-text">
                                    <p className="project_box-item-text-title">
                                        Appartment
                                    </p>
                                    <h3 className="project_box-item-text-header">
                                        Lorem ipsum, dolor sit amet consectetur
                                        elit.
                                    </h3>
                                </div>
                            </div>
                            <div className="project_box-item">
                                <div className="project_box-item-img">
                                    <img src={solVert} alt="" />
                                </div>
                                <div className="project_box-item-text">
                                    <p className="project_box-item-text-title">
                                        Appartment
                                    </p>
                                    <h3 className="project_box-item-text-header">
                                        Lorem ipsum, dolor sit amet consectetur
                                        elit.
                                    </h3>
                                </div>
                            </div>
                            <div className="project_box-item">
                                <div className="project_box-item-img">
                                    <img src={solbois} alt="" />
                                </div>
                                <div className="project_box-item-text">
                                    <p className="project_box-item-text-title">
                                        Appartment
                                    </p>
                                    <h3 className="project_box-item-text-header">
                                        Lorem ipsum, dolor sit amet consectetur
                                        elit.
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <p className="articles">
                            Lorem ipsum dolor <a href="#">➔</a>
                        </p>
                    </div>
                </div>
            </section>
            {/* ============================================
      CONTACT US SECTION
      ============================================ */}
            <ContactUs />
            {/* ============================================
      FOOTER SECTION
      ============================================ */}
            <Footer />
        </>
    );
}
