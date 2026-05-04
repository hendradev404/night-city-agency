import NeonCursor from "@/components/NeonCursor";
import HudNavbar from "@/components/HudNavbar";
import HeroSection from "@/components/HeroSection";
import CyberGrid from "@/components/CyberGrid";
import ProjectGallery from "@/components/ProjectGallery";
import TerminalContact from "@/components/TerminalContact";
import CyberFooter from "@/components/CyberFooter";

const Index = () => {
  return (
    <div className="scanlines circuit-bg min-h-screen">
      <NeonCursor />
      <HudNavbar />
      <HeroSection />
      <CyberGrid />
      <ProjectGallery />
      <TerminalContact />
      <CyberFooter />
    </div>
  );
};

export default Index;
