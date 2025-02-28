import { useEffect } from "react";
import wave from "../assets/wave.svg";

function ThemeSwitcher() {
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
    }
  }, []);
  const switchTheme = () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };
  return (
    <button
      className="fixed right-5 md:right-10 bottom-8 hover:scale-105 transition-all duration-200 rounded-full dark:bg-black bg-white cursor-pointer flex justify-center items-center md:w-[50px] md:h-[50px] w-[40px] h-[40px]"
      onClick={switchTheme}
    >
      <img
        width={24}
        className=" p-2 md:p-3 dark:invert bg-cover bg-center w-full h-full"
        src={wave}
        alt=""
      />
    </button>
  );
}

export default ThemeSwitcher;
