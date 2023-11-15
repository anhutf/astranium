import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="hero bg-gray-100 text-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-16">
        <h1 className="text-amber-300 text-5xl sm:text-6xl font-bold tracking-tight pt-4">
          Stake for the{" "}
          <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-400 relative inline-block">
            <span class="relative text-white">future</span>
          </span>{" "}
          and grow with Astranium
          <span className="text-amber-400">!</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-700 px-4 sm:px-20 py-6">
          Tăng số lượng Astra của bạn bằng cách staking, earning và shopping.
          Hãy tương tác với Astranium Validator.
        </p>
        <div className="action flex flex-col sm:flex-row justify-center items-center shrink gap-4 text-xl sm:text-2xl font-semibold">
          <a
            href="/"
            className="w-3/4 sm:w-auto bg-amber-400 hover:bg-amber-300 px-6 py-3 rounded-2xl  text-white"
          >
            Bắt đầu staking
          </a>
          <Link
            to="/how-to-stake"
            className="w-3/4 sm:w-auto bg-gray-200 hover:bg-slate-200 px-6 py-3 rounded-2xl"
          >
            Tìm hiểu thêm
          </Link>
        </div>
      </div>
    </section>
  );
}
