import { motion } from "framer-motion";
import { Star, Award, Users, ThumbsUp, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-smile.jpg";

const stats = [
  { icon: Award, value: "20+", label: "Años de exp." },
  { icon: Users, value: "5,000+", label: "Pacientes" },
  { icon: Star, value: "5.0", label: "Google Rating" },
  { icon: ThumbsUp, value: "100%", label: "Satisfacción" },
];

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Paciente sonriendo en Dental Center"
          className="h-full w-full object-cover object-top"
        />
        {/* Multi-layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/92 via-navy/75 to-navy/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-gold/40"
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
      <div className="container relative z-10 mx-auto flex-1 flex flex-col justify-center py-32 pt-40">
        <div className="max-w-2xl">
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
            className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] text-white mb-6"
          >
            Devuélvele el{" "}
            <span
              className="italic"
              style={{
                background: "linear-gradient(135deg, hsl(43 85% 65%), hsl(36 90% 70%))",
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
              href="#contacto"
              id="hero-cta-primary"
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
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="relative z-10 w-full glass-dark"
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
        className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
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
