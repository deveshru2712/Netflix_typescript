import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const HomePage = () => {
  return (
    <div className="hero-bg">
      {/* header */}
      <header className="max-w-6xl px-6 mx-auto py-4">
        <div className="flex justify-between items-center object-contain">
          <a>
            <img
              src="/netflix-logo.png"
              alt="netflix"
              className="h-10 lg:h-15"
            />
          </a>
          <div>
            <Link to={"/login"}>
              <button className="bg-primary text-white text-lg font-normal px-2 py-1 rounded-sm cursor-pointer">
                Sign in
              </button>
            </Link>
          </div>
        </div>
      </header>
      {/* hero section */}
      <main className="max-w-6xl mx-auto flex flex-col justify-center items-center py-40 text-white gap-4 text-center text-wrap">
        <h1 className="text-4xl font-semibold">
          Unlimited movies, Tv Shows, and more.
        </h1>
        <span className="text-lg font-semibold">
          Watch anywhere. Cancel anytime.
        </span>
        <span className="text-normal text-center px-2">
          Ready to Watch? Enter your email to create or restart your membership.
        </span>

        {/* section two */}
        <div className="w-full">
          <form className="w-1/2 flex flex-col md:flex-row justify-center items-center gap-3 mx-auto">
            <input
              type="email"
              placeholder="Email address"
              className="bg-black/80 w-full flex-1 p-2 rounded-sm border border-slate-100/30 text-slate-100"
            />
            <button
              type="submit"
              className="text-xl max-md:w-full  font-semibold flex justify-center items-center bg-primary px-4 py-2 rounded-sm cursor-pointer"
            >
              Get Started
              <ChevronRight />
            </button>
          </form>
        </div>
      </main>
      <div className="w-full h-0.5 bg-slate-500" />
      <div className="bg-black">
        <div className="max-w-6xl mx-auto flex justify-center items-center">
          <div className="flex-1 flex flex-col justify-center items-start gap-2 text-white">
            <h1 className="text-4xl font-semibold">Enjoy on your Tv</h1>
            <span className="text-lg">
              Watch on Smart Tvs, Playstation, Xbox, Chromecast, Apple Tv,
              Blue-ray players, and more.
            </span>
          </div>
          <div className="flex-1">
            <img src="/tv.png" alt="tv" className="object-contain" />
            <video
              autoPlay={true}
              loop
              muted
              playsInline
              className="object-contain"
            >
              <source src="./hero-vid.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
