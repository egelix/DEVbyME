function DarkToggle({ darkMode, setDarkMode }) {
  function handleToggleModeClick() {
    !darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
    setDarkMode(!darkMode);
  }

  return (
    <div className="z-50 fixed top-24 right-0 inline-block w-12 cursor-pointer rounded-l-lg bg-zinc-800 dark:bg-zinc-200 dark:text-black text-zinc-200 p-2 text-3xl">
      <p onClick={handleToggleModeClick}>D</p>
    </div>
  );
}

export default DarkToggle;
