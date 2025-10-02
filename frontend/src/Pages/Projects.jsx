
import salleDeBain from "../../assets/projets/carlage-salle-de-bain.jpg";
import solbois from "../../assets/projets/sol-bois-arkea.jpg";
import solVert from "../../assets/projets/sol-vert.jpg";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import TopBar from "../Components/TopBar";

export default function Projects() {

    const response = {
        projects: [
            {
                image: salleDeBain,
                title: "Appartement",
                header: "Lorem ipsum, dolor sit amet consectetur elit."
            },
            {
                image: solbois,
                title: "Maison",
                header: "Lorem ipsum, dolor sit amet consectetur elit."
            },
            {
                image: solVert,
                title: "Salle de Bain",
                header: "Lorem ipsum, dolor sit amet consectetur elit."
            },
            {
                image: salleDeBain,
                title: "Toilettes",
                header: "Lorem ipsum, dolor sit amet consectetur elit."
            },
            {
                image: solbois,
                title: "Chambre",
                header: "Lorem ipsum, dolor sit amet consectetur elit."
            },
            {
                image: solVert,
                title: "Mur",
                header: "Lorem ipsum, dolor sit amet consectetur elit."
            }
        ]

    }

    return (
        <>
            <TopBar />
            <NavBar />
            <div className="projectBox ">
                <div className="project container">
                    <p className="title">Lorem ipsum</p>
                    <h2>Lorem ipsum dolor sit amet</h2>

                    <div className="project_box">
                        {response.projects.map((value, index) => (
                            <div className="project_box-item" key={index}>
                                <div className="project_box-item-img">
                                    <img src={value.image} alt={value.title} />
                                </div>
                                <div className="project_box-item-text">
                                    <p className="project_box-item-text-title">{value.title}</p>
                                    <h3 className="project_box-item-text-header">
                                        {value.header}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>);
}