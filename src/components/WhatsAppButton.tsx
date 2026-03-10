import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,49%)] flex items-center justify-center shadow-[0_0_30px_-5px_hsl(142,70%,49%,0.5)] hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} className="text-background" />
    </a>
  );
};

export default WhatsAppButton;
