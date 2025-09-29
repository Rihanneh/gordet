import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import TopBar from "../Components/TopBar";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import "./Gallery.css"
import { useEffect } from "react";

export default function Gallery() {

    useEffect( () => {
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
            <div className="gallery container">
                <div className="gallery_text">
                    <p className="subtitle">OUR PHOTOS</p>
                    <h1>Explore Gallery</h1>
                </div>
                <div className="gallery_imgs" id="my-gallery">
                    <a href="../../assets/projets/contactUs.jpg"
                        target="_blank"
                        data-pswp-width="1280"
                        data-pswp-height="1707" >
                        <img src="../../assets/projets/contactUs.jpg" alt="" />
                    </a>
                    <a href="../../assets/projets/sol-spa2.jpg"
                     target="_blank"
                        data-pswp-width="1280"
                        data-pswp-height="1707">
                        <img src="../../assets/projets/sol-spa2.jpg" alt="" />
                    </a>
                    <a href="../../assets/projets/mur-sol-spa.jpg"
                     target="_blank"
                        data-pswp-width="800"
                        data-pswp-height="1067">
                        <img src="../../assets/projets/mur-sol-spa.jpg" alt="" />
                    </a>
                    <a href="../../assets/projets/paravon.jpg"
                     target="_blank"
                        data-pswp-width="1280"
                        data-pswp-height="1707">
                        <img src="../../assets/projets/paravon.jpg" alt="" />
                    </a>
                </div>
            </div>
            <ContactUs />
            <Footer />
        </>
    );
}
