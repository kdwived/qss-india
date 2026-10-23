"use client";

import { Phone } from "lucide-react";
import { contact } from "@/data/content";
import { trackEvent } from "@/config/analytics";

export default function WhatsAppButton() {
  const callNumber = contact.phone || "8218451307";
  const whatsappNumber = contact.whatsapp || "9548849619";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 no-print">
      {/* Call Button — Blue */}
      <a
        href={`tel:+91${callNumber}`}
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

      {/* WhatsApp Button — Green */}
      <a
        href={`https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(
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
        <svg
          viewBox="0 0 24 24"
          width="26"
          height="26"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.82 11.82 0 0 0 12.1 0C5.54 0 .2 5.34.2 11.9c0 2.1.55 4.16 1.6 5.97L.1 24l6.3-1.65a11.9 11.9 0 0 0 5.7 1.45h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.49-8.42ZM12.1 21.78a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.52-5.25c0-5.46 4.45-9.9 9.9-9.9a9.84 9.84 0 0 1 7 2.9 9.84 9.84 0 0 1 2.9 7c0 5.45-4.44 9.88-9.9 9.88Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.78-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.71.62.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      </a>
    </div>
  );
}