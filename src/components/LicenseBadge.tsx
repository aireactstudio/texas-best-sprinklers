"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

interface LicenseBadgeProps {
  className?: string;
  variant?: "light" | "dark";
}

export default function LicenseBadge({ className = "", variant = "dark" }: LicenseBadgeProps) {
  // Match the look of the feature badges: frosted, slight green tint, thin border, subtle shadow
  const base = "inline-flex items-center gap-3 rounded-xl px-5 py-3 text-base md:text-lg font-semibold text-white border border-white/20 shadow-lg backdrop-blur-md";
  const style: React.CSSProperties = {
    // single subtle green tint, no visible gradient
    backgroundColor: "rgba(16, 185, 129, 0.14)", // tailwind green-500 with low alpha
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 10px 24px rgba(0,0,0,0.18)",
  };

  return (
    <div
      className={[base, className].filter(Boolean).join(" ")}
      style={style}
      aria-label={`Texas Irrigator License ${SITE_CONFIG.licenseNumber}`}
    >
      <ShieldCheck className="w-5 h-5 text-green-400" />
      <span className="tracking-wide" style={{ textShadow: "0 1px 1px rgba(0,0,0,0.35)" }}>
        Licensed & Insured • LI {SITE_CONFIG.licenseNumber}
      </span>
    </div>
  );
}
