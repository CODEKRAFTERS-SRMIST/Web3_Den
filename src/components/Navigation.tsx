import { useState, useEffect } from "react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  const navItems = [
    { id: "team", label: "Our Team" },
    { id: "events", label: "Events" },
    { id: "roadmap", label: "Roadmap" },
    { id: "journey", label: "Web3 Events" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[hsl(222,47%,7%)]/90 backdrop-blur-xl border-b border-[hsl(38,96%,54%)]/15 shadow-[0_4px_30px_hsl(222,47%,4%,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo*/}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <img
              src="/favicon.ico"
              alt="CodeKrafters Logo"
              className="w-9 h-9 object-contain rounded-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="leading-none">
              <div className="text-sm font-bold text-[hsl(38,96%,54%)] tracking-widest" style={{ fontFamily: 'Orbitron, monospace' }}>
                CODEKRAFTERS
              </div>
              <div className="text-[10px] text-[hsl(215,20%,50%)] tracking-[0.2em] uppercase" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                Web3 Den
              </div>
            </div>
          </button>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link cursor-pointer ${activeSection === item.id ? "text-[hsl(38,96%,54%)]" : ""}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => window.open("https://codekraftersrmp.in/login", "_blank")}
            className="px-5 py-2 text-xs font-semibold tracking-widest uppercase border border-[hsl(38,96%,54%)/0.5] text-[hsl(38,96%,54%)] rounded hover:bg-[hsl(38,96%,54%)] hover:text-[hsl(222,47%,7%)] transition-all duration-200 cursor-pointer"
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            Join Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
