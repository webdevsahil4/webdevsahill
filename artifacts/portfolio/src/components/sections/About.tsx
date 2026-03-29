import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Code2, Zap, Shield, Layers } from "lucide-react";

/* ── Mini Website Mockup rendered in JSX ──────────────────── */
function MockupScreen() {
  return (
    <div className="w-full h-full bg-[#0d0d0f] rounded-[10px] overflow-hidden font-sans select-none">
      {/* Browser chrome */}
      <div className="bg-[#1a1a1f] border-b border-white/[0.06] px-3 py-2 flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <div className="flex-1 bg-white/[0.06] rounded-md h-4 mx-2 flex items-center px-2 gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400/70" />
          <span className="text-[7px] text-white/30 tracking-wide">sahildodiya.dev</span>
        </div>
      </div>

      {/* Page content */}
      <div className="overflow-hidden">
        {/* Hero strip */}
        <div className="bg-gradient-to-br from-[#111] to-[#1a1040] px-5 pt-5 pb-4">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="h-1.5 w-10 bg-primary/60 rounded mb-2" />
              <div className="h-3 w-28 bg-white/80 rounded mb-1.5" />
              <div className="h-2 w-20 bg-white/30 rounded" />
            </div>
            <div className="flex gap-1.5 mt-1">
              {["Home","Work","Contact"].map(n => (
                <div key={n} className="h-2 rounded px-1.5 bg-white/10 flex items-center">
                  <div className="h-1 w-4 bg-white/30 rounded" />
                </div>
              ))}
              <div className="h-4 w-10 rounded-md bg-primary/80 flex items-center justify-center">
                <div className="h-1 w-5 bg-white/90 rounded" />
              </div>
            </div>
          </div>
          <div className="h-[1px] bg-white/[0.06] mb-4" />
          {/* Big headline */}
          <div className="mb-1.5">
            <div className="h-5 w-48 bg-white/90 rounded mb-1.5" />
            <div className="h-5 w-36 bg-gradient-to-r from-primary/80 to-accent/80 rounded" />
          </div>
          <div className="h-1.5 w-52 bg-white/20 rounded mb-1 mt-3" />
          <div className="h-1.5 w-44 bg-white/15 rounded mb-4" />
          <div className="flex gap-2">
            <div className="h-6 w-16 rounded-lg bg-primary/90 flex items-center justify-center">
              <div className="h-1.5 w-8 bg-white/90 rounded" />
            </div>
            <div className="h-6 w-16 rounded-lg border border-white/20 flex items-center justify-center">
              <div className="h-1.5 w-8 bg-white/40 rounded" />
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="bg-[#111] border-t border-b border-white/[0.05] px-5 py-3 flex justify-between">
          {["50+\nProjects","3.5+\nYears","100%\nSatisfied"].map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <div className="h-3 w-8 bg-white/70 rounded" />
              <div className="h-1.5 w-10 bg-white/20 rounded" />
            </div>
          ))}
        </div>

        {/* Cards row */}
        <div className="px-5 py-4 grid grid-cols-3 gap-2">
          {[
            { c: "from-blue-500/20 to-blue-600/5", b: "border-blue-500/20" },
            { c: "from-violet-500/20 to-violet-600/5", b: "border-violet-500/20" },
            { c: "from-emerald-500/20 to-emerald-600/5", b: "border-emerald-500/20" },
          ].map((s, i) => (
            <div key={i} className={`rounded-xl border ${s.b} bg-gradient-to-br ${s.c} p-2.5`}>
              <div className="w-4 h-4 rounded bg-white/10 mb-2" />
              <div className="h-1.5 w-10 bg-white/50 rounded mb-1" />
              <div className="h-1 w-8 bg-white/20 rounded" />
            </div>
          ))}
        </div>

        {/* Bottom portfolio strip */}
        <div className="px-5 pb-4 grid grid-cols-2 gap-2">
          <div className="h-14 rounded-xl bg-gradient-to-br from-primary/30 to-accent/10 border border-white/10" />
          <div className="h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 border border-white/10" />
        </div>
      </div>
    </div>
  );
}

