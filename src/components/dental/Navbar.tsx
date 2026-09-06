import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, Star } from "lucide-react";
import logoImg from "@/assets/Logo.webp";
import { trackEvent } from "@/lib/analytics";
import { BOOKING_URL } from "@/lib/booking";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Instalaciones", href: "#instalaciones" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-white/30 shadow-card py-0"
          : "bg-transparent border-b border-transparent py-2"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-xl overflow-hidden shadow-card ring-2 ring-gold/20 group-hover:ring-gold/50 transition-all duration-300">
            <img src={logoImg} alt="Dental Center Logo" className="h-full w-full object-cover" />
          </div>
          <div className="leading-tight">
            <span className={`font-display text-lg font-bold block transition-colors duration-300 ${scrolled ? "text-navy" : "text-white"}`}>
              Dental
            </span>
            <span className="font-display text-sm font-light text-gold block -mt-1">Center</span>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`text-sm font-medium relative group transition-colors duration-300 ${
                  scrolled ? "text-foreground hover:text-navy" : "text-white/85 hover:text-white"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-gold/60 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Phone */}
        <div className="hidden lg:flex items-center gap-4">
          <div className={`flex items-center gap-2 transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white/85"}`}>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-gold text-gold" />
              ))}
            </div>
            <a
              href={PHONE_TEL}
              onClick={() => trackEvent("phone_click", { location: "navbar_desktop" })}
              className={`text-sm font-semibold transition-colors duration-300 ${scrolled ? "hover:text-navy" : "hover:text-white"}`}
            >
              {PHONE_DISPLAY}
            </a>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("cta_agendar_click", { location: "navbar_desktop", method: "calendar" })}
            className="ml-2 rounded-xl bg-gradient-to-r from-gold to-gold/80 px-5 py-2.5 text-sm font-bold text-white hover:shadow-gold hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Agendar cita
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 rounded-xl transition-colors duration-300 ${
            scrolled ? "text-foreground hover:bg-secondary" : "text-white hover:bg-white/10"
          }`}
          aria-label="Toggle menu"
          id="navbar-mobile-toggle"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden glass border-t border-white/20"
          >
            <ul className="flex flex-col px-6 py-5 gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center text-sm font-medium text-foreground hover:text-navy hover:bg-secondary/50 px-3 py-2.5 rounded-lg transition-all duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-3 mt-2 border-t border-border">
                <a
                  href={PHONE_TEL}
                  onClick={() => trackEvent("phone_click", { location: "navbar_mobile" })}
                  className="flex items-center gap-2 text-sm font-semibold text-navy px-3 py-2"
                >
                  <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    setIsOpen(false);
                    trackEvent("cta_agendar_click", { location: "navbar_mobile", method: "calendar" });
                  }}
                  className="flex items-center justify-center mt-1 rounded-xl bg-gradient-to-r from-gold to-gold/80 px-5 py-3 text-sm font-bold text-white"
                >
                  Agendar cita
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
