# TODOS

## P1 — Critical

### DNS Migration to tpwits.com
Migrate from tpwits-site.vercel.app to tpwits.com. Delete old A/AAAA records in Cloudflare, add CNAME → cname.vercel-dns.com, set SSL to Full (Strict), add domain in Vercel dashboard.
- **Why:** The Vercel subdomain looks unprofessional for enterprise buyers. The URL is the most visible thing about the site.
- **Effort:** S (human: ~30 min, requires Cloudflare + Vercel dashboard access)
- **Depends on:** Cloudflare dashboard access, Vercel dashboard access

## P2 — Important

### CMS Integration (Phase 2)
Integrate a headless CMS (Sanity or Contentlayer) so blog posts and case studies can be created/edited without code changes. Currently all 6 blog posts and 18 case studies are hardcoded in TypeScript data files.
- **Why:** Adding content requires a code change and deploy. Blocks content velocity and non-technical team members from publishing.
- **Effort:** L (human: ~1 week / CC: ~2-3 hours)
- **Depends on:** Design elevation complete, content team identified

## P3 — Nice to Have

### Social Media Links
Replace '#' placeholder URLs in Footer.tsx with actual TPWITS social media account URLs (LinkedIn, Twitter, Instagram, YouTube).
- **Why:** Dead social links are a minor trust signal issue. Visitors who click get nothing.
- **Effort:** S (human: ~5 min / CC: ~2 min)
- **Depends on:** TPWITS having active social media accounts with known URLs
