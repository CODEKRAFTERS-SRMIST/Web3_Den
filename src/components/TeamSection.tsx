const TeamSection = () => {
  const stats = [
    { value: "50+", label: "Web3 Projects Built", color: "gold" },
    { value: "100K+", label: "Community Members", color: "purple" },
    { value: "24/7", label: "Active Support", color: "gold" },
    { value: "∞", label: "Innovation Drive", color: "purple" },
  ];

  return (
    <section id="team" className="py-24 relative z-10">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 scroll-fade-in">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[hsl(215,20%,45%)] block mb-4" style={{ fontFamily: 'Exo 2, sans-serif' }}>
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>
            <span className="text-gradient-primary">VISIONARY</span>{" "}
            <span className="text-[hsl(210,40%,96%)]">BUILDERS</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[hsl(38,96%,54%)] to-[hsl(267,80%,65%)] mx-auto" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">

            {/* Left: text block */}
            <div className="scroll-slide-left">
              <div className="glass-morphism-gold rounded-lg p-8 md:p-10 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="pulse-dot" />
                  <span className="text-xs tracking-[0.25em] uppercase text-[hsl(38,96%,54%)] font-semibold" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                    CodeKrafters · SRMIST
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-[hsl(210,40%,96%)]" style={{ fontFamily: 'Orbitron, monospace' }}>
                  Building the<br />
                  <span className="text-gradient-accent">Decentralized Future</span>
                </h3>

                <p className="text-[hsl(215,20%,60%)] leading-relaxed mb-5" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                  We are <strong className="text-[hsl(38,96%,54%)]">CodeKrafters</strong> — a passionate club of blockchain developers, smart contract engineers, and digital innovators at SRMIST. Web3 Den is our flagship onboarding platform built specifically for new recruits to understand what we do, how we do it, and how they can be part of it.
                </p>

                <p className="text-[hsl(215,20%,55%)] leading-relaxed" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                  From deploying smart contracts to running workshops and competing in hackathons, we're united by one goal: making Web3 accessible, practical, and exciting.
                </p>

                <div className="mt-8 pt-6 border-t border-[hsl(38,96%,54%)]/20">
                  <h4 className="text-sm font-semibold text-[hsl(38,96%,54%)] mb-3 tracking-widest uppercase" style={{ fontFamily: 'Orbitron, monospace' }}>
                    Our Mission
                  </h4>
                  <p className="text-[hsl(215,20%,55%)] text-sm leading-relaxed" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                    Drive Web3 adoption by developing transparent, scalable dApps and fostering a community where every member ships real products.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: stats grid */}
            <div className="grid grid-cols-2 gap-4 scroll-slide-right">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`stat-badge text-center stagger-${i + 1}`}
                >
                  <div
                    className={`text-4xl font-black mb-2 ${stat.color === "gold" ? "text-gradient-primary" : "text-gradient-accent"}`}
                    style={{ fontFamily: 'Orbitron, monospace' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-[hsl(215,20%,50%)] uppercase tracking-wider" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                    {stat.label}
                  </div>
                </div>
              ))}

              {/* Mission card full-width */}
              <div className="col-span-2 glass-morphism-purple rounded-lg p-5 text-center">
                <div className="text-xs tracking-[0.2em] uppercase text-[hsl(267,80%,65%)] mb-2 font-semibold" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                  Currently Recruiting
                </div>
                <div className="text-2xl font-black text-gradient-cyber" style={{ fontFamily: 'Orbitron, monospace' }}>
                  2025–26 Batch
                </div>
                <p className="text-xs text-[hsl(215,20%,50%)] mt-1" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                  Join us and build your first dApp this semester
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;