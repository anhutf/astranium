import CommunitySection from "../section/CommunitySection";
import HeroSection from "../section/HeroSection";
import HowItWorksSection from "../section/HowItWorksSection";
import TrustSection from "../section/TrustSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <HowItWorksSection />
      <CommunitySection />
    </>
  );
}
