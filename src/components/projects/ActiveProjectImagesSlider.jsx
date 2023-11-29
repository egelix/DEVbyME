import { useState, useEffect } from "react";

function ActiveProjectImagesSlider({ project }) {
  const [isVisible, setIsVisible] = useState(0);
  console.log(isVisible)

  useEffect(() => {
    const interval = setInterval(() => {
      isVisible === (project.activeSliderPics.length - 1) ? setIsVisible(0) : setIsVisible(isVisible => isVisible + 1);
    }, 2000);
    return () => clearInterval(interval)
  }, [])

  return (

<div>test</div>

    // project.activeSliderPics.map((pic, index) => {
    //     <img key={index}
    //       src={pic}
    //       alt={`Screenshot of ${project.name}`}
    //       className=
    //       {`${isVisible === index ? "opacity-100 inline" : "opacity-0 hidden"} rounded-lg shadow-black "shadow-lg"
    //       }`} />
    //   })
  )
}

export default ActiveProjectImagesSlider