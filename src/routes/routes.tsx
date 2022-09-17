import { Link, Route, Routes } from "react-router-dom";


import Aboutme from "../pages/aboutme.page";
import Contact from "../pages/contact.page";
import Home from "../pages/home.page";
import Projects from "../pages/projects.page";
import Skills from "../pages/skills.page";

 export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutme" element={<Aboutme />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
