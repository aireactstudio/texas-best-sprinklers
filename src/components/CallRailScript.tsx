// src/components/CallRailScript.tsx
"use client";

import Script from "next/script";

/**
 * CallRail tracking script
 * Placed with afterInteractive strategy so it loads once the page is interactive
 */
export default function CallRailScript() {
  return (
    <Script
      id="callrail-script"
      strategy="afterInteractive"
      type="text/javascript"
      src="//cdn.callrail.com/companies/299345511/3fecb10ddbd4a751b9b6/12/swap.js"
    />
  );
}
