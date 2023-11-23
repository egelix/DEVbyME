import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";
import About from "./components/about/About";
import CV from "./components/cv/CV";
import Projects from "./components/projects/Projects";
import { useRef } from "react";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  const aboutRef = useRef(null);
  const cvRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <NavBar aboutRef={aboutRef} cvRef={cvRef} contactRef={contactRef}/>
      <Hero />
      <About elementRef={aboutRef} />
      <CV elementRef={cvRef}/>
      <Projects />
      <Contact elementRef={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
