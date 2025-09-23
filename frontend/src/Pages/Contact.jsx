import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import Form from "../Components/Form";
import NavBar from "../Components/NavBar";
import TopBar from "../Components/TopBar";

export default function Contact() {
    return (
        <>
        <section>
            <TopBar className="contactPage" />
            <NavBar />
            <Form />
            <ContactUs />
            <Footer />
        </section>
        <section>
            <div className="rdvBox">
                Prenez voutre rendez-vous en ligne
            </div>
        </section>
        </>
    )
}