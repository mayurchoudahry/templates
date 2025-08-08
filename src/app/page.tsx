import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ShowReelsSection from "./components/ShowReelsSection";
import MyWorkSection from "./components/MyWorkSection";
import SocialProofSection from "./components/SocialProofSection";
import ContactSection from "./components/ContactSection";
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ShowReelsSection />
      <MyWorkSection />
      <SocialProofSection />
      <ContactSection />
      <ScrollToTopButton />
    </main>
  );
}
