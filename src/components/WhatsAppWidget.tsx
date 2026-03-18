import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppWidget = () => (
  <a
    href="https://wa.me/1234567890"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
  >
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-card text-foreground px-4 py-2 rounded-2xl shadow-lg border border-border text-sm font-medium opacity-0 md:group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block"
    >
      We're here to help!
    </motion.div>
    <div className="bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
      <MessageCircle size={24} />
    </div>
  </a>
);

export default WhatsAppWidget;
