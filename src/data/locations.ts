/**
 * ============================================================================
 * QSS INDIA — LOCATIONS & UTTAR PRADESH DISTRICTS DATA
 * ============================================================================
 * Official complete list of all 75 districts of Uttar Pradesh organized
 * by regions (Western UP, Central UP, Eastern UP, Bundelkhand, Rohilkhand).
 * Includes verified branch offices and dynamic metadata generator.
 * ============================================================================
 */

export type RegionKey =
  | "western-up"
  | "central-up"
  | "eastern-up"
  | "bundelkhand"
  | "rohilkhand";

export type DistrictInfo = {
  name: string;
  slug: string;
  region: RegionKey;
  regionName: string;
  aliases?: string[];
  headquarters?: string;
  description?: string;
};

export type VerifiedOffice = {
  city: string;
  region: string;
  type: string;
  title: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  isHeadOffice?: boolean;
};

export const verifiedOffices: VerifiedOffice[] = [
  {
    city: "Hathras",
    region: "Uttar Pradesh",
    type: "Head Office",
    title: "Head Office — Hathras",
    address:
      "2/58-59, Avas Vikas Colony, Near Water Tank, Hathras, Uttar Pradesh - 204101",
    phone: "+91 8218451307",
    whatsapp: "+91 9548849619",
    email: "qssindia4@gmail.com",
    isHeadOffice: true,
  },
  {
    city: "Delhi / NCR",
    region: "Delhi NCR",
    type: "Branch Office",
    title: "Delhi / NCR Office",
    address:
      "Spacelance, A-19, Ground Floor, FIEE Complex, Okhla Industrial Area Phase - 2, New Delhi, India - 110020",
    phone: "+91 8218451307",
    whatsapp: "+91 9548849619",
    email: "qssindia4@gmail.com",
  },
  {
    city: "Lucknow",
    region: "Uttar Pradesh",
    type: "Branch Office",
    title: "Lucknow Office",
    address:
      "Shop No. 5, Krishna Nagar, Kanpur Road, Lucknow, Uttar Pradesh",
    phone: "+91 8218451307",
    whatsapp: "+91 9548849619",
    email: "qssindia4@gmail.com",
  },
  {
    city: "Uttarakhand",
    region: "Uttarakhand",
    type: "Branch Office",
    title: "Uttarakhand / UK Office",
    address:
      "Quick Security Services India, Parashar Bhawan, Nagla Chauraha, Near Maal Godaam, Railway Station, Kichha, Udham Singh Nagar, Uttarakhand - 263148",
    phone: "+91 8218451307",
    whatsapp: "+91 9548849619",
    email: "qssindia4@gmail.com",
  },
];

export const regions: Record<RegionKey, { name: string; description: string }> = {
  "western-up": {
    name: "Western UP",
    description: "Industrial hubs, NCR corridors, educational institutions and commercial centers.",
  },
  "central-up": {
    name: "Central UP",
    description: "State capital administrative belt, industrial zones and institutional hubs.",
  },
  "eastern-up": {
    name: "Eastern UP (Purvanchal)",
    description: "Major cultural, commercial, healthcare and administrative centers.",
  },
  "bundelkhand": {
    name: "Bundelkhand",
    description: "Infrastructure projects, power installations and historical commercial corridors.",
  },
  rohilkhand: {
    name: "Rohilkhand",
    description: "Agro-industrial hubs, commercial corridors and educational centers.",
  },
};

/**
 * All 75 official districts of Uttar Pradesh without omission or duplication.
 */
