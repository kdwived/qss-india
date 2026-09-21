// ============================================================================
// QSS INDIA — CONTENT SOURCE OF TRUTH
// All facts below are drawn directly from the client-supplied documents:
//   1. QSS India Manpower Outsourcing Services — Business Presentation (30pp)
//   2. QSS India Company Profile (19pp)
// Where the two documents disagreed on a figure, the Business Presentation
// value was used per client instruction (e.g. "300+ security personnel").
// No statistics, clients, certifications or testimonials have been invented.
// ============================================================================

export const company = {
  name: "QSS India",
  fullName: "QSS India Manpower Outsourcing Services",
  tagline: "Professional Workforce Solutions",
  established: "Trusted Excellence Since 1999",
  headline: "PROFESSIONAL WORKFORCE. SECURITY YOU CAN TRUST.",
  subheadline:
    "Integrated manpower, security, housekeeping and facility support solutions for organizations across India.",
};

export const contact = {
  email: "qssindia4@gmail.com",
  phones: ["9319580926", "8218451307"],
  address: "2/58-59, Avas Vikas Colony, Near Water Tank, Hathras, Uttar Pradesh - 204101",
  addressShort: "Hathras, Uttar Pradesh",
  branches: ["Aligarh", "Mathura", "Lucknow", "Meerut", "Delhi", "Uttarakhand"],
};

// Headline stats — sourced from the Business Presentation (priority source)
export const stats = [
  { value: 25, suffix: "+", label: "Years of Excellence" },
  { value: 1800, suffix: "+", label: "Workforce Deployed" },
  { value: 300, suffix: "+", label: "Trained Security Personnel" },
  { value: 100, suffix: "+", label: "Client Locations" },
  { value: 7, suffix: "", label: "Operating Locations" },
];

export const vision =
  "To become India's most trusted manpower service provider, setting benchmarks in workforce quality, operational excellence, and customer satisfaction across all sectors.";

export const mission =
  "Provide reliable, affordable, and high-quality manpower outsourcing solutions that support organizational growth, ensure compliance, and create sustainable employment opportunities.";

export const coreValues = [
  "Professionalism",
  "Integrity",
  "Quality Service",
  "Client Centricity",
  "Compliance First",
];

export const about = {
  paragraphs: [
    "QSS India Manpower Outsourcing Services is a well-established provider of manpower solutions with a strong focus on housekeeping, hospitality, security services, and skilled and semi-skilled manpower.",
    "With over 25 years of experience, we have built a reputation for delivering high-quality services to both government and private sector clients across a diverse range of industries.",
    "Headquartered in Hathras, Uttar Pradesh, with branch offices in Aligarh, Mathura, Lucknow, Meerut, Delhi, and Uttarakhand — managing 1,800+ housekeeping and outsourced staff and 300+ trained security personnel deployed at 100+ client locations.",
  ],
};

// Nature of Business — the six core verticals (Business Presentation, p.4)
export const businessVerticals = [
  {
    title: "Manpower Outsourcing",
    description:
      "End-to-end staffing solutions for government and private organizations across all sectors.",
  },
  {
    title: "Security Services",
    description:
      "Trained guards, bouncers, supervisors, event security, and crowd management.",
  },
  {
    title: "Housekeeping Solutions",
    description:
      "Corporate, industrial, hospital, and commercial facility cleaning services.",
  },
  {
    title: "Hospitality Management",
    description:
      "Front-office, pantry services, reception, and customer support staff.",
  },
  {
    title: "Payroll Management",
    description:
      "Complete statutory compliance, ESI, EPF, salary processing, and labor law adherence.",
  },
  {
    title: "Administrative Support",
    description:
      "Computer operators, office assistants, supervisors, and technical staff.",
  },
];

// Security Services detail (Business Presentation, p.10)
export const securityServices = [
  {
    title: "Trained Security Guards",
    description: "PSARA-certified personnel for all security requirements and asset protection.",
    image: "/images/security/team-lineup-01.jpg",
  },
  {
    title: "Bouncers & VIP Security",
    description: "Trained professionals for events, clubs, and high-profile protection.",
    image: "/images/security/event-security-01.jpg",
  },
  {
    title: "Residential Security",
    description: "Gate management, patrol services, visitor verification for societies.",
    image: "/images/security/residential-team-01.jpg",
  },
  {
    title: "Commercial Security",
    description: "Office buildings, malls, warehouses, 24/7 surveillance support.",
    image: "/images/security/team-outdoor-01.jpg",
  },
  {
    title: "Event Security Management",
    description: "Crowd control, access management, emergency response teams.",
    image: "/images/security/team-lineup-02.jpg",
  },
  {
    title: "Industrial Security",
    description: "Factory perimeter security, asset protection, safety protocol enforcement.",
    image: "/images/security/guard-solo-01.jpg",
  },
];

