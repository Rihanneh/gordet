import { useEffect, useState } from "react";

export default function ProjectsSection() {
    const [projects, setProjects] = useState([]);
    const [status, setStatus] = useState({
        loading: true,
        error: null,
    });

    useEffect(() => {
        async function fetchProjects() {
            try {
                const response = await fetch("http://localhost:3000/projects");
                if (!response.ok) {
                    throw new Error("Unable to load projects.");
                }
                const data = await response.json();
                setProjects(Array.isArray(data) ? data : []);
                setStatus({ loading: false, error: null });
            } catch (error) {
                console.error("Unable to load projects", error);
                setStatus({
                    loading: false,
                    error: error.message ?? "Unexpected error.",
                });
            }
        }

        fetchProjects();
    }, []);

    if (status.loading) {
        return (
            <div className="projectBox">
                <div className="project container">
                    <p>Loading...</p>
                </div>
            </div>
        );
    }

    if (status.error) {
        return (
            <div className="projectBox">
                <div className="project container">
                    <p>{status.error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="projectBox ">
            <div className="project container">
                <p className="title">Lorem ipsum</p>
                <h2>Lorem ipsum dolor sit amet</h2>

                <div className="project_box">
                    {projects.map(function (project, index) {
                        const mainImage = project.images?.[0];

                        return (
                            <a
                                href={"/projects/" + project.slug}
                                className="project_box-item"
                                key={project.slug ?? index}
                            >
                                <div className="project_box-item-img">
                                    {mainImage && (
                                        <img
                                            src={`http://localhost:3000/${mainImage.path}`}
                                            alt={project.title}
                                        />
                                    )}
                                </div>
                                <div className="project_box-item-text">
                                    <p className="project_box-item-text-title">
                                        {project.title}
                                    </p>
                                    <div
                                        className="project_box-item-text-description"
                                        dangerouslySetInnerHTML={{ __html: project.description ?? "" }}
                                    />
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
