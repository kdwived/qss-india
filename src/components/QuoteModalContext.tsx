"use client";

import { createContext, useCallback, useContext, useState } from "react";

const SESSION_KEY = "qss_lead_modal_seen";

type OpenOptions = { source?: string };

type QuoteModalContextValue = {
  open: boolean;
  /** True once the modal has been shown at least once this session —
   *  used by ExitIntentPrompt to avoid ever auto-triggering twice. */
  hasBeenShown: () => boolean;
  openModal: (opts?: OpenOptions) => void;
  closeModal: () => void;
};

const QuoteModalContext = createContext<QuoteModalContextValue | null>(null);

export function QuoteModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const hasBeenShown = useCallback(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem(SESSION_KEY) === "1";
  }, []);

  const openModal = useCallback((opts?: OpenOptions) => {
    setOpen(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(SESSION_KEY, "1");
    }
    // Analytics: which CTA/trigger opened the form (event name only, no PII)
    import("@/config/analytics").then(({ trackEvent }) => {
      trackEvent("lead_form_open", opts?.source ? { source: opts.source } : undefined);
    });
  }, []);

  const closeModal = useCallback(() => setOpen(false), []);

  return (
    <QuoteModalContext.Provider value={{ open, hasBeenShown, openModal, closeModal }}>
      {children}
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const ctx = useContext(QuoteModalContext);
  if (!ctx) throw new Error("useQuoteModal must be used within QuoteModalProvider");
  return ctx;
}
