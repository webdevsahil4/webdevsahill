import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const NAV_LINKS = [
  { name: "About",     href: "#about" },
  { name: "Skills",    href: "#skills" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Services",  href: "#services" },
  { name: "Contact",   href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/90 backdrop-blur-md border-b border-white/[0.06]" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-10 h-14">
          {/* Left — CTA */}
          <a
            href="#contact"
            className="text-[11px] font-bold tracking-[0.18em] uppercase text-foreground hover:text-primary transition-colors flex items-center gap-1.5"
          >
            Let's Talk
            <span className="text-primary text-sm">▶</span>
          </a>

          {/* Center — Brand */}
          <a
            href="#home"
            className="text-sm font-bold tracking-[0.22em] uppercase text-foreground hover:text-primary transition-colors absolute left-1/2 -translate-x-1/2"
          >
            Sahil Dodiya<span className="text-primary">.</span>
          </a>

          {/* Right — Menu toggle */}
          <button
            onClick={() => setMenuOpen(true)}
            className="text-[11px] font-bold tracking-[0.18em] uppercase text-foreground hover:text-primary transition-colors flex items-center gap-2"
            aria-label="Open menu"
          >
            <span className="hidden sm:inline">Menu</span>
            <span className="flex flex-col gap-[5px]">
              <span className="block w-5 h-[1.5px] bg-current" />
              <span className="block w-3 h-[1.5px] bg-current" />
              <span className="block w-5 h-[1.5px] bg-current" />
            </span>
          </button>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-background flex flex-col"
          >
            {/* Close bar */}
            <div className="flex items-center justify-between px-6 md:px-10 h-14 border-b border-white/[0.06]">
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-muted-foreground">
                Navigation
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-[11px] font-bold tracking-[0.18em] uppercase text-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                Close <X size={14} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 flex flex-col justify-center px-8 md:px-14 gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.4 }}
                  className="group flex items-center justify-between border-b border-white/[0.06] py-5 hover:border-primary/30 transition-colors"
                >
                  <span
                    className="text-5xl md:text-7xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {link.name}
                  </span>
                  <span className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                    0{i + 1}
                  </span>
                </motion.a>
              ))}
            </nav>

            <div className="px-8 md:px-14 py-6 text-[11px] text-muted-foreground tracking-widest uppercase">
              © 2025 Sahil Dodiya
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
