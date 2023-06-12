import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./Component/NavBar";
import { Hero } from "./Component/Hero";
import { Aboutme } from "./Component/Aboutme";
import { Skills } from "./Component/Skills";
import { Projects } from "./Component/Projects";
import { Contact } from "./Component/Contact";
import { Footer } from "./Component/Footer";
function App() {
  return (
    <div className="body">
      <NavBar />
      <Hero />
      <Aboutme />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
