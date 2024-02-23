/* import { Route } from "react-router-dom"; */
import { Layout } from "@/components";
/* import { router } from "@/routers";
import { Route, Routes } from "react-router-dom"; */
import { BrowserRouter as Router } from "react-router-dom";
import {
  Home,
  About,
  Services,
  Projetos,
  Professional,
  WorkFlow,
} from "./screens";

function App() {
  return (
    <Router>
      <Layout.Header />
      <Layout.Root>
        <Home />
        <About />
        <Services />
        <Projetos />
        <Professional />
       {/*  <WorkFlow /> */}
      </Layout.Root>
      <Layout.Footer />
    </Router>
  );
}

export default App;
