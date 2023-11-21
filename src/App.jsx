import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";
import About from "./components/about/About";
import CV from "./components/cv/CV";
import Projects from "./components/projects/Projects";
import { useRef } from "react";

function App() {
  const aboutRef = useRef(null);
  const cvRef = useRef(null);

  return (
    <div>
      <NavBar aboutRef={aboutRef} cvRef={cvRef} />
      <Hero />
      <About elementRef={aboutRef} />
      <CV elementRef={cvRef}/>
      <Projects />
    </div>
  );
}

export default App;
