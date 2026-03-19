import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-dental.jpg";
import toolsImage from "@/assets/dental-tools.jpg";
import smileImage from "@/assets/smile.jpg";

const images = [
  { src: heroImage, alt: "Consultorio dental moderno", className: "col-span-2 row-span-2" },
  { src: toolsImage, alt: "Instrumentos dentales profesionales", className: "col-span-1 row-span-1" },
  { src: smileImage, alt: "Cuidado dental", className: "col-span-1 row-span-1" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="instalaciones" className="py-24 bg-secondary">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">
            Instalaciones
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestro <span className="italic text-primary">espacio</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Instalaciones en el World Trade Center CDMX, equipadas con tecnología de vanguardia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[250px]"
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={`${img.className} rounded-2xl overflow-hidden shadow-card`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
