import "./Hero.css";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Button from "./Button";
import hero1 from "../../assets/projets/hero1.png";
import hero2 from "../../assets/projets/hero2.png";
import hero3 from "../../assets/projets/hero3.png";
import hero4 from "../../assets/projets/hero4.png";
import hero5 from "../../assets/projets/hero5.png";
import hero6 from "../../assets/projets/hero6.png";
import logoRSE from "../../assets/label-RSE.avif";
import logoRGE from "../../assets/Label-RGE.jpg";

const heroImages = [
    { image: hero1, color: "#ba9c84" },
    { image: hero2, color: "#7b95bc" },
    { image: hero3, color: "#b8c7db" },
    { image: hero4, color: "#b29972" },
    { image: hero5, color: "#97677f" },
    { image: hero6, color: "#d7d0c8" },
];

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % heroImages.length
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="hero-banner"
            style={{
                backgroundColor: heroImages[currentImageIndex].color,
                '--overlay-color': heroImages[currentImageIndex].color
            }}
        >
            <header>
                <NavBar />
            </header>
            {heroImages.map((item, index) => (
                <div
                    key={index}
                    className={`hero-banner-image ${
                        index === currentImageIndex ? "active" : ""
                    }`}
                    style={{
                        '--bg-image': `url(${item.image})`,
                        '--gradient-color': item.color
                    }}
                />
            ))}
            {heroImages.map((item, index) => (
                <div
                    key={`overlay-${index}`}
                    className={`hero-banner-overlay ${
                        index === currentImageIndex ? "active" : ""
                    }`}
                    style={{
                        backgroundColor: item.color
                    }}
                />
            ))}
            <div className="container hero-content">
                <div className="hero-title">
                    <p className="subtitle black">Entreprise GORDET</p>
                    <h1 className="black">
                        Chape - Carrelage - Revêtement des sols
                    </h1>
                </div>
                <div className="hero-buttons">
                    <Button
                        title="Nous joindre par téléphone"
                        path="tel:+33298077047"
                        extraClass="btn-secondary"
                    />
                    <Button title="Prendre rendez-vous" path="/contact" />
                </div>
            </div>
            <div className="hero-labels">
                <div className="hero-labels-logo">
                    <img src={logoRSE} alt="rse label" />
                    <img src={logoRGE} alt="rge label" />
                </div>
            </div>
        </div>
    );
}
