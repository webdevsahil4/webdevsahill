import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const container = containerRef.current;
    const cursor = cursorRef.current;
    const ring = cursorRingRef.current;
    if (!container || !cursor || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let animFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      animFrame = requestAnimationFrame(animateRing);
    };

    container.addEventListener("mousemove", handleMouseMove);
    animFrame = requestAnimationFrame(animateRing);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden cursor-none"
    >
      {/* Custom cursor dot */}
      <div
        ref={cursorRef}
        className="pointer-events-none absolute z-50 w-2 h-2 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
        style={{ willChange: "left, top" }}
      />
      {/* Custom cursor ring (lagging) */}
      <div
        ref={cursorRingRef}
        className="pointer-events-none absolute z-50 w-10 h-10 rounded-full border border-primary/60 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-[9px] text-primary/70 font-medium tracking-widest uppercase"
        style={{ willChange: "left, top" }}
      >
        {cursorText}
      </div>

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Abstract Dark Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/60 to-background" />
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-accent/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-primary/20"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-primary-foreground/90">
            Available for new projects
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-6 max-w-5xl"
          onMouseEnter={() => setCursorText("SCROLL")}
          onMouseLeave={() => setCursorText("")}
        >
          I Build <span className="text-gradient">High-Converting</span>{" "}
          Websites
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
        >
          Expert CMS Developer specializing in WordPress, Webflow & custom
          solutions that drive results and elevate your brand.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contact"
            onMouseEnter={() => setCursorText("HIRE")}
            onMouseLeave={() => setCursorText("")}
            className="cursor-none px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:-translate-y-1 flex items-center justify-center gap-2 group"
          >
            Hire Me
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform"
              size={18}
            />
          </a>
          <a
            href="#portfolio"
            onMouseEnter={() => setCursorText("VIEW")}
            onMouseLeave={() => setCursorText("")}
            className="cursor-none px-8 py-4 rounded-xl glass hover:bg-white/10 font-semibold transition-all hover:-translate-y-1 flex items-center justify-center"
          >
            View Work
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 md:mt-32 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-24 border-t border-white/10 pt-10"
        >
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold font-display text-foreground">
              50+
            </span>
            <span className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">
              Projects
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold font-display text-foreground">
              3.5+
            </span>
            <span className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">
              Years Exp.
            </span>
          </div>
          <div className="flex flex-col items-center col-span-2 md:col-span-1">
            <span className="text-4xl md:text-5xl font-bold font-display text-foreground">
              100%
            </span>
            <span className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">
              Satisfaction
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
