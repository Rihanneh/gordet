import { useEffect, useState } from "react";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import PhotoSwipeLightbox from "photoswipe/lightbox";

import "photoswipe/style.css";
import "./Gallery.css";

const API_URL = import.meta.env.VITE_API_URL;

export default function Gallery() {
    const [images, addImage] = useState([]);

    const getGallery = async function () {
        return await fetch(`${API_URL}/images`)
            .then(function (res) {
                return res.json();
            })
            .then(function (json) {
                addImage(json);
            });
    };
    if (images.length === 0) {
        getGallery();
    }

    useEffect(() => {
        const lightbox = new PhotoSwipeLightbox({
            gallery: "#my-gallery",
            children: "a",
            pswpModule: () => import("photoswipe"),
        });
        lightbox.init();
    }, []);

    return (
        <>
            <NavBar />
            <main>
                <section className="secondary-hero">
                    <div className="container">
                        <h1>Les inspirations</h1>
                        <p className="subtitle text-center">
                            Photos des réalisations Gordet
                        </p>
                    </div>
                </section>
                <section className="gallery_imgs" id="my-gallery">
                    <div className="container masonry-grid">
                        {images.map(function (image, index) {
                            return (
                                <a
                                    key={index}
                                    href={image.url}
                                    target="_blank"
                                    data-pswp-width={image.width}
                                    data-pswp-height={image.height}
                                    className="masonry-item"
                                >
                                    <img src={image.url} alt="" />
                                </a>
                            );
                        })}
                    </div>
                </section>
            </main>
            <ContactUs />
            <Footer />
        </>
    );
}
