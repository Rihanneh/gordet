import { useParams } from "react-router";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import ProjectsList from "./ProjectsList";

import "./Project.css";

const API_URL = import.meta.env.VITE_API_URL;

export default function Project() {
    const { slug } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProject = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${API_URL}/projects/slug/${slug}`);

                if (!response.ok) {
                    throw new Error('Project not found');
                }

                const data = await response.json();
                setProject(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getProject();
    }, [slug]);

    if (loading) {
        return (
            <>
                <NavBar />
                <main>
                    <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                        <p>Chargement...</p>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    if (error || !project) {
        return (
            <>
                <NavBar />
                <main>
                    <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                        <h1>Projet non trouvé</h1>
                        <p>{error || 'Ce projet n\'existe pas'}</p>
                        <a href="/projets" className="btn">Retour aux projets</a>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <NavBar />
            <main className="project-page">
                <section className="secondary-hero">
                    <div className="container">
                        <h1>{project.title}</h1>
                        <p className="subtitle text-center">{project.label || project.type || "Projet"}</p>
                    </div>
                </section>

                <section className="project-content">
                    <div className="container">
                        {project.description && (
                            <div className="project-description">
                                <div
                                    className="project-description-content"
                                    dangerouslySetInnerHTML={{ __html: project.description }}
                                />
                            </div>
                        )}
                    </div>
                </section>

                <section className="project-gallery-section">
                    <div className="container">
                        <h2>Autres projets</h2>
                        <ProjectsList showLink={false} limit={null} excludeSlug={slug} />
                    </div>
                </section>
            </main>
            <ContactUs />
            <Footer />
        </>
    );
}
