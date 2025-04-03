import logo from "../assets/netflix-logo.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen notFoundBg bg-no-repeat bg-cover bg-center flex flex-col">
      <header className="w-full bg-black px-3 py-2">
        <Link to={"/"}>
          <img src={logo} alt="netflix" height={100} width={120} />
        </Link>
      </header>

      <main className="flex flex-col justify-center items-center text-white gap-4 text-center flex-grow py-20">
        <h2 className="text-4xl font-semibold">Lost your way?</h2>
        <span className="text-lg">
          Sorry, we can't find that page. You'll find lots to explore on the
          home page
        </span>
        <button className="px-4 py-2 text-black bg-white rounded-sm text-lg font-semibold hover:bg-white/90 transition-colors">
          <Link to={"/"}>Netflix Home</Link>
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
