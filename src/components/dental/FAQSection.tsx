import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HelpCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const faqs = [
  {
    q: "¿El blanqueamiento dental es seguro?",
    a: "Sí, es un procedimiento completamente seguro cuando es realizado por profesionales. Utilizamos técnicas de fotoactivación aprobadas que no dañan el esmalte dental.",
  },
  {
    q: "¿Cuánto dura el procedimiento de blanqueamiento?",
    a: "El procedimiento toma aproximadamente 1 hora. Los resultados son visibles inmediatamente y pueden durar entre 1 y 3 años con el cuidado adecuado.",
  },
  {
    q: "¿Es doloroso el blanqueamiento dental?",
    a: "El procedimiento no es doloroso. Algunos pacientes pueden experimentar sensibilidad temporal, que desaparece en pocas horas.",
  },
  {
    q: "¿Qué son las manchas intrínsecas por fluorosis?",
    a: "Son manchas que se forman en la estructura interna del diente, generalmente por exposición excesiva al fluoruro en la infancia o por antibióticos. Realizamos un tratamiento especializado por sesiones para eliminarlas.",
  },
  {
    q: "¿Aceptan seguros dentales?",
    a: "Trabajamos con diversos esquemas de pago y seguros. Contáctanos para verificar la cobertura de tu seguro dental.",
  },
  {
    q: "¿Cuántas sesiones necesito para ver resultados?",
    a: "Para el blanqueamiento, los resultados son visibles desde la primera sesión. Para otros tratamientos como ortodoncia, el número de sesiones dependerá de la evaluación inicial que realizamos en tu primera cita.",
  },
  {
    q: "¿Necesito pagar algo para agendar mi cita?",
    a: "Sí, al reservar tu horario en línea se solicita un anticipo de $150 MXN, pagado con tarjeta de forma segura. Este anticipo se descuenta del costo total de tu tratamiento — no es un cargo adicional.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
};

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="py-28 bg-background relative overflow-hidden">
      {/* Datos estructurados: habilita el rich result de preguntas frecuentes en Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-32 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-72 h-72 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-3xl relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold mb-3">
            Preguntas Frecuentes
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            ¿Tienes{" "}
            <span className="italic" style={{
              background: "linear-gradient(135deg, hsl(228 61% 23%), hsl(228 50% 37%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              dudas
            </span>
            ?
          </h2>
          <p className="text-muted-foreground">
            Resolvemos las preguntas más comunes sobre nuestros tratamientos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
              >
                <AccordionItem
                  value={`item-${i}`}
                  className="rounded-2xl border border-border bg-card px-6 shadow-card hover:shadow-elevated hover:border-navy/20 transition-all duration-300 overflow-hidden"
                >
                  <AccordionTrigger className="font-display text-base font-medium text-foreground hover:no-underline py-5 flex gap-4 text-left">
                    <HelpCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5 pl-9">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA under FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 text-center rounded-3xl bg-gradient-to-br from-navy to-navy-dark p-8 shadow-elevated"
        >
          <p className="text-white/70 text-sm mb-1">¿Tienes más preguntas?</p>
          <h3 className="font-display text-2xl font-bold text-white mb-5">Contáctanos directamente</h3>
          <a
            href="#contacto"
            id="faq-cta"
            onClick={() => trackEvent("cta_agendar_click", { location: "faq_cta" })}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold to-gold/80 px-7 py-3.5 text-sm font-bold text-white shadow-gold hover:shadow-glow hover:scale-105 transition-all duration-300"
          >
            Hablar con un especialista
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
