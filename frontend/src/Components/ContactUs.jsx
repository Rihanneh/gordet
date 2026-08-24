import poseCarrelage from "../../assets/pose-carrelage-vector.png";
import Button from "../Components/Button";

export default function ContactUs() {
    return (
        <section>
            <div className="contactUs">
                <div className="container">
                    <img src={poseCarrelage} alt="" />
                    <p className="subtitle white">Nous contacter</p>
                    <h2 className="white">Discutons de votre projet</h2>
                    <p className="text white">
                        Nous sommes spécialisés dans la fourniture et la pose de
                        revêtements de sols, si vous avez des questions prenez
                        contact avec nos équipes.
                    </p>
                    <div className="btns">
                        <Button
                            title="Nous joindre par téléphone"
                            path="tel:+33298077047"
                            extraClass="btn-secondary"
                        />
                        <Button title="Nous contacter" path="/contact" />
                    </div>
                </div>
            </div>
        </section>
    );
}
