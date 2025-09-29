
import mainLogo from "../../assets/logo-Gordet.jpg"
import "./Footer.css"

export default function Footer() {

    return(
         <footer className="footer">
          <div className="container">
            <div>
              <img src={mainLogo} alt="" />
              <p className="text">
                Lorem, ipsum dolor sit amet consectetur
                <br /> adipisicing elit Distinctio quae aperiam.
              </p>
            </div>
            <div className="footer-links">
              <ul>
                <li className="header">Company</li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contacts</a></li>
              </ul>
              <ul>
                <li className="header">Services</li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Projects</a></li>
              </ul>
              <ul>
                <li className="header">Social</li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Projects</a></li>
              </ul>
            </div>
            <div className="rights">
              <p>
                Loremfisher <span>© 2025 All Rights Reserved</span>
              </p>
            </div>
          </div>
        </footer>
    )
}
