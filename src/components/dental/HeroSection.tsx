import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Star, Award, Users, ThumbsUp, ArrowDown, BadgeCheck } from "lucide-react";
import paciente5 from "@/assets/paciente-5-sonrisa.webp";
import paciente1 from "@/assets/paciente-1-sonrisa.webp";
import paciente3 from "@/assets/paciente-3-sonrisa.webp";
import paciente6 from "@/assets/paciente-6-sonrisa.webp";
import paciente4 from "@/assets/paciente-4-sonrisa.webp";
import { trackEvent } from "@/lib/analytics";
import { BOOKING_URL, CAL_LINK, setBookingContext } from "@/lib/booking";

const stats = [
  { icon: Award, value: "20+", label: "Años de exp." },
  { icon: Users, value: "5,000+", label: "Pacientes" },
  { icon: Star, value: "5.0", label: "Google Rating" },
  { icon: ThumbsUp, value: "100%", label: "Satisfacción" },
];

const heroImages = [paciente5, paciente1, paciente3, paciente6, paciente4];
const HERO_ROTATE_MS = 5000;

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % heroImages.length);
    }, HERO_ROTATE_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-gold/40 pointer-events-none"
          style={{
            left: `${15 + i * 10}%`,
            top: `${20 + (i % 4) * 15}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Main content */}
      <div className="container relative z-10 mx-auto pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text column */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-sm px-4 py-1.5 mb-6"
            >
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                #1 Blanqueamiento Dental CDMX
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="font-display text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] text-white mb-6"
            >
              Devuélvele el{" "}
              <span
                className="italic"
                style={{
                  background: "linear-gradient(135deg, hsl(199 88% 68%), hsl(210 85% 78%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                brillo
              </span>{" "}
              a tu sonrisa
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-lg text-white/75 mb-10 max-w-lg font-light leading-relaxed"
            >
              Más de 20 años de experiencia en odontología estética en la Ciudad de México.
              Tecnología de vanguardia y atención 100% personalizada para ti.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-primary"
                data-cal-link={CAL_LINK}
                data-cal-config={JSON.stringify({ theme: "light" })}
                onClick={() => {
                  setBookingContext({ location: "hero" });
                  trackEvent("cta_agendar_click", { location: "hero", method: "calendar" });
                }}
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-gold to-gold/80 px-8 py-4 text-sm font-bold text-white shadow-gold hover:shadow-glow hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Agendar Cita Ahora
              </a>
              <a
                href="#servicios"
                id="hero-cta-secondary"
                className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/8 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-white hover:bg-white/15 hover:border-white/40 transition-all duration-300"
              >
                Ver Servicios
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="text-xs text-white/50 mt-4"
            >
              Se requiere un <strong className="text-white/70 font-semibold">anticipo de $150 MXN</strong> para
              agendar, el cual se descuenta del costo de tu tratamiento.
            </motion.p>
          </div>

          {/* Image column: paciente real, en tarjeta enmarcada */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated ring-1 ring-white/15">
              <AnimatePresence>
                <motion.img
                  key={current}
                  src={heroImages[current]}
                  alt="Paciente real de Blanqueamiento Dental Center sonriendo tras su tratamiento"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, scale: 1.04 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    opacity: { duration: 1.2, ease: "easeInOut" },
                    scale: { duration: HERO_ROTATE_MS / 1000, ease: "linear" },
                  }}
                  {...(current === 0
                    ? { fetchPriority: "high" as const, loading: "eager" as const }
                    : { loading: "lazy" as const })}
                  decoding="async"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -bottom-5 -left-4 md:-left-8 flex items-center gap-2.5 rounded-2xl glass border border-white/40 px-4 py-3 shadow-card"
            >
              <BadgeCheck className="h-5 w-5 text-gold shrink-0" />
              <div>
                <p className="text-sm font-bold text-foreground leading-tight">Paciente real</p>
                <p className="text-xs text-muted-foreground leading-tight">Resultado verificado</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="relative z-10 w-full glass-dark mt-4"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3 px-6 py-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="font-display text-xl font-bold text-white">{value}</p>
                  <p className="text-xs text-white/55">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="relative z-10 hidden md:flex flex-col items-center gap-2 py-6"
      >
        <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="h-4 w-4 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
