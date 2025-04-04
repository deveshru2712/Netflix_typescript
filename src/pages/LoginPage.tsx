import { Link } from "react-router-dom";
import logo from "../assets/netflix-logo.png";

const LoginPage = () => {
  return (
    <div className="hero-bg h-screen w-screen">
      <header className="max-w-6xl px-6 mx-auto py-4">
        <div className="flex justify-between items-center object-contain">
          <a>
            <img src={logo} alt="netflix" className="h-10 lg:h-15" />
          </a>
        </div>
      </header>

      <div className="flex justify-center items-center my-20 mx-3 text-white">
        <div className="w-1/3 bg-black/60 rounded-lg px-10 py-4 text-center">
          <h1 className="text-2xl font-extrabold mb-5">Log In </h1>
          <form className="w-full flex flex-col justify-center items-center gap-5">
            <div className="w-full flex flex-col justify-center items-start gap-2 ">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="border border-slate-600 w-full px-5 py-2 rounded-sm"
                placeholder="your@mail.com"
              />
            </div>

            <div className="w-full flex flex-col justify-center items-start gap-2 ">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="border border-slate-600 w-full px-5 py-2 rounded-sm"
                placeholder="......"
              />
            </div>

            <button className="bg-primary w-full text-xl font-semibold rounded-md py-2">
              Log In
            </button>
          </form>
          <div className="w-full text-lg flex justify-center items-center gap-2 mt-3 text-slate-400">
            Don't have an account?
            <Link to={"/signup"} className="text-primary hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
