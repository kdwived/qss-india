"use client";

import { useState } from "react";
import {
  Shield, Users, Home, Briefcase, ChevronRight,
  CheckCircle2, Loader2, Upload, UserCheck
} from "lucide-react";
import { submitLead } from "@/config/contact";
import { trackEvent } from "@/config/analytics";

const jobCategories = [
  { icon: <Shield size={18} />, title: "Security Guard", desc: "Uniformed security at client premises, gate duty, patrolling and access control." },
  { icon: <UserCheck size={18} />, title: "Security Supervisor", desc: "Team supervision, shift management and daily reporting at deployment sites." },
  { icon: <Home size={18} />, title: "Housekeeping Staff", desc: "Cleaning, sanitation and facility maintenance across offices, hospitals and industries." },
  { icon: <Users size={18} />, title: "Skilled Manpower", desc: "Technical and trade-specific roles across industrial and government deployments." },
  { icon: <Users size={18} />, title: "Semi-Skilled Manpower", desc: "Support roles in operations, logistics and facility management." },
  { icon: <Briefcase size={18} />, title: "Office Administration", desc: "Data entry, reception, computer operations and general administrative support." },
  { icon: <Shield size={18} />, title: "Field Supervisor", desc: "On-ground supervision of deployed teams with daily attendance and compliance reporting." },
  { icon: <Users size={18} />, title: "Hospitality Support", desc: "Front-desk, pantry, reception and customer support roles at hospitality clients." },
];

const processSteps = [
  { step: "01", label: "Apply Online", desc: "Submit your application with resume and details." },
  { step: "02", label: "Screening", desc: "Our HR team reviews your application and calls shortlisted candidates." },
  { step: "03", label: "Verification", desc: "Police verification, reference check and document verification." },
  { step: "04", label: "Interview", desc: "Structured interview at our nearest office location." },
  { step: "05", label: "Training", desc: "40+ hours of induction training before deployment." },
  { step: "06", label: "Deployment", desc: "Assignment to a client site with full uniform and ID issuance." },
];

type FormData = {
  name: string; mobile: string; email: string; city: string; state: string;
  position: string; experience: string; qualification: string;
  preferredLocation: string; message: string; consent: boolean;
};

const initial: FormData = {
  name: "", mobile: "", email: "", city: "", state: "",
  position: "", experience: "", qualification: "",
  preferredLocation: "", message: "", consent: false,
};

