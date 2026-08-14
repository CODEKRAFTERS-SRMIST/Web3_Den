import { useEffect, useRef } from "react";

interface TimelineEvent {
  date: string;
  tag: string;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "Sep 2024",
    tag: "Summit",
    title: "Builder's Qonneqt",
    description: "Connecting Web3 builders, smart contract developers, and founders across the decentralized ecosystem.",
  },
  {
    date: "Oct 9, 2024",
    tag: "Tour",
    title: "SuperMove Tour",
    description: "Move language and Move ecosystem developer workshop & hackathon tour.",
  },
  {
    date: "Mar 26, 2025",
    tag: "Charity",
    title: "CoinEx Charity",
    description: "Blockchain for social good — community outreach, web3 literacy, and educational charity initiatives.",
  },
  {
    date: "Aug 23, 2025",
    tag: "Incubation",
    title: "Launchpad: Igniting Evolution",
    description: "Project incubation and launchpad drive empowering students to turn ideas into production-ready dApps.",
  },
  {
    date: "May 2026",
    tag: "Arena",
    title: "Colosseum Frontier",
    description: "Competitive Web3 arena featuring live smart contract auditing and speed coding challenges.",
  },
  {
    date: "Jun 11, 2026",
    tag: "Workshop",
    title: "CoinEx Wallet",
    description: "Web3 wallet integration, security protocols, and decentralized identity masterclass.",
  },
];

const tagStyles: Record<string, string> = {
  Summit: "text-purple-300 border-purple-400/40 bg-purple-400/10",
  Tour: "text-[hsl(180,80%,55%)] border-[hsl(180,80%,55%)]/40 bg-[hsl(180,80%,55%)]/10",
  Charity: "text-emerald-300 border-emerald-400/40 bg-emerald-400/10",
  Incubation: "text-[hsl(38,96%,54%)] border-[hsl(38,96%,54%)]/40 bg-[hsl(38,96%,54%)]/10",
  Arena: "text-amber-300 border-amber-400/40 bg-amber-400/10",
  Workshop: "text-blue-300 border-blue-400/40 bg-blue-400/10",
};

const Web3Events = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    const els = sectionRef.current?.querySelectorAll(".timeline-entry");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="journey" className="py-24 relative z-10" ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 scroll-fade-in">
          <span
            className="text-xs font-semibold tracking-[0.3em] uppercase text-[hsl(215,20%,45%)] block mb-4"
            style={{ fontFamily: "Exo 2, sans-serif" }}
          >
            Completed Milestones
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "Orbitron, monospace" }}>
            <span className="text-[hsl(210,40%,96%)]">WEB3</span>{" "}
            <span className="text-gradient-primary">EVENTS</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[hsl(38,96%,54%)] to-[hsl(267,80%,65%)] mx-auto mb-6" />
          <p className="text-[hsl(215,20%,55%)] max-w-xl mx-auto" style={{ fontFamily: "Exo 2, sans-serif" }}>
            Our track record of successfully hosted summits, tours, charity drives, and developer workshops.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 md:-translate-x-px timeline-line" />

          <div className="space-y-10">
            {timelineEvents.map((event, index) => {
              const isRight = index % 2 !== 0;
              return (
                <div
                  key={index}
                  className={`timeline-entry relative flex md:items-center gap-6 ${
                    isRight ? "md:flex-row-reverse" : "md:flex-row"
                  } flex-row scroll-slide-left`}
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  {/* Node */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 z-10">
                    <div className="w-5 h-5 rounded-full border-2 border-[hsl(222,47%,7%)] flex-shrink-0 bg-[hsl(38,96%,54%)] shadow-[0_0_14px_hsl(38,96%,54%,0.6)]" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-5/12" />

                  {/* Card */}
                  <div className={`ml-16 md:ml-0 w-full md:w-5/12 ${isRight ? "md:pr-8" : "md:pl-8"}`}>
                    <div className="glass-morphism rounded-lg p-5 border border-[hsl(38,96%,54%)]/25 cursor-default transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_32px_hsl(38,96%,54%,0.15)] hover:border-[hsl(38,96%,54%)]/50">
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${
                            tagStyles[event.tag] || ""
                          }`}
                          style={{ fontFamily: "Exo 2, sans-serif" }}
                        >
                          {event.tag}
                        </span>
                        <span
                          className="text-[10px] text-[hsl(38,96%,54%)] font-mono font-semibold"
                          style={{ fontFamily: "Exo 2, sans-serif" }}
                        >
                          ✓ {event.date}
                        </span>
                      </div>
                      <h3
                        className="text-base font-bold mb-2 text-gradient-primary"
                        style={{ fontFamily: "Orbitron, monospace" }}
                      >
                        {event.title}
                      </h3>
                      <p
                        className="text-xs text-[hsl(215,20%,60%)] leading-relaxed"
                        style={{ fontFamily: "Exo 2, sans-serif" }}
                      >
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Web3Events;
