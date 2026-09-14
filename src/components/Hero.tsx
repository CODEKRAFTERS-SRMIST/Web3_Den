import { useEffect, useState } from "react";

const TYPING_LINES = [
  "> Initializing Web3 environment...",
  "> Loading blockchain modules...",
  "> Welcome, CodeKrafter.",
];

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  // Typing animation
  useEffect(() => {
    if (done) return;
    const currentLine = TYPING_LINES[lineIndex];
    if (charIndex < currentLine.length) {
      const t = setTimeout(() => {
        setDisplayText((prev) => prev + currentLine[charIndex]);
        setCharIndex((c) => c + 1);
      }, 38);
      return () => clearTimeout(t);
    } else {
      if (lineIndex < TYPING_LINES.length - 1) {
        const t = setTimeout(() => {
          setDisplayText((prev) => prev + "\n");
          setLineIndex((l) => l + 1);
          setCharIndex(0);
        }, 500);
        return () => clearTimeout(t);
      } else {
        setDone(true);
      }
    }
  }, [charIndex, lineIndex, done]);


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Big blurred glow orbs - hero accent */}
      <div className="absolute top-1/4 left-1/5 w-[420px] h-[420px] rounded-full bg-[hsl(267,80%,65%)]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/5 w-[320px] h-[320px] rounded-full bg-[hsl(38,96%,54%)]/8 blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">

        {/* Terminal window */}
        <div className="animate-fade-in inline-block mb-10 text-left">
          <div className="glass-morphism-gold rounded-lg overflow-hidden max-w-md mx-auto">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-[hsl(38,96%,54%)]/20 bg-[hsl(222,47%,7%)]/60">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-2 text-xs text-[hsl(215,20%,45%)] tracking-widest uppercase" style={{ fontFamily: 'Orbitron, monospace' }}>
                ck-terminal
              </span>
            </div>
            <div className="p-4 font-mono text-sm text-[hsl(38,96%,54%)] min-h-[80px] whitespace-pre-wrap">
              {displayText}
              {!done && <span className="inline-block w-2 h-4 bg-[hsl(38,96%,54%)] ml-0.5 animate-pulse align-middle" />}
            </div>
          </div>
        </div>

        {/* Main headline */}
        <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <div className="mb-4">
            <span className="text-xs font-semibold tracking-[0.35em] uppercase text-[hsl(215,20%,50%)] block mb-6" style={{ fontFamily: 'Exo 2, sans-serif' }}>
              CodeKrafters · SRMIST · Web3 Division
            </span>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-3"
              style={{ fontFamily: 'Orbitron, monospace' }}
            >
              <span className="text-gradient-primary block">WEB3</span>
              <span className="text-gradient-accent block">DEN</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[hsl(38,96%,54%)] to-[hsl(267,80%,65%)] mx-auto my-6" />
          </div>

          <p className="text-lg md:text-xl text-[hsl(215,20%,60%)] mb-10 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Exo 2, sans-serif' }}>
            Your gateway to the decentralized future. We build real Web3 projects, learn together, and push the boundaries of what's possible on-chain.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              id="hero-cta"
              onClick={() => window.open("https://codekraftersrmp.in/login", "_blank", "noopener,noreferrer")}
              className="group relative px-8 py-4 font-bold text-sm tracking-widest uppercase bg-[hsl(38,96%,54%)] text-[hsl(222,47%,7%)] rounded hover:scale-105 transition-all duration-200 shadow-[0_0_30px_hsl(38,96%,54%,0.4)] hover:shadow-[0_0_45px_hsl(38,96%,54%,0.6)] cursor-pointer"
              style={{ fontFamily: 'Orbitron, monospace' }}
            >
              <span className="relative z-10">&gt; Initialize Recruitment</span>
            </button>

            <button
              onClick={() => { const el = document.getElementById("roadmap"); el?.scrollIntoView({ behavior: "smooth" }); }}
              className="px-8 py-4 font-semibold text-sm tracking-widest uppercase border border-[hsl(267,80%,65%)]/40 text-[hsl(267,80%,65%)] rounded hover:border-[hsl(267,80%,65%)] hover:bg-[hsl(267,80%,65%)]/10 transition-all duration-200 cursor-pointer"
              style={{ fontFamily: 'Orbitron, monospace' }}
            >
              View Roadmap
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-1 text-[hsl(215,20%,40%)]">
            <div className="w-px h-10 bg-gradient-to-b from-[hsl(38,96%,54%)]/50 to-transparent" />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;
