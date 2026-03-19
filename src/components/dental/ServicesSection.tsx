import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Waves, Stethoscope, Baby, CircleDot, Smile } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Blanqueamiento Dental",
    description:
      "Blanqueamiento por fotoactivación, el método más efectivo con resultados visibles y duraderos. Procedimiento no invasivo y seguro.",
  },
  {
    icon: Waves,
    title: "Limpieza con Ultrasonido",
    description:
      "Vibraciones de alta frecuencia para eliminar placa y sarro, proporcionando una limpieza más profunda que métodos tradicionales.",
  },
  {
    icon: Stethoscope,
    title: "Odontología General",
    description:
      "Cuidado dental completo: revisiones, restauraciones, endodoncias y tratamientos preventivos para toda la familia.",
  },
  {
    icon: CircleDot,
    title: "Ortodoncia",
    description:
      "Corrección dental con brackets tradicionales y sistemas modernos para alinear tu sonrisa de forma efectiva.",
  },
  {
    icon: Smile,
    title: "Implantología",
    description:
      "Implantes dentales de alta calidad que reemplazan piezas perdidas con resultados naturales y duraderos.",
  },
  {
    icon: Baby,
    title: "Odontopediatría",
    description:
      "Atención dental especializada para los más pequeños en un ambiente amigable y de confianza.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicios" className="py-24 bg-secondary">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">
            Nuestros Servicios
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Cuidado dental <span className="italic text-primary">integral</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ofrecemos una amplia gama de servicios de alta calidad con atención personalizada.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group rounded-2xl bg-card p-8 shadow-card hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="mb-5 inline-flex items-center justify-center rounded-xl bg-primary/10 p-3">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
