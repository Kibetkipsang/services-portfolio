// src/components/WhatsAppButton.tsx
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";

export function WhatsAppButton() {
  const message = `Hi! I'm interested in your services at ${siteConfig.name}. Can you please share more information?`;
  const url = `${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
  
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-green-500 to-green-600 text-white p-3 sm:p-4 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.3)] hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)] transition-all duration-200 group"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
    </motion.a>
  );
}