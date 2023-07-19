import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./Component/pages/layout/NavBar";
import { Hero } from "./Component/pages/hero/Hero";
import { Aboutme } from "./Component/pages/Aboutme/Aboutme";
import { Skills } from "./Component/pages/skills/Skills";
import { Projects } from "./Component/pages/projects/Projects";
import { Contact } from "./Component/pages/contact/Contact";
import { Footer } from "./Component/pages/layout/Footer";
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
