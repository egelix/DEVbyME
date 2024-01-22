import { useState } from "react";

function ProjectScreens({ project, setProjectToShowDetails }) {
  const [screenToShow, setScreenToShow] = useState(0);

  function handleNextClick() {
    screenToShow < project.activeSliderPics.length - 1
      ? setScreenToShow(screenToShow + 1)
      : setScreenToShow(0);
  }
  function handlePreviousClick() {
    screenToShow === 0
      ? setScreenToShow(project.activeSliderPics.length - 1)
      : setScreenToShow(screenToShow - 1);
  }

  return (
    <div className="z-30 fixed flex items-center justify-center top-0 left-0 w-screen h-screen backdrop-blur-sm">
      <div className="relative rounded-lg p-6 lg:p-8 bg-white dark:bg-black">
      <div
        className="absolute flex items-center justify-center rounded-full w-10 h-10 bg-zinc-200 hover:bg-zinc-400 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-500 dark:hover:text-black cursor-pointer shadow-md shadow-black left-1/2 -ml-[20px] top-2 z-10"
        onClick={() => setProjectToShowDetails(null)}
      >
        <button className="font-bold text-lg">X</button>
      </div>
        <div
          className="absolute top-0 left-0 h-full w-[15%] flex items-center justify-center bg-zinc-300 dark:bg-zinc-600 opacity-10 cursor-pointer hover:opacity-60"
          onClick={handlePreviousClick}
        >
          <div className="text-9xl">{`<`}</div>
        </div>
        <img
          src={project.activeSliderPics[screenToShow]}
          alt={`Screenshot of ${project.name}`}
          className="h-[60vh] max-w-[95vw] rounded-lg"
        />
        <div
          className="absolute top-0 right-0 h-full w-40 flex items-center justify-center bg-zinc-300 dark:bg-zinc-600 opacity-10 cursor-pointer hover:opacity-60"
          onClick={handleNextClick}
        >
          <div className="text-9xl">{`>`}</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectScreens;
