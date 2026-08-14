import { useState } from "react";
import { X } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

interface PhaseSection {
  icon: string;
  title: string;
  content: string;
}

interface PhaseResource {
  label: string;
  url: string;
  tag: string;
}

interface Phase {
  number: string;
  title: string;
  subtitle: string;
  color: "gold" | "purple";
  status: "IN PROGRESS" | "UPCOMING" | "COMPLETED";
  description: string;
  features: string[];
  sections: PhaseSection[];
  resources: PhaseResource[];
  cta: { label: string; url: string };
}

const phases: Phase[] = [
  {
    number: "01",
    title: "FOUNDATION",
    subtitle: "Core Blockchain & Solidity Basics",
    color: "gold",
    status: "IN PROGRESS",
    description: "Build your core understanding of blockchain, smart contracts, and cryptographic identity. Deploy your first contract on a testnet.",
    features: [
      "Blockchain Architecture & Consensus",
      "Cryptographic Wallets & Private Keys",
      "Solidity Fundamentals",
      "First Smart Contract Deployment",
      "Chainlink Fundamentals",
    ],
    sections: [
      { icon: "⛓️", title: "Foundations of Blockchain", content: "Learn the basics of blockchains, decentralization, and distributed ledgers — the backbone of everything Web3." },
      { icon: "📜", title: "Smart Contracts & DApps", content: "Explore how smart contracts bring automation and transparency to Web3, removing the need for intermediaries." },
      { icon: "🔑", title: "Cryptographic Wallets & Identity", content: "Understand digital wallets, private/public keys, and how you control your on-chain identity." },
      { icon: "⚙️", title: "Core Development Skills", content: "Start coding with Solidity and Web3 libraries. Build, test, and deploy real ERC-20 contracts on testnets." },
    ],
    resources: [
      { label: "Blockchain Basics", url: "https://updraft.cyfrin.io/courses/blockchain-basics", tag: "Cyfrin Updraft" },
      { label: "Introduction to Solidity & ERC-20s", url: "https://www.youtube.com/watch?v=qiWGX7SFVd8", tag: "YouTube" },
      { label: "Solidity Basics", url: "https://updraft.cyfrin.io/courses/solidity", tag: "Cyfrin Updraft" },
      { label: "Chainlink Fundamentals", url: "https://updraft.cyfrin.io/courses/chainlink-fundamentals", tag: "Cyfrin Updraft" },
    ],
    cta: { label: "Full Blockchain Roadmap →", url: "https://roadmap.sh/blockchain" },
  },
  {
    number: "02",
    title: "BUILDER",
    subtitle: "DeFi, NFTs & Dev Tooling",
    color: "purple",
    status: "UPCOMING",
    description: "Start building real Web3 products. Understand DeFi protocols, NFT standards, and professional smart contract development workflows.",
    features: [
      "DeFi Protocols (Uniswap, Aave)",
      "ERC-721 & ERC-1155 NFT Standards",
      "Hardhat & Foundry Dev Environments",
      "Unit Testing Smart Contracts",
      "IPFS & Decentralized Storage",
    ],
    sections: [
      { icon: "🏦", title: "DeFi Protocol Deep Dive", content: "Study Uniswap AMMs, Aave lending, and Compound — understand how billions in liquidity flow through smart contracts." },
      { icon: "🖼️", title: "NFTs & Token Standards", content: "Master ERC-721, ERC-1155, and metadata standards. Build your first NFT collection with on-chain traits." },
      { icon: "🔧", title: "Hardhat & Foundry", content: "Set up professional dev environments, write deployment scripts, and automate testing pipelines." },
      { icon: "🗄️", title: "IPFS & Storage", content: "Store and retrieve data in a decentralized way using IPFS, Filecoin, and Arweave for your dApp frontends." },
    ],
    resources: [
      { label: "Foundry Fundamentals", url: "https://updraft.cyfrin.io/courses/foundry", tag: "Cyfrin Updraft" },
      { label: "Advanced Foundry", url: "https://updraft.cyfrin.io/courses/advanced-foundry", tag: "Cyfrin Updraft" },
      { label: "Build an NFT Collection", url: "https://www.youtube.com/watch?v=meTpMP0J5E8", tag: "YouTube" },
      { label: "DeFi Developer Roadmap", url: "https://github.com/OffcierCia/DeFi-Developer-Road-Map", tag: "GitHub" },
    ],
    cta: { label: "Foundry Course →", url: "https://updraft.cyfrin.io/courses/foundry" },
  },
  {
    number: "03",
    title: "ADVANCED",
    subtitle: "Security, L2s & Cross-Chain",
    color: "gold",
    status: "UPCOMING",
    description: "Level up to production-grade Web3. Learn smart contract security, Layer-2 scaling solutions, cross-chain bridges, and on-chain data indexing.",
    features: [
      "Smart Contract Security & Auditing",
      "Reentrancy, Flash Loans & Exploits",
      "Arbitrum, Optimism, Base L2s",
      "Cross-Chain Bridges & CCIP",
      "The Graph Protocol & Indexing",
    ],
    sections: [
      { icon: "🛡️", title: "Smart Contract Security", content: "Study reentrancy attacks, integer overflows, access control flaws, and flash loan exploits. Learn to audit and patch vulnerabilities." },
      { icon: "⚡", title: "Layer-2 Scaling", content: "Deploy on Arbitrum, Optimism, and Base. Understand optimistic rollups, ZK rollups, and how L2s inherit L1 security." },
      { icon: "🌉", title: "Cross-Chain & CCIP", content: "Build cross-chain dApps using Chainlink CCIP. Bridge tokens and messages across networks safely." },
      { icon: "📊", title: "The Graph Protocol", content: "Index on-chain data using GraphQL subgraphs and The Graph. Query smart contract events in your dApp frontend." },
    ],
    resources: [
      { label: "Smart Contract Security", url: "https://updraft.cyfrin.io/courses/security", tag: "Cyfrin Updraft" },
      { label: "Arbitrum Developer Docs", url: "https://docs.arbitrum.io/", tag: "Docs" },
      { label: "The Graph Docs", url: "https://thegraph.com/docs/", tag: "Docs" },
      { label: "Chainlink CCIP", url: "https://chain.link/cross-chain", tag: "Chainlink" },
    ],
    cta: { label: "Security Course →", url: "https://updraft.cyfrin.io/courses/security" },
  },
  {
    number: "04",
    title: "MASTERY",
    subtitle: "DAOs, Governance & On-Chain Career",
    color: "purple",
    status: "UPCOMING",
    description: "Reach the pinnacle. Build governance systems, DAOs, launch production dApps, and position yourself as a Web3 expert ready for the industry.",
    features: [
      "DAO Architecture & Governance",
      "On-Chain Voting & Timelock",
      "ZK Proofs & zkEVM Concepts",
      "DApp Product Launch on Mainnet",
      "Web3 Career Pathways & Portfolio",
    ],
    sections: [
      { icon: "🏛️", title: "DAOs & On-Chain Governance", content: "Build decentralized autonomous organizations with on-chain voting, proposal systems, and treasury management using Governor contracts." },
      { icon: "🔒", title: "Zero-Knowledge Proofs", content: "Understand ZK fundamentals, zkSNARKs, zkSTARKs, and how zkEVMs achieve scalability with full privacy." },
      { icon: "🚀", title: "Mainnet Product Launch", content: "Ship a real, production-grade dApp to Ethereum mainnet or a major L2. Practice deployment, upgrades, and monitoring." },
      { icon: "🎯", title: "Web3 Career Pathways", content: "Build your on-chain portfolio, contribute to open-source protocols, and understand career paths from auditor to protocol engineer." },
    ],
    resources: [
      { label: "DAO & Governance Patterns", url: "https://docs.openzeppelin.com/contracts/5.x/governance", tag: "OpenZeppelin" },
      { label: "ZK Proof Explained", url: "https://www.youtube.com/watch?v=fOGdb1CTu5c", tag: "YouTube" },
      { label: "Code4rena Bug Bounty Arena", url: "https://code4rena.com/", tag: "Code4rena" },
      { label: "Web3 Developer Job Board", url: "https://web3.career/", tag: "Web3 Career" },
    ],
    cta: { label: "OpenZeppelin Governance →", url: "https://docs.openzeppelin.com/contracts/5.x/governance" },
  },
];

