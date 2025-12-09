import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import AdminPage from "./Pages/AdminPage";
import Project from "./Components/Project";

import "./main.css";

export default function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prestations" element={<Services />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/projets/:slug" element={<Project />} />
          <Route path="/inspirations" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/*" element={<AdminPage />} />
        </Routes>
      </Router>
    </>
  );
}
