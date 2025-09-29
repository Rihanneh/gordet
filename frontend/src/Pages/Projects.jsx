
import salleDeBain from "../../assets/projets/carlage-salle-de-bain.jpg";
import solbois from "../../assets/projets/sol-bois-arkea.jpg";
import solVert from "../../assets/projets/sol-vert.jpg";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import TopBar from "../Components/TopBar";

export default function Projects() {

    return (
        <>
        <TopBar />
        <NavBar />
            <div className="projectBox ">
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
                </div>
                <Footer />
            </div>
              </>  );
}
