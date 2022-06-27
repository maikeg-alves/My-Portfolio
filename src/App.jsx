import NavBools from "./components/layout/NavBools";
import AboutMe from "./components/pages/AboutMe";
import Footer from "./components/pages/Footer";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";
import { Rotas } from "./components/services/Routes";
import { App_ } from "./components/themes/styles/stylesAll";

function App() {
  return (
    <App_>
      <Home />
      <AboutMe />
      <Skills/>
      <Projects />
      <Footer />
      <Rotas />
      <NavBools />

    </App_>
  );
}

export default App;
