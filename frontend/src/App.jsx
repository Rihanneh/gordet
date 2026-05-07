import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import AdminPage from "./Pages/AdminPage";
import Project from "./Components/Project";
import ScrollToTop from "./Components/ScrollToTop";
import MentionsLegales from "./Pages/MentionsLegales";
import ProtectionDonnees from "./Pages/ProtectionDonnees";
import Sitemap from "./Pages/Sitemap";

import "./main.css";

export default function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prestations" element={<Services />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/projets/:slug" element={<Project />} />
          <Route path="/inspirations" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/protection-des-donnees" element={<ProtectionDonnees />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
      </Router>
    </>
  );
}
