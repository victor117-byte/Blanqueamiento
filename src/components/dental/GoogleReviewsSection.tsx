import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote, BadgeCheck } from "lucide-react";

const MAPS_URL = "https://maps.google.com/?q=BLANQUEAMIENTO+DENTAL+CENTER+CDMX";

const reviews = [
  {
    name: "Laura Ser",
    meta: "Hace 2 meses",
    text: "Tenía manchas por café y noté una gran diferencia después de la sesión. Excelente servicio, instalaciones limpias y atención profesional.",
  },
  {
    name: "Anyi Sor",
    meta: "4 reseñas",
    text: "El servicio que ofrece es impecable, si vas con nervios la Doctora te da mucha seguridad, y los resultados son grandiosos y sin dolor y sensibilidad. Lo recomiendo ampliamente.",
  },
  {
    name: "Barbara Chaparro",
    meta: "Hace 1 año",
    text: "Es la mejor experiencia que he vivido, tanto para mis dientes como personalmente. El cuidado y atención de la Dra. Ana Laura rebasó mis expectativas por mucho.",
  },
  {
    name: "K U",
    meta: "Local Guide · 18 reseñas",
    text: "Súper buen servicio, fue por blanqueamiento y estoy súper feliz por atenderme bien. Muy buena doctora, con confianza. La recomiendo 100%.",
  },
  {
    name: "Jessica Torres Valencia",
    meta: "2 reseñas",
    text: "Sin duda alguna la mejor Dra, te explica todo y se preocupa por cómo te sientes. El blanqueamiento 100% recomendado, la mejor opción para blanquear tus dientes en CDMX.",
  },
  {
    name: "Seann Mullen",
    meta: "Local Guide · 227 reseñas",
    text: "Mi dentista fue Ana, una dentista excelente. Me atendió muy bien y me explicó todo el proceso: tres sesiones de luz con pasta blanqueadora. Me aclararon los dientes varios tonos. Quedé muy contenta con el resultado.",
  },
];

const GoogleReviewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="resenas" className="py-28 bg-secondary relative overflow-hidden">
      <div className="absolute top-1/4 -right-32 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-72 h-72 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold mb-3">
            Reseñas Verificadas
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5">
            Lo que dicen en{" "}
            <span className="italic" style={{
              background: "linear-gradient(135deg, hsl(228 61% 23%), hsl(228 50% 37%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Google
            </span>
          </h2>

          <div className="inline-flex items-center gap-2.5 rounded-full bg-card border border-border px-5 py-2.5 shadow-card">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm font-bold text-foreground">5.0</span>
            <span className="text-sm text-muted-foreground">· 43 reseñas en Google</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="rounded-2xl bg-card border border-border p-6 shadow-card hover:shadow-elevated hover:border-navy/15 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <Quote className="h-5 w-5 text-navy/15 shrink-0" />
              </div>
              <p className="text-sm text-foreground/85 leading-relaxed mb-5">
                "{review.text}"
              </p>
              <div className="flex items-center gap-2 pt-4 border-t border-border">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-navy/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-navy">{review.name.charAt(0)}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-foreground truncate">{review.name}</p>
                  <p className="text-[11px] text-muted-foreground">{review.meta}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors duration-300"
          >
            <BadgeCheck className="h-4 w-4" />
            Ver todas las reseñas en Google Maps →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
