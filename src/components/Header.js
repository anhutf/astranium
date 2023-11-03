import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <header className="bg-gray-100 flex items-center gap-2 px-6 py-6 sm:px-12 sm:py-12">
      <div className="logo group flex-1">
        <a href="/" className="flex items-center gap-1">
          <img
            className="w-10 h-10 transition ease-in-out delay-150 group-hover:scale-110"
            src={require("../assets/star.png")}
            alt="Astranium"
          />
          <span className="text-3xl text-amber-400 font-bold">Astranium</span>
        </a>
      </div>
      <div className="menu flex-none">
        <Bars3Icon className="h-9 w-9 text-slate-900 sm:hidden" />
        <nav className="hidden sm:flex gap-4 text-2xl font-semibold">
          <Link to="/">Home</Link>
          <Link to="/how-to-stake">How to stake</Link>
          <Link to="/about">About Us</Link>
        </nav>
      </div>
    </header>
  );
}
