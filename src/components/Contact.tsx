"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2, Loader2 } from "lucide-react";
import { contact } from "@/data/content";
import Reveal from "./Reveal";
import { submitLead, isLeadFormConfigured } from "@/config/contact";
import { trackEvent } from "@/config/analytics";

type FormState = {
  name: string;
  company: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  phone: "",
  email: "",
  city: "",
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

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    else if (!/^[0-9+\-\s]{8,15}$/.test(form.phone.trim())) e.phone = "Enter a valid phone number";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.service) e.service = "Please select a service";
    if (!form.message.trim()) e.message = "Please add a short message";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError(false);
    trackEvent("lead_form_submit", { source: "contact_page" });
    const result = await submitLead({
      name: form.name,
      phone: form.phone,
      email: form.email || undefined,
      company: form.company || undefined,
      service: form.service,
      message: form.message,
      source: "contact_page",
    });
    setSubmitting(false);
    if (result.ok) {
      setSubmitted(true);
      trackEvent("lead_form_success", { source: "contact_page" });
    } else {
      setSubmitError(true);
      trackEvent("lead_form_error", { source: "contact_page" });
    }
  };

  const update = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <section id="contact" className="relative bg-navy-950 py-24 md:py-28 border-t border-white/5">
      <div className="container-px grid lg:grid-cols-5 gap-12">
        <Reveal className="lg:col-span-2">
          <h2 className="heading-display font-display text-3xl md:text-4xl font-semibold text-white mb-6">
            Reach Us Directly
          </h2>
          <p className="text-white/55 leading-relaxed mb-9">
            Pick whichever channel is fastest for you — call, WhatsApp, email,
            or the form on the right. Our branch network covers seven cities.
          </p>

          <div className="space-y-6">
            <a href={`tel:+91${contact.phones[0]}`} className="flex items-start gap-4 group">
              <span className="w-11 h-11 rounded-sm bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-brand-skyblue" />
              </span>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wide">Call Us</p>
                <p className="text-white group-hover:text-brand-skyblue transition-colors text-[15px]">
                  +91 {contact.phones[0]} / +91 {contact.phones[1]}
                </p>
              </div>
            </a>
            <a href={`mailto:${contact.email}`} className="flex items-start gap-4 group">
              <span className="w-11 h-11 rounded-sm bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-brand-skyblue" />
              </span>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wide">Email Us</p>
                <p className="text-white group-hover:text-brand-skyblue transition-colors text-[15px]">
                  {contact.email}
                </p>
              </div>
            </a>
            <a
              href={`https://wa.me/91${contact.phones[0]}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 group"
            >
              <span className="w-11 h-11 rounded-sm bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <MessageCircle size={18} className="text-emerald-400" />
              </span>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wide">WhatsApp</p>
                <p className="text-white group-hover:text-emerald-400 transition-colors text-[15px]">
                  Chat with our team
                </p>
              </div>
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Avas+Vikas+Colony+Hathras+Uttar+Pradesh+204101"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 group"
            >
              <span className="w-11 h-11 rounded-sm bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-brand-skyblue" />
              </span>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wide">Head Office</p>
                <p className="text-white group-hover:text-brand-skyblue transition-colors text-[15px]">
                  {contact.address}
                </p>
              </div>
            </a>
          </div>

          <div className="mt-9">
            <p className="text-white/40 text-xs uppercase tracking-wide mb-3">Branch Offices</p>
            <div className="flex flex-wrap gap-2">
              {contact.branches.map((b) => (
                <span
                  key={b}
                  className="px-3 py-1.5 rounded-full border border-white/10 text-white/60 text-xs"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-3 card-glass rounded-sm p-7 md:p-9">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <CheckCircle2 size={44} className="text-emerald-400 mb-5" />
              <h3 className="heading-display text-2xl font-semibold text-white mb-3">
                Request Received
              </h3>
              <p className="text-white/55 max-w-sm">
                Thank you, {form.name.split(" ")[0]}. Our team will get back to you
                shortly regarding your {form.service.toLowerCase()} requirement.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm(initialState);
                }}
                className="btn-outline mt-8"
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  label="Full Name *"
                  value={form.name}
                  onChange={update("name")}
                  error={errors.name}
                  placeholder="Your name"
                />
                <Field
                  label="Company"
                  value={form.company}
                  onChange={update("company")}
                  placeholder="Organization name"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  label="Phone *"
                  value={form.phone}
                  onChange={update("phone")}
                  error={errors.phone}
                  placeholder="10-digit mobile number"
                />
                <Field
                  label="Email"
                  value={form.email}
                  onChange={update("email")}
                  error={errors.email}
                  placeholder="you@company.com"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  label="City"
                  value={form.city}
                  onChange={update("city")}
                  placeholder="Your city"
                />
                <div>
                  <label className="text-xs uppercase tracking-wide text-white/50 mb-2 block">
                    Service Required *
                  </label>
                  <select
                    value={form.service}
                    onChange={update("service")}
                    className={`w-full bg-navy-900/60 border rounded-sm px-4 py-3 text-white text-sm outline-none focus:border-brand-skyblue transition-colors ${
                      errors.service ? "border-red-400/60" : "border-white/15"
                    }`}
                  >
                    <option value="" className="bg-navy-900">
                      Select a service
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
              </div>
              <div>
                <label className="text-xs uppercase tracking-wide text-white/50 mb-2 block">
                  Message *
                </label>
                <textarea
                  value={form.message}
                  onChange={update("message")}
                  rows={4}
                  placeholder="Tell us about your requirement — site, headcount, timeline..."
                  className={`w-full bg-navy-900/60 border rounded-sm px-4 py-3 text-white text-sm outline-none focus:border-brand-skyblue transition-colors resize-none ${
                    errors.message ? "border-red-400/60" : "border-white/15"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>
                )}
              </div>
              {submitError && (
                <p className="text-red-400 text-sm">
                  Something went wrong sending your request — please call or
                  WhatsApp us directly using the details on the left.
                </p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full sm:w-auto disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    Sending
                    <Loader2 size={16} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send Request
                    <Send size={16} />
                  </>
                )}
              </button>
              <p className="text-white/30 text-xs pt-1">
                Your information will only be used to respond to your enquiry.
                {!isLeadFormConfigured &&
                  " (Demo form — not yet connected to a backend.)"}
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wide text-white/50 mb-2 block">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full bg-navy-900/60 border rounded-sm px-4 py-3 text-white text-sm outline-none focus:border-brand-skyblue transition-colors ${
          error ? "border-red-400/60" : "border-white/15"
        }`}
      />
      {error && <p className="text-red-400 text-xs mt-1.5">{error}</p>}
    </div>
  );
}
