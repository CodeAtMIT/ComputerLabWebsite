import { LoadingScreen } from "./components/LoadingScreen";
import { ModernHeader } from "./components/ModernHeader";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Faculty } from "./components/Faculty";
import { Timetable } from "./components/Timetable";
import { Events } from "./components/Events";
import { InfrastructureGallery } from "./components/InfrastructureGallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import {
  ScrollProgress,
  BackToTop,
  FloatingMenu,
  useScrollAnimation,
} from "./components/EnhancedFeatures";

export default function App() {
  useScrollAnimation();

  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-[#F9FAFB]">
        <ScrollProgress />
        <BackToTop />
        <FloatingMenu />
        <ModernHeader />
        <main className="relative">
          <Hero />
          <About />
          <Faculty />
          <Timetable />
          <Events />
          <InfrastructureGallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}