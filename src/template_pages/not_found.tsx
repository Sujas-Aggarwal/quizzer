import ThemeSwitcher from "../components/theme_switcher";

function NotFound() {
  return (
    <div className="w-full h-screen flex justify-center items-center dark:text-red-600 text-blue-600">
      Are you lost baby gurl?
      <ThemeSwitcher/>
    </div>
  );
}

export default NotFound;
