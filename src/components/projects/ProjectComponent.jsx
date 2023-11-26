import cover from "../../assets/projects/struggle/Struggle1.png";

function ProjectComponent({ project }) {
  return (
    <div className="">
      <div className="relative w-[640px] h-80">
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
      <h6>{project.name}</h6>
    </div>
  );
}

export default ProjectComponent;
