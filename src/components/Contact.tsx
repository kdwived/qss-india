"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2, Loader2 } from "lucide-react";
import { contact } from "@/data/content";
import Reveal from "./Reveal";
import { submitLead } from "@/config/contact";
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
  "Government Outsourcing",
  "Hospitality Staffing",
  "Event Security & Bouncers",
  "Office Administration Support",
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
    <section id="contact" className="relative bg-white py-20 md:py-28">
      <div className="container-px grid lg:grid-cols-5 gap-12 items-start">
        {/* Left column: Direct channels */}
        <Reveal className="lg:col-span-2">
          <div className="section-label mb-3">Direct Contact</div>
          <h2 className="heading-display font-display text-3xl md:text-4xl font-bold text-navy-900 mb-5">
            Reach Us Directly
          </h2>
          <p className="text-ink-600 leading-relaxed mb-8 text-sm md:text-base">
            Connect with our operational management directly for immediate site requirements,
            tender quotations, or workforce consultations.
          </p>

          <div className="space-y-4">
            {/* Call */}
            <a
              href={`tel:+91${contact.phone}`}
              className="flex items-start gap-4 p-4 rounded-2xl border border-slate-200 bg-[#f8fbff] transition-all hover:border-brand-blue hover:shadow-sm group"
            >
              <span className="w-11 h-11 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                <Phone size={19} />
              </span>
              <div>
                <p className="text-ink-400 text-[10px] font-bold uppercase tracking-wider">Direct Call</p>
                <p className="text-navy-900 font-bold text-sm md:text-base mt-0.5">
                  +91 {contact.phone}
                </p>
                <p className="text-ink-500 text-xs">Mon–Sun • 24/7 Operations</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/91${contact.whatsapp}?text=${encodeURIComponent("Hi QSS India, I would like to enquire about your services.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 rounded-2xl border border-slate-200 bg-[#f8fbff] transition-all hover:border-emerald-500 hover:shadow-sm group"
            >
              <span className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <MessageCircle size={19} />
              </span>
              <div>
                <p className="text-ink-400 text-[10px] font-bold uppercase tracking-wider">WhatsApp Chat</p>
                <p className="text-navy-900 font-bold text-sm md:text-base mt-0.5">
                  +91 {contact.whatsapp}
                </p>
                <p className="text-ink-500 text-xs">Quick message &amp; document sharing</p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              className="flex items-start gap-4 p-4 rounded-2xl border border-slate-200 bg-[#f8fbff] transition-all hover:border-brand-blue hover:shadow-sm group"
            >
              <span className="w-11 h-11 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                <Mail size={19} />
              </span>
              <div>
                <p className="text-ink-400 text-[10px] font-bold uppercase tracking-wider">Email Support</p>
                <p className="text-navy-900 font-bold text-sm md:text-base mt-0.5">
                  {contact.email}
                </p>
                <p className="text-ink-500 text-xs">Official proposals &amp; RFP submission</p>
              </div>
            </a>

            {/* Head Office */}
            <div className="flex items-start gap-4 p-4 rounded-2xl border border-slate-200 bg-[#f8fbff]">
              <span className="w-11 h-11 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0">
                <MapPin size={19} />
              </span>
              <div>
                <p className="text-ink-400 text-[10px] font-bold uppercase tracking-wider">Head Office</p>
                <p className="text-navy-900 font-semibold text-xs leading-5 mt-0.5">
                  {contact.address}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right column: Form */}
        <Reveal delay={0.1} className="lg:col-span-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 md:p-10 shadow-[0_15px_45px_rgba(15,49,105,0.06)]">
            <h3 className="text-2xl font-bold text-navy-900 mb-2">
              Send Your Service Requirement
            </h3>
            <p className="text-xs text-ink-500 mb-8">
              Fill in the details below and our operations coordinator will review and contact you shortly.
            </p>

            {submitted ? (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 size={30} />
                </div>
                <h4 className="text-xl font-bold text-emerald-900 mb-2">
                  Requirement Received!
                </h4>
                <p className="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto mb-6">
                  Thank you for reaching out to QSS India. Our team will review your requirement and connect with you directly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm(initialState);
                  }}
                  className="rounded-xl bg-brand-blue px-6 py-2.5 text-xs font-bold text-white transition-all hover:bg-blue-700"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 mb-1.5 block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={update("name")}
                      placeholder="e.g. Rajesh Kumar"
                      className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-800 outline-none transition-colors focus:border-brand-blue focus:bg-white ${
                        errors.name ? "border-red-400 bg-red-50/30" : "border-slate-200 bg-[#f8fbff]"
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 mb-1.5 block">
                      Organization / Company
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={update("company")}
                      placeholder="e.g. ABC Industries Ltd."
                      className="w-full rounded-xl border border-slate-200 bg-[#f8fbff] px-4 py-3 text-sm text-slate-800 outline-none transition-colors focus:border-brand-blue focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 mb-1.5 block">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="10-digit mobile number"
                      className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-800 outline-none transition-colors focus:border-brand-blue focus:bg-white ${
                        errors.phone ? "border-red-400 bg-red-50/30" : "border-slate-200 bg-[#f8fbff]"
                      }`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 mb-1.5 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-slate-200 bg-[#f8fbff] px-4 py-3 text-sm text-slate-800 outline-none transition-colors focus:border-brand-blue focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 mb-1.5 block">
                      Site City / Location
                    </label>
                    <input
                      type="text"
                      value={form.city}
                      onChange={update("city")}
                      placeholder="e.g. Lucknow, Noida, Aligarh..."
                      className="w-full rounded-xl border border-slate-200 bg-[#f8fbff] px-4 py-3 text-sm text-slate-800 outline-none transition-colors focus:border-brand-blue focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 mb-1.5 block">
                      Service Required *
                    </label>
                    <select
                      value={form.service}
                      onChange={update("service")}
                      className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-800 outline-none transition-colors focus:border-brand-blue focus:bg-white ${
                        errors.service ? "border-red-400 bg-red-50/30" : "border-slate-200 bg-[#f8fbff]"
                      }`}
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 mb-1.5 block">
                    Message / Deployment Details *
                  </label>
                  <textarea
                    value={form.message}
                    onChange={update("message")}
                    rows={4}
                    placeholder="Describe your site requirement — estimated personnel, shifts, timeline..."
                    className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-800 outline-none transition-colors focus:border-brand-blue focus:bg-white resize-none ${
                      errors.message ? "border-red-400 bg-red-50/30" : "border-slate-200 bg-[#f8fbff]"
                    }`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                {submitError && (
                  <p className="text-red-500 text-xs">
                    Unable to submit at this moment. Please call us directly at +91 {contact.phone}.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-brand-blue px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-blue-700 disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      Sending <Loader2 size={16} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Submit Requirement <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
