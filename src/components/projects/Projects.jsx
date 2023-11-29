import projectData from "../../content/ProjectData";
import { useEffect, useState } from "react";
import ProjectSliderImages from "./ProjectSliderImages";

function Projects({ elementRef }) {
  const [displayMiddle, setDisplayMiddle] = useState(
    projectData.firstToDisplay
  );
  const [displayLeft, setDisplayLeft] = useState(4);
  const [displayRight, setDisplayRight] = useState(1);

  useEffect(() => {
    displayMiddle === 0
      ? setDisplayLeft(projectData.projects.length - 1)
      : setDisplayLeft(displayMiddle - 1);
    displayMiddle === projectData.projects.length - 1
      ? setDisplayRight(0)
      : setDisplayRight(displayMiddle + 1);
  }, [displayMiddle]);

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
    <section id="projects-section" ref={elementRef} className="h-screen">
      <div className="pt-16">
        <div className="flex w-screen items-center justify-center">
          <div
            onClick={handlePreviousClick}
            className="rounded-full border-4 border-black w-5 h-5"
          ></div>
          <div className="px-3 w-[90vw] flex justify-center">
            <ProjectSliderImages
              project={projectData.projects[displayLeft]}
              active={false}
            />
            <ProjectSliderImages
              project={projectData.projects[displayMiddle]}
              active={true}
            />
            <ProjectSliderImages
              project={projectData.projects[displayRight]}
              active={false}
            />
          </div>
          <div
            onClick={handleNextClick}
            className="rounded-full border-4 border-black w-5 h-5"
          ></div>
        </div>
        <div className="w-screen flex justify-center">
          <div className="mt-10 w-[90%] lg:w-[80%] bg-zinc-500/20 backdrop-blur-md shadow-sm shadow-black rounded-xl dark:bg-black/30 p-5 md:p-10 dark:text-zinc-200">
            <h3>{projectData.projects[displayMiddle].name}</h3>
            <div>{projectData.projects[displayMiddle].description}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
