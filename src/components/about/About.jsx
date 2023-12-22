import cvPdf from "./CV_Egert.pdf";
import mePic from "../../assets/About/me.jpeg";
import tomatoePic from "../../assets/About/tomatoe.png";
import { useState } from "react";
import aboutData from "../../content/about";
import { TypeAnimation } from "react-type-animation";

function About({ elementRef }) {
  // const [showFullName, setShowFullName] = useState(false);
  // console.log(showFullName)

  let ME;
  ME = "lkj";

  return (
    <section
      id="about-section"
      ref={elementRef}
      className="h-screen pt-16 bg-zinc-300 dark:bg-zinc-600 flex items-center justify-center"
    >
      <div className="px-6 lg:px-10 w-[100%] max-w-[1220px] flex">
        <div className="w-[30%]">
          <img
            src={mePic}
            alt="picture of me"
            className="rounded-sm border-4 border-zinc-700 shadow-lg shadow-black"
            // onClick={() => setShowFullName(!showFullName)}
          />
        </div>
        <div className="w-[70%] ml-6">
          <div className="grid">
            <p className="text-2xl font-bold">
              <span className="text-red-900 dark:text-red-700">let</span>{" "}
              <span className="dark:text-zinc-400">ME</span>
              <span className="dark:text-zinc-200">;</span>
            </p>
            <p className="text-3xl mb-6">
              <span className="align-middle text-red-900 dark:text-red-700 font-bold">
                {"<About>"}
              </span>{" "}
              <span className="text-5xl">
                <span className="align-middle text-red-900 dark:text-red-700 font-bold">
                  {"{"}
                </span>{" "}
                <span className=" align-middle font-bold dark:text-zinc-400">
                  ME
                </span>{" "}
                <span className="align-middle text-red-900 dark:text-red-700 font-bold">
                  {"}"}
                </span>{" "}
              </span>
              <span className="align-middle text-red-900 dark:text-red-700 font-bold">
                {"</About>"}
              </span>
            </p>
            <h7>{aboutData.english.part1}</h7>
            <p className="text-3xl font-semibold my-6">
              <span className="dark:text-zinc-400">ME</span>{" "}
              <span className="dark:text-zinc-200">=</span>{" "}
              <span className="text-red-900 dark:text-red-700">
                {`"`}
                <TypeAnimation
                  sequence={[
                    "Martin Egert",
                    1000,
                    "me",
                    1000,
                    "us",
                    2000,
                    "Team",
                    2000,
                  ]}
                  speed={10}
                  repeat={Infinity}
                />
                {`"`}
              </span>
            </p>
            <h7>{aboutData.english.part2}</h7>
            <h7 className="mt-4">{aboutData.english.part3}</h7>
          </div>
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
