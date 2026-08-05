import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BadgeCheck } from "lucide-react";
import paciente1 from "@/assets/paciente-1-sonrisa.jpeg";
import paciente3 from "@/assets/paciente-3-sonrisa.jpeg";
import paciente4 from "@/assets/paciente-4-sonrisa.jpeg";
import paciente6 from "@/assets/paciente-6-sonrisa.jpeg";

const testimonials = [
  { src: paciente1, alt: "Paciente real sonriendo tras su tratamiento de blanqueamiento dental" },
  { src: paciente3, alt: "Paciente real satisfecha con su nueva sonrisa" },
  { src: paciente4, alt: "Paciente real satisfecho con su nueva sonrisa" },
  { src: paciente6, alt: "Paciente real sonriendo tras su tratamiento de blanqueamiento dental" },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonios" className="py-28 bg-background relative overflow-hidden">
      <div className="absolute top-1/3 -right-32 w-72 h-72 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold mb-3">
            Pacientes Reales
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5">
            Resultados que{" "}
            <span className="italic" style={{
              background: "linear-gradient(135deg, hsl(228 61% 23%), hsl(228 50% 37%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              hablan solos
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Sonrisas reales de pacientes que ya vivieron su transformación en Blanqueamiento Dental Center.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-elevated ring-1 ring-border/50"
            >
              <img
                src={t.src}
                alt={t.alt}
                className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/0 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3.5 flex items-center gap-1.5">
                <BadgeCheck className="h-4 w-4 text-gold shrink-0" />
                <span className="text-white text-xs font-semibold">Resultado real</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
