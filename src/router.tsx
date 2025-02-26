import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home/page"
import Category from "./pages/categories/page"
import Question from "./pages/question/page"
import NotFound from "./template_pages/not_found"
function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category/>} />
        <Route path="/category/question" element={<Question/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  )
}

export default AppRouter
