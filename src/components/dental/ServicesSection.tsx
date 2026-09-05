import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Waves, Stethoscope, Gem, CircleDot, Smile, ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { BOOKING_URL, CAL_LINK, setBookingContext } from "@/lib/booking";

const services = [
  {
    icon: Sparkles,
    title: "Blanqueamiento Dental",
    description:
      "Blanqueamiento por fotoactivación, el método más efectivo con resultados visibles y duraderos. Procedimiento no invasivo y seguro.",
    color: "from-amber-500/20 to-yellow-400/10",
    iconColor: "text-amber-500",
    iconBg: "bg-amber-500/10",
  },
  {
    icon: Waves,
    title: "Limpieza con Ultrasonido",
    description:
      "Vibraciones de alta frecuencia para eliminar placa y sarro, proporcionando una limpieza más profunda que métodos tradicionales.",
    color: "from-blue-500/20 to-cyan-400/10",
    iconColor: "text-blue-500",
    iconBg: "bg-blue-500/10",
  },
  {
    icon: Stethoscope,
    title: "Odontología General",
    description:
      "Cuidado dental completo: revisiones, restauraciones, endodoncias y tratamientos preventivos para toda la familia.",
    color: "from-emerald-500/20 to-teal-400/10",
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-500/10",
  },
  {
    icon: CircleDot,
    title: "Ortodoncia",
    description:
      "Corrección dental con brackets tradicionales y sistemas modernos para alinear tu sonrisa de forma efectiva.",
    color: "from-violet-500/20 to-purple-400/10",
    iconColor: "text-violet-500",
    iconBg: "bg-violet-500/10",
  },
  {
    icon: Smile,
    title: "Implantología",
    description:
      "Implantes dentales de alta calidad que reemplazan piezas perdidas con resultados naturales y duraderos.",
    color: "from-rose-500/20 to-pink-400/10",
    iconColor: "text-rose-500",
    iconBg: "bg-rose-500/10",
  },
  {
    icon: Gem,
    title: "Estética Dental",
    description:
      "Carillas dentales y diseño de sonrisa personalizado para armonizar forma, color y alineación de tus dientes.",
    color: "from-fuchsia-500/20 to-pink-400/10",
    iconColor: "text-fuchsia-500",
    iconBg: "bg-fuchsia-500/10",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicios" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-primary" />
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold mb-3">
            Nuestros Servicios
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
            Cuidado dental{" "}
            <span className="italic" style={{
              background: "linear-gradient(135deg, hsl(199 88% 68%), hsl(210 85% 78%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>integral</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base leading-relaxed">
            Ofrecemos una amplia gama de tratamientos de alta calidad con atención
            personalizada y la tecnología más avanzada.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="group relative rounded-2xl p-7 border border-white/8 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/15 transition-all duration-400 cursor-default overflow-hidden"
            >
              {/* Card gradient accent */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.color}`} />

              <div className="relative z-10">
                <div className={`mb-5 inline-flex items-center justify-center rounded-xl p-3 ${service.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`h-6 w-6 ${service.iconColor}`} />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-5">
                  {service.description}
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cal-link={CAL_LINK}
                  data-cal-config={JSON.stringify({ theme: "light" })}
                  onClick={() => {
                    setBookingContext({ location: "services_card", service: service.title });
                    trackEvent("cta_agendar_click", { location: "services_card", service: service.title, method: "calendar" });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold/70 group-hover:text-gold transition-colors duration-300"
                >
                  Agendar cita
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="services-cta"
            data-cal-link={CAL_LINK}
            data-cal-config={JSON.stringify({ theme: "light" })}
            onClick={() => {
              setBookingContext({ location: "services_bottom" });
              trackEvent("cta_agendar_click", { location: "services_bottom", method: "calendar" });
            }}
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-gold to-gold/80 px-8 py-4 text-sm font-bold text-white shadow-gold hover:shadow-glow hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Agenda tu cita hoy
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="text-xs text-white/50 mt-4">
            Se requiere un <strong className="text-white/70 font-semibold">anticipo de $500 MXN</strong> para
            agendar, a cuenta de tu tratamiento.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
