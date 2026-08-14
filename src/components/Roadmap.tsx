import { useEffect, useRef, useState } from "react";
import { PhaseModal, phases } from "./Phase1Modal";
import type { Phase } from "./Phase1Modal";

const statusStyles = {
  "IN PROGRESS": "bg-[hsl(38,96%,54%)]/15 text-[hsl(38,96%,54%)] border border-[hsl(38,96%,54%)]/30",
  UPCOMING: "bg-[hsl(267,80%,65%)]/15 text-[hsl(267,80%,65%)] border border-[hsl(267,80%,65%)]/30",
  COMPLETED: "bg-green-500/15 text-green-400 border border-green-500/30",
};

const Roadmap = () => {
  const roadmapRef = useRef<HTMLDivElement>(null);
  const [selectedPhase, setSelectedPhase] = useState<Phase | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    const elements = roadmapRef.current?.querySelectorAll(".roadmap-item");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="roadmap" className="py-24 relative z-10" ref={roadmapRef}>
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 scroll-fade-in">
          <span
            className="text-xs font-semibold tracking-[0.3em] uppercase text-[hsl(215,20%,45%)] block mb-4"
            style={{ fontFamily: "Exo 2, sans-serif" }}
          >
            Learning Path
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "Orbitron, monospace" }}>
            <span className="text-gradient-accent">ROADMAP</span>{" "}
            <span className="text-[hsl(210,40%,96%)]">TO THE FUTURE</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[hsl(38,96%,54%)] to-[hsl(267,80%,65%)] mx-auto mb-6" />
          <p className="text-[hsl(215,20%,55%)] max-w-2xl mx-auto" style={{ fontFamily: "Exo 2, sans-serif" }}>
            Master these future-ready skills — your ultimate roadmap to ace the CK interview and lead in the Web3 era.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 -translate-x-px w-px bg-gradient-to-b from-[hsl(38,96%,54%)] via-[hsl(267,80%,65%)] to-[hsl(38,96%,54%)]/20 opacity-40 hidden md:block" />

            {phases.map((phase, index) => {
              const isRight = index % 2 !== 0;
              const isGold = phase.color === "gold";

              return (
                <div
                  key={phase.number}
                  className={`roadmap-item mb-14 ${index % 2 === 0 ? "scroll-slide-left" : "scroll-slide-right"}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className={`flex flex-col md:flex-row items-center ${isRight ? "md:flex-row-reverse" : "md:flex-row"}`}>

                    {/* Card */}
                    <div className="w-full md:w-5/12">
                      <div
                        className={`glass-morphism rounded-xl p-6 border transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                          isGold
                            ? "border-[hsl(38,96%,54%)]/25 hover:border-[hsl(38,96%,54%)]/55 hover:shadow-[0_16px_48px_hsl(38,96%,54%,0.18)]"
                            : "border-[hsl(267,80%,65%)]/25 hover:border-[hsl(267,80%,65%)]/55 hover:shadow-[0_16px_48px_hsl(267,80%,65%,0.18)]"
                        }`}
                        onClick={() => setSelectedPhase(phase)}
                      >
                        {/* Phase label + status */}
                        <div className="flex items-center justify-between mb-3">
                          <span
                            className={`text-xs font-semibold tracking-widest ${isGold ? "text-[hsl(38,96%,54%)]" : "text-[hsl(267,80%,65%)]"}`}
                            style={{ fontFamily: "Exo 2, sans-serif" }}
                          >
                            PHASE {phase.number}
                          </span>
                          <span
                            className={`text-[10px] px-3 py-1 rounded-full font-semibold ${statusStyles[phase.status]}`}
                            style={{ fontFamily: "Exo 2, sans-serif" }}
                          >
                            {phase.status}
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          className={`text-xl font-black mb-1 ${isGold ? "text-gradient-primary" : "text-gradient-accent"}`}
                          style={{ fontFamily: "Orbitron, monospace" }}
                        >
                          {phase.title}
                        </h3>
                        <p className="text-xs text-[hsl(215,20%,50%)] mb-4 font-medium" style={{ fontFamily: "Exo 2, sans-serif" }}>
                          {phase.subtitle}
                        </p>

                        {/* Description */}
                        <p className="text-sm text-[hsl(215,20%,58%)] mb-5 leading-relaxed" style={{ fontFamily: "Exo 2, sans-serif" }}>
                          {phase.description}
                        </p>

                        {/* Feature list */}
                        <div className="space-y-2 mb-5">
                          {phase.features.map((feat, fi) => (
                            <div key={fi} className="flex items-center gap-3 text-sm">
                              <div
                                className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isGold ? "bg-[hsl(38,96%,54%)]" : "bg-[hsl(267,80%,65%)]"}`}
                              />
                              <span className="text-[hsl(215,20%,62%)]" style={{ fontFamily: "Exo 2, sans-serif" }}>
                                {feat}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Expand button */}
                        <button
                          className={`w-full py-2.5 text-xs font-bold tracking-widest uppercase rounded transition-all duration-200 cursor-pointer ${
                            isGold
                              ? "bg-[hsl(38,96%,54%)] hover:bg-[hsl(38,96%,60%)] text-[hsl(222,47%,7%)] shadow-[0_0_20px_hsl(38,96%,54%,0.3)] hover:shadow-[0_0_30px_hsl(38,96%,54%,0.5)]"
                              : "bg-[hsl(267,80%,65%)] hover:bg-[hsl(267,80%,72%)] text-[hsl(222,47%,7%)] shadow-[0_0_20px_hsl(267,80%,65%,0.3)] hover:shadow-[0_0_30px_hsl(267,80%,65%,0.5)]"
                          }`}
                          style={{ fontFamily: "Orbitron, monospace" }}
                          onClick={(e) => { e.stopPropagation(); setSelectedPhase(phase); }}
                        >
                          Expand Details →
                        </button>
                      </div>
                    </div>

                    {/* Centre node */}
                    <div className="relative z-10 w-full md:w-2/12 flex justify-center py-4 md:py-0">
                      <div
                        className={`w-6 h-6 rounded-full border-2 border-[hsl(222,47%,7%)] flex items-center justify-center text-[9px] font-bold ${
                          isGold
                            ? "bg-[hsl(38,96%,54%)] text-[hsl(222,47%,7%)] shadow-[0_0_20px_hsl(38,96%,54%,0.7)] animate-glow-pulse"
                            : "bg-[hsl(267,80%,65%)] text-[hsl(222,47%,7%)] shadow-[0_0_18px_hsl(267,80%,65%,0.6)]"
                        }`}
                        style={{ fontFamily: "Orbitron, monospace" }}
                      >
                        {phase.number}
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block w-5/12" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <PhaseModal phase={selectedPhase} onClose={() => setSelectedPhase(null)} />
    </section>
  );
};

export default Roadmap;
