import { useState } from "react";
import "./App.css";
import mainLogo from "../assets/logo-Gordet.jpg";
import logoRSE from "../assets/label-RSE.avif";
import logoRGE from "../assets/Label-RGE.jpg";
import weDoImg from "../assets/projets/murs-spa.jpg";
import spaImg from "../assets/projets/murs-spa.jpg";
import escaliers from "../assets/projets/escaliers.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/*---- hero_banner -----------------------------*/}
      <section>
        {/* Top Bar */}
        <div className="hero-topBar">
          <p>Lorem ipsum dolor sit?</p>
          <a href="#"> 📞 Call Us: +1 984 432 4875</a>
        </div>
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
            <div className="hero_labels-box"></div>
            <div className=" hero_labels-logo">
              <img src={logoRSE} alt="rse label" />
              <img src={logoRGE} alt="rge label" />
            </div>
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
      <section>
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
              <div className="aboutUs_weDo-img">
              <img src={escaliers} alt="" />
            </div>
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                        culpa porro reprehenderit laboriosam.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
