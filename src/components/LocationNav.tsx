"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  MapPin,
  ChevronDown,
  Search,
  ArrowRight,
  X,
  ExternalLink,
} from "lucide-react";
import {
  upDistricts,
  districtsByRegion,
  regions,
  RegionKey,
  DistrictInfo,
} from "@/data/locations";

export default function LocationNav() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [activeRegion, setActiveRegion] = useState<RegionKey | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!megaOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setMegaOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMegaOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, [megaOpen]);

  // Filter districts based on search and region
  const filteredDistricts = upDistricts.filter((d) => {
    const matchesSearch =
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.regionName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (d.aliases &&
        d.aliases.some((a) =>
          a.toLowerCase().includes(searchQuery.toLowerCase())
        ));
    const matchesRegion =
      activeRegion === "all" ? true : d.region === activeRegion;
    return matchesSearch && matchesRegion;
  });

  const regionKeys: RegionKey[] = [
    "western-up",
    "central-up",
    "eastern-up",
    "bundelkhand",
    "rohilkhand",
  ];

  return (
    <div
      ref={dropdownRef}
      className="relative hidden lg:block bg-[#f8fbff] border-b border-blue-100 text-xs text-slate-700"
    >
      <div className="container-px flex h-[34px] items-center justify-between gap-4">
        {/* Left: Quick Location Badges */}
        <div className="flex items-center gap-1.5 overflow-x-auto whitespace-nowrap">
          <span className="flex items-center gap-1 font-bold text-brand-blue uppercase tracking-wider text-[10px] mr-2">
            <MapPin size={12} className="text-brand-blue" />
            Service Areas:
          </span>

          <Link
            href="/locations/uttar-pradesh/gautam-buddha-nagar"
            className="rounded-md px-2 py-0.5 font-medium text-slate-600 transition-colors hover:bg-blue-100/60 hover:text-brand-blue"
          >
            Delhi NCR
          </Link>
          <span className="text-slate-300">•</span>

          <Link
            href="/locations/uttar-pradesh/lucknow"
            className="rounded-md px-2 py-0.5 font-medium text-slate-600 transition-colors hover:bg-blue-100/60 hover:text-brand-blue"
          >
            Lucknow
          </Link>
          <span className="text-slate-300">•</span>

          <Link
            href="/locations/uttar-pradesh/hathras"
            className="rounded-md px-2 py-0.5 font-medium text-slate-600 transition-colors hover:bg-blue-100/60 hover:text-brand-blue"
          >
            Hathras (HQ)
          </Link>
          <span className="text-slate-300">•</span>

          <Link
            href="/contact"
            className="rounded-md px-2 py-0.5 font-medium text-slate-600 transition-colors hover:bg-blue-100/60 hover:text-brand-blue"
          >
            Uttarakhand
          </Link>
          <span className="text-slate-300">•</span>

          {/* Uttar Pradesh Mega Menu Trigger */}
          <button
            type="button"
            onClick={() => setMegaOpen((prev) => !prev)}
            onMouseEnter={() => setMegaOpen(true)}
            className={`group inline-flex items-center gap-1 rounded-md px-2.5 py-0.5 font-semibold transition-all ${
              megaOpen
                ? "bg-brand-blue text-white shadow-sm"
                : "bg-blue-50 text-brand-blue hover:bg-brand-blue hover:text-white"
            }`}
            aria-expanded={megaOpen}
            aria-haspopup="true"
          >
            <span>Uttar Pradesh (All 75 Districts)</span>
            <ChevronDown
              size={12}
              className={`transition-transform duration-200 ${
                megaOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Right: All Locations link */}
        <div className="flex items-center gap-3">
          <Link
            href="/locations"
            className="inline-flex items-center gap-1 font-semibold text-brand-blue hover:underline text-[11px]"
          >
            View All Locations <ArrowRight size={11} />
          </Link>
        </div>
      </div>

      {/* =====================================================
          UTTAR PRADESH DISTRICTS MEGA MENU DROPDOWN
      ====================================================== */}
      <div
        onMouseLeave={() => setMegaOpen(false)}
        className={`absolute left-0 right-0 top-full z-50 bg-white border-b-2 border-brand-blue shadow-[0_20px_50px_rgba(15,49,105,0.14)] transition-all duration-200 overflow-hidden ${
          megaOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <div className="container-px py-6 max-h-[80vh] overflow-y-auto">
          {/* Header row: title, region tabs, search */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-base text-navy-900 uppercase tracking-wide">
                  Uttar Pradesh Districts
                </span>
                <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-bold text-brand-blue">
                  75 Districts
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Active security guard and manpower deployment coverage across all tehsils and industrial pockets.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <Search
                size={13}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="Search district..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-[#f8fbff] pl-8 pr-7 py-1.5 text-xs text-slate-800 outline-none focus:border-brand-blue focus:bg-white transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X size={12} />
                </button>
              )}
            </div>
          </div>

          {/* Region Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-4 text-[11px]">
            <button
              onClick={() => setActiveRegion("all")}
              className={`rounded-lg px-3 py-1 font-semibold transition-all whitespace-nowrap ${
                activeRegion === "all"
                  ? "bg-brand-blue text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              All Regions (75)
            </button>
            {regionKeys.map((key) => {
              const count = districtsByRegion[key].length;
              const isSelected = activeRegion === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveRegion(key)}
                  className={`rounded-lg px-3 py-1 font-semibold transition-all whitespace-nowrap ${
                    isSelected
                      ? "bg-brand-blue text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {regions[key].name} ({count})
                </button>
              );
            })}
          </div>

          {/* Districts Grid: 6 columns on desktop */}
          {filteredDistricts.length === 0 ? (
            <div className="py-8 text-center text-slate-400 text-xs">
              No districts found matching &ldquo;{searchQuery}&rdquo;.
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {filteredDistricts.map((d) => (
                <Link
                  key={d.slug}
                  href={`/locations/uttar-pradesh/${d.slug}`}
                  onClick={() => setMegaOpen(false)}
                  className="group flex items-center justify-between rounded-lg border border-slate-100 bg-[#fbfdff] px-2.5 py-1.5 text-[11px] font-medium text-slate-700 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-brand-blue hover:translate-x-0.5"
                >
                  <span className="truncate">{d.name}</span>
                  <ArrowRight
                    size={11}
                    className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 text-brand-blue transition-all shrink-0 ml-1"
                  />
                </Link>
              ))}
            </div>
          )}

          {/* Bottom helper */}
          <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span>
              Direct deployments managed through Hathras HQ, Lucknow &amp; Delhi NCR offices.
            </span>
            <Link
              href="/locations"
              onClick={() => setMegaOpen(false)}
              className="font-bold text-brand-blue hover:underline inline-flex items-center gap-1"
            >
              Explore Full Locations Directory <ExternalLink size={11} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
