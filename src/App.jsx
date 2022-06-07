import NavBar from "./components/layout/NavBar";
import NavBools from "./components/layout/NavBools";
import AboutMe from "./components/pages/AboutMe";
import Footer from "./components/pages/Footer";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import { Rotas } from "./components/services/Routes";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutMe />
      <Projects />
      <Footer />
      <Rotas />
      <NavBools />
    </div>
  );
}

export default App;
