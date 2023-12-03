import cvPdf from "./CV_Egert.pdf";

function About({ elementRef }) {
  return (
    <section id="about-section" ref={elementRef} className="h-screen pt-16">
      <div>
      About Me!
      <div className="w-full h-full flex items-center justify-center">
<a href={cvPdf} download="CV_Egert">
  <button>Download CV</button>
</a>

      </div>
      </div>
    </section>
  );
}

export default About;
