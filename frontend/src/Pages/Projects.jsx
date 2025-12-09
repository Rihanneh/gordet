import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import ProjectsList from "../Components/ProjectsList";

export default function Projects() {
    return (
        <>
            <NavBar />
            <main className="projectBox">
                <section className="secondary-hero">
                    <div className="container">
                        <h1>Les projets</h1>
                        <p className="subtitle text-center">Pour les professionnels, les collectivités et les particuliers</p>
                    </div>
                </section>
                <section className="projects-section">
                    <div>
                        <div className="projects container">
                            <ProjectsList showLink={false} />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>);
}
