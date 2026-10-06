"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  X,
  Send,
  CheckCircle2,
  Phone,
  MessageCircle,
  Loader2,
  ShieldCheck,
} from "lucide-react";

import { useQuoteModal } from "./QuoteModalContext";
import { contact } from "@/data/content";
import {
  submitLead,
  isLeadFormConfigured,
} from "@/config/contact";
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
  "Government Outsourcing",
  "Office Administration Support",
  "Event Security",
  "Other",
];

export default function QuoteModal() {
  const { open, closeModal } = useQuoteModal();

  const [form, setForm] =
    useState<FormState>(initialState);

  const [errors, setErrors] =
    useState<
      Partial<Record<keyof FormState, string>>
    >({});

  const [submitted, setSubmitted] =
    useState(false);

  const [submitting, setSubmitting] =
    useState(false);

  const [submitError, setSubmitError] =
    useState(false);

  /* =====================================================
     ESC + BODY SCROLL
  ====================================================== */

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", onKey);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener(
        "keydown",
        onKey
      );

      document.body.style.overflow = "";
    };
  }, [open, closeModal]);

  /* =====================================================
     RESET AFTER CLOSE
  ====================================================== */

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

  /* =====================================================
     VALIDATION
  ====================================================== */

  const validate = () => {
    const newErrors: Partial<
      Record<keyof FormState, string>
    > = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    const digitsOnly =
      form.phone.replace(/[\s\-()]/g, "");

    if (!form.phone.trim()) {
      newErrors.phone =
        "Phone number is required";
    } else if (
      !/^(\+?91|0)?[6-9]\d{9}$/.test(
        digitsOnly
      )
    ) {
      newErrors.phone =
        "Enter a valid 10-digit Indian mobile number";
    }

    if (
      form.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        form.email.trim()
      )
    ) {
      newErrors.email =
        "Enter a valid email";
    }

    if (!form.service) {
      newErrors.service =
        "Please select a service";
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors).length === 0
    );
  };

  /* =====================================================
     SUBMIT
  ====================================================== */

  const handleSubmit = async (
    event: React.FormEvent
  ) => {
    event.preventDefault();

    if (!validate()) return;

    setSubmitting(true);
    setSubmitError(false);

    const result = await submitLead({
      name: form.name,
      phone: form.phone,
      email:
        form.email || undefined,
      company:
        form.company || undefined,
      service: form.service,
      message:
        form.message || undefined,
      source: "quote_modal",
    });

    setSubmitting(false);

    if (result.ok) {
      setSubmitted(true);

      trackEvent(
        "lead_form_success"
      );
    } else {
      setSubmitError(true);

      trackEvent(
        "lead_form_error"
      );
    }
  };

  const update =
    (key: keyof FormState) =>
    (
      event: React.ChangeEvent<
        | HTMLInputElement
        | HTMLSelectElement
        | HTMLTextAreaElement
      >
    ) =>
      setForm((current) => ({
        ...current,
        [key]: event.target.value,
      }));

  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0
        z-[110]
        flex
        items-center
        justify-center
        p-3
        sm:p-4
      "
      role="dialog"
      aria-modal="true"
      aria-label="Request a quote"
    >
      {/* ================================================
          BACKDROP
      ================================================= */}

      <div
        className="
          absolute inset-0
          bg-[#071a3d]/55
          backdrop-blur-md
          animate-[fadeUp_0.2s_ease]
        "
        onClick={closeModal}
      />

      {/* ================================================
          MODAL
      ================================================= */}

      <div
        className="
          relative
          w-full
          max-w-[520px]
          max-h-[92vh]
          overflow-y-auto
          rounded-[28px]
          border border-blue-100
          bg-white
          shadow-[0_35px_100px_rgba(7,26,61,0.28)]
          animate-[fadeUp_0.3s_ease]
        "
      >
        {/* TOP BLUE ACCENT */}

        <div
          className="
            h-[5px]
            w-full
            bg-gradient-to-r
            from-[#123d94]
            via-[#2563eb]
            to-[#60a5fa]
          "
        />

        {/* CLOSE */}

        <button
          onClick={closeModal}
          aria-label="Close"
          className="
            absolute
            right-4
            top-5
            z-20
            flex
            h-9 w-9
            items-center
            justify-center
            rounded-full
            border border-slate-200
            bg-white
            text-slate-500
            shadow-sm
            transition-all
            hover:border-blue-200
            hover:bg-blue-50
            hover:text-brand-blue
          "
        >
          <X size={18} />
        </button>

        {/* ==============================================
            HEADER / LOGO
        =============================================== */}

        <div
          className="
            border-b
            border-blue-100
            bg-[#f8fbff]
            px-5
            py-5
            sm:px-7
            md:px-8
          "
        >
          <div
            className="
              flex
              items-center
              gap-3.5
              pr-12
            "
          >
            {/* LOGO — VISIBLE ON ALL DEVICES */}

            <div
              className="
                flex
                h-[58px]
                w-[62px]
                flex-shrink-0
                items-center
                justify-center
                rounded-xl
                border border-blue-100
                bg-white
                p-1.5
                shadow-sm
              "
            >
              <Image
                src="/images/logo/qss-logo.png"
                alt="QSS India logo"
                width={62}
                height={58}
                priority
                className="
                  h-full
                  w-full
                  object-contain
                "
              />
            </div>

            <div className="min-w-0">
              <div
                className="
                  font-display
                  text-[17px]
                  font-bold
                  uppercase
                  tracking-[0.05em]
                  text-brand-blue
                  sm:text-lg
                "
              >
                QSS INDIA
              </div>

              <div
                className="
                  mt-1
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-slate-500
                  sm:text-[10px]
                "
              >
                Quick Security Services India
              </div>
            </div>
          </div>
        </div>

        {/* ==============================================
            BODY
        =============================================== */}

        <div
          className="
            px-5
            py-6
            sm:px-7
            md:px-8
            md:py-7
          "
        >
          {submitted ? (
            /* =========================================
               SUCCESS
            ========================================== */

            <div
              className="
                py-8
                text-center
              "
            >
              <div
                className="
                  mx-auto
                  mb-5
                  flex h-16 w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-emerald-50
                  text-emerald-600
                "
              >
                <CheckCircle2
                  size={34}
                />
              </div>

              <div
                className="
                  mb-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-brand-blue
                "
              >
                Enquiry Received
              </div>

              <h3
                className="
                  heading-display
                  mb-3
                  text-2xl
                  font-bold
                  text-navy-900
                  md:text-3xl
                "
              >
                Thank You
              </h3>

              <p
                className="
                  mx-auto
                  mb-7
                  max-w-sm
                  text-sm
                  leading-6
                  text-slate-500
                "
              >
                Your enquiry has been
                received. Our team will
                review your requirement
                and contact you shortly.
              </p>

              <button
                onClick={closeModal}
                className="
                  btn-primary
                  w-full
                  !rounded-xl
                  justify-center
                "
              >
                Close
              </button>
            </div>
          ) : (
            <>
              {/* =========================================
                  INTRO
              ========================================== */}

              <div className="mb-6">
                <div
                  className="
                    mb-3
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-brand-blue
                  "
                >
                  <ShieldCheck
                    size={15}
                  />

                  Quick Enquiry
                </div>

                <h3
                  className="
                    heading-display
                    mb-2
                    text-2xl
                    font-bold
                    text-navy-900
                    md:text-[28px]
                  "
                >
                  Request a Consultation
                </h3>

                <p
                  className="
                    max-w-md
                    text-sm
                    leading-6
                    text-slate-500
                  "
                >
                  Tell us what security,
                  manpower or facility
                  support your organisation
                  requires.
                </p>
              </div>

              {/* =========================================
                  FORM
              ========================================== */}

              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-4"
              >
                {/* NAME */}

                <div>
                  <label
                    htmlFor="quote-name"
                    className="
                      mb-1.5
                      block
                      text-xs
                      font-semibold
                      text-slate-700
                    "
                  >
                    Full Name *
                  </label>

                  <input
                    id="quote-name"
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Enter your name"
                    aria-invalid={
                      !!errors.name
                    }
                    className={`
                      w-full
                      rounded-xl
                      border
                      bg-white
                      px-4
                      py-3.5
                      text-sm
                      text-navy-900
                      placeholder:text-slate-400
                      outline-none
                      transition-all
                      focus:ring-4
                      focus:ring-blue-100

                      ${
                        errors.name
                          ? "border-red-300 focus:border-red-400"
                          : "border-slate-200 focus:border-brand-blue"
                      }
                    `}
                  />

                  {errors.name && (
                    <p
                      className="
                        mt-1.5
                        text-xs
                        text-red-500
                      "
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* PHONE + COMPANY */}

                <div
                  className="
                    grid gap-4
                    sm:grid-cols-2
                  "
                >
                  <div>
                    <label
                      htmlFor="quote-phone"
                      className="
                        mb-1.5
                        block
                        text-xs
                        font-semibold
                        text-slate-700
                      "
                    >
                      Phone Number *
                    </label>

                    <input
                      id="quote-phone"
                      type="tel"
                      value={form.phone}
                      onChange={update(
                        "phone"
                      )}
                      placeholder="10-digit mobile"
                      aria-invalid={
                        !!errors.phone
                      }
                      className={`
                        w-full
                        rounded-xl
                        border
                        bg-white
                        px-4
                        py-3.5
                        text-sm
                        text-navy-900
                        placeholder:text-slate-400
                        outline-none
                        transition-all
                        focus:ring-4
                        focus:ring-blue-100

                        ${
                          errors.phone
                            ? "border-red-300 focus:border-red-400"
                            : "border-slate-200 focus:border-brand-blue"
                        }
                      `}
                    />

                    {errors.phone && (
                      <p
                        className="
                          mt-1.5
                          text-xs
                          text-red-500
                        "
                      >
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="quote-company"
                      className="
                        mb-1.5
                        block
                        text-xs
                        font-semibold
                        text-slate-700
                      "
                    >
                      Company
                    </label>

                    <input
                      id="quote-company"
                      type="text"
                      value={form.company}
                      onChange={update(
                        "company"
                      )}
                      placeholder="Organisation"
                      className="
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        px-4
                        py-3.5
                        text-sm
                        text-navy-900
                        placeholder:text-slate-400
                        outline-none
                        transition-all
                        focus:border-brand-blue
                        focus:ring-4
                        focus:ring-blue-100
                      "
                    />
                  </div>
                </div>

                {/* EMAIL */}

                <div>
                  <label
                    htmlFor="quote-email"
                    className="
                      mb-1.5
                      block
                      text-xs
                      font-semibold
                      text-slate-700
                    "
                  >
                    Email Address
                  </label>

                  <input
                    id="quote-email"
                    type="email"
                    value={form.email}
                    onChange={update(
                      "email"
                    )}
                    placeholder="name@company.com"
                    aria-invalid={
                      !!errors.email
                    }
                    className={`
                      w-full
                      rounded-xl
                      border
                      bg-white
                      px-4
                      py-3.5
                      text-sm
                      text-navy-900
                      placeholder:text-slate-400
                      outline-none
                      transition-all
                      focus:ring-4
                      focus:ring-blue-100

                      ${
                        errors.email
                          ? "border-red-300 focus:border-red-400"
                          : "border-slate-200 focus:border-brand-blue"
                      }
                    `}
                  />

                  {errors.email && (
                    <p
                      className="
                        mt-1.5
                        text-xs
                        text-red-500
                      "
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* SERVICE */}

                <div>
                  <label
                    htmlFor="quote-service"
                    className="
                      mb-1.5
                      block
                      text-xs
                      font-semibold
                      text-slate-700
                    "
                  >
                    Service Required *
                  </label>

                  <select
                    id="quote-service"
                    value={form.service}
                    onChange={update(
                      "service"
                    )}
                    aria-invalid={
                      !!errors.service
                    }
                    className={`
                      w-full
                      rounded-xl
                      border
                      bg-white
                      px-4
                      py-3.5
                      text-sm
                      text-navy-900
                      outline-none
                      transition-all
                      focus:ring-4
                      focus:ring-blue-100

                      ${
                        errors.service
                          ? "border-red-300 focus:border-red-400"
                          : "border-slate-200 focus:border-brand-blue"
                      }
                    `}
                  >
                    <option value="">
                      Select a service
                    </option>

                    {services.map(
                      (service) => (
                        <option
                          key={service}
                          value={service}
                        >
                          {service}
                        </option>
                      )
                    )}
                  </select>

                  {errors.service && (
                    <p
                      className="
                        mt-1.5
                        text-xs
                        text-red-500
                      "
                    >
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* MESSAGE */}

                <div>
                  <label
                    htmlFor="quote-message"
                    className="
                      mb-1.5
                      block
                      text-xs
                      font-semibold
                      text-slate-700
                    "
                  >
                    Requirement Details
                  </label>

                  <textarea
                    id="quote-message"
                    value={form.message}
                    onChange={update(
                      "message"
                    )}
                    rows={3}
                    placeholder="Tell us about manpower strength, location, shifts or other requirements..."
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      px-4
                      py-3.5
                      text-sm
                      text-navy-900
                      placeholder:text-slate-400
                      outline-none
                      transition-all
                      focus:border-brand-blue
                      focus:ring-4
                      focus:ring-blue-100
                    "
                  />
                </div>

                {/* ERROR */}

                {submitError && (
                  <div
                    className="
                      rounded-xl
                      border border-red-100
                      bg-red-50
                      px-4 py-3
                      text-xs
                      leading-5
                      text-red-600
                    "
                  >
                    Something went wrong while
                    sending your request.
                    Please call or WhatsApp us
                    using the options below.
                  </div>
                )}

                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={submitting}
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-brand-blue
                    px-5
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_10px_25px_rgba(30,64,175,0.22)]
                    transition-all
                    hover:-translate-y-[1px]
                    hover:bg-blue-700
                    disabled:pointer-events-none
                    disabled:opacity-60
                  "
                >
                  {submitting ? (
                    <>
                      Sending
                      <Loader2
                        size={16}
                        className="animate-spin"
                      />
                    </>
                  ) : (
                    <>
                      Request a Quote
                      <Send size={16} />
                    </>
                  )}
                </button>

                {/* PRIVACY */}

                <p
                  className="
                    text-center
                    text-[10px]
                    leading-5
                    text-slate-400
                  "
                >
                  Your information will only be
                  used to respond to your enquiry.
                  {!isLeadFormConfigured &&
                    " Demo form — backend connection pending."}
                </p>
              </form>

              {/* =========================================
                  QUICK CONTACT
              ========================================== */}

              <div
                className="
                  mt-6
                  grid
                  grid-cols-2
                  gap-3
                  border-t
                  border-slate-200
                  pt-5
                "
              >
                {/* CALL */}

                <a
                  href={`tel:${
                    contact.phones[0].startsWith(
                      "+"
                    )
                      ? ""
                      : "+91"
                  }${contact.phones[0]}`}
                  onClick={() =>
                    trackEvent(
                      "phone_click"
                    )
                  }
                  className="
                    group
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-blue-200
                    bg-blue-50
                    px-3
                    py-3
                    text-xs
                    font-semibold
                    text-brand-blue
                    transition-all
                    hover:border-brand-blue
                    hover:bg-brand-blue
                    hover:text-white
                  "
                >
                  <Phone
                    size={15}
                    className="
                      transition-colors
                    "
                  />

                  Call Now
                </a>

                {/* WHATSAPP */}

                <a
                  href={`https://wa.me/91${contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent(
                      "whatsapp_click"
                    )
                  }
                  className="
                    group
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-emerald-200
                    bg-emerald-50
                    px-3
                    py-3
                    text-xs
                    font-semibold
                    text-emerald-700
                    transition-all
                    hover:border-emerald-500
                    hover:bg-emerald-500
                    hover:text-white
                  "
                >
                  <MessageCircle
                    size={15}
                  />

                  WhatsApp
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}