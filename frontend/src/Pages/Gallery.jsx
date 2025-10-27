import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import TopBar from "../Components/TopBar";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import "./Gallery.css"
import { useEffect, useState } from "react";

export default function Gallery() {

    const [images, addImage] = useState([]);

    const getGallery = async function () {
        return await fetch("http://localhost:3000/images")
            .then(function (res) {
                return res.json()
            })
            .then(function (json) {
                addImage(json)
            })
    }
    if (images.length === 0) {
        getGallery()
    }

    useEffect(() => {
        const lightbox = new PhotoSwipeLightbox({
            gallery: "#my-gallery",
            children: "a",
            pswpModule: () => import("photoswipe"),
        });
        lightbox.init();
    }, [])

    return (
        <>
            <TopBar />
            <NavBar />
            <div className="gallery container ">
                <div className="gallery_text">
                    <p className="subtitle">OUR PHOTOS</p>
                    <p>Explore Gallery</p>

                </div>
                <div className="gallery_imgs" id="my-gallery">
                    {images.map(function (image, index) {
                        return (
                            <a
                                key={index}
                                href={image.url}
                                target="_blank"
                                data-pswp-width={image.width}
                                data-pswp-height={image.height} >
                                <img src={image.url} alt="" />
                            </a>
                        )

                    }
                    )}

                </div>
            </div >
            <ContactUs />
            <Footer />

        </>
    );
}