export default function CareerPage() {
  const [form, setForm] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const update = (key: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((err) => ({ ...err, [key]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) e.name = "Full name is required";
    const digits = form.mobile.replace(/[\s\-()]/g, "");
    if (!form.mobile.trim()) e.mobile = "Mobile number is required";
    else if (!/^(\+?91|0)?[6-9]\d{9}$/.test(digits)) e.mobile = "Enter a valid 10-digit mobile number";
    if (!form.city.trim()) e.city = "City is required";
    if (!form.position) e.position = "Please select a position";
    if (!form.consent) e.consent = "Please accept the consent to proceed";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError(false);
    const result = await submitLead({
      name: form.name,
      phone: form.mobile,
      email: form.email || undefined,
      company: `${form.city}, ${form.state}`,
      service: `Career: ${form.position}`,
      message: `Exp: ${form.experience} | Qual: ${form.qualification} | Preferred: ${form.preferredLocation}\n${form.message}`,
      source: "career_page",
    });
    setSubmitting(false);
    if (result.ok) {
      setSubmitted(true);
      trackEvent("career_form_success");
    } else {
      setSubmitError(true);
    }
  };

  return (
    <main className="pt-[calc(4rem+2.5rem)] md:pt-[calc(5rem+2.5rem)]">
      {/* Hero */}
      <section className="bg-section-blue py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} aria-hidden="true" />
        <div className="container-px relative text-center">
          <div className="section-label justify-center mb-4 text-blue-200">Join Our Team</div>
          <h1 className="font-display text-3xl md:text-5xl xl:text-6xl font-bold text-white heading-display mb-5">
            Build Your Career<br />
            <span className="text-blue-200">With QSS India</span>
          </h1>
          <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Be part of a trusted team of over 1,800 professionals delivering security,
            manpower and facility solutions across North India. We offer stable employment,
            professional training and growth opportunities.
          </p>
        </div>
      </section>

      {/* Job Categories */}
      <section className="bg-section-light py-20 md:py-24">
        <div className="container-px">
          <div className="text-center mb-12">
            <div className="section-label justify-center mb-4">Open Positions</div>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-navy-900 heading-display">
              Available Role Categories
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {jobCategories.map((job) => (
              <div key={job.title} className="card-light p-5 flex flex-col gap-3">
                <div className="icon-wrapper-blue">{job.icon}</div>
                <h3 className="font-semibold text-navy-900 text-sm">{job.title}</h3>
                <p className="text-ink-500 text-xs leading-relaxed">{job.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="bg-section-white py-20 md:py-24">
        <div className="container-px">
          <div className="text-center mb-12">
            <div className="section-label justify-center mb-4">How It Works</div>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-navy-900 heading-display">
              Our Recruitment Process
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {processSteps.map((step, i) => (
              <div key={step.step} className="text-center p-4">
                <div className="w-14 h-14 rounded-full bg-brand-blue text-white font-bold text-lg flex items-center justify-center mx-auto mb-3 shadow-blue font-display heading-display">
                  {step.step}
                </div>
                <h3 className="font-semibold text-navy-900 text-sm mb-1">{step.label}</h3>
                <p className="text-ink-400 text-xs leading-relaxed">{step.desc}</p>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:flex justify-end items-center absolute" aria-hidden="true">
                    <ChevronRight className="text-brand-skyblue" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="bg-section-pale py-20 md:py-28">
        <div className="container-px">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="section-label justify-center mb-4">Apply Now</div>
              <h2 className="font-display text-2xl md:text-4xl font-bold text-navy-900 heading-display mb-3">
                Submit Your Application
              </h2>
              <p className="text-ink-500 text-sm">
                Fill in the details below and our HR team will contact shortlisted candidates.
              </p>
            </div>

            {submitted ? (
              <div className="card-light p-12 text-center">
                <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-navy-900 heading-display mb-2">
                  Application Submitted!
                </h3>
                <p className="text-ink-500 text-sm mb-6 max-w-md mx-auto">
                  Thank you for your interest in joining QSS India. Our HR team will
                  review your application and reach out to shortlisted candidates.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(initial); }}
                  className="btn-outline"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="card-light p-8 md:p-10 space-y-5"
                aria-label="Career application form"
              >
                {/* Row 1 */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="car-name" className="form-label">Full Name *</label>
                    <input id="car-name" type="text" className={`form-input ${errors.name ? "border-red-400" : ""}`}
                      value={form.name} onChange={update("name")} placeholder="Your full name" aria-required="true" />
                    {errors.name && <p className="form-error">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="car-mobile" className="form-label">Mobile Number *</label>
                    <input id="car-mobile" type="tel" className={`form-input ${errors.mobile ? "border-red-400" : ""}`}
                      value={form.mobile} onChange={update("mobile")} placeholder="10-digit mobile number" aria-required="true" />
                    {errors.mobile && <p className="form-error">{errors.mobile}</p>}
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="car-email" className="form-label">Email Address</label>
                    <input id="car-email" type="email" className="form-input"
                      value={form.email} onChange={update("email")} placeholder="your@email.com (optional)" />
                  </div>
                  <div>
                    <label htmlFor="car-position" className="form-label">Position Applying For *</label>
                    <select id="car-position" className={`form-input ${errors.position ? "border-red-400" : ""}`}
                      value={form.position} onChange={update("position")} aria-required="true">
                      <option value="">Select a position</option>
                      {jobCategories.map((j) => (
                        <option key={j.title} value={j.title}>{j.title}</option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                    {errors.position && <p className="form-error">{errors.position}</p>}
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="car-city" className="form-label">City *</label>
                    <input id="car-city" type="text" className={`form-input ${errors.city ? "border-red-400" : ""}`}
                      value={form.city} onChange={update("city")} placeholder="Your city" aria-required="true" />
                    {errors.city && <p className="form-error">{errors.city}</p>}
                  </div>
                  <div>
                    <label htmlFor="car-state" className="form-label">State</label>
                    <input id="car-state" type="text" className="form-input"
                      value={form.state} onChange={update("state")} placeholder="State" />
                  </div>
                  <div>
                    <label htmlFor="car-preferred" className="form-label">Preferred Location</label>
                    <input id="car-preferred" type="text" className="form-input"
                      value={form.preferredLocation} onChange={update("preferredLocation")} placeholder="Hathras / Aligarh / Delhi..." />
                  </div>
                </div>

                {/* Row 4 */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="car-exp" className="form-label">Experience</label>
                    <select id="car-exp" className="form-input" value={form.experience} onChange={update("experience")}>
                      <option value="">Select experience level</option>
                      <option value="Fresher">Fresher</option>
                      <option value="0-1 years">0–1 years</option>
                      <option value="1-3 years">1–3 years</option>
                      <option value="3-5 years">3–5 years</option>
                      <option value="5+ years">5+ years</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="car-qual" className="form-label">Qualification</label>
                    <select id="car-qual" className="form-input" value={form.qualification} onChange={update("qualification")}>
                      <option value="">Select qualification</option>
                      <option value="Below 10th">Below 10th</option>
                      <option value="10th Pass">10th Pass</option>
                      <option value="12th Pass">12th Pass</option>
                      <option value="Graduate">Graduate</option>
                      <option value="Post Graduate">Post Graduate</option>
                      <option value="Diploma / ITI">Diploma / ITI</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="car-message" className="form-label">Additional Information</label>
                  <textarea id="car-message" className="form-input resize-none" rows={3}
                    value={form.message} onChange={update("message")}
                    placeholder="Any additional information you'd like to share (optional)" />
                </div>

                {/* Resume upload note */}
                <div className="p-4 bg-brand-pale border border-brand-soft rounded-xl flex items-start gap-3">
                  <Upload size={16} className="text-brand-blue mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <p className="text-ink-600 text-xs leading-relaxed">
                    <strong>Resume:</strong> To share your resume, please email it to{" "}
                    <a href="mailto:qssindia4@gmail.com" className="text-brand-blue underline">
                      qssindia4@gmail.com
                    </a>{" "}
                    with your name and position in the subject line.
                  </p>
                </div>

                {/* Consent */}
                <div>
                  <label className={`flex items-start gap-3 cursor-pointer ${errors.consent ? "text-red-600" : "text-ink-600"}`}>
                    <input
                      type="checkbox"
                      className="mt-0.5 w-4 h-4 rounded border-surface-border text-brand-blue"
                      checked={form.consent}
                      onChange={update("consent")}
                      aria-required="true"
                    />
                    <span className="text-xs leading-relaxed">
                      I consent to QSS India storing and processing my personal information
                      for the purpose of evaluating this career application. *
                    </span>
                  </label>
                  {errors.consent && <p className="form-error mt-1">{errors.consent}</p>}
                </div>

                {submitError && (
                  <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                    Submission failed. Please try again or email us directly at{" "}
                    <a href="mailto:qssindia4@gmail.com" className="underline">qssindia4@gmail.com</a>.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full justify-center !py-4 !text-sm disabled:opacity-60"
                >
                  {submitting ? (
                    <><Loader2 size={18} className="animate-spin" /> Submitting…</>
                  ) : (
                    <>Submit Application <ChevronRight size={18} /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
