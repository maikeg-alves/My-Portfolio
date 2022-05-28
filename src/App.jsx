import NavBar from "./components/layout/NavBar";
import AboutMe from "./components/pages/AboutMe";
import Home from "./components/pages/Home";
import {Routess} from "./components/services/Routes";

function App() {
  return (
    <div className="App">
        <NavBar/>
          <Home/>
           <AboutMe/>
         <Routess/>
    </div>
  );
}

export default App;