export const upDistricts: DistrictInfo[] = [
  // --- WESTERN UP (18 districts) ---
  { name: "Agra", slug: "agra", region: "western-up", regionName: "Western UP", headquarters: "Agra" },
  { name: "Aligarh", slug: "aligarh", region: "western-up", regionName: "Western UP", headquarters: "Aligarh" },
  { name: "Baghpat", slug: "baghpat", region: "western-up", regionName: "Western UP", headquarters: "Baghpat" },
  { name: "Bulandshahr", slug: "bulandshahr", region: "western-up", regionName: "Western UP", headquarters: "Bulandshahr" },
  { name: "Etah", slug: "etah", region: "western-up", regionName: "Western UP", headquarters: "Etah" },
  { name: "Firozabad", slug: "firozabad", region: "western-up", regionName: "Western UP", headquarters: "Firozabad" },
  {
    name: "Gautam Buddha Nagar",
    slug: "gautam-buddha-nagar",
    region: "western-up",
    regionName: "Western UP",
    aliases: ["noida", "greater-noida"],
    headquarters: "Greater Noida",
  },
  { name: "Ghaziabad", slug: "ghaziabad", region: "western-up", regionName: "Western UP", headquarters: "Ghaziabad" },
  { name: "Hapur", slug: "hapur", region: "western-up", regionName: "Western UP", headquarters: "Hapur" },
  { name: "Hathras", slug: "hathras", region: "western-up", regionName: "Western UP", headquarters: "Hathras" },
  { name: "Kasganj", slug: "kasganj", region: "western-up", regionName: "Western UP", headquarters: "Kasganj" },
  { name: "Mainpuri", slug: "mainpuri", region: "western-up", regionName: "Western UP", headquarters: "Mainpuri" },
  { name: "Mathura", slug: "mathura", region: "western-up", regionName: "Western UP", headquarters: "Mathura" },
  { name: "Meerut", slug: "meerut", region: "western-up", regionName: "Western UP", headquarters: "Meerut" },
  { name: "Muzaffarnagar", slug: "muzaffarnagar", region: "western-up", regionName: "Western UP", headquarters: "Muzaffarnagar" },
  { name: "Saharanpur", slug: "saharanpur", region: "western-up", regionName: "Western UP", headquarters: "Saharanpur" },
  { name: "Shamli", slug: "shamli", region: "western-up", regionName: "Western UP", headquarters: "Shamli" },
  { name: "Sambhal", slug: "sambhal", region: "western-up", regionName: "Western UP", headquarters: "Sambhal" },

  // --- ROHILKHAND (8 districts) ---
  { name: "Amroha", slug: "amroha", region: "rohilkhand", regionName: "Rohilkhand", headquarters: "Amroha" },
  { name: "Bareilly", slug: "bareilly", region: "rohilkhand", regionName: "Rohilkhand", headquarters: "Bareilly" },
  { name: "Budaun", slug: "budaun", region: "rohilkhand", regionName: "Rohilkhand", headquarters: "Budaun" },
  { name: "Bijnor", slug: "bijnor", region: "rohilkhand", regionName: "Rohilkhand", headquarters: "Bijnor" },
  { name: "Moradabad", slug: "moradabad", region: "rohilkhand", regionName: "Rohilkhand", headquarters: "Moradabad" },
  { name: "Pilibhit", slug: "pilibhit", region: "rohilkhand", regionName: "Rohilkhand", headquarters: "Pilibhit" },
  { name: "Rampur", slug: "rampur", region: "rohilkhand", regionName: "Rohilkhand", headquarters: "Rampur" },
  { name: "Shahjahanpur", slug: "shahjahanpur", region: "rohilkhand", regionName: "Rohilkhand", headquarters: "Shahjahanpur" },

  // --- CENTRAL UP (15 districts) ---
  { name: "Auraiya", slug: "auraiya", region: "central-up", regionName: "Central UP", headquarters: "Auraiya" },
  { name: "Ayodhya", slug: "ayodhya", region: "central-up", regionName: "Central UP", headquarters: "Ayodhya" },
  { name: "Barabanki", slug: "barabanki", region: "central-up", regionName: "Central UP", headquarters: "Barabanki" },
  { name: "Etawah", slug: "etawah", region: "central-up", regionName: "Central UP", headquarters: "Etawah" },
  { name: "Farrukhabad", slug: "farrukhabad", region: "central-up", regionName: "Central UP", headquarters: "Fatehgarh" },
  { name: "Fatehpur", slug: "fatehpur", region: "central-up", regionName: "Central UP", headquarters: "Fatehpur" },
  { name: "Hardoi", slug: "hardoi", region: "central-up", regionName: "Central UP", headquarters: "Hardoi" },
  { name: "Kannauj", slug: "kannauj", region: "central-up", regionName: "Central UP", headquarters: "Kannauj" },
  { name: "Kanpur Dehat", slug: "kanpur-dehat", region: "central-up", regionName: "Central UP", headquarters: "Akbarpur" },
  { name: "Kanpur Nagar", slug: "kanpur-nagar", region: "central-up", regionName: "Central UP", headquarters: "Kanpur" },
  { name: "Lakhimpur Kheri", slug: "lakhimpur-kheri", region: "central-up", regionName: "Central UP", headquarters: "Kheri" },
  { name: "Lucknow", slug: "lucknow", region: "central-up", regionName: "Central UP", headquarters: "Lucknow" },
  { name: "Raebareli", slug: "raebareli", region: "central-up", regionName: "Central UP", headquarters: "Raebareli" },
  { name: "Sitapur", slug: "sitapur", region: "central-up", regionName: "Central UP", headquarters: "Sitapur" },
  { name: "Unnao", slug: "unnao", region: "central-up", regionName: "Central UP", headquarters: "Unnao" },

  // --- EASTERN UP / PURVANCHAL (27 districts) ---
  { name: "Ambedkar Nagar", slug: "ambedkar-nagar", region: "eastern-up", regionName: "Eastern UP", headquarters: "Akbarpur" },
  { name: "Amethi", slug: "amethi", region: "eastern-up", regionName: "Eastern UP", headquarters: "Gauriganj" },
  { name: "Azamgarh", slug: "azamgarh", region: "eastern-up", regionName: "Eastern UP", headquarters: "Azamgarh" },
  { name: "Bahraich", slug: "bahraich", region: "eastern-up", regionName: "Eastern UP", headquarters: "Bahraich" },
  { name: "Ballia", slug: "ballia", region: "eastern-up", regionName: "Eastern UP", headquarters: "Ballia" },
  { name: "Balrampur", slug: "balrampur", region: "eastern-up", regionName: "Eastern UP", headquarters: "Balrampur" },
  { name: "Basti", slug: "basti", region: "eastern-up", regionName: "Eastern UP", headquarters: "Basti" },
  { name: "Bhadohi", slug: "bhadohi", region: "eastern-up", regionName: "Eastern UP", headquarters: "Gyanpur" },
  { name: "Chandauli", slug: "chandauli", region: "eastern-up", regionName: "Eastern UP", headquarters: "Chandauli" },
  { name: "Deoria", slug: "deoria", region: "eastern-up", regionName: "Eastern UP", headquarters: "Deoria" },
  { name: "Ghazipur", slug: "ghazipur", region: "eastern-up", regionName: "Eastern UP", headquarters: "Ghazipur" },
  { name: "Gonda", slug: "gonda", region: "eastern-up", regionName: "Eastern UP", headquarters: "Gonda" },
  { name: "Gorakhpur", slug: "gorakhpur", region: "eastern-up", regionName: "Eastern UP", headquarters: "Gorakhpur" },
  { name: "Jaunpur", slug: "jaunpur", region: "eastern-up", regionName: "Eastern UP", headquarters: "Jaunpur" },
  { name: "Kaushambi", slug: "kaushambi", region: "eastern-up", regionName: "Eastern UP", headquarters: "Manjhanpur" },
  { name: "Kushinagar", slug: "kushinagar", region: "eastern-up", regionName: "Eastern UP", headquarters: "Padrauna" },
  { name: "Maharajganj", slug: "maharajganj", region: "eastern-up", regionName: "Eastern UP", headquarters: "Maharajganj" },
  { name: "Mau", slug: "mau", region: "eastern-up", regionName: "Eastern UP", headquarters: "Mau" },
  { name: "Mirzapur", slug: "mirzapur", region: "eastern-up", regionName: "Eastern UP", headquarters: "Mirzapur" },
  { name: "Pratapgarh", slug: "pratapgarh", region: "eastern-up", regionName: "Eastern UP", headquarters: "Pratapgarh" },
  { name: "Prayagraj", slug: "prayagraj", region: "eastern-up", regionName: "Eastern UP", aliases: ["allahabad"], headquarters: "Prayagraj" },
  { name: "Sant Kabir Nagar", slug: "sant-kabir-nagar", region: "eastern-up", regionName: "Eastern UP", headquarters: "Khalilabad" },
  { name: "Shravasti", slug: "shravasti", region: "eastern-up", regionName: "Eastern UP", headquarters: "Bhinga" },
  { name: "Siddharthnagar", slug: "siddharthnagar", region: "eastern-up", regionName: "Eastern UP", headquarters: "Navgarh" },
  { name: "Sonbhadra", slug: "sonbhadra", region: "eastern-up", regionName: "Eastern UP", headquarters: "Robertsganj" },
  { name: "Sultanpur", slug: "sultanpur", region: "eastern-up", regionName: "Eastern UP", headquarters: "Sultanpur" },
  { name: "Varanasi", slug: "varanasi", region: "eastern-up", regionName: "Eastern UP", headquarters: "Varanasi" },

  // --- BUNDELKHAND (7 districts) ---
  { name: "Banda", slug: "banda", region: "bundelkhand", regionName: "Bundelkhand", headquarters: "Banda" },
  { name: "Chitrakoot", slug: "chitrakoot", region: "bundelkhand", regionName: "Bundelkhand", headquarters: "Chitrakoot" },
  { name: "Hamirpur", slug: "hamirpur", region: "bundelkhand", regionName: "Bundelkhand", headquarters: "Hamirpur" },
  { name: "Jalaun", slug: "jalaun", region: "bundelkhand", regionName: "Bundelkhand", headquarters: "Orai" },
  { name: "Jhansi", slug: "jhansi", region: "bundelkhand", regionName: "Bundelkhand", headquarters: "Jhansi" },
  { name: "Lalitpur", slug: "lalitpur", region: "bundelkhand", regionName: "Bundelkhand", headquarters: "Lalitpur" },
  { name: "Mahoba", slug: "mahoba", region: "bundelkhand", regionName: "Bundelkhand", headquarters: "Mahoba" },
];

