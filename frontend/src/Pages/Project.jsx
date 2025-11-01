import "./Project.css"

import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import TopBar from "../Components/TopBar";
import { useState } from "react";


export default function Project() {

    let { slug } = useParams()
    const [project, addProject] = useState(null);

    const getProject = async function () {
        return await fetch("http://localhost:3000/projects/slug/" + `${slug}`)
            .then(function (res) {
                return res.json()
            })
            .then(function (json) {
                addProject(json)
            })
    }

    if (project === null) {
        getProject()
    }

    if (project) {
        return (
            <div>
                <TopBar />
                <NavBar />
                <div className="projectBox container">
                    <div className="paragraphs">
                        <span className="title">{project.title}</span>
                        <span className="date">{project.date && new Date(project.date).toLocaleDateString()}</span>
                    </div>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    {project.images?.[0] && (
                        <div className="project_box-item-img">
                            <img
                                src={`http://localhost:3000/${project.images[0].path}`}
                                alt={project.title}
                            />
                        </div>
                    )}
                    <div className="project_box-item-text project_box_item_description"
                        dangerouslySetInnerHTML={{ __html: project.description ?? "" }} />
                </div>
                < Footer />
            </div>

        )
    } else {
        return null
    }
}
