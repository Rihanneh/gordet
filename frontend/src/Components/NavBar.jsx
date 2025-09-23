
import mainLogo from "../../assets/logo-Gordet.jpg"
import Button from "./Button"
import { Link } from "react-router-dom"
import "./NavBar.css"

export default function NavBar() {

    return(

          <nav className="navbar container">
                      <div className="navbar_logo">
                       <Link to="/"> <img
                          src={mainLogo}
                          alt="Logo de l'entreprise Gordet spécialisé en revêtement de sol"
                        /></Link>
                      </div>
                      <ul className="navbar_links">
                        <li>
                          <a href="#aboutUs">About Us</a>
                        </li>
                        <li>
                          <a href="#">Services</a>
                        </li>

                        <li>
                          <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                          <Link to="/gallery">Gallery</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                      <Button title="Contact Us" href="#" extraClass="btn-small" />
                      {/*---- burger menu -----------------------------*/}
                      <span className="nav_burgerMenu">
                        <a href="#">
                          <img src="/frontend/assets/icons/bar.png" alt="" />
                        </a>
                      </span>
                    </nav>

    )
}
