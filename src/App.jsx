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
  const [language, setLanguage] = useState("english");

  return (
    <div className="relative overflow-y-hidden no-scrollbar">
      <DarkToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      {/* <div className="fixed left-0 top-20 z-50">
        <button
          className="border-2 border-green-600 bg-green-500"
          onClick={() =>
            language === "english"
              ? setLanguage("german")
              : setLanguage("english")
          }
        >
          toggle language
        </button>
      </div> */}
      <LegalNotice
        language={language}
        showLegal={showLegal}
        setShowLegal={setShowLegal}
      />
      <Datenschutz
        language={language}
        showDatenschutz={showDatenschutz}
        setShowDatenschutz={setShowDatenschutz}
      />
      <NavBar
        setLanguage={setLanguage}
        language={language}
        aboutRef={aboutRef}
        cvRef={cvRef}
        contactRef={contactRef}
        projectRef={projectRef}
        darkMode={darkMode}
      />
      <Hero language={language} darkMode={darkMode} />
      <About language={language} elementRef={aboutRef} />
      <CV language={language} elementRef={cvRef} />
      <Projects language={language} elementRef={projectRef} />
      <Contact language={language} elementRef={contactRef} />
      <Footer
        language={language}
        darkMode={darkMode}
        setShowLegal={setShowLegal}
        setShowDatenschutz={setShowDatenschutz}
      />
    </div>
  );
}

export default App;