// Housekeeping detail (Business Presentation, p.9)
export const housekeepingServices = [
  {
    title: "Corporate Housekeeping",
    description: "Daily cleaning, floor maintenance, waste management for offices.",
  },
  {
    title: "Industrial Cleaning",
    description: "Factory floor cleaning, machinery area maintenance, safety compliance.",
  },
  {
    title: "Commercial Maintenance",
    description: "Malls, retail spaces, common area upkeep and sanitization.",
  },
  {
    title: "Hospital Hygiene",
    description: "Sanitization, infection control, medical waste management.",
  },
];

// Hospitality & Support (Business Presentation, p.11)
export const hospitalityServices = [
  { title: "Front Office Staff", description: "Professional receptionists, visitor management, call handling." },
  { title: "Pantry Services", description: "Trained pantry staff, beverage service, kitchen assistance." },
  { title: "Administrative Staff", description: "Office assistants, data entry operators, file management." },
  { title: "Reception Management", description: "Welcome desk operations, appointment scheduling, guest coordination." },
  { title: "Customer Support", description: "Help desk staff, inquiry handling, complaint resolution." },
  { title: "Operational Assistance", description: "Mailroom management, courier coordination, supply management." },
];

// Skilled & Semi-Skilled Workforce (Business Presentation, p.12)
export const workforceCategories = [
  "Technical Staff",
  "Computer Operators",
  "Support Staff",
  "Industrial Manpower",
  "Supervisors",
  "Custom Recruitment",
];

// Operational / Client Servicing Process (Business Presentation p.13-14 & Profile p.4)
export const processSteps = [
  { title: "Requirement Analysis", description: "Understanding client needs, site conditions and staffing scope." },
  { title: "Recruitment", description: "Sourcing and screening candidates suited to the deployment." },
  { title: "Verification", description: "Police verification and medical checkup of shortlisted personnel." },
  { title: "Training", description: "40+ hours of induction covering skills, safety and client etiquette." },
  { title: "Uniform & ID", description: "Uniforming and identity issuance ahead of deployment." },
  { title: "Deployment", description: "Staff mobilized to the client site per the agreed roster." },
  { title: "Monitoring", description: "Daily supervision, attendance tracking and performance checks." },
  { title: "Client Feedback", description: "Structured feedback loop and complaint resolution." },
  { title: "Continuous Improvement", description: "Training refreshers and process optimization." },
];

// Illustrative Mobilization Framework (Profile — "Work Plan")
export const mobilizationTimeline = [
  { days: "Day 1–3", title: "Kickoff" },
  { days: "Day 4–10", title: "Recruitment" },
  { days: "Day 11–15", title: "Verification" },
  { days: "Day 16–20", title: "Training" },
  { days: "Day 21–25", title: "Deployment" },
  { days: "Day 26–30", title: "Stabilization" },
];

// Online Management System (Profile, p.5-6)
export const omsFeatures = [
  {
    title: "Employee Management",
    items: ["Digital registration", "Police verification", "Training records"],
  },
  {
    title: "Attendance Management",
    items: ["GPS / Biometric / QR attendance", "Shift-wise reports", "Overtime monitoring"],
  },
  {
    title: "Duty & Shift Management",
    items: ["Duty roster", "Supervisor assignment", "Replacement management"],
  },
  {
    title: "Payroll Management",
    items: ["Salary processing", "PF / ESI", "Payslips", "Bank transfer reports"],
  },
  {
    title: "Compliance",
    items: ["PF, ESI, GST", "PSARA", "Labour law compliance"],
  },
  {
    title: "Client Dashboard",
    items: ["Attendance", "MIS Reports", "Complaint status", "Invoices"],
  },
  {
    title: "Complaint Management",
    items: ["Online ticket", "Resolution tracking", "Feedback"],
  },
  {
    title: "Reporting",
    items: ["Daily / Monthly MIS", "Incident reports", "Performance reports"],
  },
];

export const omsBenefits = ["Real-time monitoring", "Paperless reporting", "24x7 support", "Transparency"];

export const omsWorkflow = [
  "Requirement",
  "Work Order",
  "Recruitment",
  "Verification",
  "Training",
  "Uniform & ID",
  "Deployment",
  "Attendance",
  "Monitoring",
  "Client Feedback",
  "MIS",
  "Payroll & Compliance",
  "Continuous Improvement",
];

