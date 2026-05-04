import NeonCursor from "@/components/NeonCursor";
import HudNavbar from "@/components/HudNavbar";
import HeroSection from "@/components/HeroSection";
import StatsCounter from "@/components/StatsCounter";
import CyberGrid from "@/components/CyberGrid";
import AboutTeam from "@/components/AboutTeam";
import ProjectGallery from "@/components/ProjectGallery";
import Testimonials from "@/components/Testimonials";
import PricingPlans from "@/components/PricingPlans";
import TerminalContact from "@/components/TerminalContact";
import CyberFooter from "@/components/CyberFooter";

const Index = () => {
  return (
    <div className="scanlines circuit-bg min-h-screen">
      <NeonCursor />
      <HudNavbar />
      <HeroSection />
      <StatsCounter />
      <CyberGrid />
      <AboutTeam />
      <ProjectGallery />
      <Testimonials />
      <PricingPlans />
      <TerminalContact />
      <CyberFooter />
    </div>
  );
};

export default Index;
