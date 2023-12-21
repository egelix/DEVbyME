import darkIcon from "../../assets/DarkToggle/Darkmode.png"
import lightIcon from "../../assets/DarkToggle/Lightmode.png"

function DarkToggle({ darkMode, setDarkMode }) {
  function handleToggleModeClick() {
    !darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
    setDarkMode(!darkMode);
  }

  return (
    <div onClick={handleToggleModeClick} className="z-20 fixed top-24 right-0 inline-block w-10 md:w-12 lg:w-14 cursor-pointer rounded-l-lg bg-zinc-800 dark:bg-zinc-200 dark:text-black text-zinc-200 p-2 text-3xl">
      <img src={darkMode ? lightIcon : darkIcon} alt="darkmode toggle icon" />
    </div>
  );
}

export default DarkToggle;