// Compliance & Certifications (Business Presentation p.16 / Profile registration page)
export const compliance = [
  { label: "PSARA License", value: "PSA/L/74/UP/2022/SEP/3/797" },
  { label: "GST Registration", value: "09AAAFQ1712F1ZN" },
  { label: "PAN Number", value: "AAAFQ1712F" },
  { label: "ESI Registration", value: "21000518060001002" },
  { label: "EPF Registration", value: "EPF/SRO/AGRA/ENF/UP/59814" },
  { label: "Labor License", value: "UPCLAL15000792" },
  { label: "TAN Number", value: "MRTQ00244G" },
];

// Competitive Advantages (Business Presentation p.17)
export const advantages = [
  { title: "25+ Years Experience", description: "A quarter-century track record in manpower outsourcing and facility management." },
  { title: "Professional Workforce", description: "Rigorous training, background verification, and continuous skill development programs." },
  { title: "Regulatory Compliance", description: "Complete adherence to PF, ESI, GST, PSARA and labour law requirements." },
  { title: "Customized Solutions", description: "Flexible service packages tailored to client requirements and budget." },
  { title: "Multi-City Presence", description: "Operations across 7 locations in Uttar Pradesh, Delhi and Uttarakhand." },
  { title: "End-to-End Management", description: "From recruitment to payroll to compliance — single point solution." },
];

// Target Clients (Business Presentation p.19)
export const targetClients = [
  "Government Departments",
  "Hospitals & Healthcare",
  "Educational Institutions",
  "Industries & Manufacturing",
  "Corporate Offices",
  "Commercial Buildings",
];

// Services overview list (Profile — "Our Services")
export const servicesOverview = [
  "Govt. Outsourcing Services",
  "Security Services",
  "Hospitality Services",
  "Corporate & Domestic Housekeeping",
  "Skilled / Semi-Skilled Manpower",
  "Event Security",
  "Residential & Commercial Security",
  "Office Administration Support",
  "Payroll Management",
  "Housekeeping Services",
];

export const galleryImages = [
  { src: "/images/security/team-lineup-01.jpg", category: "Security Team", alt: "QSS India security team on deployment" },
  { src: "/images/security/event-security-01.jpg", category: "Event Security", alt: "QSS India event security personnel at a function" },
  { src: "/images/hospitality/resort-team-01.jpg", category: "Hospitality", alt: "QSS India hospitality and security staff at a resort lobby" },
  { src: "/images/security/team-outdoor-01.jpg", category: "Security Team", alt: "QSS India security team standing in formation outdoors" },
  { src: "/images/gallery/team-group-01.jpg", category: "Team Moments", alt: "QSS India team group photograph at a public event" },
  { src: "/images/security/residential-team-01.jpg", category: "Residential Security", alt: "QSS India security team at a residential deployment" },
  { src: "/images/hospitality/hotel-deployment-01.jpg", category: "Hospitality", alt: "QSS India security team stationed at a hotel entrance" },
  { src: "/images/security/team-lineup-02.jpg", category: "Client Locations", alt: "QSS India security team at a client commercial site" },
  { src: "/images/security/guard-solo-01.jpg", category: "Security Team", alt: "QSS India trained security guard on duty" },
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Security", href: "/security" },
  { label: "Manpower", href: "/manpower" },
  { label: "Process", href: "/process" },
  { label: "Technology", href: "/technology" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const faqs = [
  {
    q: "Is QSS India PSARA licensed?",
    a: `Yes. QSS India holds an active PSARA license (${compliance[0].value}), along with GST, PAN, ESI, EPF, Labour License and TAN registrations — all listed on our Compliance section.`,
  },
  {
    q: "Which cities does QSS India operate in?",
    a: `We are headquartered in Hathras, Uttar Pradesh, with branch offices in ${contact.branches.join(", ")}.`,
  },
  {
    q: "What kind of training do your staff receive?",
    a: "Every worker undergoes 40+ hours of induction training covering skill development, safety protocols, client etiquette and compliance awareness before deployment, plus monthly refresher programs.",
  },
  {
    q: "Do you serve government as well as private clients?",
    a: "Yes — QSS India has a long-standing history of working with both government/public sector organizations and private companies, tailoring solutions to each sector's regulatory and operational requirements.",
  },
  {
    q: "How does the QSS Online Management System help clients?",
    a: "The OMS gives clients a live dashboard for attendance, MIS reports, complaint status and invoices, backed by GPS/biometric/QR attendance tracking and digital payroll and compliance management on our end.",
  },
  {
    q: "How quickly can QSS India mobilize staff for a new site?",
    a: "Our illustrative mobilization framework runs roughly 30 days from kickoff to stabilization — recruitment, verification, training and uniforming — though actual timelines depend on headcount and role complexity.",
  },
];
