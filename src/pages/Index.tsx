import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import InteractiveSolution from "@/components/InteractiveSolution";
import SystemArchitecture from "@/components/SystemArchitecture";
import PrototypeSection from "@/components/PrototypeSection";
import FutureVision from "@/components/FutureVision";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <InteractiveSolution />
        <SystemArchitecture />
        <PrototypeSection />
        <FutureVision />
      </main>
    </div>
  );
};

export default Index;
