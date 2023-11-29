import burgerClosed from "../../assets/navBarIcons/BurgerIcon.png";
import burgerOpen from "../../assets/navBarIcons/BurgerClose.png";
import logo1 from "../../assets/navBarIcons/ME_Logo_1.png"
import logo2 from "../../assets/navBarIcons/ME_Logo_2.png"
import logo3 from "../../assets/navBarIcons/ME_Logo_3.png"
import logo4 from "../../assets/navBarIcons/ME_Logo_4.png"

import { useState } from "react";

function NavBar({aboutRef, cvRef, contactRef, projectRef}) {
  let links = [
    { name: "About me", link: aboutRef },
    { name: "Experience", link: cvRef },
    { name: "Projects", link: projectRef },
    { name: "TechStack", link: "/" },
    { name: "Contact", link: contactRef },
  ];

  const [isOpen, setIsOpen] = useState(false);

  function handleBurgerClick() {
    setIsOpen(!isOpen);
  }

  function scrollToSection(elementRef) {
    console.log(elementRef)
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    })
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div className="text-lg z-10 align-middle fixed top-0 left-0 shadow-md shadow-black w-full text-black bg-zinc-400 dark:text-zinc-200 dark:bg-zinc-800 transition-all duration-500 ease-in">
      <div className="md:pr-10 pl-4 py-1 pr-7 w-full md:flex justify-between items-center align-middle ">
        <img onClick={scrollToTop} src={logo4} alt="Link to Hero Section" className="w-14 p-0 m-0 cursor-pointer"/>
        <div
          onClick={handleBurgerClick}
          className="w-10 h-10 absolute right-4 top-[13px] cursor-pointer md:hidden"
        >
          {isOpen ? <img src={burgerOpen} className="h-10 w-10"/> : <img src={burgerClosed} className="w-10 h-10"/>}
        </div>
        <ul className={`text-end pr-6 md:pr-0 bg-zinc-400 dark:bg-zinc-800 md:flex pl-9 md:pl-0 md:items-center md:justify-end md:pb-0 pb-3 absolute md:relative md:z-auto z-[-1] left-0 w-full transition-all duration-500 ease-in ${isOpen ? "inline" : "hidden"}`}>
          {links.map((link, index) => (
            <li className="font-semibold my-7 md:my-0 md:ml-8 hover:text-red-700 cursor-pointer" key={index}>
              <a onClick={() => scrollToSection(link.link)}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
