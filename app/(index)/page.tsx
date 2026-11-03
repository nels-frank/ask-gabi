import FinalAskGabiCTA from "@/components/landing-page/final-ask-gabi-cta";
import FootballLessons from "@/components/landing-page/football-lessons";
import HeroSection from "@/components/landing-page/hero-section";
import MediaOnThePitch from "@/components/landing-page/media-on-the-pitch";
import PlayerBehindAskGabi from "@/components/landing-page/player-behind-ask-gabi";
import ProfessionalNetwork from "@/components/landing-page/professional-network";
import VisualAndConnection from "@/components/landing-page/visual-and-connection";
import WhyAskGabi from "@/components/landing-page/why-ask-gabi";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#003d2b]">
      <HeroSection />
      <PlayerBehindAskGabi />
      <WhyAskGabi />
      <VisualAndConnection />
      <FootballLessons />
      <ProfessionalNetwork />
      {/* <MediaOnThePitch /> */}
      <FinalAskGabiCTA />
    </main>
  );
}