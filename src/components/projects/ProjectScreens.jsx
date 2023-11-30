import { useState } from "react"

function ProjectScreens({project}) {
const [screenToShow, setScreenToShow] = useState(0);

    
  return (
    <div className="z-10 absolute flex items-center justify-center top-0 left-0 w-screen h-screen">
        <div className="w-[70%] bg-white">
        <img
          src={project.activeSliderPics[screenToShow]}
          alt={`Screenshot of ${project.name}`}
          className="m-5 rounded-lg"
        />
        </div>
    </div>
  )
}

export default ProjectScreens