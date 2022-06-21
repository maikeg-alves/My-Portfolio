import React from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import Contact from "../layout/contact";
import Project_modal from "../layout/project_select";
export function Rotas() {
  return (
         <Routes>
           <Route path="/modal" element={<Project_modal/>} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
  );
}
