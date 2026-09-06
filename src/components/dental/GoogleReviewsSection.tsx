import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import {
  GBP_COUNT,
  GBP_CUT,
  GBP_RATING,
  GOOGLE_REVIEWS_URL,
  WHATSAPP_URL,
} from "@/lib/site";

type ReviewCard = {
  name: string;
  when: string;
  text: string;
  chip?: string;
  featured?: boolean;
  lang?: "es" | "en";
  ownerReply?: string;
  badge?: string;
};

/** Proposal A — absolute month/year labels (corte septiembre 2026). */
const reviews: ReviewCard[] = [
  {
    featured: true,
    name: "Laura Ser",
    when: "junio 2026",
    chip: "Manchas de café",
    text: "Tenía manchas por café y noté una gran diferencia después de la sesión. Excelente servicio, instalaciones limpias y atención profesional.",
    ownerReply:
      "¡Muchas gracias por tu confianza! Nos da mucho gusto saber que quedaste satisfecha con los resultados de tu blanqueamiento dental. ¡Te esperamos pronto!",
  },
  {
    name: "Connie Jauregui",
    when: "agosto 2026",
    chip: "Precio",
    text: "Genial, mis dientes se ven mas blancos que nunca, por un precio bajo recibi una atencion extraordinaria y me hicieron revision y blanqueamiento de primera ! Lo recomiendo mil porciento !",
    ownerReply: "Me da gusto que hayas quedado contenta, gracias por tu comentario.",
  },
  {
    name: "Axel Antonio",
    when: "julio 2026",
    chip: "Sin molestias",
    text: "Excelente resultado y no me dolio",
  },
  {
    name: "Anyi Sor",
    when: "septiembre 2025",
    chip: "Explicación del proceso",
    text: "Excelente la Doctora, el servicio que ofrece es impecable, si vas con nervios la Doctora te da mucha seguridad, y los resultados son grandiosos y sin dolor y sensibilidad lo recomiendo ampliamente",
    ownerReply:
      "Muchas Gracias por tus comentarios, me da mucho gusto que hayas quedado contenta. Saludos",
  },
  {
    name: "Barbara Chaparro",
    when: "septiembre 2025",
    chip: "Dra. Ana Laura",
    text: "Blanqueamiento Dental WTC, es la mejor experiencia que he vivido, tanto para mis dientes, como personalmente. El cuidado y atención de la Dra. Ana Laura, rebasó mis expectativas por mucho.",
    ownerReply:
      "Barbara muchas gracias por tus comentarios me da gusto que hayas quedado contenta y satisfecha con el cambio en tus dientes. Saludos",
  },
  {
    name: "Seann Mullen",
    when: "septiembre 2023",
    chip: "Desde el extranjero",
    lang: "en",
    badge: "Local Guide",
    text: "My dentist was Anna. Great dentist. She took care of me. I wouldn't necessarily call it LASER whitening. It's more like 3 treatments of blue light with whitening paste but it did make my teeth a few shades lighter. I was very happy with the outcome. Gringos very welcome, she'll take care of you.",
  },
];

const GoogleReviewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const featured = reviews.find((r) => r.featured)!;
  const compact = reviews.filter((r) => !r.featured);

  return (
    <section id="resenas" className="py-28 bg-secondary relative overflow-hidden">
      <div className="absolute top-1/4 -right-32 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-72 h-72 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 max-w-3xl mx-auto"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold mb-3">
            Reseñas en Google
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Lo que dicen quienes ya vinieron
          </h2>
          <p className="text-muted-foreground">Reseñas públicas de nuestro perfil en Google</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-3xl bg-card border border-border p-8 md:p-10 mb-10 max-w-4xl mx-auto shadow-card"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm font-semibold text-gold mb-2">Google</p>
              <p className="font-display text-5xl font-bold text-navy flex items-center gap-2">
                <Star className="h-8 w-8 fill-gold text-gold" />
                {GBP_RATING}
              </p>
              <p className="mt-2 text-lg text-foreground">{GBP_COUNT} reseñas en Google</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {GBP_COUNT} de {GBP_COUNT} con cinco estrellas · corte {GBP_CUT}
              </p>
            </div>
            <div className="max-w-md">
              <p className="text-sm leading-6 text-muted-foreground">
                Tomado de nuestro perfil público de Google. Puedes leer todas, incluida la
                respuesta de la clínica, directo en Maps.
              </p>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex font-semibold text-navy hover:text-gold transition-colors underline decoration-gold/40 underline-offset-4"
              >
                Ver las {GBP_COUNT} reseñas en Google Maps →
              </a>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:row-span-2 rounded-3xl bg-card border border-border p-8 md:p-10 shadow-card"
          >
            {featured.chip && (
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-secondary rounded-full px-3 py-1 mb-4">
                {featured.chip}
              </span>
            )}
            <blockquote className="font-display text-2xl md:text-3xl leading-snug text-foreground">
              “{featured.text}”
            </blockquote>
            <figcaption className="mt-6">
              <p className="font-semibold text-foreground">{featured.name}</p>
              <p className="text-sm text-muted-foreground">{featured.when}</p>
            </figcaption>
            {featured.ownerReply && (
              <div className="mt-6 pl-4 border-l-2 border-gold/50">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Respuesta de Blanqueamiento Dental Center
                </p>
                <p className="text-sm leading-6 text-muted-foreground">{featured.ownerReply}</p>
              </div>
            )}
          </motion.article>

          {compact.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
              className="rounded-3xl bg-card border border-border p-6 md:p-7 shadow-card"
            >
              {r.chip && (
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-secondary rounded-full px-3 py-1 mb-3">
                  {r.chip}
                </span>
              )}
              <blockquote className={`leading-7 text-foreground ${r.lang === "en" ? "italic" : ""}`}>
                “{r.text}”
              </blockquote>
              <div className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <p className="font-semibold text-foreground">{r.name}</p>
                {r.badge && <span className="text-xs text-muted-foreground">· {r.badge}</span>}
                <p className="text-sm text-muted-foreground w-full">{r.when}</p>
              </div>
              {r.ownerReply && (
                <div className="mt-4 pl-3 border-l-2 border-gold/40">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    Respuesta de Blanqueamiento Dental Center
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">{r.ownerReply}</p>
                </div>
              )}
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center max-w-xl mx-auto"
        >
          <p className="text-muted-foreground mb-5">
            ¿Dudas sobre tu caso? Escríbenos por WhatsApp y te decimos si el blanqueamiento aplica
            para ti.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "reviews" })}
            className="inline-flex rounded-2xl bg-gradient-to-r from-gold to-gold/80 px-8 py-4 text-sm font-bold text-white shadow-gold hover:shadow-glow hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Escribir por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
