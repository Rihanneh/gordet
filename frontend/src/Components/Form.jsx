import { useState, useMemo, useEffect } from "react";
import contactUs from "../../assets/projets/contactUs.jpg";
import Button from "./Button";

const API_URL = import.meta.env.VITE_API_URL;

const BUSINESS_HOURS = ["09:00", "11:00", "14:00", "16:00"];
const MIN_ADVANCE_MS = 48 * 60 * 60 * 1000;
const DAYS_AHEAD = 28;

function useSlotsPerPage() {
    const getCount = () => {
        if (window.innerWidth <= 768) return 1;
        return 4;
    };
    const [count, setCount] = useState(getCount);
    useEffect(() => {
        const onResize = () => setCount(getCount());
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);
    return count;
}

function generateSlots() {
    const now = new Date();
    const minDate = new Date(now.getTime() + MIN_ADVANCE_MS);
    const slots = [];

    for (let i = 0; i < DAYS_AHEAD; i++) {
        const day = new Date(now);
        day.setDate(day.getDate() + i);
        day.setHours(0, 0, 0, 0);

        if (day.getDay() === 0 || day.getDay() === 6) continue; // samedi et dimanche

        const shifts = BUSINESS_HOURS.filter((time) => {
            const [h, m] = time.split(":").map(Number);
            const slot = new Date(day);
            slot.setHours(h, m, 0, 0);
            return slot > minDate;
        });

        if (shifts.length > 0) {
            const y = day.getFullYear();
            const m = String(day.getMonth() + 1).padStart(2, "0");
            const d = String(day.getDate()).padStart(2, "0");
            slots.push({ date: `${y}-${m}-${d}`, shifts });
        }
    }

    return slots;
}

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
    const [isContact, setIsContact] = useState(true);
    const [fields, setFields] = useState(initialFields);
    const [status, setStatus] = useState("idle"); // idle | loading | success | error
    const slotsPerPage = useSlotsPerPage();
    const [carouselPage, setCarouselPage] = useState(0);

    useEffect(() => { setCarouselPage(0); }, [slotsPerPage]);
    const [selectedSlot, setSelectedSlot] = useState(null); // { date, time }

    const slots = useMemo(() => generateSlots(), []);

    const set = (key) => (e) =>
        setFields((prev) => ({ ...prev, [key]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isContact && !selectedSlot) {
            return;
        }

        setStatus("loading");

        const { firstName, lastName, companyName, email, subject, message } = fields;

        try {
            let endpoint, body;

            if (isContact) {
                endpoint = "/messages";
                body = {
                    firstName,
                    lastName,
                    ...(companyName && { companyName }),
                    email,
                    subject,
                    message,
                };
            } else {
                endpoint = "/appointments";
                body = {
                    firstName,
                    lastName,
                    ...(companyName && { companyName }),
                    email,
                    subject,
                    appointmentDate: new Date(selectedSlot.date + "T00:00:00").toISOString(),
                    appointmentTime: new Date(`${selectedSlot.date}T${selectedSlot.time}:00`).toISOString(),
                    message,
                };
            }

            const res = await fetch(`${API_URL}${endpoint}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            if (!res.ok) throw new Error();
            setStatus("success");
            setFields(initialFields);
            setSelectedSlot(null);
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
                                    {isContact
                                        ? "Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais."
                                        : "Votre demande de rendez-vous a bien été envoyée. Nous vous confirmerons le créneau rapidement."}
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
                                <div className="switch-container">
                                    <div className="switch">
                                        <div
                                            className={isContact ? "active" : null}
                                            onClick={() => setIsContact(true)}
                                        >
                                            Contact
                                        </div>
                                        <div
                                            className={!isContact ? "active" : null}
                                            onClick={() => setIsContact(false)}
                                        >
                                            Rendez-vous
                                        </div>
                                    </div>
                                </div>

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

                                    {isContact ? (
                                        <>
                                            <label htmlFor="message">Message</label>
                                            <textarea
                                                id="message"
                                                cols="70"
                                                rows="8"
                                                placeholder="Quel est votre projet ?"
                                                value={fields.message}
                                                onChange={set("message")}
                                            />
                                        </>
                                    ) : (
                                        <div className="reservation">
                                            <p>Choisissez un créneau disponible</p>

                                            {(() => {
                                                const maxPage = Math.ceil(slots.length / slotsPerPage) - 1;
                                                const pageSlots = slots.slice(
                                                    carouselPage * slotsPerPage,
                                                    carouselPage * slotsPerPage + slotsPerPage
                                                );
                                                return (
                                                    <div className="rdv-carousel">
                                                        <button
                                                            type="button"
                                                            className="rdv-carousel__nav"
                                                            onClick={() => setCarouselPage((p) => p - 1)}
                                                            disabled={carouselPage === 0}
                                                        >
                                                            ‹
                                                        </button>

                                                        <div className="rdv-carousel__grid">
                                                            {pageSlots.map((slot) => {
                                                                const d = new Date(slot.date + "T12:00:00");
                                                                const dayName = d.toLocaleDateString("fr-FR", { weekday: "short" });
                                                                const dayDate = d.toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
                                                                const padded = [
                                                                    ...slot.shifts,
                                                                    ...Array(BUSINESS_HOURS.length - slot.shifts.length).fill(null),
                                                                ];
                                                                return (
                                                                    <div className="rdv-carousel__day" key={slot.date}>
                                                                        <div className="rdv-carousel__day-label">
                                                                            <span>{dayName}</span>
                                                                            <span>{dayDate}</span>
                                                                        </div>
                                                                        <div className="rdv-carousel__slots">
                                                                            {padded.map((shift, i) =>
                                                                                shift ? (
                                                                                    <div
                                                                                        key={shift}
                                                                                        className={`rdv-carousel__slot${selectedSlot?.date === slot.date && selectedSlot?.time === shift ? " selected" : ""}`}
                                                                                        onClick={() => setSelectedSlot({ date: slot.date, time: shift })}
                                                                                    >
                                                                                        {shift}
                                                                                    </div>
                                                                                ) : (
                                                                                    <div key={i} className="rdv-carousel__slot rdv-carousel__slot--empty" />
                                                                                )
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>

                                                        <button
                                                            type="button"
                                                            className="rdv-carousel__nav"
                                                            onClick={() => setCarouselPage((p) => p + 1)}
                                                            disabled={carouselPage === maxPage}
                                                        >
                                                            ›
                                                        </button>
                                                    </div>
                                                );
                                            })()}

                                            {selectedSlot && (
                                                <p className="reservation_selected">
                                                    Créneau sélectionné&nbsp;:{" "}
                                                    <strong>
                                                        {new Date(selectedSlot.date + "T12:00:00").toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}
                                                        {" à "}
                                                        {selectedSlot.time}
                                                    </strong>
                                                </p>
                                            )}

                                            <label htmlFor="rdvMessage" className="rdv-message-label">
                                                Message
                                            </label>
                                            <textarea
                                                id="rdvMessage"
                                                rows="4"
                                                placeholder="Décrivez votre projet ou vos besoins"
                                                value={fields.message}
                                                onChange={set("message")}
                                            />
                                        </div>
                                    )}

                                    {status === "error" && (
                                        <p className="form-error">
                                            Une erreur est survenue, veuillez réessayer.
                                        </p>
                                    )}

                                    {!isContact && !selectedSlot && (
                                        <p className="form-error">
                                            Veuillez sélectionner un créneau avant d&apos;envoyer.
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
