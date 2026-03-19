import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/525530460680?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita";

const WhatsAppButton = () => {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar cita por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-white shadow-lg hover:bg-[#1ebe57] transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="h-6 w-6 fill-white" />
      <span className="text-sm font-semibold hidden sm:inline">Agendar cita</span>
    </motion.a>
  );
};

export default WhatsAppButton;
