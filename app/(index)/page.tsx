import FinalAskGabiCTA from "@/components/landing-page/final-ask-gabi-cta";
import FootballJourneyPreview from "@/components/landing-page/football-jurney-preview";
import FootballLessons from "@/components/landing-page/football-lessons";
import HeroSection from "@/components/landing-page/hero-section";
import MediaOnThePitch from "@/components/landing-page/media-on-the-pitch";
import PlayerBehindAskGabi from "@/components/landing-page/player-behind-ask-gabi";
import ProfessionalNetwork from "@/components/landing-page/professional-network";
import VisionMission from "@/components/landing-page/vision-mission";
import WhatIWantToShare from "@/components/landing-page/what-i-want-to-share";
import WhyAskGabi from "@/components/landing-page/why-ask-gabi";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#003d2b]">
      <HeroSection />
      <PlayerBehindAskGabi />
      <FootballJourneyPreview />
      <WhyAskGabi />
      <FootballLessons />
      {/* <VisionMission /> */}
      <WhatIWantToShare />
      <ProfessionalNetwork />
      <MediaOnThePitch />
      <FinalAskGabiCTA />
    </main>
  );
}