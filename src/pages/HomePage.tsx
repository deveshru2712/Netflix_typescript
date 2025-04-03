import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import logo from "../assets/netflix-logo.png";
import tv from "../assets/tv.png";
import heroVideo from "../assets/hero-vid.m4v";
import strangeThingLg from "../assets/stranger-things-lg.png";
import strangeThingSm from "../assets/stranger-things-sm.png";

import download from "../assets/download-icon.gif";

const HomePage = () => {
  return (
    <div className="hero-bg">
      {/* header */}
      <header className="max-w-6xl px-6 mx-auto py-4">
        <div className="flex justify-between items-center object-contain">
          <a>
            <img src={logo} alt="netflix" className="h-10 lg:h-15" />
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
        <h1 className="text-6xl font-bold">
          Unlimited movies, Tv Shows, and more.
        </h1>
        <span className="text-lg font-semibold">
          Watch anywhere. Cancel anytime.
        </span>
        <span className="text-normal text-center px-2">
          Ready to Watch? Enter your email to create or restart your membership.
        </span>

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

      <div className="w-full h-1 bg-slate-500" />

      {/* section two */}
      <div className="bg-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center py-10 px-4">
          <div className="flex-1 order-1 flex flex-col justify-center items-start text-white text-center md:text-left">
            <h1 className="w-full text-4xl md:text-5xl font-extrabold mb-2">
              Enjoy on your Tv
            </h1>
            <span className="text-lg md:text-xl">
              Watch on Smart Tvs, Playstation, Xbox, Chromecast, Apple Tv,
              Blue-ray players, and more.
            </span>
          </div>
          <div className="flex-1 order-2 relative">
            <img src={tv} alt="tv" className="relative z-20" />
            <video
              autoPlay={true}
              loop
              muted
              playsInline
              className="z-10 absolute h-1/2 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div className="w-full h-1 bg-slate-500" />

      {/* section three */}

      <div className="bg-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center py-10 px-4">
          <div className="flex-1 flex flex-col order-2 justify-center items-start text-white text-center md:text-left">
            <h1 className="w-full text-4xl md:text-5xl font-extrabold mb-2">
              Download your shows to watch offline
            </h1>
            <span className="text-lg md:text-xl">
              Save your favorites easily and always have something to watch.
            </span>
          </div>

          <div className="order-1 flex-1 relative text-white mb-10">
            <img src={strangeThingLg} alt="strangeThing_banner" />
            <div className="w-3/4 lg:w-3/5  bg-black px-2 flex justify-around items-center border border-slate-100 absolute left-1/2 top-2/3 -translate-x-1/2 translate-y-1/6 rounded-sm">
              <img
                src={strangeThingSm}
                alt="strangeThing_banner"
                className="object-contain size-24"
              />
              <div className="flex flex-col justify-center items-start">
                <span className="text-lg font-semibold text-nowrap">
                  Strange Things
                </span>
                <span className="text-sm text-blue-600">Downloading...</span>
              </div>
              <img
                src={download}
                alt="downloading"
                className="object-contain size-12"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-1 bg-slate-500" />
      {/* section four */}
    </div>
  );
};

export default HomePage;
