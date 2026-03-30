import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, Clock, MessageCircle, CalendarCheck, Star } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/525530460680?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita";

const contactItems = [
  {
    icon: Phone,
    title: "Teléfono",
    detail: "55 3046 0680",
    sub: "Llámanos directamente",
    href: "tel:525530460680",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    detail: "Escríbenos ahora",
    sub: "Respuesta inmediata",
    href: WHATSAPP_URL,
    highlight: true,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    detail: "World Trade Center",
    sub: "Ciudad de México",
    href: "https://maps.google.com/?q=BLANQUEAMIENTO+DENTAL+CENTER+CDMX",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
  {
    icon: Clock,
    title: "Horario",
    detail: "Lun–Vie: 10am–8pm",
    sub: "Sáb: 10am–3pm · Dom: cita previa",
    href: undefined,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contacto" className="py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold mb-3">
            Contacto
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5">
            Agenda tu{" "}
            <span className="italic" style={{
              background: "linear-gradient(135deg, hsl(215 65% 22%), hsl(215 55% 35%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              cita hoy
            </span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Estamos listos para atenderte. Contáctanos por el medio que prefieras.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-start relative z-10">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {/* Google Rating mini-card */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-card flex items-center gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-navy to-navy-dark flex items-center justify-center">
                <Star className="h-5 w-5 text-gold fill-gold" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                  <span className="text-sm font-bold text-foreground ml-1">5.0</span>
                </div>
                <p className="text-xs text-muted-foreground">Calificación perfecta en Google Reviews</p>
              </div>
            </div>

            {contactItems.map(({ icon: Icon, title, detail, sub, href, highlight, color, bg }, i) => {
              const cardContent = (
                <div
                  className={`flex items-center gap-4 rounded-2xl p-5 shadow-card transition-all duration-300 ${
                    highlight
                      ? "bg-[#25D366] hover:bg-[#1ebe57] hover:shadow-gold cursor-pointer"
                      : "bg-card hover:shadow-elevated hover:border-navy/15 border border-border"
                  }`}
                >
                  <div className={`rounded-xl p-3 shrink-0 ${highlight ? "bg-white/20" : bg}`}>
                    <Icon className={`h-5 w-5 ${highlight ? "text-white" : color}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className={`text-xs font-semibold uppercase tracking-wider mb-0.5 ${highlight ? "text-white/75" : "text-muted-foreground"}`}>
                      {title}
                    </p>
                    <p className={`font-semibold text-sm ${highlight ? "text-white" : "text-foreground"}`}>
                      {detail}
                    </p>
                    <p className={`text-xs mt-0.5 ${highlight ? "text-white/65" : "text-muted-foreground"}`}>
                      {sub}
                    </p>
                  </div>
                  {highlight && (
                    <div className="ml-auto shrink-0">
                      <span className="text-xs bg-white/20 text-white font-bold px-3 py-1 rounded-full">
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
              id="contact-whatsapp-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.75 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-full rounded-2xl bg-gradient-to-r from-navy to-navy-dark px-6 py-4 text-sm font-bold text-white shadow-soft hover:shadow-elevated transition-all duration-300 mt-2"
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
            className="rounded-3xl overflow-hidden shadow-elevated ring-1 ring-border/50"
          >
            <iframe
              title="Blanqueamiento Dental Center — Ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.412506627659!2d-99.17552358887609!3d19.394574941817982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fffd7fb79449%3A0xb037e692bd30e79a!2sBLANQUEAMIENTO%20DENTAL%20CENTER!5e0!3m2!1ses!2smx!4v1773956744464!5m2!1ses!2smx"
              className="h-[420px] w-full border-0"
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
                className="ml-auto text-xs font-bold text-navy hover:text-gold transition-colors shrink-0"
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
