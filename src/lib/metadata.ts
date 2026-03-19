import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://tpwits.com";

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}

export function generatePageMetadata({
  title,
  description,
  path = "",
  ogImage = "/og-default.png",
}: PageMetadataOptions): Metadata {
  const url = `${BASE_URL}${path}`;
  const fullTitle = title === "TPWITS" ? title : `${title} | TPWITS`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(BASE_URL),
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "TPWITS",
      images: [{ url: ogImage, width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    alternates: { canonical: url },
  };
}
