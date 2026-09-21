"use client";

import { useEffect, useRef } from "react";
import { useQuoteModal } from "./QuoteModalContext";

const ENGAGEMENT_DELAY_MS = 45_000; // fallback timed trigger, desktop only

/**
 * Invisible logic component — no UI of its own. Watches for exit-intent
 * (cursor leaving toward the top of the viewport, desktop only, where a
 * mouse is present) or a generous engagement delay, and opens the SAME
 * QuoteModal used by every other CTA on the site — not a second, separate
 * popup — so there is only ever one lead-capture component to maintain.
 *
 * Fires at most ONCE per browser session (tracked in QuoteModalProvider
 * via sessionStorage): if the visitor already opened the form manually,
 * dismissed an auto-prompt, or submitted it, this never interrupts them
 * again until they close the tab and come back.
 */
export default function ExitIntentPrompt() {
  const { openModal, hasBeenShown, open } = useQuoteModal();
  const firedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return; // exit-intent only makes sense with a real cursor

    const maybeFire = () => {
      if (firedRef.current || hasBeenShown()) return;
      firedRef.current = true;
      openModal({ source: "exit_intent" });
    };

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) maybeFire();
    };

    window.addEventListener("mouseout", onMouseLeave);
    const timer = setTimeout(maybeFire, ENGAGEMENT_DELAY_MS);

    return () => {
      window.removeEventListener("mouseout", onMouseLeave);
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // stop the engagement timer if the visitor already interacted with the
  // modal some other way in the meantime
  useEffect(() => {
    if (open) firedRef.current = true;
  }, [open]);

  return null;
}
