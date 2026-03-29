import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const MARQUEE_ITEMS = [
  "CMS Developer",
  "WordPress Expert",
  "Webflow Specialist",
  "eCommerce Solutions",
  "Custom Themes",
  "UI/UX Focused",
];

export function Hero() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Infinite marquee via CSS animation — no JS loop needed
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[600px] flex flex-col overflow-hidden bg-black"
    >
      {/* ── Full-bleed portrait image ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/sahil.png`}
          alt="Sahil Dodiya"
          className="w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.75)" }}
        />
        {/* subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
      </div>

      {/* ── Top-left descriptor ── */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 mt-20 ml-6 md:ml-10 max-w-[220px]"
      >
        <p className="text-[13px] leading-relaxed text-white/70 tracking-wide">
          We specialize in elevating your online presence and helping your
          business grow to the next level.
        </p>
      </motion.div>

      {/* ── Bottom section: giant name + tagline bar ── */}
      <div className="relative z-10 mt-auto">
        {/* Giant oversized name */}
        <div className="px-4 md:px-6 pb-0 overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="leading-none text-white select-none"
            style={{
              fontFamily: "'Big Shoulders Display', 'Syne', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(4rem, 15vw, 18rem)",
              letterSpacing: "-0.02em",
              mixBlendMode: "normal",
            }}
          >
            SAHIL DODIYA
          </motion.h1>
        </div>

        {/* ── Tagline marquee strip ── */}
        <div className="bg-black/80 backdrop-blur-sm border-t border-white/10 mt-2 py-3.5 overflow-hidden">
          <div ref={marqueeRef} className="flex whitespace-nowrap" style={{ animation: "marquee 22s linear infinite" }}>
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} className="flex items-center">
                <span className="text-[11px] md:text-[12px] font-bold tracking-[0.22em] uppercase text-white/80 px-6">
                  {item}
                </span>
                <span className="text-primary text-xs">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Top-right badge (like AKJO "Latest Works" badge) ── */}
      <motion.a
        href="#portfolio"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute top-20 right-6 md:right-10 z-10 w-20 h-20 cursor-pointer group"
      >
        {/* Spinning ring */}
        <span
          className="absolute inset-0 rounded-full bg-primary"
          style={{ animation: "spin-slow 10s linear infinite" }}
        />
        {/* Centered label — doesn't spin */}
        <span className="relative z-10 w-full h-full rounded-full flex flex-col items-center justify-center text-center group-hover:scale-105 transition-transform duration-300">
          <span className="text-[9px] font-bold text-white tracking-[0.15em] uppercase leading-tight px-2 text-center">
            Latest<br />Works
          </span>
        </span>
      </motion.a>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
