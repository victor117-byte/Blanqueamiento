import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, Clock, MessageCircle, CalendarCheck } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/525530460680?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita";

const contactItems = [
  {
    icon: Phone,
    title: "Teléfono",
    detail: "55 3046 0680",
    sub: "Llámanos directamente",
    href: "tel:525530460680",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    detail: "Escríbenos ahora",
    sub: "Respuesta inmediata",
    href: WHATSAPP_URL,
    highlight: true,
  },
  {
    icon: MapPin,
    title: "Ubicación",
    detail: "World Trade Center",
    sub: "Ciudad de México",
    href: "https://maps.google.com/?q=BLANQUEAMIENTO+DENTAL+CENTER+CDMX",
  },
  {
    icon: Clock,
    title: "Horario",
    detail: "Lun–Vie: 10am–8pm",
    sub: "Sáb: 10am–3pm · Dom: cita previa",
    href: undefined,
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">
            Contacto
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Agenda tu <span className="italic text-primary">cita hoy</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Estamos listos para atenderte. Contáctanos por el medio que prefieras.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          {/* Left column: info cards + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {contactItems.map(({ icon: Icon, title, detail, sub, href, highlight }, i) => {
              const cardContent = (
                <div
                  className={`flex items-center gap-4 rounded-2xl p-5 shadow-card transition-all duration-300 ${
                    highlight
                      ? "bg-[#25D366] text-white hover:bg-[#1ebe57] hover:shadow-elevated cursor-pointer"
                      : "bg-card hover:shadow-elevated"
                  }`}
                >
                  <div
                    className={`rounded-xl p-3 shrink-0 ${
                      highlight ? "bg-white/20" : "bg-primary/10"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${highlight ? "text-white" : "text-primary"}`}
                    />
                  </div>
                  <div className="min-w-0">
                    <p
                      className={`text-xs font-semibold uppercase tracking-wider mb-0.5 ${
                        highlight ? "text-white/80" : "text-muted-foreground"
                      }`}
                    >
                      {title}
                    </p>
                    <p
                      className={`font-semibold text-sm ${
                        highlight ? "text-white" : "text-foreground"
                      }`}
                    >
                      {detail}
                    </p>
                    <p
                      className={`text-xs mt-0.5 ${
                        highlight ? "text-white/70" : "text-muted-foreground"
                      }`}
                    >
                      {sub}
                    </p>
                  </div>
                  {highlight && (
                    <div className="ml-auto shrink-0">
                      <span className="text-xs bg-white/20 text-white font-semibold px-2.5 py-1 rounded-full">
                        Chat
                      </span>
                    </div>
                  )}
                </div>
              );

              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                >
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block"
                      aria-label={title}
                    >
                      {cardContent}
                    </a>
                  ) : (
                    cardContent
                  )}
                </motion.div>
              );
            })}

            {/* CTA principal */}
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-full rounded-2xl bg-primary px-6 py-4 text-sm font-bold text-primary-foreground shadow-soft hover:opacity-90 transition-opacity mt-2"
            >
              <CalendarCheck className="h-5 w-5" />
              Agendar cita por WhatsApp
            </motion.a>
          </motion.div>

          {/* Right column: Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl overflow-hidden shadow-elevated"
          >
            <iframe
              title="Blanqueamiento Dental Center — Ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.412506627659!2d-99.17552358887609!3d19.394574941817982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fffd7fb79449%3A0xb037e692bd30e79a!2sBLANQUEAMIENTO%20DENTAL%20CENTER!5e0!3m2!1ses!2smx!4v1773956744464!5m2!1ses!2smx"
              className="h-[480px] w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="bg-card px-5 py-4 flex items-center gap-3 border-t border-border">
              <MapPin className="h-4 w-4 text-primary shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground">Blanqueamiento Dental Center</p>
                <p className="text-xs text-muted-foreground">World Trade Center, Ciudad de México</p>
              </div>
              <a
                href="https://maps.google.com/?q=BLANQUEAMIENTO+DENTAL+CENTER+CDMX"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-xs font-semibold text-primary hover:underline shrink-0"
              >
                Ver en Maps →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
