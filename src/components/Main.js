import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HowToStake from "./pages/HowToStake";
import AboutPage from "./pages/AboutPage";

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/how-to-stake" element={<HowToStake />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
    </main>
  );
}
