
import mainLogo from "../../../assets/logo-Gordet.jpg"
import Button from "../Button"

export default function NavBar() {

    return(
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
