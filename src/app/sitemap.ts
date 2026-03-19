import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/company";
import { blogPosts } from "@/data/blog";
import { services } from "@/data/services";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://tpwits.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: `${BASE_URL}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/case-studies`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${BASE_URL}/industries`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/insights`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.8 },
    { url: `${BASE_URL}/careers`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE_URL}/terms-of-use`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const caseStudyPages = caseStudies.map((cs) => ({
    url: `${BASE_URL}/case-studies/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const servicePages = services.map((svc) => ({
    url: `${BASE_URL}/services/${svc.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...caseStudyPages, ...blogPages, ...servicePages];
}
