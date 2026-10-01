"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

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
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent text-brand-bg shadow-lg transition hover:scale-110"
        >
          <FiArrowUp size={22} />
        </button>
      )}

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