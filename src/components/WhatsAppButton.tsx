"use client";

import { MessageCircle } from "lucide-react";
import { contact } from "@/data/content";
import { trackEvent } from "@/config/analytics";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/91${contact.phones[0]}?text=${encodeURIComponent(
        "Hi QSS India, I'd like to enquire about your services."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with QSS India on WhatsApp"
      onClick={() => trackEvent("whatsapp_click", { location: "floating_button" })}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-900/40 transition-all duration-300 hover:scale-110"
    >
      <MessageCircle size={26} className="text-white" fill="white" />
    </a>
  );
}
