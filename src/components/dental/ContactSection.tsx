import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container mx-auto" ref={ref}>
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
            Agenda tu <span className="italic text-primary">cita</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              {
                icon: Phone,
                title: "Teléfono",
                detail: "55 7444 1235",
                href: "tel:5574441235",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                detail: "Envíanos un mensaje",
                href: "https://wa.me/525574441235",
              },
              {
                icon: MapPin,
                title: "Ubicación",
                detail: "World Trade Center, CDMX",
                href: "https://maps.google.com/?q=World+Trade+Center+CDMX",
              },
              {
                icon: Clock,
                title: "Horario",
                detail: "L-V: 10am-8pm · Sáb: 10am-3pm · Dom: previa cita",
                href: undefined,
              },
            ].map(({ icon: Icon, title, detail, href }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-xl bg-card p-5 shadow-card"
              >
                <div className="rounded-lg bg-primary/10 p-3">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{title}</p>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {detail}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{detail}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl overflow-hidden shadow-elevated h-full min-h-[360px]"
          >
            <iframe
              title="Ubicación Dental Center"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.0130464498!2d-99.17861122524418!3d19.393780981883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff15f8e4b5e7%3A0x785beb3507789d0!2sWorld%20Trade%20Center%20Ciudad%20de%20M%C3%A9xico!5e0!3m2!1ses!2smx!4v1"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
