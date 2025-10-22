import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import TopBar from "../Components/TopBar";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import "./Gallery.css"
import { useEffect, useState } from "react";

import img1 from "../../assets/projets/contactUs.jpg";
import img2 from "../../assets/projets/sol-spa2.jpg";
import img3 from "../../assets/projets/mur-sol-spa.jpg";
import img4 from "../../assets/projets/paravon.jpg";

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

    // const response = {
    //     gallery: [
    //         { src: img1, width: 1280, height: 1707 },
    //         { src: img2, width: 1280, height: 1707 },
    //         { src: img3, width: 800, height: 1067 },
    //         { src: img4, width: 1280, height: 1707 },
    //     ]
    // };

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

                    {images.map(function (img, index) {

                        return (
                            <a
                                key={index}
                                href={img.src}
                                target="_blank"
                                data-pswp-width={img.width}
                                data-pswp-height={img.height} >
                                <img src={img.src} alt="" />
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
