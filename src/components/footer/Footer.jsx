import ghPicLight from "../../assets/Footer/gh-light.png";
import ghPicDark from "../../assets/Footer/gh-dark.svg";
import liPicLight from "../../assets/Footer/li-light.png";
import liPicDark from "../../assets/Footer/li-dark.png";

function Footer({ darkMode, setShowLegal, setShowDatenschutz }) {
  function handleLegalClick() {
    setShowLegal(true);
  }
  function handleDatenschutzClick() {
    setShowDatenschutz(true);
  }

  return (
    <div className="box-border py-4 text-xs md:text-sm z-10 border-t-black border-t-2 text-black bg-zinc-400 dark:text-zinc-200 dark:bg-zinc-800 shadow-up shadow-black transition-all duration-500 ease-in">
      <div className="grid grid-cols-2 mx-7 ">
        <div className="flex h-[100%] align-middle">
          <div>
            <a
              href="https://github.com/egelix"
              target="_blank"
              rel="noopener noreferrer"
              className="flex hover:text-red-700"
            >
              <img
                src={darkMode ? ghPicDark : ghPicLight}
                alt="Link to Github-page"
                className="h-5 md:h-6"
              />
              <p className="ml-2">github.com/egelix</p>
            </a>
            <a
              href="https://linkedin.com/in/martin-egert/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex hover:text-red-700 mt-2"
            >
              <img
                src={darkMode ? liPicDark : liPicLight}
                alt="Link to LinkedIn-page"
                className="h-5 md:h-6"
              />
              <p className="ml-1">linkedin.com/in/martin-egert/</p>
            </a>
          </div>
        </div>
        <div className="grid grid-rows-2 ml-auto text-end">
          <p
            className="font-bold cursor-pointer hover:text-red-700"
            onClick={handleLegalClick}
          >
            Impressum
          </p>
          <p
            className="font-bold cursor-pointer hover:text-red-700"
            onClick={handleDatenschutzClick}
          >
            Datenschutz
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
