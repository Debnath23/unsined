import CreaterSection from "@/components/CreaterSection";
import CreateWinSection from "@/components/CreateWinSection";
import CreatingharmonySection from "@/components/CreatingharmonySection";
import DashboardSection from "@/components/DashboardSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ParticipationSection from "@/components/ParticipationSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CreaterSection />
        <ParticipationSection />
        <CreateWinSection />
        <DashboardSection />
        <CreatingharmonySection />
      </main>
      <Footer />
    </>
  );
}
