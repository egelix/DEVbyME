import projectData from "../../content/ProjectData";
import { useEffect, useState } from "react";
import ProjectSliderImages from "./ProjectSliderImages";
import arrowLeftDark from "../../assets/Projects/arrow_left_darkmode.png";
import arrowLeftLight from "../../assets/Projects/arrow_left_lightmode.png";
import arrowRightDark from "../../assets/Projects/arrow_right_darkmode.png";
import arrowRightLight from "../../assets/Projects/arrow_right_lightmode.png";

function Projects({ elementRef, darkMode, setProjectToShowDetails, language }) {
  const [displayMiddle, setDisplayMiddle] = useState(
    projectData.firstToDisplay
  );
  const [displayLeft, setDisplayLeft] = useState(4);
  const [displayRight, setDisplayRight] = useState(1);
  useState(false);

  useEffect(() => {
    displayMiddle === 0
      ? setDisplayLeft(projectData.projects.length - 1)
      : setDisplayLeft(displayMiddle - 1);
    displayMiddle === projectData.projects.length - 1
      ? setDisplayRight(0)
      : setDisplayRight(displayMiddle + 1);
  }, [displayMiddle]);

  function handleProjectScreensWindowOpenClick() {
    setProjectToShowDetails(projectData.projects[displayMiddle]);
  }

  function handleNextClick() {
    displayMiddle === projectData.projects.length - 1
      ? setDisplayMiddle(0)
      : setDisplayMiddle(displayMiddle + 1);
  }
  function handlePreviousClick() {
    displayMiddle === 0
      ? setDisplayMiddle(projectData.projects.length - 1)
      : setDisplayMiddle(displayMiddle - 1);
  }

  return (
    <section
      id="projects-section"
      ref={elementRef}
      className="h-screen pt-16 bg-zinc-300 dark:bg-zinc-600"
    >
      <div className="md:hidden flex h-screen -mt-16 pt-16 w-screen items-center justify-center">
        <div className="flex items-center justify-center rounded-lg border-2 border-black shadow-lg shadow-black bg-red-500 p-6 w-[90%] ">
          <p className="text-2xl">
            {language === "english"
              ? "The mobile version of this section is still under construction but will be online soon. Sorry!"
              : "Die mobile Version dieses Bereichs ist leider noch in Arbeit aber bald online. Sorry!"}
          </p>
        </div>
      </div>
      <div className="relative hidden md:inline">
        <div className="flex justify-center">
          <div className="w-[85vw] my-10 flex items-center justify-center rounded-lg border-2 border-black shadow-lg shadow-black h-24 bg-red-500 p-4">
            <p className="text-2xl">
              {language === "english"
                ? "This section is still under construction. But please feel free to browse through the project-screenshots!"
                : "An diesem Bereich wird noch gearbeitet. Screenshots der Projekte stehen jedoch zur Ansicht!"}
            </p>
          </div>
        </div>
        <div className="flex w-screen items-center justify-center">
          <img
            src={darkMode ? arrowLeftDark : arrowLeftLight}
            alt="go left"
            className="z-20 -mr-[3%] w-16 opacity-50 hover:opacity-100 hover:w-20 hover:-mr-[calc(3%+16px)] transition-all ease-in-out duration-200"
            onClick={handlePreviousClick}
          />
          <div className="px-3 w-[90vw] flex justify-center">
            <ProjectSliderImages
              project={projectData.projects[displayLeft]}
              active={false}
              openScreens={null}
            />
            <ProjectSliderImages
              project={projectData.projects[displayMiddle]}
              active={true}
              openScreens={handleProjectScreensWindowOpenClick}
            />
            <ProjectSliderImages
              project={projectData.projects[displayRight]}
              active={false}
              openScreens={null}
            />
          </div>
          {/* <div
            onClick={handleNextClick}
            className="rounded-full border-4 border-black w-5 h-5"
          ></div> */}
          <img
            src={darkMode ? arrowRightDark : arrowRightLight}
            alt="go right"
            className="z-20 -ml-[3%] w-16 opacity-50 hover:opacity-100 hover:w-20 hover:-ml-[calc(3%+16px)] transition-all ease-in-out duration-200"
            onClick={handleNextClick}
          />
        </div>
        <div className="w-screen flex justify-center">
          <div className="mt-10 w-[90%] lg:w-[80%] p-5 md:p-10 dark:text-zinc-200">
            <h3>{projectData.projects[displayMiddle].name}</h3>
            <div>{projectData.projects[displayMiddle].description}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
