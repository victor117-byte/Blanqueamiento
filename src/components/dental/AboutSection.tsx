import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Shield, Heart } from "lucide-react";
import smileImage from "@/assets/smile.jpg";

const stats = [
  { icon: Award, value: "20+", label: "Años de experiencia" },
  { icon: Shield, value: "5,000+", label: "Pacientes atendidos" },
  { icon: Heart, value: "5.0", label: "Calificación Google" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="py-24 bg-background">
      <div className="container mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={smileImage}
                alt="Cuidado dental profesional"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-xl bg-primary p-6 shadow-soft">
              <p className="font-display text-3xl font-bold text-primary-foreground">20+</p>
              <p className="text-sm text-primary-foreground/80">Años</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              Sobre Nosotros
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Tu sonrisa merece lo <span className="italic text-primary">mejor</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Bienvenido a Blanqueamiento Dental Center Ciudad de México. Nos dedicamos
              a ofrecerte soluciones efectivas y seguras para lograr una sonrisa radiante.
              Nuestro equipo de expertos utiliza las últimas tecnologías y técnicas
              disponibles en odontología estética.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Ubicados en el World Trade Center CDMX, contamos con instalaciones equipadas
              con tecnología de vanguardia, garantizando un ambiente acogedor y seguro
              donde tu comodidad es lo más importante.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="text-center">
                  <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="font-display text-2xl font-bold text-foreground">{value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
