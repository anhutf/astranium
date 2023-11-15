import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const handleClick = () => {
    const navEl = document.querySelector(".nav-control");
    const openIcon = document.querySelector(".open-icon");
    const closeIcon = document.querySelector(".close-icon");

    navEl.classList.toggle("opacity-95");
    navEl.classList.toggle("translate-x-full");
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  };

  const closeNav = () => {
    const navEl = document.querySelector(".nav-control");
    const openIcon = document.querySelector(".open-icon");
    const closeIcon = document.querySelector(".close-icon");

    navEl.classList.remove("opacity-95");
    navEl.classList.add("translate-x-full");
    openIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  };

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
        <button
          className="menu-mobile flex relative z-50 md:hidden text-slate-900 cursor-pointer"
          onClick={handleClick}
        >
          <Bars3Icon className="open-icon h-9 w-9 block" />
          <XMarkIcon className="close-icon h-9 w-9 hidden" />
        </button>
        <div className="nav-control opacity-0 md:opacity-100 md:block absolute md:static top-0 left-0 w-full md:w-auto h-screen md:h-auto z-10 translate-x-full md:translate-x-0 bg-amber-50 md:bg-inherit flex items-center justify-center truncate">
          <nav
            className="flex flex-col md:flex-row gap-4 items-center justify-items-center text-2xl font-semibold"
            onClick={closeNav}
          >
            <Link to="/" className="hover:text-amber-400 active:text-amber-400">
              Trang chủ
            </Link>
            <Link
              to="/how-to-stake"
              className="hover:text-amber-400 active:text-amber-400"
            >
              Hướng dẫn stake
            </Link>
            <Link
              to="/about"
              className="hover:text-amber-400 active:text-amber-400"
            >
              Về chúng tôi
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