/**
 * Fast lookup map by slug (including aliases like 'noida' or 'allahabad').
 */
export const districtBySlug: Record<string, DistrictInfo> = {};
upDistricts.forEach((d) => {
  districtBySlug[d.slug] = d;
  if (d.aliases) {
    d.aliases.forEach((alias) => {
      districtBySlug[alias] = d;
    });
  }
});

/**
 * Grouped districts by region for mega menu presentation.
 */
export const districtsByRegion: Record<RegionKey, DistrictInfo[]> = {
  "western-up": upDistricts.filter((d) => d.region === "western-up"),
  rohilkhand: upDistricts.filter((d) => d.region === "rohilkhand"),
  "central-up": upDistricts.filter((d) => d.region === "central-up"),
  "eastern-up": upDistricts.filter((d) => d.region === "eastern-up"),
  bundelkhand: upDistricts.filter((d) => d.region === "bundelkhand"),
};

/**
 * Key service areas for the top location navigation bar.
 */
export const keyServiceAreas = [
  { label: "Delhi NCR", href: "/locations/uttar-pradesh/gautam-buddha-nagar", badge: "NCR Hub" },
  { label: "Lucknow", href: "/locations/uttar-pradesh/lucknow", badge: "Branch Office" },
  { label: "Uttarakhand", href: "/contact#office-uttarakhand", badge: "UK Office" },
  { label: "Hathras (HQ)", href: "/locations/uttar-pradesh/hathras", badge: "Head Office" },
  { label: "All UP Districts", href: "/locations", badge: "75 Districts" },
];
