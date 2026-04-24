import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import clinicInterior from "@/assets/clinic-interior.jpg";
import smileCloseup from "@/assets/smile-closeup.jpg";
import patientSmile1 from "@/assets/patient-smile-1.jpg";
import patientSmile2 from "@/assets/patient-smile-2.jpg";
import dentistPatient from "@/assets/dentist-patient.jpg";
import heroSmile from "@/assets/hero-smile.jpg";

const images = [
  { src: clinicInterior, alt: "Consultorio dental moderno y elegante", label: "Nuestras instalaciones", span: "col-span-2 row-span-2" },
  { src: smileCloseup, alt: "Sonrisa con dientes blancos perfectos", label: "Resultado brillante" },
  { src: heroSmile, alt: "Paciente sonriendo con sonrisa radiante", label: "Sonrisa transformada" },
  { src: patientSmile1, alt: "Sonrisa después de blanqueamiento", label: "Antes & Después" },
  { src: patientSmile2, alt: "Paciente masculino satisfecho", label: "Paciente satisfecho" },
  { src: dentistPatient, alt: "Equipo dental profesional con paciente", label: "Atención personalizada" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="instalaciones" className="py-28 bg-secondary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold mb-3">
            Instalaciones y Resultados
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5">
            Nuestro{" "}
            <span className="italic" style={{
              background: "linear-gradient(135deg, hsl(215 65% 22%), hsl(215 55% 35%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              espacio
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Instalaciones de primer nivel en el World Trade Center CDMX, equipadas con tecnología de vanguardia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[160px] md:auto-rows-[200px]"
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={`${img.span ?? ""} relative group rounded-2xl overflow-hidden shadow-card ring-1 ring-border/50`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-600"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-navy-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                <span className="text-white text-sm font-semibold">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
