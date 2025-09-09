import { useState } from "react";
import "./App.css";
import mainLogo from "../assets/sarl_gordet_logo.jpg";

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
                  <img src={ mainLogo } alt="Logo de l'entreprise Gordet spécialisé en revêtement de sol" />
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
                <button className="navbar_btn">Make An Appointment</button>

                {/*---- burger menu -----------------------------*/}
                <span className="nav_burgerMenu">
                  <a href="#">
                    <img src="/frontend/assets/icons/bar.png" alt="" />
                  </a>
                </span>
              </nav>
            </header>
          {/* content-text */}
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
            {/* hero labels */}
            <div className="hero_labels">
              <img
                className="rse"
                src="/frontend/assets/label-RSE.avif"
                alt="rse label"
              />
              <img
                className="rge"
                src="/frontend/assets/Label-RGE.jpg"
                alt="rge label"
              />
            </div>
          </div>
        </div>
      </section>
      {/* About-Us section */}
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
      About Us
      <section>
        <div className="leftBox">
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div className="container">
          <div className="rightBox">
            <p> Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sit
              accusamus vero veritatis, repellat nobis uos praesentium excepturi
              veniam unde, aliquam repellendus! Possimus.
            </p>
          </div>
          <p className="hours"> Lorem ipsum dolor sit amet <br />Lorem ipsum dolor sit amet. </p>
          <a href="#"> Call: +2_345_876_125</a>
        </div>

      </section>
    </>
  );
}

export default App;
