"use client";

import { useEffect, useState } from "react";
import { X, Send, CheckCircle2, Phone, MessageCircle, Loader2 } from "lucide-react";
import { useQuoteModal } from "./QuoteModalContext";
import { contact } from "@/data/content";
import { submitLead, isLeadFormConfigured } from "@/config/contact";
import { trackEvent } from "@/config/analytics";

type FormState = {
  name: string;
  phone: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  company: "",
  service: "",
  message: "",
};

const services = [
  "Security Services",
  "Housekeeping Services",
  "Manpower Outsourcing",
  "Hospitality Staffing",
  "Payroll Management",
  "Other",
];

export default function QuoteModal() {
  const { open, closeModal } = useQuoteModal();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, closeModal]);

  // Reset the form a moment after the modal fully closes, so it doesn't
  // visibly reset while the close transition is still playing.
  useEffect(() => {
    if (open) return;
    const timer = setTimeout(() => {
      setForm(initialState);
      setErrors({});
      setSubmitted(false);
      setSubmitError(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [open]);

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Name is required";
    // Indian mobile numbers: optional +91/0 prefix, then a 10-digit number
    // starting 6-9; also accepts spaces/hyphens as typed.
    const digitsOnly = form.phone.replace(/[\s\-()]/g, "");
    if (!form.phone.trim()) e.phone = "Phone number is required";
    else if (!/^(\+?91|0)?[6-9]\d{9}$/.test(digitsOnly))
      e.phone = "Enter a valid 10-digit Indian mobile number";
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = "Enter a valid email";
    if (!form.service) e.service = "Please select a service";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError(false);
    const result = await submitLead({
      name: form.name,
      phone: form.phone,
      email: form.email || undefined,
      company: form.company || undefined,
      service: form.service,
      message: form.message || undefined,
      source: "quote_modal",
    });
    setSubmitting(false);
    if (result.ok) {
      setSubmitted(true);
      trackEvent("lead_form_success");
    } else {
      setSubmitError(true);
      trackEvent("lead_form_error");
    }
  };

  const update = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Request a quote"
    >
      <div
        className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm animate-[fadeUp_0.25s_ease]"
        onClick={closeModal}
      />
      <div className="relative w-full max-w-md card-glass !bg-navy-900 rounded-sm p-7 md:p-8 max-h-[90vh] overflow-y-auto animate-[fadeUp_0.3s_ease]">
        <button
          onClick={closeModal}
          aria-label="Close"
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-1"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle2 size={40} className="text-emerald-400 mx-auto mb-4" />
            <h3 className="heading-display text-xl font-semibold text-white mb-2">
              Thank You
            </h3>
            <p className="text-white/55 text-sm mb-6">
              Your enquiry has been received. Our team will call you back shortly.
            </p>
            <button onClick={closeModal} className="btn-primary w-full justify-center">
              Close
            </button>
          </div>
        ) : (
          <>
            <span className="section-label">Quick Enquiry</span>
            <h3 className="heading-display text-xl md:text-2xl font-semibold text-white mt-4 mb-1">
              Request a Consultation
            </h3>
            <p className="text-white/50 text-sm mb-6">
              Tell us what workforce or security support your organization needs.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <input
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Your name *"
                  aria-label="Your name"
                  aria-invalid={!!errors.name}
                  className={`w-full bg-navy-950/60 border rounded-sm px-4 py-3 text-white text-sm outline-none focus:border-brand-skyblue transition-colors ${
                    errors.name ? "border-red-400/60" : "border-white/15"
                  }`}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="Phone *"
                    aria-label="Phone number"
                    aria-invalid={!!errors.phone}
                    className={`w-full bg-navy-950/60 border rounded-sm px-4 py-3 text-white text-sm outline-none focus:border-brand-skyblue transition-colors ${
                      errors.phone ? "border-red-400/60" : "border-white/15"
                    }`}
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1.5">{errors.phone}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    value={form.company}
                    onChange={update("company")}
                    placeholder="Company"
                    aria-label="Company or organization"
                    className="w-full bg-navy-950/60 border border-white/15 rounded-sm px-4 py-3 text-white text-sm outline-none focus:border-brand-skyblue transition-colors"
                  />
                </div>
              </div>
              <div>
                <input
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="Email (optional)"
                  aria-label="Email address"
                  aria-invalid={!!errors.email}
                  className={`w-full bg-navy-950/60 border rounded-sm px-4 py-3 text-white text-sm outline-none focus:border-brand-skyblue transition-colors ${
                    errors.email ? "border-red-400/60" : "border-white/15"
                  }`}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
              </div>
              <div>
                <select
                  value={form.service}
                  onChange={update("service")}
                  aria-label="Service required"
                  aria-invalid={!!errors.service}
                  className={`w-full bg-navy-950/60 border rounded-sm px-4 py-3 text-white text-sm outline-none focus:border-brand-skyblue transition-colors ${
                    errors.service ? "border-red-400/60" : "border-white/15"
                  }`}
                >
                  <option value="" className="bg-navy-900">
                    Service required *
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s} className="bg-navy-900">
                      {s}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.service}</p>
                )}
              </div>
              <textarea
                value={form.message}
                onChange={update("message")}
                rows={2}
                placeholder="Anything else? (optional)"
                aria-label="Additional message"
                className="w-full bg-navy-950/60 border border-white/15 rounded-sm px-4 py-3 text-white text-sm outline-none focus:border-brand-skyblue transition-colors resize-none"
              />

              {submitError && (
                <p className="text-red-400 text-xs">
                  Something went wrong sending your request — please call or WhatsApp us
                  directly using the options below.
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full justify-center disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    Sending
                    <Loader2 size={16} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Request a Quote
                    <Send size={16} />
                  </>
                )}
              </button>
              <p className="text-white/30 text-xs text-center">
                Your information will only be used to respond to your enquiry.
                {!isLeadFormConfigured && " (Demo form — not yet connected to a backend.)"}
              </p>
            </form>

            <div className="flex items-center gap-4 mt-5 pt-5 border-t border-white/10">
              <a
                href={`tel:${contact.phones[0].startsWith("+") ? "" : "+91"}${contact.phones[0]}`}
                onClick={() => trackEvent("phone_click")}
                className="flex items-center gap-1.5 text-white/55 hover:text-white text-xs transition-colors"
              >
                <Phone size={13} className="text-brand-skyblue" />
                Call instead
              </a>
              <a
                href={`https://wa.me/91${contact.phones[0]}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click")}
                className="flex items-center gap-1.5 text-white/55 hover:text-emerald-400 text-xs transition-colors"
              >
                <MessageCircle size={13} className="text-emerald-400" />
                WhatsApp
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
