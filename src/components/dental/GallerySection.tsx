import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import equipoTecnologia from "@/assets/equipo-tecnologia.webp";
import limpiezaUltrasonido from "@/assets/limpieza-ultrasonido.webp";
import paciente1Dientes from "@/assets/paciente-1-dientes.webp";
import paciente2Dientes from "@/assets/paciente-2-dientes.webp";
import videoAntesDespues from "@/assets/video-antes-despues.mp4";
import videoPoster from "@/assets/video-antes-despues-poster.webp";
import { ADDRESS_INSTALACIONES_1, ADDRESS_INSTALACIONES_2, MAPS_PLACE_URL } from "@/lib/site";

const images = [
  { src: equipoTecnologia, alt: "Instrumental de ultrasonido de última generación", label: "Tecnología de vanguardia" },
  { src: limpiezaUltrasonido, alt: "Antes y después de limpieza dental con ultrasonido", label: "Limpieza profesional" },
  { src: paciente1Dientes, alt: "Antes y después de blanqueamiento dental en CDMX — paciente real", label: "Resultado real" },
  { src: paciente2Dientes, alt: "Resultado de estética dental — sonrisa antes y después", label: "Sonrisa renovada" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="instalaciones" className="py-28 bg-secondary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold mb-3">
            Instalaciones y Resultados
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5">
            Nuestro{" "}
            <span className="italic" style={{
              background: "linear-gradient(135deg, hsl(228 61% 23%), hsl(228 50% 37%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              espacio
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Instalaciones de primer nivel en el World Trade Center CDMX, equipadas con tecnología de vanguardia.
          </p>
          <p className="text-foreground font-medium mt-5 leading-relaxed">
            {ADDRESS_INSTALACIONES_1}
            <br />
            {ADDRESS_INSTALACIONES_2}
          </p>
          <a
            href={MAPS_PLACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-4 text-sm font-semibold text-navy hover:text-gold transition-colors"
          >
            Ver en Maps →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[160px] md:auto-rows-[220px]"
        >
          {/* Video: transformación real, tile destacado */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="col-span-2 relative group rounded-2xl overflow-hidden shadow-card ring-1 ring-border/50"
          >
            {isInView ? (
              <video
                src={videoAntesDespues}
                poster={videoPoster}
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Video de transformación real: antes y después de blanqueamiento dental"
              />
            ) : (
              <img
                src={videoPoster}
                alt="Video de transformación real: antes y después de blanqueamiento dental"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-navy-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
              <span className="text-white text-sm font-semibold">Transformación real en video</span>
            </div>
          </motion.div>

          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              className="relative group rounded-2xl overflow-hidden shadow-card ring-1 ring-border/50"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-600"
                loading="lazy"
                decoding="async"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-navy-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                <span className="text-white text-sm font-semibold">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
