import { X } from "lucide-react";

interface CTAModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const links = [
  {
    label: "Join WhatsApp Community",
    sub: "Quick updates & group discussions",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-400">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    url: "https://chat.whatsapp.com/Jqx3lGV1cLJH27YVC8WNUM?mode=ems_copy_t",
    accent: "green",
  },
  {
    label: "View Web3 Roadmap",
    sub: "Full blockchain learning path on roadmap.sh",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-[hsl(267,80%,65%)]">
        <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
      </svg>
    ),
    url: "https://roadmap.sh/blockchain",
    accent: "purple",
  },
];

const CTAModal = ({ isOpen, onClose }: CTAModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-md w-full glass-morphism-gold rounded-xl border border-[hsl(38,96%,54%)]/30 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent bar */}
        <div className="h-0.5 w-full bg-gradient-to-r from-[hsl(38,96%,54%)] via-[hsl(267,80%,65%)] to-[hsl(38,96%,54%)]" />

        <div className="p-8">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[hsl(222,47%,7%)]/80 border border-[hsl(220,25%,22%)] flex items-center justify-center text-[hsl(215,20%,50%)] hover:text-white hover:border-[hsl(38,96%,54%)]/50 transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-[hsl(38,96%,54%)]/30 bg-[hsl(38,96%,54%)]/10">
              <div className="pulse-dot" />
              <span className="text-xs text-[hsl(38,96%,54%)] tracking-widest uppercase font-semibold" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                CodeKrafters is Recruiting
              </span>
            </div>
            <h2 className="text-2xl font-black text-gradient-primary mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>
              JOIN THE DEN
            </h2>
            <p className="text-sm text-[hsl(215,20%,55%)]" style={{ fontFamily: 'Exo 2, sans-serif' }}>
              Choose how you'd like to connect with us
            </p>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            {links.map((link, i) => (
              <button
                key={i}
                onClick={() => window.open(link.url, "_blank")}
                className={`w-full flex items-center gap-4 p-4 rounded-lg border transition-all duration-200 cursor-pointer group text-left ${
                  link.accent === "green"
                    ? "border-green-500/25 hover:border-green-500/50 hover:bg-green-500/5"
                    : "border-[hsl(267,80%,65%)]/25 hover:border-[hsl(267,80%,65%)]/50 hover:bg-[hsl(267,80%,65%)]/5"
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-[hsl(222,47%,7%)]/60 border border-[hsl(220,25%,20%)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  {link.icon}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-[hsl(210,40%,90%)] group-hover:text-white transition-colors" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                    {link.label}
                  </div>
                  <div className="text-xs text-[hsl(215,20%,45%)]" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                    {link.sub}
                  </div>
                </div>
                <svg className="w-4 h-4 text-[hsl(215,20%,40%)] group-hover:text-[hsl(38,96%,54%)] transition-colors flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </button>
            ))}
          </div>

          <p className="text-center text-xs text-[hsl(215,20%,35%)] mt-6" style={{ fontFamily: 'Exo 2, sans-serif' }}>
            Already a member? Check your Discord for updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTAModal;
