import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/page";
import Question from "./pages/question/page";
import NotFound from "./template_pages/not_found";
import Questions from "./pages/questions/page";
import Navbar from "./components/navbar";
import ThemeSwitcher from "./components/theme_switcher";

function AppRouter() {
  return (
    <Router>
      <div className="dark:bg-[#24153b] dark:text-white min-h-screen overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/category/question" element={<Question />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Navbar />
        <ThemeSwitcher/>
      </div>
    </Router>
  );
}

export default AppRouter;
