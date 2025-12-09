import { useState } from "react";
import { Link } from "react-router-dom";
import "./ProjectsList.css";

const API_URL = import.meta.env.VITE_API_URL;

export default function ProjectsList({ showLink = false, limit = null }) {
    const [projects, setProjects] = useState([]);

    const getProjects = async function () {
        return await fetch(`${API_URL}/projects`)
            .then(function (res) {
                return res.json();
            })
            .then(function (json) {
                setProjects(json);
            });
    };

    if (projects.length === 0) {
        getProjects();
    }

    const displayedProjects = limit ? projects.slice(0, limit) : projects;

    return (
        <>
            <div className="projects-grid">
                {displayedProjects.map((project, index) => (
                    <a
                        href={'/projects/' + project.slug}
                        className="project-card"
                        key={index}
                    >
                        <div className="project-card-image">
                            <img
                                src={project.imageUrl || `${API_URL}/${project.images[0].path}`}
                                alt={project.title}
                            />
                        </div>
                        <div className="project-card-content">
                            <p className="project-card-label">
                                {project.label || project.type || "Projet"}
                            </p>
                            <h3 className="project-card-title">
                                {project.title || project.description}
                            </h3>
                        </div>
                    </a>
                ))}
            </div>
            {showLink && (
                <p className="projects-link">
                    <Link to="/projets">Voir plus</Link>
                </p>
            )}
        </>
    );
}
