import { useEffect } from "react";

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
  return <button onClick={switchTheme}>Switch Theme</button>;
}

export default ThemeSwitcher;
