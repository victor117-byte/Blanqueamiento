import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Shield, Heart, CheckCircle2 } from "lucide-react";
import smileImage from "@/assets/cambio-sonrisa.jpeg";

const stats = [
  { icon: Award, value: "20+", label: "Años de experiencia" },
  { icon: Shield, value: "5,000+", label: "Pacientes atendidos" },
  { icon: Heart, value: "5.0 ⭐", label: "Calificación Google" },
];

const highlights = [
  "Tecnología de fotoactivación de última generación",
  "Tratamientos sin dolor ni sensibilidad",
  "Resultados visibles desde la primera sesión",
  "Atención personalizada para cada paciente",
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="py-28 bg-background overflow-hidden">
      <div className="container mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Decorative background shape */}
            <div className="absolute -top-8 -left-8 w-64 h-64 rounded-3xl bg-gradient-to-br from-gold/10 to-primary/5 -z-10" />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full bg-gradient-to-br from-primary/10 to-gold/5 -z-10" />

            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated ring-1 ring-border/50">
              <img
                src={smileImage}
                alt="Antes y después de blanqueamiento dental — resultado real de paciente"
                className="h-full w-full object-cover object-bottom hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Floating card — años */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-6 -right-4 md:-right-8 rounded-2xl bg-gradient-to-br from-navy to-navy-dark p-5 shadow-elevated"
            >
              <p className="font-display text-4xl font-bold text-white">20+</p>
              <p className="text-xs text-white/60 mt-0.5 font-medium uppercase tracking-wider">Años</p>
              <div className="mt-2 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-1 w-4 rounded-full bg-gold/60" />
                ))}
              </div>
            </motion.div>

            {/* Floating card — ubicación */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -top-4 -right-4 md:-right-6 rounded-2xl glass border border-white/40 p-4 shadow-card"
            >
              <p className="text-xs font-semibold text-navy uppercase tracking-wider">Ubicación</p>
              <p className="text-sm font-bold text-foreground mt-0.5">World Trade Center</p>
              <p className="text-xs text-muted-foreground">Nápoles, CDMX</p>
            </motion.div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-3">
              Sobre Nosotros
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Tu sonrisa merece lo{" "}
              <span className="italic" style={{
                background: "linear-gradient(135deg, hsl(228 61% 23%), hsl(228 50% 37%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                mejor
              </span>
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-5 text-base">
              Bienvenido a <strong className="text-foreground">Blanqueamiento Dental Center</strong> en Ciudad de México.
              Nos dedicamos a ofrecerte soluciones efectivas y completamente seguras para lograr
              una sonrisa radiante que transforme tu confianza.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base">
              Ubicados en el <strong className="text-foreground">World Trade Center</strong>, Montecito 38,
              colonia Nápoles, contamos con instalaciones equipadas con tecnología de vanguardia,
              en un ambiente acogedor donde tu comodidad es nuestra prioridad.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-10">
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center">
                    <CheckCircle2 className="h-3.5 w-3.5 text-gold" />
                  </div>
                  <span className="text-sm text-foreground font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ icon: Icon, value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                  className="card-premium rounded-2xl p-4 text-center"
                >
                  <Icon className="h-5 w-5 text-gold mx-auto mb-2" />
                  <p className="font-display text-xl font-bold text-foreground">{value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-tight">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
