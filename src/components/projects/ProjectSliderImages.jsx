// import cover from "../../assets/projects/struggle/Struggle1.png";

// import ActiveProjectImagesSlider from "./ActiveProjectImagesSlider";

function ProjectSliderImages({ project, active, openScreens }) {
  // const sliderImagesElements = [];

  // for (let sliderImg of project.activeSliderPics) {
  //   sliderImagesElements.add(<li>
  //     src={sliderImg}
  //       alt={`Screenshot of ${project.name}`}
  //       className={`rounded-lg shadow-black ${active ? "shadow-lg" : "shadow-md opacity-70"} transition-all ease-in-out duration-1000`}
  //   </li>)
  // }

  return (
    <div
      className={` 
      ${active ? "w-[40%] cursor-pointer -mx-[5%] z-20" : "w-[30%] opacity-50 z-10 mt-6"} 
      flex items-center mx-3 rounded-lg`}
      onClick={openScreens}
    >
      {/* {active ? (
          <ActiveProjectImagesSlider project={project} />
         
      ) : ( */}
        <img
          src={project.cover}
          alt={`Screenshot of ${project.name}`}
          className={`w-full rounded-lg shadow-black shadow-md`}
        />
      {/* )} */}
      {/* <div className="relative w-[640px] h-80">
        <div
          style={{ backgroundImage: `url(${project.gif})` }}
          className={`absolute top-0 left-0 bg-[url(${project.cover})] h-80 w-[640px] snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20`}
        ></div>
        <div
          style={{ backgroundImage: `url(${project.cover})` }}
          className={`absolute top-0 left-0 hover:opacity-0 bg-[url(${project.cover})] h-80 w-[640px] snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20`}
        ></div>
      </div>
      <h5 className="mt-2">Cordoroy Gary</h5>
      <h6>{project.name}</h6> */}
    </div>
  );
}

export default ProjectSliderImages;
