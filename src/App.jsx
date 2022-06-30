import NavBools from "./components/layout/NavBools";
import AboutMe from "./components/pages/AboutMe";
import Footer from "./components/pages/Footer";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";
import { App_ } from "./components/themes/styles/stylesAll";

function App() {

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  return (
    <App_>
      <Home />
      <AboutMe />
      <Skills/>
      <Projects />
      <Footer />
      <NavBools />
    </App_>
  );
}

export default App;
