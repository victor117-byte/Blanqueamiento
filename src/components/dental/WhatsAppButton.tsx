import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { trackEvent } from "@/lib/analytics";
import { WHATSAPP_URL } from "@/lib/site";

const WhatsAppButton = () => {
  return (
    <div
      className="fixed right-6 z-50 flex flex-col items-end gap-2"
      style={{ bottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))" }}
    >
      {/* Ping rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-[ping-slow_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-60" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-[ping-slow_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-30" style={{ animationDelay: "0.5s" }} />

      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
        id="whatsapp-float-btn"
        onClick={() => {
          trackEvent("whatsapp_click", { location: "floating_button" });
          trackEvent("cta_agendar_click", { location: "floating_button" });
        }}
        className="relative flex items-center gap-2.5 rounded-full bg-[#25D366] px-5 py-3.5 text-white shadow-[0_8px_32px_hsl(145_63%_42%/0.45)] hover:bg-[#1ebe57] hover:shadow-[0_8px_40px_hsl(145_63%_42%/0.55)] transition-all duration-300"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 220, damping: 18 }}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.93 }}
      >
        <MessageCircle className="h-5 w-5 fill-white flex-shrink-0" />
        <span className="text-sm font-bold hidden sm:inline">Escríbenos por WhatsApp</span>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