/* ── 3-D Tilt Mockup wrapper ────────────────────────────────── */
function TiltMockup() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const floatingY = useRef(0);
  const hovering = useRef(false);

  // Floating bob — runs always, writes directly to DOM when not hovered
  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const y = Math.sin((ts - start) / 1800) * 10;
      floatingY.current = y;
      if (!hovering.current && cardRef.current) {
        cardRef.current.style.transform = `perspective(1100px) rotateX(0deg) rotateY(0deg) scale(1) translateY(${y}px)`;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    hovering.current = true;
    const el = wrapRef.current;
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!el || !card || !glow) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    const rotY = ((x - cx) / cx) * 12;
    const rotX = -((y - cy) / cy) * 8;

    card.style.transform = `perspective(1100px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03) translateY(${floatingY.current}px)`;

    const gx = (x / rect.width) * 100;
    const gy = (y / rect.height) * 100;
    glow.style.background = `radial-gradient(circle at ${gx}% ${gy}%, rgba(96,165,250,0.18) 0%, rgba(139,92,246,0.10) 40%, transparent 70%)`;
  };

  const handleMouseLeave = () => {
    hovering.current = false;
    const glow = glowRef.current;
    if (glow) glow.style.background = "transparent";
  };

  return (
    <div
      ref={wrapRef}
      className="relative w-full max-w-[520px] mx-auto"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient glow behind */}
      <div className="absolute -inset-8 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl rounded-[3rem] -z-10 opacity-70" />

      {/* Mouse-follow glow overlay */}
      <div
        ref={glowRef}
        className="absolute inset-0 rounded-2xl pointer-events-none z-20 transition-all duration-75"
      />

      {/* Laptop/screen card */}
      <div
        ref={cardRef}
        className="relative transition-transform duration-100 ease-out will-change-transform"
        style={{ transform: `perspective(1100px) rotateX(0deg) rotateY(0deg) scale(1) translateY(0px)` }}
      >
        {/* Screen frame */}
        <div className="rounded-2xl bg-gradient-to-b from-[#2a2a2e] to-[#1a1a1f] p-[10px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.06)] relative">
          {/* Reflection sheen */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none z-10" />

          {/* Screen inner */}
          <div className="rounded-[14px] overflow-hidden shadow-inner border border-white/[0.04]" style={{ aspectRatio: "16/10" }}>
            <MockupScreen />
          </div>

          {/* Camera dot */}
          <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#333] border border-white/10" />
        </div>

        {/* Laptop base */}
        <div className="relative mx-auto h-3 w-[95%]">
          <div className="h-full bg-gradient-to-b from-[#222] to-[#1a1a1a] rounded-b-lg shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[3px] bg-[#111] rounded-t-full" />
        </div>
        {/* Ground shadow */}
        <div className="mx-auto w-[80%] h-3 bg-black/40 blur-md rounded-full mt-0.5" />
      </div>
    </div>
  );
}

/* ── Main About section ─────────────────────────────────────── */
const CARDS = [
  { icon: <Shield size={20} className="text-primary" />, title: "Clean Code",        desc: "Semantic, maintainable & W3C-validated markup" },
  { icon: <Code2  size={20} className="text-accent"  />, title: "Custom Coding",     desc: "HTML, CSS, JavaScript & PHP when themes fall short" },
  { icon: <Zap    size={20} className="text-yellow-400" />, title: "Performance",    desc: "90+ Core Web Vitals & sub-2s load times" },
  { icon: <Layers size={20} className="text-green-400"  />, title: "Scalable Build", desc: "Architecture that grows with your business" },
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section id="about">
      <div ref={ref} className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

        {/* ── LEFT — Text ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-5 h-[1.5px] bg-primary" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">About Me</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Building Digital{" "}
            <span className="text-gradient">Masterpieces</span>
            <span className="text-foreground">.</span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground mb-4 leading-relaxed">
            I'm <span className="text-foreground font-semibold">Sahil Dodiya</span>, a full-stack CMS developer with{" "}
            <span className="text-foreground font-semibold">3.5+ years</span> of experience building high-performance
            websites that turn visitors into customers.
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed">
            I specialise in <span className="text-foreground/80">WordPress</span>,{" "}
            <span className="text-foreground/80">Webflow</span>,{" "}
            <span className="text-foreground/80">Wix</span>, and{" "}
            <span className="text-foreground/80">Squarespace</span> — bridging the gap between stunning design and flawless technical execution.
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            {CARDS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                className="glass-card p-4 rounded-xl flex items-start gap-3 hover:border-white/20 transition-colors duration-300"
              >
                <div className="bg-white/[0.06] p-2 rounded-lg flex-shrink-0">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-sm text-foreground mb-0.5">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT — Interactive Mockup ───────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center"
        >
          <TiltMockup />
        </motion.div>
      </div>
    </Section>
  );
}
