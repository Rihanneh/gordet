import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProjectsList.css";

const API_URL = import.meta.env.VITE_API_URL;

export default function ProjectsList({
    showLink = false,
    limit = null,
    excludeSlug = null,
}) {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjects = async function () {
            return await fetch(`${API_URL}/projects`)
                .then(function (res) {
                    return res.json();
                })
                .then(function (json) {
                    setProjects(json);
                });
        };

        getProjects();
    }, []);

    const visibleProjects = excludeSlug
        ? projects.filter((project) => project.slug !== excludeSlug)
        : projects;

    const displayedProjects = limit
        ? visibleProjects.slice(0, limit)
        : visibleProjects;

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <>
            <div className="projects-grid">
                {displayedProjects.map((project, index) => (
                    <a
                        href={'/projets/' + project.slug}
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
                                {project.date && (
                                    <span className="project-card-date">
                                        {" - " + formatDate(project.date)}
                                    </span>
                                )}
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
