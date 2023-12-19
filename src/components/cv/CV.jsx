import { useState, useRef, useEffect } from "react";
import cvBg from "../../assets/CV/CV_bg.jpg";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Timeline from "./Timeline";
import { useDraggable } from "react-use-draggable-scroll";
import WorkInfobox from "./WorkInfobox";
import EducationInfobox from "./EducationInfobox";
import cvData from "../../content/cvData";
import cvMobileBg from "../../assets/CV/CV_mobile_bg.jpg";
import TimelineMobile from "./TimelineMobile";
import WorkExperienceMobile from "./WorkexperienceMobile";
import EducationMobile from "./EducationMobile";

function CV({ language, elementRef }) {
  const [cvIsIntersecting, setCvIsIntersecting] = useState(false);
  const cvRef = useRef(null);
  const [workInfoData, setWorkInfoData] = useState(null);
  const [educationInfoData, setEducationInfoData] = useState(null);
  const [cvContent, setCvContent] = useState(cvData.german);

  useEffect(() => {
    language === "english"
      ? setCvContent(cvData.english)
      : setCvContent(cvData.german);
  }, [language]);

  const ref = useRef();
  const { events } = useDraggable(ref);

  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;

  // const currentYear = 2024;
  // const currentMonth = 12;

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //       (entry) => {
  //           console.log(entry[0].isIntersecting)
  //           setCvIsIntersecting(entry[0].isIntersecting)
  //       },
  //       { rootMargin: ""}
  //   );
  //   observer.observe(cvRef.current);
  //   return () => observer.disconnect();
  // }, []);

  // const [istest, settest] = useState(false);
  // function test() {
  //   settest(true);
  // }

  return (
    <section id="cv-section" ref={elementRef}>
      <div
        style={{ backgroundImage: `url(${cvBg})` }}
        className="hidden md:flex relative bg-cover bg-center bg-fixed pt-16 min-h-screen justify-center"
      >
        <div>
          <div className="w-[90vw] md:mt-[3%] lg:mt-[5%] grid bg-zinc-500/20 backdrop-blur-md shadow-sm shadow-black rounded-xl dark:bg-black/30 md:p-4 lg:p-10 dark:text-zinc-200">
            <h3>
              {language === "english" ? "Work Experience" : "Berufserfahrung"}
            </h3>
            <div
              {...events}
              ref={ref}
              className="lg:py-4 h-full w-full grid grid-rows-3 overflow-x-auto no-scrollbar cursor-grab"
            >
              <WorkExperience
                currentYear={currentYear}
                currentMonth={currentMonth}
                setWorkInfoData={setWorkInfoData}
                data={cvContent && cvContent.work}
              />
              <Timeline currentYear={currentYear} currentMonth={currentMonth} />
              <Education
                setEducationInfoData={setEducationInfoData}
                data={cvContent && cvContent.education}
              />
            </div>
            <h3>{language === "english" ? "Education" : "Ausbildung"}</h3>
          </div>
          <div
            className={`${
              workInfoData || educationInfoData ? "opacity-100" : "opacity-0"
            } w-[90vw] transition-all flex justify-center mt-4`}
          >
            {workInfoData && <WorkInfobox data={workInfoData} />}
            {educationInfoData && <EducationInfobox data={educationInfoData} />}
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${cvMobileBg})` }}
        className="flex md:hidden relative bg-cover bg-center pt-16 min-h-screen items-center justify-center"
      >
        <div className="w-[90vw] h-[85vh] p-2 grid justify-center bg-zinc-500/20 backdrop-blur-md shadow-sm shadow-black rounded-xl dark:bg-black/30 md:p-4 lg:p-10 dark:text-zinc-200">
          <div className="w-full px-3 flex justify-between">
            <div className="w-[220px] p-[10px] text-left">Work Experience</div>
            <div className="w-[220px] text-right">Education</div>
          </div>
          <div
            // {...events}
            // ref={ref}
            className="h-full w-full flex overflow-y-scroll overflow-x-scroll no-scrollbar"
          >
            <WorkExperienceMobile
                currentYear={currentYear}
                currentMonth={currentMonth}
                setWorkInfoData={setWorkInfoData}
                data={cvContent && cvContent.work}
                language={language}
              />
            <TimelineMobile
              currentYear={currentYear}
              currentMonth={currentMonth}
            />
            <EducationMobile
                setEducationInfoData={setEducationInfoData}
                data={cvContent && cvContent.education}
                language={language}
              />
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center w-full">
        <div className="mt-5 rounded-lg bg-zinc-800/50 py-4 px-2 text-zinc-200 md: w-[95%] lg:w-[90%]">
          <div className="h-10 grid grid-cols-2">
            <div className="text-right pr-12">Profession</div>
            <div className="text-left pl-12">Education</div>
          </div>
          <div className="relative">
            <div
              className={`absolute ${
                cvIsIntersecting ? "h-0" : "h-full"
              } transition-all duration-[3000ms] bg-zinc-800 w-full`}
            ></div>

            <div className="absolute left-1/2 w-4 ml-[-8px] h-full rounded-full bg-gradient-to-b from-red-200 via-red-400 to-red-200">
              <div className="sticky top-1/2">
                <div className="relative h-4 w-4">
                  <div className="absolute h-4 w-4 animate-ping rounded-full bg-red-700 opacity-75"></div>
                  <div className="bg-red-700 rounded-full relative h-4 w-4"></div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex-1">
                <div className="rounded-lg border-black border-2 shadow-md shadow-black m-1 w-[90%] h-[250px] bg-zinc-300">
                  ORF
                </div>
                <div className="rounded-lg border-black border-2 shadow-md shadow-black m-1 w-[90%] h-[40px] bg-zinc-300">
                  HP
                </div>
                <div className="w-[90%] h-[8px]"></div>
                <div className="rounded-lg border-black border-2 shadow-md shadow-black m-1 w-[90%] h-[84px] bg-zinc-300">
                  VBW
                </div>
                <div className="rounded-lg border-black border-2 shadow-md shadow-black m-1 w-[90%] h-[168px] bg-zinc-300">
                  FH
                </div>
                <div className="rounded-lg border-black border-2 shadow-md shadow-black m-1 w-[90%] h-[40px] bg-zinc-300">
                  BH
                </div>
                <div ref={cvRef}></div>
              </div>
              <div className="z-50 w-12 grid grid-cols-1 justify-center">
                {yearDivs}
              </div>
              <div className="flex-1">
                <div className="w-[90%] h-[6px]"></div>
                <div className="rounded-lg border-black border-2 shadow-md shadow-black m-1 w-[90%] h-[24px] bg-zinc-300">
                  CC
                </div>
                <div className="w-[90%] h-[180px]"></div>
                <div className="z-5 rounded-lg border-black border-2 shadow-md shadow-black m-1 w-[90%] h-[192px] bg-zinc-300">
                  Thewi
                </div>
                <div className="z-10 rounded-lg border-black border-2 shadow-md shadow-black mx-1 mb-1 -mt-[48px] w-[90%] h-[132px] bg-zinc-300">
                  Spowi
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default CV;
