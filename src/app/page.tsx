import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import ValueCards from "@/components/ValueCards";
import BentoGrid from "@/components/BentoGrid";
import SolutionsGrid from "@/components/SolutionsGrid";
import ThreeSteps from "@/components/ThreeSteps";
import DevSection from "@/components/DevSection";
import SecuritySection from "@/components/SecuritySection";
import OrbitalSupport from "@/components/OrbitalSupport";
import FaqSection from "@/components/FaqSection";
import VersellPayBanner from "@/components/VersellPayBanner";
import PreFooterCta from "@/components/PreFooterCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F6F7F2] flex flex-col w-full selection:bg-[#D2FB07] selection:text-black">
      <Navbar />
      <Hero />
      <Ticker />
      <ValueCards />
      <BentoGrid />
      <SolutionsGrid />
      <ThreeSteps />
      <DevSection />
      <SecuritySection />
      <OrbitalSupport />
      <FaqSection />
      <VersellPayBanner />
      <PreFooterCta />
      <Footer />
    </main>
  );
}

