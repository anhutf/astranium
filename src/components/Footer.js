export default function Footer() {
  return (
    <footer className="px-6 py-6 sm:px-12 sm:py-12 flex gap-3 flex-col items-center bg-gray-100">
      <a href="/" className="flex items-center gap-1">
        <img
          className="w-12 h-12 transition ease-in-out delay-150 group-hover:scale-110"
          src={require("../assets/star.png")}
          alt="Astranium"
        />
        <span className="text-4xl text-amber-400 font-bold">Astranium</span>
      </a>
      <p className="text-lg text-center">
        &copy; Copyright 2023 Astranium. All rights reserved.
      </p>
    </footer>
  );
}
