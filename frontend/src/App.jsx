import { useState } from "react";
import "./App.css";
import TopBar from "./Components/Header/TopBar";
import mainLogo from "../assets/logo-Gordet.jpg";
import logoRSE from "../assets/label-RSE.avif";
import logoRGE from "../assets/Label-RGE.jpg";
import spaImg from "../assets/projets/murs-spa.jpg";
import escaliers from "../assets/projets/escalier2.jpg";
import arkea from "../assets/companies/arkea.jpg";
import salleDeBain from "../assets/projets/carlage-salle-de-bain.jpg";
import solbois from "../assets/projets/sol-bois-arkea.jpg";
import solVert from "../assets/projets/sol-vert.jpg";
import poseCarrelage from "../assets/projets/pose-carrelage-vector.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/*---- hero_banner -----------------------------*/}
      <section>
          <TopBar />
        {/* Hero Section */}
        <div className="hero_banner">
          <header className="container header">
            {/* Navbar */}
            <nav className="navbar">
              <div className="navbar_logo">
                <img
                  src={mainLogo}
                  alt="Logo de l'entreprise Gordet spécialisé en revêtement de sol"
                />
              </div>
              <ul className="navbar_links">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Servicees</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">chez Pas</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
              <div className="navbar_btn">
                <div>Make An Appointment</div>
                <a href="#">
                  <span>Make An Appointment</span>
                </a>
              </div>
              {/*---- burger menu -----------------------------*/}
              <span className="nav_burgerMenu">
                <a href="#">
                  <img src="/frontend/assets/icons/bar.png" alt="" />
                </a>
              </span>
            </nav>
          </header>
          {/* hero content start ================================*/}
          {/* hero-content-text */}
          <div className="container hero_content">
            <p>Lorem ipsum dolor Lorem sit amet.</p>
            <h1>
              Lorem Ipsum Oolor Sit amet <br />
              Consectetur dolor sit.
            </h1>
            <button className="hero_btn hero_btn-call">
              Call: +1-342-342-3424
            </button>
            <button className="hero_btn hero_btn-appointment">
              Make An Appointment
            </button>
            {/* hero-labels */}
            <div className="hero_labels-box"><div className=" hero_labels-logo">
              <img src={logoRSE} alt="rse label" />
              <img src={logoRGE} alt="rge label" />
            </div></div>

          </div>
        </div>
      </section>

      {/* ABOUT US start ================================*/}
      {/* About Us part1 - services */}
      <section>
        <div className="container aboutUs">
          <div className="aboutUs-left">
            <p>Lorem ipsum dolor sit amet.</p>
            <br />
            <h2>
              Lorem ipsum, dolor sit amet consectetur adipisicing. Lorem, ipsum.
            </h2>
          </div>
          <div className="aboutUs-right">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
              modi magnam architecto corporis nam aspernatur labore, laborum
              dicta tempora voluptatum enim vero autem eaque, aliquam, adipisci
              facere earum unde ipsam!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptatibus saepe tempora provident, commodi nobis, eligendi
              libero modi ex, assumenda cumque ad.
            </p>
          </div>
        </div>
        <div className="container aboutUs-services">
          <div className="box service-dur">
            <p className="icon">🏠</p>
            <p className="text">
              Lorem <br /> ipsum.
            </p>
            <p className="arrow">➔</p>
          </div>
          <hr />
          <div className="box service-souple">
            {" "}
            <p className="icon">🏠</p>
            <p className="text">
              Lorem <br /> ipsum.
            </p>
            <p className="arrow">➔</p>
          </div>
          <hr />
          <div className="box service-carlage">
            <p className="icon">🏠</p>
            <p className="text">
              Lorem <br /> ipsum.
            </p>
            <p className="arrow">➔</p>
          </div>{" "}
          <hr />
          <div className="box service-carlage">
            <p className="icon">🏠</p>
            <p className="text">
              Lorem <br /> ipsum.
            </p>
            <p className="arrow">➔</p>
          </div>
        </div>
      </section>

      {/* About Us part2 - who we are */}
      <section>
        <div className="container">
          <div className="aboutUs_whoWeAre">
            <div className="aboutUs_whoWeAre-img">
              <div className="aboutUs_whoWeAre-img-up"></div>
              <div className="aboutUs_whoWeAre-img-down"></div>
            </div>

            <div className="aboutUs_whoWeAre-content">
              <p className="aboutUs_whoWeAre-content-title"> WHO ARE WE</p>
              <br />
              <p className="aboutUs_whoWeAre-content-header">
                Your comfort is our main priority
              </p>
              <br />
              <p className="aboutUs_whoWeAre-content-texte">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                sit accusamus vero veritatis, repellat nobis uos praesentium
                excepturi veniam unde, aliquam repellendus! Possimus.
              </p>
              <br />
              <p className="aboutUs_whoWeAre-content-workingDays">
                MON-FRI 9 AM – 22 PM <br />
                SATURDAY 9 AM – 20 PM
              </p>
              <br />
              <button className="aboutUs_whoWeAre-content-cta">
                Call: +1-342-342-3424
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us part3 - what we do */}

      {/* <section>
        <div className="">
          <div className="aboutUs_weDo">
            <div className="aboutUs_weDo-content-up container">
              <p className="title">WHAT WE DO</p>
              <br />
              <p className="header">Lorem ipsum dolor sit amet consectetur.</p>
              <br />
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                non aspernatur similique aperiam perferendis modi sit nulla
                labore enim molestiae quisquam, repellat id quidem deleniti quos
                ullam, velit soluta tenetur?
              </p>
            </div>
            <div className="aboutUs_weDo-side-img">
              <img src={escaliers} alt="" />
            </div>
            <div className="aboutUs_weDo-content-down">
               <div className="boutUs_weDo-content-down-img">
              <img src={spaImg} alt="" />
            </div>
            <div className="aboutUs_weDo-content-down-text">
              <div>
                <h3>Lorem, ipsum dolor.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  vel voluptatum pariatur quod nobis nostrum.
                </p>
                <br />
                <br />
                <h3>Lorem, ipsum dolor.</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugit culpa porro reprehenderit laboriosam.
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section> */}

      <section>
        <div className=" aboutUs_whatWeDo">
          <div className="container aboutUs_whatWeDo-content">
            <p className="title">WHAT WE DO</p>
            <br />
            <h2 className="header">
              Lorem ipsumloup <br /> dolor sit amet consectetur
            </h2>
            <br />
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              <br />
              non aspernatur similique aperiam perferendis modi sit nulla
              <br />
              labore enim molestiae quisquam, repellat id quidem deleniti
              <br /> quosullam, velit soluta tenetur?
            </p>
          </div>

          <div className="aboutUs_whatWeDo-img">
            <img src={escaliers} alt="" />
          </div>
        </div>
        <div className="aboutUs_whatWeDo-box">
          <div className="aboutUs_whatWeDo-box-img">
            <img src={spaImg} alt="" />
          </div>
          <div className="aboutUs_whatWeDo-box-text">
            <div>
              <h3>Lorem, ipsum dolor.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. br
                Iure, vel voluptatum pariatur quod nobis nostrum.
              </p>
              <br />
              <br />
              <h3>Lorem, ipsum dolor.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                culpa porro reprehenderit laboriosam.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="carousel">
          <div className="companies">
            <div className="item1">
              <img src={arkea} alt="" />{" "}
            </div>
            <div className="item1">
              <img src={arkea} alt="" />{" "}
            </div>
            <div className="item1">
              <img src={arkea} alt="" />{" "}
            </div>
            <div className="item1">
              <img src={arkea} alt="" />{" "}
            </div>
          </div>
        </div>
      </section>
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
                  <p className="project_box-item-text-title">Appartment</p>
                  <h3 className="project_box-item-text-header">
                    Lorem ipsum, dolor sit amet consectetur elit.
                  </h3>
                </div>
              </div>
              <div className="project_box-item">
                <div className="project_box-item-img">
                  <img src={solVert} alt="" />
                </div>
                <div className="project_box-item-text">
                  <p className="project_box-item-text-title">Appartment</p>
                  <h3 className="project_box-item-text-header">
                    Lorem ipsum, dolor sit amet consectetur elit.
                  </h3>
                </div>
              </div>
              <div className="project_box-item">
                <div className="project_box-item-img">
                  <img src={solbois} alt="" />
                </div>
                <div className="project_box-item-text">
                  <p className="project_box-item-text-title">Appartment</p>
                  <h3 className="project_box-item-text-header">
                    Lorem ipsum, dolor sit amet consectetur elit.
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
      <section>
        <div className="contactUs">
          <div className="container">
            <p className="title">contact us</p>
            <h2>
              Discuss our services or
              <br />
              make an appointment
            </h2>
            <br />
            <p className="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio quae aperiam,
              <br />
              ducimus facere, inventore ut necessitatibus libero sit cupiditate
              laboriosam
              <br />
              voluptatibus magni velit voluptatem.
            </p>
            <div className="btn">
              <button className="hero_btn hero_btn-call">
                Call: +1-342-342-3424
              </button>
              <button className="hero_btn hero_btn-appointment">
                Make An Appointment
              </button>
            </div>
          </div>
          <img src={poseCarrelage} alt="" />
        </div>
      </section>
      <section>
        <div className="footer">
          <div className="container">
            <div>
              <img src={mainLogo} alt="" />
              <p className="text">
                Lorem, ipsum dolor sit amet consectetur
                <br /> adipisicing elit Distinctio quae aperiam.
              </p>
              <div className="rights">
                <p>
                  Loremfisher <span>© 2025 All Rights Reserved</span>
                </p>
              </div>
            </div>
            <div>
              <ul>
                <li className="header">Company</li>
                <li></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contacts</a></li>
              </ul>
              <ul>
                <li className="header">Services</li>
                <li></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Projects</a></li>
              </ul>
              <ul>
                <li className="header">Social</li>
                <li></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Projects</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
