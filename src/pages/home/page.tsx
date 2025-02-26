import { Link } from "react-router-dom";
import question from "../../assets/question.png";
import { seo } from "../../data/seo";
function Home() {
  return (
    <div
      id="home-bg"
      className="flex flex-col md:flex-row justify-center items-center h-screen text-white overflow-hidden"
    >
      <div className="flex-1 hidden md:flex justify-center items-center ">
        <img src={question} alt="Confused Person?" className="w-full h-full" />
      </div>
      <div className="flex flex-col justify-center items-stretch flex-1 gap-3 p-4">
        <h1 className="text-4xl">{seo.title}</h1>
        <p className="max-w-md  text-left">{seo.description}</p>
        <Link to={"/questions"} className="button max-w-[200px] !bg-white text-black">{seo.buttonTitle}</Link>
      </div>
    </div>
  );
}

export default Home;
