import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Play, X, Camera, Video, ZoomIn } from "lucide-react";
import patient1 from "@/assets/Pas1-fotografia profesional.jpeg";
import patient2 from "@/assets/Pas1-sonriendo.jpeg";
import patient4 from "@/assets/Pas1-Before and after.jpeg";

type MediaTab = "fotos" | "videos";

interface PhotoItem {
  type: "photo";
  src: string;
  alt: string;
  label: string;
  span?: string;
}

interface VideoItem {
  type: "video";
  thumbnail: string;
  youtubeId: string;
  title: string;
  duration: string;
  span?: string;
}

type MediaItem = PhotoItem | VideoItem;

// Unsplash URLs por keyword — siempre muestran fotos relevantes
const U = {
  smileWoman1: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=85&fit=crop&crop=face",
  smileWoman2: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=900&q=85&fit=crop&crop=face",
  smileMan1:   "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=900&q=85&fit=crop&crop=face",
  coupleSmile: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=900&q=85&fit=crop",
  clinicChair: "https://images.unsplash.com/photo-1629909615957-be38d48fbbe4?w=900&q=85&fit=crop",
  dentalProc:  "https://images.unsplash.com/photo-1588776814546-1ffbb16f94aa?w=900&q=85&fit=crop",
  smileClose:  "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=900&q=85&fit=crop",
  smileMacro:  "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=900&q=85&fit=crop",
};

const photos: PhotoItem[] = [
  { type: "photo", src: patient4,       alt: "Antes y después — Blanqueamiento Dental real", label: "Antes & Después", span: "md:col-span-2 md:row-span-2" },
  { type: "photo", src: U.smileWoman1,  alt: "Mujer con sonrisa blanca y natural", label: "Sonrisa radiante" },
  { type: "photo", src: patient2,       alt: "Paciente sonriendo tras el tratamiento", label: "Resultado real" },
  { type: "photo", src: U.smileMan1,    alt: "Hombre con sonrisa perfecta y confiada", label: "Paciente satisfecho" },
  { type: "photo", src: U.smileMacro,   alt: "Primer plano de dientes blancos perfectos", label: "Máximo brillo" },
  { type: "photo", src: U.clinicChair,  alt: "Sillón dental moderno de la clínica", label: "Nuestras instalaciones" },
  { type: "photo", src: patient1,       alt: "Paciente en sesión fotográfica profesional", label: "Nuestro paciente" },
  { type: "photo", src: U.coupleSmile,  alt: "Pareja sonriendo con dientes blancos", label: "Familias felices" },
];

const videos: VideoItem[] = [
  {
    type: "video",
    thumbnail: U.smileWoman2,
    youtubeId: "P2Xkq0KQhKc",
    title: "Blanqueamiento Dental Profesional — Proceso completo",
    duration: "3:45",
    span: "md:col-span-2",
  },
  {
    type: "video",
    thumbnail: patient4,
    youtubeId: "8K4mFZsj4Ys",
    title: "Antes y después — Transformación real de nuestros pacientes",
    duration: "2:18",
  },
  {
    type: "video",
    thumbnail: U.dentalProc,
    youtubeId: "KH0n-Cb2dMo",
    title: "Limpieza dental con ultrasonido — ¿Cómo funciona?",
    duration: "4:02",
  },
  {
    type: "video",
    thumbnail: U.clinicChair,
    youtubeId: "P2Xkq0KQhKc",
    title: "Nuestras instalaciones — Tour virtual WTC CDMX",
    duration: "1:55",
  },
];

const MediaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState<MediaTab>("fotos");
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [openVideo, setOpenVideo] = useState<string | null>(null);

  return (
    <section id="multimedia" className="py-28 bg-secondary overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold mb-3">
            Galería Multimedia
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5">
            Resultados{" "}
            <span className="italic" style={{
              background: "linear-gradient(135deg, hsl(215 65% 22%), hsl(215 55% 35%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              reales
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Conoce las transformaciones de nuestros pacientes. Fotos y videos auténticos de tratamientos realizados en nuestra clínica.
          </p>

          {/* Tabs */}
          <div className="inline-flex items-center gap-1 mt-8 rounded-2xl bg-card border border-border p-1.5 shadow-card">
            <button
              id="tab-fotos"
              onClick={() => setActiveTab("fotos")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === "fotos"
                  ? "bg-gradient-to-r from-navy to-navy-light text-white shadow-soft"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Camera className="h-4 w-4" />
              Fotografías
            </button>
            <button
              id="tab-videos"
              onClick={() => setActiveTab("videos")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === "videos"
                  ? "bg-gradient-to-r from-navy to-navy-light text-white shadow-soft"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Video className="h-4 w-4" />
              Videos
            </button>
          </div>
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === "fotos" ? (
            <motion.div
              key="fotos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[180px] md:auto-rows-[220px]"
            >
              {photos.map((photo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`${photo.span ?? ""} relative group rounded-2xl overflow-hidden shadow-card cursor-pointer`}
                  onClick={() => setLightbox({ src: photo.src, alt: photo.alt })}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-600"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm font-semibold">{photo.label}</span>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="h-4 w-4 text-white" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="videos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              {videos.map((video, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`${video.span ?? ""} group relative rounded-2xl overflow-hidden shadow-card cursor-pointer bg-card border border-border`}
                  onClick={() => setOpenVideo(video.youtubeId)}
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-navy-dark/40 group-hover:bg-navy-dark/20 transition-colors duration-300" />
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/95 shadow-elevated flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-6 w-6 text-navy ml-1 fill-navy" />
                      </div>
                    </div>
                    {/* Duration badge */}
                    <div className="absolute bottom-3 right-3 rounded-lg bg-navy-dark/80 backdrop-blur-sm px-2.5 py-1 text-xs font-bold text-white">
                      {video.duration}
                    </div>
                  </div>
                  {/* Info */}
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-navy transition-colors duration-200 leading-snug">
                      {video.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1.5">
                      <Video className="h-3 w-3" />
                      Blanqueamiento Dental Center CDMX
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox — Photos */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy-dark/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-elevated"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox.src} alt={lightbox.alt} className="w-full h-full object-contain" />
              <button
                onClick={() => setLightbox(null)}
                id="lightbox-close"
                aria-label="Cerrar imagen"
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {openVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy-dark/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setOpenVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-elevated bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${openVideo}?autoplay=1&rel=0`}
                  title="Video de tratamiento dental"
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
              <button
                onClick={() => setOpenVideo(null)}
                id="video-modal-close"
                aria-label="Cerrar video"
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MediaSection;
