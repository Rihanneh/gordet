import "./main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import AdminPage from "./Pages/AdminPage";


function App() {

  return (
    <>

      {/* Routes */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admin/*" element={<AdminPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
