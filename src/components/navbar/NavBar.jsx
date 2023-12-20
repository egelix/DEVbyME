import burgerDark from "../../assets/navBarIcons/burgerDark.png";
import burgerLight from "../../assets/navBarIcons/burgerLight.png";
import burgerCloseDark from "../../assets/navBarIcons/burgerCloseDark.png";
import burgerCloseLight from "../../assets/navBarIcons/burgerCloseLight.png";

import logo1 from "../../assets/navBarIcons/ME_Logo_1.png";
import logo2 from "../../assets/navBarIcons/ME_Logo_2.png";
import logo3 from "../../assets/navBarIcons/ME_Logo_3.png";
import logo4 from "../../assets/navBarIcons/ME_Logo_4.png";
import logoDark1 from "../../assets/navBarIcons/ME_Logo_Dark1.png";
import logoDark2 from "../../assets/navBarIcons/ME_Logo_Dark2.png";

import { useState } from "react";

function NavBar({
  language,
  setLanguage,
  aboutRef,
  cvRef,
  contactRef,
  projectRef,
  darkMode,
}) {
  let links = [
    { nameEng: "About ME", nameDe: "Über ME", link: aboutRef },
    { nameEng: "Experience", nameDe: "Lebensweg", link: cvRef },
    { nameEng: "Projects", nameDe: "Projekte", link: projectRef },
    { nameEng: "Contact", nameDe: "Kontakt", link: contactRef },
  ];

  const [isOpen, setIsOpen] = useState(false);

  function handleBurgerClick() {
    setIsOpen(!isOpen);
  }

  function scrollToSection(elementRef) {
    console.log(elementRef);
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleLinkClick(section) {
    scrollToSection(section);
    setIsOpen(false);
  }

  return (
    <div className="text-lg z-30 align-middle fixed top-0 left-0 shadow-md shadow-black w-full text-black bg-zinc-400 dark:text-zinc-200 dark:bg-zinc-800 transition-all duration-500 ease-in">
      <div className="md:pr-10 pl-4 py-1 pr-7 w-full md:flex justify-between items-center align-middle ">
        <img
          onClick={scrollToTop}
          src={darkMode ? logoDark2 : logo4}
          alt="Link to Hero Section"
          className="w-14 p-0 m-0 cursor-pointer"
        />
        <div
          onClick={handleBurgerClick}
          className="w-10 h-10 absolute right-4 top-[13px] cursor-pointer md:hidden flex items-center"
        >
          {isOpen ? (
            <img
              src={darkMode ? burgerCloseDark : burgerCloseLight}
              className="h-10 w-10"
            />
          ) : (
            <img
              src={darkMode ? burgerDark : burgerLight}
              className="w-10 h-7"
            />
          )}
        </div>
        <ul
          className={`text-end pr-6 md:pr-0 bg-zinc-400 dark:bg-zinc-800 md:flex pl-9 md:pl-0 md:items-center md:justify-end md:pb-0 pb-3 absolute md:relative md:z-auto z-[-1] left-0 w-full transition-all duration-500 ease-in ${
            isOpen ? "inline" : "hidden"
          }`}
        >
          {links.map((link, index) => (
            <li
              className="font-semibold my-7 md:my-0 md:ml-8 hover:text-red-700 cursor-pointer"
              key={index}
            >
              <a onClick={() => handleLinkClick(link.link)}>
                {language === "english" ? link.nameEng : link.nameDe}
              </a>
            </li>
          ))}
          <li className="flex justify-end my-7 md:my-0 md:ml-8">
            <div
              onClick={() =>
                language === "english"
                  ? setLanguage("german")
                  : setLanguage("english")
              }
              className="text-black p-[2px] border-2 border-zinc-700 dark:border-zinc-200 grid grid-cols-2 rounded-full w-12 h-6 bg-zinc-200 dark:bg-zinc-700 text-xs cursor-pointer"
            >
              <div
                className={`${
                  language === "english"
                    ? "bg-zinc-500 shadow-inner text-zinc-200"
                    : "bg-zinc-200"
                } rounded-l-full text-center shadow-black font-bold border-r-[1px] border-black`}
              >
                En
              </div>
              <div
                className={`${
                  language != "english"
                    ? "bg-zinc-500 shadow-inner text-zinc-200"
                    : "bg-zinc-200"
                } rounded-r-full text-center shadow-black font-bold border-l-[1px] border-black`}
              >
                De
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
