import CreaterSection from "@/components/CreaterSection";
import CreateWinSection from "@/components/CreateWinSection";
import DashboardSection from "@/components/DashboardSection";
import HeroSection from "@/components/HeroSection";
import ParticipationSection from "@/components/ParticipationSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CreaterSection />
      <ParticipationSection />
      <CreateWinSection />
      <DashboardSection />
    </main>
  );
}
