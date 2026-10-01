"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import { AnimatePresence, motion } from "motion/react";

// Country code + number, no "+", no spaces, no leading 0
const whatsappNumber = "923001234567";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowTop(window.scrollY > 400);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

   return (
    <>
      {/* Back to top: bottom right */}
     <AnimatePresence>
  {showTop && (
    <motion.button
      key="top"
      onClick={scrollToTop}
      aria-label="Back to top"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent text-brand-bg shadow-lg"
    >
      <FiArrowUp size={22} />
    </motion.button>
  )}
</AnimatePresence>

      {/* WhatsApp: bottom left */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=Hello%20TaskFlow`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-110"
      >
        <FaWhatsapp size={26} />
      </a>
    </>
  );
}