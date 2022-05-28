import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Talkme from "../pages/talk-to-me";
import Project from "../pages/project-view";
import Whatme from "../pages/whatme";

export function Routess() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/talk-me" element={<Talkme />} />
          <Route path="/project" element={<Project />} />
          <Route path="/what-to-me" element={<Whatme />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
