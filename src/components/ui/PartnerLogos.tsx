"use client";

import React from "react";

/* ------------------------------------------------------------------ */
/*  AWS Logo                                                          */
/* ------------------------------------------------------------------ */
export function AWSLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="AWS"
    >
      {/* "AWS" bold uppercase text */}
      <text
        x="60"
        y="24"
        textAnchor="middle"
        dominantBaseline="central"
        fill="currentColor"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="800"
        fontSize="26"
        letterSpacing="2"
      >
        AWS
      </text>

      {/* Signature smile / curved underline */}
      <path
        d="M20 32 Q60 42 100 32"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Small arrowhead at end of smile */}
      <path
        d="M96 33 L100 32 L97 29"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Azure Logo                                                        */
/* ------------------------------------------------------------------ */
export function AzureLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Azure"
    >
      {/* "Azure" clean sans-serif, medium weight */}
      <text
        x="60"
        y="22"
        textAnchor="middle"
        dominantBaseline="central"
        fill="currentColor"
        fontFamily="'Segoe UI', Arial, Helvetica, sans-serif"
        fontWeight="600"
        fontSize="22"
        letterSpacing="1"
      >
        Azure
      </text>

      {/* Subtle accent bar underneath */}
      <rect
        x="16"
        y="35"
        width="88"
        height="2"
        rx="1"
        fill="currentColor"
        opacity="0.3"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Google Cloud Logo                                                  */
/* ------------------------------------------------------------------ */
export function GoogleCloudLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Google Cloud"
    >
      {/* "Google Cloud" light-weight clean sans */}
      <text
        x="100"
        y="22"
        textAnchor="middle"
        dominantBaseline="central"
        fill="currentColor"
        fontFamily="'Product Sans', Arial, Helvetica, sans-serif"
        fontWeight="400"
        fontSize="22"
        letterSpacing="0.5"
      >
        Google Cloud
      </text>

      {/* Small decorative dots echoing the Google multicolor motif */}
      <circle cx="30" cy="36" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="38" cy="36" r="2" fill="currentColor" opacity="0.45" />
      <circle cx="46" cy="36" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="54" cy="36" r="2" fill="currentColor" opacity="0.15" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Salesforce Logo                                                   */
/* ------------------------------------------------------------------ */
export function SalesforceLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Salesforce"
    >
      {/* Small cloud shape above-left of text */}
      <path
        d="M22 10 Q22 4 28 4 Q32 4 33.5 7 Q35 3 40 3 Q46 3 46 9 Q50 8 50 12 Q50 16 46 16 L26 16 Q22 16 22 12 Z"
        fill="currentColor"
        opacity="0.75"
      />

      {/* "Salesforce" text */}
      <text
        x="110"
        y="24"
        textAnchor="middle"
        dominantBaseline="central"
        fill="currentColor"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="20"
        letterSpacing="0.5"
      >
        Salesforce
      </text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Exports                                                           */
/* ------------------------------------------------------------------ */
export const partnerLogos: {
  name: string;
  short: string;
  Logo: React.FC<{ className?: string }>;
}[] = [
  { name: "Amazon Web Services", short: "AWS", Logo: AWSLogo },
  { name: "Microsoft Azure", short: "Azure", Logo: AzureLogo },
  { name: "Google Cloud", short: "Google Cloud", Logo: GoogleCloudLogo },
  { name: "Salesforce", short: "Salesforce", Logo: SalesforceLogo },
];
