"use client";

import { MessageCircle, Phone } from "lucide-react";
import { contact } from "@/data/content";
import { trackEvent } from "@/config/analytics";

export default function WhatsAppButton() {
  const phone = contact.phones[0];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Call Button */}
      <a
        href={`tel:+91${phone}`}
        aria-label="Call QSS India"
        onClick={() =>
          trackEvent("phone_click", {
            location: "floating_button",
          })
        }
        className="
          group
          flex h-14 w-14
          items-center justify-center
          rounded-full
          bg-brand-blue
          text-white
          shadow-[0_10px_30px_rgba(30,64,175,0.35)]
          transition-all duration-300
          hover:scale-110
          hover:bg-blue-700
        "
      >
        <Phone size={24} />
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/91${phone}?text=${encodeURIComponent(
          "Hi QSS India, I'd like to enquire about your services."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with QSS India on WhatsApp"
        onClick={() =>
          trackEvent("whatsapp_click", {
            location: "floating_button",
          })
        }
        className="
          group
          flex h-14 w-14
          items-center justify-center
          rounded-full
          bg-emerald-500
          text-white
          shadow-[0_10px_30px_rgba(6,78,59,0.35)]
          transition-all duration-300
          hover:scale-110
          hover:bg-emerald-400
        "
      >
        <MessageCircle
          size={26}
          fill="currentColor"
        />
      </a>
    </div>
  );
}