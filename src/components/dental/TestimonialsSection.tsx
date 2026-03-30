import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, User } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    location: "CDMX",
    rating: 5,
    avatar: "MG",
    color: "from-rose-400 to-pink-500",
    text: "¡Increíble resultado! En una sola sesión mi sonrisa quedó varios tonos más blanca. El equipo es muy profesional y el proceso fue completamente sin dolor. ¡Los recomiendo al 100%!",
    treatment: "Blanqueamiento Dental",
  },
  {
    name: "Carlos Rodríguez",
    location: "Estado de México",
    rating: 5,
    avatar: "CR",
    color: "from-blue-400 to-indigo-500",
    text: "Llevé a mis hijos y el trato fue excepcional. Los niños se sintieron muy cómodos y el doctor los atendió con mucha paciencia. Ya tenemos cita para el próximo mes.",
    treatment: "Odontopediatría",
  },
  {
    name: "Sofía Martínez",
    location: "Polanco, CDMX",
    rating: 5,
    avatar: "SM",
    color: "from-emerald-400 to-teal-500",
    text: "Vine a hacerme la limpieza con ultrasonido y quedé fascinada. Mis dientes se sienten increíbles y se ven brillantes. El personal es muy amable y las instalaciones están impecables.",
    treatment: "Limpieza con Ultrasonido",
  },
  {
    name: "Roberto Hernández",
    location: "Naucalpan",
    rating: 5,
    avatar: "RH",
    color: "from-violet-400 to-purple-500",
    text: "Me realizaron un implante dental y el resultado es sorprendente, se ve completamente natural. La atención durante todo el proceso fue excelente. Gracias por devolverme mi sonrisa.",
    treatment: "Implantología",
  },
  {
    name: "Ana López",
    location: "Santa Fe, CDMX",
    rating: 5,
    avatar: "AL",
    color: "from-amber-400 to-orange-500",
    text: "Trabajé con ellos para mi tratamiento de ortodoncia y los resultados son espectaculares. Super atentos, siempre puntuales y los precios son muy accesibles para la calidad del servicio.",
    treatment: "Ortodoncia",
  },
  {
    name: "Patricia Jiménez",
    location: "Pedregal, CDMX",
    rating: 5,
    avatar: "PJ",
    color: "from-cyan-400 to-sky-500",
    text: "El blanqueamiento superó mis expectativas. Tenía manchas por fluorosis y pensé que no tendrían solución, pero el tratamiento especializado funcionó de maravilla. ¡Estoy feliz con mi sonrisa!",
    treatment: "Blanqueamiento + Fluorosis",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoplay]);

  const prev = () => {
    setAutoplay(false);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setAutoplay(false);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  // Indices visibles (prev, current, next)
  const getCard = (offset: number) => testimonials[(current + offset + testimonials.length) % testimonials.length];

  return (
    <section id="testimonios" className="py-28 bg-background overflow-hidden">
      <div className="container mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold mb-3">
            Testimonios
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5">
            Lo que dicen nuestros{" "}
            <span className="italic" style={{
              background: "linear-gradient(135deg, hsl(215 65% 22%), hsl(215 55% 35%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              pacientes
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Más de 5,000 pacientes nos han confiado su sonrisa. Estas son sus historias reales.
          </p>
          {/* Google rating badge */}
          <div className="inline-flex items-center gap-3 mt-6 rounded-2xl border border-border bg-card px-5 py-3 shadow-card">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm font-bold text-foreground">5.0</span>
            <span className="text-xs text-muted-foreground">en Google Reviews</span>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          {/* Desktop: 3 cards visible */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {[-1, 0, 1].map((offset) => {
              const card = getCard(offset);
              const isCenter = offset === 0;
              return (
                <motion.div
                  key={current + offset}
                  animate={{
                    scale: isCenter ? 1 : 0.94,
                    opacity: isCenter ? 1 : 0.65,
                  }}
                  transition={{ duration: 0.4 }}
                  className={`rounded-3xl p-7 flex flex-col gap-5 transition-all duration-400 ${
                    isCenter
                      ? "bg-gradient-to-br from-navy to-navy-dark shadow-elevated ring-1 ring-gold/20"
                      : "bg-card border border-border shadow-card"
                  }`}
                >
                  {/* Quote icon */}
                  <Quote className={`h-8 w-8 opacity-40 ${isCenter ? "text-gold" : "text-muted-foreground"}`} />

                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(card.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>

                  {/* Review text */}
                  <p className={`text-sm leading-relaxed flex-1 ${isCenter ? "text-white/80" : "text-muted-foreground"}`}>
                    "{card.text}"
                  </p>

                  {/* Treatment tag */}
                  <span className={`inline-block self-start text-xs font-semibold px-3 py-1 rounded-full ${
                    isCenter ? "bg-gold/20 text-gold" : "bg-secondary text-muted-foreground"
                  }`}>
                    {card.treatment}
                  </span>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                    <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${card.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                      {card.avatar}
                    </div>
                    <div>
                      <p className={`text-sm font-bold ${isCenter ? "text-white" : "text-foreground"}`}>{card.name}</p>
                      <p className={`text-xs ${isCenter ? "text-white/50" : "text-muted-foreground"}`}>{card.location}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile: single card */}
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.35 }}
                className="rounded-3xl p-7 bg-gradient-to-br from-navy to-navy-dark shadow-elevated ring-1 ring-gold/20"
              >
                <Quote className="h-8 w-8 text-gold opacity-40 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-sm text-white/80 leading-relaxed mb-5">
                  "{testimonials[current].text}"
                </p>
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gold/20 text-gold mb-5">
                  {testimonials[current].treatment}
                </span>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center text-white text-sm font-bold`}>
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{testimonials[current].name}</p>
                    <p className="text-xs text-white/50">{testimonials[current].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              id="testimonials-prev"
              aria-label="Testimonio anterior"
              className="h-11 w-11 rounded-full border border-border bg-card shadow-card flex items-center justify-center hover:bg-secondary hover:border-navy/20 hover:shadow-elevated transition-all duration-200 group"
            >
              <ChevronLeft className="h-5 w-5 text-muted-foreground group-hover:text-navy transition-colors" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setAutoplay(false); setCurrent(i); }}
                  aria-label={`Testimonio ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 h-2.5 bg-gradient-to-r from-gold to-gold/70"
                      : "w-2.5 h-2.5 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              id="testimonials-next"
              aria-label="Siguiente testimonio"
              className="h-11 w-11 rounded-full border border-border bg-card shadow-card flex items-center justify-center hover:bg-secondary hover:border-navy/20 hover:shadow-elevated transition-all duration-200 group"
            >
              <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-navy transition-colors" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
