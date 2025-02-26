import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-4xl">
      <h1>Are you lost baby gurl?</h1>
      <p className="p-2">
        <Link to={"/"} className="button">Go to Home</Link>
      </p>
    </div>
  );
}

export default NotFound;
