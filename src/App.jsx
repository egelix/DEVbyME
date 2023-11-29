import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";
import About from "./components/about/About";
import CV from "./components/cv/CV";
import Projects from "./components/projects/Projects";
import { useState, useRef } from "react";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import LegalNotice from "./components/disclosures/LegalNotice";
import Datenschutz from "./components/disclosures/Datenschutz";
import DarkToggle from "./components/darkToggle/DarkToggle";

function App() {
  const aboutRef = useRef(null);
  const cvRef = useRef(null);
  const contactRef = useRef(null);
  const projectRef = useRef(null);

  const [showLegal, setShowLegal] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="relative overflow-y-scroll no-scrollbar">
      <DarkToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <LegalNotice showLegal={showLegal} setShowLegal={setShowLegal} />
      <Datenschutz
        showDatenschutz={showDatenschutz}
        setShowDatenschutz={setShowDatenschutz}
      />
      <NavBar aboutRef={aboutRef} cvRef={cvRef} contactRef={contactRef} projectRef={projectRef} />
      <Hero />
      <About elementRef={aboutRef} />
      <CV elementRef={cvRef} />
      <Projects elementRef={projectRef} />
      <Contact elementRef={contactRef} />
      <Footer darkMode={darkMode} setShowLegal={setShowLegal} setShowDatenschutz={setShowDatenschutz} />
    </div>
  );
}

export default App;
