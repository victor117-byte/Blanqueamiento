import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto max-w-3xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">
            Preguntas Frecuentes
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            ¿Tienes <span className="italic text-primary">dudas</span>?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-border bg-card px-6 shadow-card"
              >
                <AccordionTrigger className="font-display text-base font-medium text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
