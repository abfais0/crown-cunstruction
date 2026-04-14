import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { BUSINESS_INFO } from "../constants";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "py-2 md:py-4" : "py-4 md:py-8"
      )}
    >
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3 md:py-4 rounded-full transition-all duration-500 mx-4 md:mx-auto",
        isScrolled || isMobileMenuOpen ? "bg-black/80 backdrop-blur-2xl border border-white/10 shadow-2xl" : "bg-transparent"
      )}>
        <a href="#home" className="flex items-center gap-2 md:gap-3 group">
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-gold-500 blur-md opacity-0 group-hover:opacity-50 transition-opacity rounded-full" />
            <img
              src={BUSINESS_INFO.logo}
              alt={BUSINESS_INFO.name}
              className="relative w-8 h-8 md:w-10 md:h-10 rounded-full border border-gold-500/50 group-hover:border-gold-400 transition-all"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="font-display font-bold text-sm xs:text-base md:text-xl tracking-tight">
            CROWNLINE<span className="text-gold-500">CONSTRUCTION</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-gold-400 transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-slate-950 px-5 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105 active:scale-95"
          >
            <Phone size={16} />
            {BUSINESS_INFO.phone}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8 p-6"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-display font-bold text-white hover:text-gold-500 transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href={`tel:${BUSINESS_INFO.phone}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              className="flex items-center gap-3 bg-gold-500 text-black px-8 py-4 rounded-full font-bold text-xl mt-4"
            >
              <Phone size={24} fill="currentColor" />
              {BUSINESS_INFO.phone}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
