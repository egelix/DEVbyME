import cvPdf from "./CV_Egert.pdf";
import mePic from "../../assets/About/me.jpeg";
import tomatoePic from "../../assets/About/tomatoe.png";
import { useState } from "react";

function About({ elementRef }) {
  const [showFullName, setShowFullName] = useState(false);
  console.log(showFullName)

  return (
    <section
      id="about-section"
      ref={elementRef}
      className="h-screen pt-16 bg-zinc-300 dark:bg-zinc-500 flex items-center justify-center"
    >
      <div className="border-green-500 border-2 w-[80vw] h-[80vh] flex">
        <div>
          <img
            src={mePic}
            alt="picture of me"
            className="w-[400px] rounded-sm border-4 border-zinc-700 shadow-lg shadow-black"
            onClick={() => setShowFullName(!showFullName)}
          />
        </div>
        <div className="ml-6 flex items-center h-20">
          <p className="text-3xl">{`<About>`}</p>
          <p className="mx-4 text-5xl font-bold transition-all duration-1000">M<span className={showFullName ? "inline" : "hidden"}>artin </span>E<span className={showFullName ? "inline" : "hidden"}>gert</span></p>
          <p className="text-3xl">{`</About>`}</p>
        </div>
        {/* <a href={cvPdf} download="CV_Egert">
          <img
            src={tomatoePic}
            alt="download cv"
            className="w-[60px] cursor-pointer hover:w-[70px] transition-all"
          />
        </a> */}

        {/* <div className="w-full h-full flex items-center justify-center">
          <a href={cvPdf} download="CV_Egert">
            <button>Download CV</button>
          </a> */}
        {/* </div> */}
      </div>
    </section>
  );
}

export default About;
