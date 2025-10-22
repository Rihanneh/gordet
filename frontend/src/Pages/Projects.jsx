
import { useState } from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import TopBar from "../Components/TopBar";

export default function Projects() {

    const [projects, addProject] = useState([]);

    const getProject = async function () {
        return await fetch("http://localhost:3000/projects")
            .then(function (res) {
                return res.json()
            })
            .then(function (json) {
                addProject(json)
            })
    }

    if (projects.length === 0) {
        getProject()
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
                        {projects.map(function (project, index) {
                            console.log(project.images[0].path);

                            return (
                                <div className="project_box-item" key={index}>
                                    <div className="project_box-item-img">
                                        <img src={"http://localhost:3000/" + project.images[0].path} alt={project.title} />
                                    </div>
                                    <div className="project_box-item-text">
                                        <p className="project_box-item-text-title">{project.title}</p>
                                        <h3 className="project_box-item-text-header">
                                            {project.description }                                         </h3>
                                    </div>
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>);
}
