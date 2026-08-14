import Hero from "@/components/Hero";
import TeamSection from "@/components/TeamSection";
import EventGallery from "@/components/EventGallery";
import ClubJourney from "@/components/ClubJourney";
import Roadmap from "@/components/Roadmap";
import ScrollAnimations from "@/components/ScrollAnimations";
import Navigation from "@/components/Navigation";
import GlobalParticleBackground from "@/components/GlobalParticleBackground";

const Index = () => {
  return (
    <>
      <GlobalParticleBackground />
      <Navigation />
      <ScrollAnimations />
      <div className="min-h-screen global-space-background relative">
        {/* Main content — stacked sections */}
        <Hero />
        <TeamSection />
        <EventGallery />
        <Roadmap />
        <ClubJourney />

        {/* Footer */}
        <footer className="relative z-10 py-14 border-t border-[hsl(220,25%,16%)]">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Logo mark */}
              <div className="flex items-center gap-3">
                <img
                  src="/favicon.ico"
                  alt="CodeKrafters Logo"
                  className="w-8 h-8 object-contain rounded-md"
                />
                <div>
                  <div className="text-xs font-bold text-[hsl(38,96%,54%)] tracking-widest" style={{ fontFamily: 'Orbitron, monospace' }}>
                    CODEKRAFTERS
                  </div>
                  <div className="text-[10px] text-[hsl(215,20%,35%)] tracking-[0.15em]" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                    SRMIST · Web3 Den
                  </div>
                </div>
              </div>

              <p className="text-xs text-[hsl(215,20%,35%)] text-center" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                © 2025 CodeKrafters Web3 Den · SRMIST · Built for the Decentralized Future
              </p>

              <div className="flex gap-4 text-xs text-[hsl(215,20%,40%)]" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                <span>Blockchain</span>
                <span className="text-[hsl(38,96%,54%)]">·</span>
                <span>Smart Contracts</span>
                <span className="text-[hsl(38,96%,54%)]">·</span>
                <span>Web3</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
