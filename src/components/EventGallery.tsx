import { useState, useEffect } from "react";

interface EventSlide {
  id: string;
  tag: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

const slides: EventSlide[] = [
  {
    id: "hackverse",
    tag: "Hackathon",
    title: "Hackverse '25",
    date: "Mar 2025",
    description: "Our flagship 48-hour national hackathon where teams built scalable dApps and smart contracts on-chain.",
    image: "/lovable-uploads/Hackverse25.jpg",
  },
  {
    id: "Arbitrum",
    tag: "Workshop",
    title: "Arbitrum Ecosystem Deep Dive",
    date: "2025",
    description: "Hands-on session on Layer-2 scaling, Arbitrum Nitro, and deploying high-performance L2 contracts.",
    image: "/lovable-uploads/arbitrum.jpeg",
  },
  {
    id: "launchpad",
    tag: "Incubation",
    title: "Launchpad 2.0",
    date: "Aug 2025",
    description: "Project incubation drive empowering student developers to turn Web3 ideas into production-ready dApps.",
    image: "/lovable-uploads/Launchpad2.0.jpeg",
  },
  {
    id: "qonneqt",
    tag: "Summit",
    title: "Qonneqt '2024",
    date: "Sep 2024",
    description: "Web3 community summit connecting student builders, smart contract auditors, and blockchain founders.",
    image: "/lovable-uploads/qonneqt-006.png",
  },
  {
    id: "colosseum",
    tag: "Arena",
    title: "Colosseum '26",
    date: "May 2026",
    description: "Competitive Web3 arena featuring live smart contract auditing and speed coding challenges.",
    image: "/lovable-uploads/Coloseum26.jpeg",
  },
  {
    id: "core-25",
    tag: "Team",
    title: "Web3 Core 25",
    date: "2025",
    description: "Meet the visionaries powering our Web3 journey — leading workshops, hackathons, and research.",
    image: "/lovable-uploads/Core25web3.jpeg",
  },
  {
    id: "core-leaders",
    tag: "Leadership",
    title: "CodeKrafters Core",
    date: "2025",
    description: "The core members behind SRMIST's premier Web3 developer club.",
    image: "/lovable-uploads/coreteam.jpeg",
  },
  {
    id: "team-photo",
    tag: "Web3 Core 24",
    title: "Web3 Den Team",
    date: "2025",
    description: "Empowering SRMIST students with future-ready blockchain skills and on-chain experience.",
    image: "/lovable-uploads/db7338b2-914a-4395-bd67-cdc3a7465822.png",
  },
];

const tagColors: Record<string, string> = {
  Team: "bg-emerald-400/20 text-emerald-300 border-emerald-400/30",
  Leadership: "bg-[hsl(267,80%,65%)]/20 text-[hsl(267,80%,65%)] border-[hsl(267,80%,65%)]/30",
  "Web3 Core 24": "bg-blue-400/20 text-blue-300 border-blue-400/30",
  Workshop: "bg-[hsl(180,80%,55%)]/20 text-[hsl(180,80%,55%)] border-[hsl(180,80%,55%)]/30",
  Hackathon: "bg-red-500/20 text-red-400 border-red-500/30",
  Incubation: "bg-[hsl(38,96%,54%)]/20 text-[hsl(38,96%,54%)] border-[hsl(38,96%,54%)]/30",
  Summit: "bg-purple-400/20 text-purple-300 border-purple-400/30",
  Arena: "bg-amber-500/20 text-amber-300 border-amber-500/30",
};

const EventGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide to the next image every 4 seconds unless paused/hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4200);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  return (
    <section id="events" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 scroll-fade-in">
          <span
            className="text-xs font-semibold tracking-[0.3em] uppercase text-[hsl(215,20%,45%)] block mb-4"
            style={{ fontFamily: "Exo 2, sans-serif" }}
          >
            Our Moments
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "Orbitron, monospace" }}>
            <span className="text-[hsl(210,40%,96%)]">EVENT</span>{" "}
            <span className="text-gradient-accent">SHOWCASE</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[hsl(38,96%,54%)] to-[hsl(267,80%,65%)] mx-auto mb-6" />
          <p className="text-[hsl(215,20%,55%)] max-w-xl mx-auto" style={{ fontFamily: "Exo 2, sans-serif" }}>
            Explore our hackathons, workshops, and team moments — sliding automatically through CodeKrafters events.
          </p>
        </div>

        {/* Single Image Showcase Box */}
        <div className="max-w-4xl mx-auto scroll-fade-in">
          <div
            className="relative glass-morphism-gold rounded-xl overflow-hidden border border-[hsl(38,96%,54%)]/30 group shadow-[0_12px_50px_hsl(222,47%,4%,0.7)]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Single Slide Frame */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[hsl(222,47%,7%)]">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                    index === currentIndex
                      ? "opacity-100 translate-x-0 scale-100 z-10"
                      : index < currentIndex
                      ? "opacity-0 -translate-x-8 scale-105 pointer-events-none z-0"
                      : "opacity-0 translate-x-8 scale-105 pointer-events-none z-0"
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlay for Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222,47%,7%)] via-[hsl(222,47%,7%)]/40 to-transparent" />

                  {/* Slide Text Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                          tagColors[slide.tag] || "bg-[hsl(38,96%,54%)]/20 text-[hsl(38,96%,54%)]"
                        }`}
                        style={{ fontFamily: "Exo 2, sans-serif" }}
                      >
                        {slide.tag}
                      </span>
                      <span
                        className="text-xs text-[hsl(215,20%,65%)] font-mono"
                        style={{ fontFamily: "Exo 2, sans-serif" }}
                      >
                        {slide.date}
                      </span>
                    </div>

                    <h3
                      className="text-2xl md:text-4xl font-bold text-[hsl(210,40%,96%)] mb-2 drop-shadow-md"
                      style={{ fontFamily: "Orbitron, monospace" }}
                    >
                      {slide.title}
                    </h3>
                    <p
                      className="text-sm md:text-base text-[hsl(215,20%,75%)] max-w-2xl leading-relaxed drop-shadow-sm"
                      style={{ fontFamily: "Exo 2, sans-serif" }}
                    >
                      {slide.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Prev / Next Sliding Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-[hsl(222,47%,7%)]/70 border border-[hsl(38,96%,54%)]/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-[hsl(38,96%,54%)] hover:text-[hsl(222,47%,7%)] transition-all opacity-80 hover:opacity-100 cursor-pointer"
                aria-label="Previous Slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-[hsl(222,47%,7%)]/70 border border-[hsl(38,96%,54%)]/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-[hsl(38,96%,54%)] hover:text-[hsl(222,47%,7%)] transition-all opacity-80 hover:opacity-100 cursor-pointer"
                aria-label="Next Slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Slide Counter Indicator */}
              <div className="absolute top-4 right-4 z-30 px-3 py-1 rounded-full bg-[hsl(222,47%,7%)]/80 border border-[hsl(38,96%,54%)]/30 text-xs font-mono text-[hsl(38,96%,54%)]">
                {currentIndex + 1} / {slides.length}
              </div>
            </div>

            {/* Thumbnail Strip Below Single Image */}
            <div className="p-4 bg-[hsl(222,47%,7%)]/90 border-t border-[hsl(38,96%,54%)]/20 grid grid-cols-4 sm:grid-cols-8 gap-2">
              {slides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative w-full h-14 rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? "border-[hsl(38,96%,54%)] ring-2 ring-[hsl(38,96%,54%)]/40 scale-105"
                      : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventGallery;
