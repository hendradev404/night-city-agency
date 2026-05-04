import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "// HOME", href: "#hero" },
  { label: "// SERVICES", href: "#services" },
  { label: "// PROJECTS", href: "#projects" },
  { label: "// PRICING", href: "#pricing" },
  { label: "// CONTACT", href: "#contact" },
];

const HudNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-neon-cyan/20"
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <a href="#hero" className="font-major text-lg tracking-widest neon-text-cyan">
          HENDR<span className="neon-text-magenta">Λ</span>.DEV
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs tracking-wider text-muted-foreground hover:text-primary transition-colors glitch-hover"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* System Status */}
        <div className="hidden lg:flex items-center gap-2 font-mono text-xs text-neon-green">
          <span className="inline-block w-2 h-2 rounded-full bg-neon-green animate-pulse-glow" />
          SYSTEM STATUS: ONLINE
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden font-mono text-xs text-primary"
        >
          {mobileOpen ? "[CLOSE]" : "[MENU]"}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass-card border-t border-neon-cyan/10 overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-mono text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-2 font-mono text-xs text-neon-green pt-2 border-t border-neon-cyan/10">
                <span className="inline-block w-2 h-2 rounded-full bg-neon-green" />
                SYSTEM STATUS: ONLINE
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default HudNavbar;
