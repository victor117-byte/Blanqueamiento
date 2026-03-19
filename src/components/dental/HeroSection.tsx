import { motion } from "framer-motion";
import heroImage from "@/assets/hero-dental.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Consultorio dental moderno"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto py-32 pt-40">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-4"
          >
            Blanqueamiento Dental Center
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary-foreground mb-6"
          >
            Devuélvele el <span className="italic text-accent">brillo</span> a tu sonrisa
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-primary-foreground/80 mb-8 max-w-lg font-light leading-relaxed"
          >
            Más de 20 años de experiencia en odontología estética en la Ciudad de México.
            Tecnología de vanguardia y atención personalizada.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity shadow-soft"
            >
              Agendar Cita
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-lg border border-primary-foreground/30 px-8 py-4 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            >
              Ver Servicios
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
