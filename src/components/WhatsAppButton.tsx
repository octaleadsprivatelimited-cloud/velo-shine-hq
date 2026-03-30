import { motion } from "framer-motion";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/919676031464?text=Hi%20Velociwash!%20I'd%20like%20to%20know%20more%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
      aria-label="Chat on WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-14 h-14" />
    </motion.a>
  );
};

export default WhatsAppButton;
