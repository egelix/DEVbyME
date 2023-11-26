import projects from "../../content/ProjectData";
import ProjectComponent from "./ProjectComponent";
import { useState } from "react";

function Projects() {
  const [isOne, setIsOne] = useState(1);

  console.log(isOne);
  function handleNextClick() {
    isOne === 3 ? setIsOne(1) : setIsOne(isOne + 1)
  }
  function handlePreviousClick() {
    isOne === 1 ? setIsOne(3) : setIsOne(isOne - 1)
  }

  return (
    <section id="projects-section" className="h-screen">
      <div className="pt-96 flex justify-between">
        <div
          className={`${
            isOne === 1 ? "order1" : isOne === 2 ? "order-3" : "order-2"
          } h-40 w-40 bg-green-300 transition-all duration-1000`}
        >
          1
        </div>
        <div
          className={`${
            isOne === 2 ? "order1" : isOne === 3 ? "order-3" : "order-2"
          } h-60 w-60 bg-green-500 transition-all duration-1000`}
        >
          2
        </div>
        <div
          className={`${
            isOne === 3 ? "order1" : isOne === 1 ? "order-3" : "order-2"
          } h-40 w-40 bg-green-300 transition-all duration-1000`}
        >
          3
        </div>
        {/* Projects */}
        {/* <div className="w-96 h-96 shadow-up bg-green-200 shadow-black"></div> */}
        {/* <div className="flex w-screen items-center justify-center">
          <div className="w-[90%]"> */}
        {/* <div id="previous" className="text-5xl flex justify-center items-center cursor-pointer p-2 relative -top-8">
                    <i class="fas fas fa-angle-left"></i>
                </div> */}
        {/* <div className="scroll-smooth flex-1 mt-4 flex w-full gap-4 pb-5 snap-x overflow-x-auto">
              {projects.map((project) => ( */}
        {/* <ProjectComponent key={project.id} project={project} /> */}
        {/* ))} */}
        {/* </div> */}
        {/* <div id="next" className="text-5xl flex justify-center items-center cursor-pointer p-2 relative -top-8">
                    <i class="fas fas fas fa-angle-right"></i>
                </div> */}
        {/* </div>
        </div> */}
      </div>
      <button className="mr-10" onClick={handlePreviousClick}>previous</button>
      <button onClick={handleNextClick}>next</button>
    </section>
  );
}

export default Projects;
