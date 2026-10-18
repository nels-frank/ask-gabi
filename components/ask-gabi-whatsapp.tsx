"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "234XXXXXXXXXX"; // Replace with Gabriel's number

export default function FloatingAskGabi() {
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setExpanded(true);
      } else if (currentScrollY < previousScrollY - 3) {
        setExpanded(false); // Scrolling up
      } else if (currentScrollY > previousScrollY + 3) {
        setExpanded(true); // Scrolling down
      }

      previousScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const message = encodeURIComponent(
    "Hello ASK GABI, I would like to make an enquiry."
  );

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Ask Gabi on WhatsApp"
      title="Ask Gabi on WhatsApp"
      className="fixed bottom-6 right-5 z-50 inline-flex h-14 items-center justify-center gap-2 border border-white/40 overflow-hidden rounded-full bg-green-950 px-4 font-extrabold text-white shadow-xl transition-all duration-300 ease-in-out hover:bg-emerald-400 hover:shadow-2xl hover:text-[#003d2b] sm:bottom-8 sm:right-8"
    >
      <FaWhatsapp className="h-7 w-7 shrink-0" />

      <span
        className={`whitespace-nowrap text-sm font-bold transition-all duration-300 ${
          expanded
            ? "max-w-28 translate-x-0 opacity-100"
            : "max-w-0 translate-x-2 overflow-hidden opacity-0"
        }`}
      >
        Ask Gabi
      </span>
    </a>
  );
}