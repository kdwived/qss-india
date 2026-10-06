import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { upDistricts } from "@/data/locations";

const siteUrl = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const mainRoutes = [
    "",
    "/about",
    "/services",
    "/security",
    "/manpower",
    "/process",
    "/technology",
    "/clients",
    "/gallery",
    "/career",
    "/contact",
    "/locations",
  ];

  const serviceRoutes = [
    "/services/government-outsourcing",
    "/services/security-services",
    "/services/hospitality",
    "/services/housekeeping",
    "/services/manpower-outsourcing",
    "/services/event-security",
    "/services/office-administration",
  ];

  const districtRoutes = upDistricts.map(
    (d) => `/locations/uttar-pradesh/${d.slug}`
  );

  const allRoutes = [...mainRoutes, ...serviceRoutes, ...districtRoutes];

  return allRoutes.map((route) => {
    const isHome = route === "";
    const isService = route.startsWith("/services/");
    const isDistrict = route.startsWith("/locations/uttar-pradesh/");

    let priority = 0.7;
    let changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly";

    if (isHome) {
      priority = 1.0;
      changeFrequency = "weekly";
    } else if (isService) {
      priority = 0.9;
      changeFrequency = "monthly";
    } else if (isDistrict) {
      priority = 0.8;
      changeFrequency = "monthly";
    } else {
      priority = 0.85;
      changeFrequency = "monthly";
    }

    return {
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });
}
