import { useState } from "react";
import contactUs from "../../assets/projets/contactUs.jpg";
import Button from "./Button";

const API_URL = import.meta.env.VITE_API_URL;

const RequiredMark = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#EA3323"
    >
        <path d="M440-120v-264L254-197l-57-57 187-186H120v-80h264L197-706l57-57 186 187v-264h80v264l186-187 57 57-187 186h264v80H576l187 186-57 57-186-187v264h-80Z" />
    </svg>
);

const initialFields = {
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    subject: "",
    message: "",
};

export default function Form() {
    const [fields, setFields] = useState(initialFields);
    const [status, setStatus] = useState("idle"); // idle | loading | success | error

    const set = (key) => (e) =>
        setFields((prev) => ({ ...prev, [key]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus("loading");

        const { firstName, lastName, companyName, email, subject, message } = fields;

        try {
            const res = await fetch(`${API_URL}/messages`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    ...(companyName && { companyName }),
                    email,
                    subject,
                    message,
                }),
            });

            if (!res.ok) throw new Error();
            setStatus("success");
            setFields(initialFields);
        } catch {
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <>
                <section className="secondary-hero">
                    <div className="container">
                        <h1>Discutons de votre projet</h1>
                        <p className="subtitle text-center">Nous contacter</p>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="contactBox">
                            <div className="form-success">
                                <p>
                                    Votre message a bien été envoyé. Nous vous
                                    répondrons dans les plus brefs délais.
                                </p>
                                <Button
                                    title="Envoyer un autre message"
                                    onClick={() => setStatus("idle")}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }

    return (
        <>
            <section className="secondary-hero">
                <div className="container">
                    <h1>Discutons de votre projet</h1>
                    <p className="subtitle text-center">Nous contacter</p>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="contactBox">
                        <div className="form-container">
                            <form onSubmit={handleSubmit}>
                                <div className="form-content">
                                    <div className="flname">
                                        <div className="fnf">
                                            <label htmlFor="fname">
                                                Prénom <RequiredMark />
                                            </label>
                                            <input
                                                type="text"
                                                id="fname"
                                                placeholder="Votre prénom"
                                                value={fields.firstName}
                                                onChange={set("firstName")}
                                                autoComplete="given-name"
                                                required
                                            />
                                        </div>
                                        <div className="fnl">
                                            <label htmlFor="lname">
                                                Nom <RequiredMark />
                                            </label>
                                            <input
                                                type="text"
                                                id="lname"
                                                placeholder="Votre nom"
                                                value={fields.lastName}
                                                onChange={set("lastName")}
                                                autoComplete="family-name"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="company">
                                        <label htmlFor="company">
                                            Nom de l&apos;entreprise
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            placeholder="Entreprise ou collectivité"
                                            value={fields.companyName}
                                            onChange={set("companyName")}
                                            autoComplete="organization"
                                        />
                                    </div>

                                    <label htmlFor="email">
                                        Email <RequiredMark />
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Votre email"
                                        value={fields.email}
                                        onChange={set("email")}
                                        autoComplete="email"
                                        required
                                    />

                                    <label htmlFor="subject">
                                        Sujet <RequiredMark />
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        placeholder="Objet de votre demande"
                                        value={fields.subject}
                                        onChange={set("subject")}
                                        required
                                    />

                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        cols="70"
                                        rows="8"
                                        placeholder="Quel est votre projet ?"
                                        value={fields.message}
                                        onChange={set("message")}
                                    />

                                    {status === "error" && (
                                        <p className="form-error">
                                            Une erreur est survenue, veuillez réessayer.
                                        </p>
                                    )}

                                    <Button
                                        title={status === "loading" ? "Envoi en cours…" : "Envoyer !"}
                                        type="submit"
                                        extraClass="fbtn"
                                        disabled={status === "loading"}
                                    />
                                </div>
                            </form>
                            <div>
                                <img src={contactUs} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