// ─── Phase Detail Modal ────────────────────────────────────────────────────────

const PhaseModal = ({ phase, onClose }: { phase: Phase | null; onClose: () => void }) => {
  if (!phase) return null;
  const isGold = phase.color === "gold";

  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className={`relative max-w-3xl w-full max-h-[88vh] overflow-y-auto rounded-xl border ${isGold ? "glass-morphism-gold border-[hsl(38,96%,54%)]/30" : "glass-morphism-purple border-[hsl(267,80%,65%)]/30"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top gradient bar */}
        <div className={`h-0.5 w-full ${isGold ? "bg-gradient-to-r from-[hsl(38,96%,54%)] to-[hsl(267,80%,65%)]" : "bg-gradient-to-r from-[hsl(267,80%,65%)] to-[hsl(38,96%,54%)]"}`} />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-8 h-8 rounded-full bg-[hsl(222,47%,7%)]/80 border border-[hsl(220,25%,22%)] flex items-center justify-center text-[hsl(215,20%,50%)] hover:text-white transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-10">
            <span className={`text-xs font-semibold tracking-[0.3em] uppercase block mb-3 ${isGold ? "text-[hsl(267,80%,65%)]" : "text-[hsl(38,96%,54%)]"}`} style={{ fontFamily: "Exo 2, sans-serif" }}>
              Phase {phase.number}
            </span>
            <h2 className={`text-3xl md:text-4xl font-black mb-2 ${isGold ? "text-gradient-primary" : "text-gradient-accent"}`} style={{ fontFamily: "Orbitron, monospace" }}>
              {phase.title}
            </h2>
            <p className="text-sm text-[hsl(215,20%,55%)] mb-4" style={{ fontFamily: "Exo 2, sans-serif" }}>{phase.subtitle}</p>
            <div className={`w-16 h-0.5 mx-auto ${isGold ? "bg-gradient-to-r from-[hsl(38,96%,54%)] to-[hsl(267,80%,65%)]" : "bg-gradient-to-r from-[hsl(267,80%,65%)] to-[hsl(38,96%,54%)]"}`} />
          </div>

          {/* Description */}
          <p className="text-sm text-[hsl(215,20%,60%)] leading-relaxed mb-8 text-center max-w-xl mx-auto" style={{ fontFamily: "Exo 2, sans-serif" }}>
            {phase.description}
          </p>

          {/* Topics grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {phase.sections.map((section, i) => (
              <div key={i} className={`glass-morphism rounded-lg p-5 border border-[hsl(220,25%,20%)] hover:border-${isGold ? "[hsl(38,96%,54%)]" : "[hsl(267,80%,65%)]"}/40 transition-all duration-300 hover:scale-[1.02]`}>
                <div className="text-2xl mb-3">{section.icon}</div>
                <h3 className={`text-sm font-bold mb-2 ${isGold ? "text-gradient-primary" : "text-gradient-accent"}`} style={{ fontFamily: "Orbitron, monospace" }}>
                  {section.title}
                </h3>
                <p className="text-xs text-[hsl(215,20%,55%)] leading-relaxed" style={{ fontFamily: "Exo 2, sans-serif" }}>
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Resources */}
          <div className="bg-[hsl(222,47%,7%)]/60 border border-[hsl(220,25%,18%)] rounded-lg p-6 mb-7">
            <h3 className={`text-sm font-bold mb-4 tracking-widest uppercase ${isGold ? "text-[hsl(38,96%,54%)]" : "text-[hsl(267,80%,65%)]"}`} style={{ fontFamily: "Orbitron, monospace" }}>
              Key Learning Resources
            </h3>
            <div className="space-y-3">
              {phase.resources.map((r, i) => (
                <button
                  key={i}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg border border-[hsl(220,25%,20%)] hover:border-[hsl(38,96%,54%)]/40 hover:bg-[hsl(38,96%,54%)]/5 text-left transition-all duration-200 cursor-pointer group"
                  onClick={() => window.open(r.url, "_blank")}
                >
                  <div className="pulse-dot group-hover:scale-125 transition-transform" style={{ width: "6px", height: "6px" }} />
                  <span className="flex-1 text-sm text-[hsl(215,20%,65%)] group-hover:text-[hsl(210,40%,90%)] transition-colors" style={{ fontFamily: "Exo 2, sans-serif" }}>
                    {r.label}
                  </span>
                  <span className="text-[10px] text-[hsl(215,20%,40%)] border border-[hsl(220,25%,20%)] px-2 py-0.5 rounded shrink-0" style={{ fontFamily: "Exo 2, sans-serif" }}>
                    {r.tag}
                  </span>
                  <svg className="w-3 h-3 text-[hsl(215,20%,40%)] group-hover:text-[hsl(38,96%,54%)] transition-colors shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              className={`px-10 py-3 font-bold tracking-widest uppercase text-xs rounded cursor-pointer transition-all duration-200 ${
                isGold
                  ? "bg-[hsl(38,96%,54%)] hover:bg-[hsl(38,96%,60%)] text-[hsl(222,47%,7%)] shadow-[0_0_24px_hsl(38,96%,54%,0.4)] hover:shadow-[0_0_36px_hsl(38,96%,54%,0.6)]"
                  : "bg-[hsl(267,80%,65%)] hover:bg-[hsl(267,80%,72%)] text-[hsl(222,47%,7%)] shadow-[0_0_24px_hsl(267,80%,65%,0.4)] hover:shadow-[0_0_36px_hsl(267,80%,65%,0.6)]"
              }`}
              onClick={() => window.open(phase.cta.url, "_blank")}
              style={{ fontFamily: "Orbitron, monospace" }}
            >
              {phase.cta.label}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PhaseModal, phases };
export type { Phase };
