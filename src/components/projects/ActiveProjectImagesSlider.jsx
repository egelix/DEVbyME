import { useState, useEffect } from "react";

// let test = 0;

function ActiveProjectImagesSlider({ project }) {
  const [isVisible, setIsVisible] = useState(0);
  // const pics = project.activeSliderPics;


  const sliderElements = project.activeSliderPics.map((pic, index) => (
    <img
      key={index}
      src={pic}
      alt={`Screenshot of ${project.name}`}
      className={`${
        isVisible === index ? "opacity-100 inline" : "opacity-0 hidden"
      } rounded-lg shadow-black shadow-lg transition-all ease-in-out duration-1000"
  }`}
    />
  ));

  useEffect(() => {
    const interval = setInterval(() => {
      // if (isVisible === pics.length - 1) {
      //   setIsVisible(0)
      //   test = 0;
      // } else {
      //   setIsVisible(isVisible + 1)
      //   test++;
      // }
      // setIsVisible(test);
      isVisible < project.activeSliderPics.length ? setIsVisible(isVisible + 1) : setIsVisible(0);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return <div>{sliderElements}</div>;
}

export default ActiveProjectImagesSlider;
