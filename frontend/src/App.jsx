import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <div className="bar">
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div className="navbar">
          <div className="navbar_logo">
            <span className="logo" >Logo</span>
            <span className="text" >GORDET</span>
          </div>
          <div className="navbar_menu">
            <li>
              <ul><a href="#">About Us</a></ul>
              <ul><a href="#">Servicees</a></ul>
              <ul><a href="#">Projects</a></ul>
              <ul><a href="#">chez Pas</a></ul>
              <ul><a href="#">Contact</a></ul>
            </li>

          </div>
        </div>
      </header>
      <section>
        <container className="hero_banner">
          <div className="hero_content">
            <p>Lorem ipsum dolor Lorem sit amet.</p>
            <h1>Lorem Ipsum Oolor Sit amet Consectetur dolor sit.</h1>
            <button className="hero_btn hero_btn-call">Call: +1-342-342-3424</button>
            <button className="hero_btn hero_btn-appointment">Make An Appointment</button>
          </div>
        </container>
        <div className="hero_labels">
          <img className="rse" src="" alt="" />
          <img className="rge" src="" alt="" />
        </div>
      </section>
      <section>
        <div className="about">
          <div className="left">
            <p>Lorem ipsum dolor sit amet.</p>
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing .</h2>
          </div>
          <div className="right">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
              modi magnam architecto corporis nam aspernatur labore, laborum
              dicta tempora voluptatum enim vero autem eaque, aliquam, adipisci
              facere earum unde ipsam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptatibus saepe tempora provident, commodi nobis, eligendi
              libero modi ex, assumenda cumque ad. Veniam nemo quo, provident
              mollitia cupiditate.
            </p>
          </div>
        </div>
        <div className="services">
          <div className="service-dur">
            <span className="icon"></span>
            <span className="text"></span>
            <span className="arrow"></span>
          </div>
          <div className="service-souple"></div>
          <span className="icon"></span>
          <span className="text"></span>
          <span className="arrow"></span>

          <div className="service-carlage"></div>
          <span className="icon"></span>
          <span className="text"></span>
          <span className="arrow"></span>
        </div>
      </section>
    </>
  );
}

export default App;
