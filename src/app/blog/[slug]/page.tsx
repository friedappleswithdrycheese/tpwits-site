"use client";

import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Calendar, User } from "lucide-react";
import { blogPosts } from "@/data/blog";
import CTASection from "@/components/sections/CTASection";

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const relatedPosts = post.relatedPosts
    .map((relatedSlug) => blogPosts.find((p) => p.slug === relatedSlug))
    .filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[150px]" />
        </div>
        <div className="container-custom relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All Articles
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center text-xs font-bold uppercase tracking-[0.15em] text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-6">
              {post.category}
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-lg text-white/60 leading-relaxed mb-8">
              {post.excerpt}
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>
                  {post.author.name}
                  <span className="hidden sm:inline text-white/30">
                    {" "}
                    &mdash; {post.author.role}
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {post.content.map((section, index) => (
              <motion.div
                key={section.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="mb-12 last:mb-0"
              >
                <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-6 leading-snug">
                  {section.heading}
                </h2>
                {section.body.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-base md:text-lg text-foreground-muted leading-relaxed mb-5 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-background-alt">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-10 text-center">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedPosts.map((related) => (
                  <Link
                    key={related!.slug}
                    href={`/blog/${related!.slug}`}
                    className="group block"
                  >
                    <article className="bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-black/5 transition-all duration-500">
                      <div
                        className="h-36 relative"
                        style={{ background: related!.gradient }}
                      >
                        <span className="absolute top-4 left-4 inline-flex items-center text-xs font-bold text-white bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                          {related!.category}
                        </span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-3">
                          {related!.title}
                        </h3>
                        <p className="text-sm text-foreground-muted leading-relaxed line-clamp-2 mb-4">
                          {related!.excerpt}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-foreground-subtle">
                          <span>{related!.date}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-300" />
                          <span>{related!.readTime}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Prev / Next Navigation */}
      <section className="py-12 bg-white border-t border-border">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="flex items-center gap-3 text-sm text-foreground-muted hover:text-primary transition-colors max-w-[45%]"
              >
                <ArrowLeft className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">{prevPost.title}</span>
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="flex items-center gap-3 text-sm text-foreground-muted hover:text-primary transition-colors max-w-[45%] text-right ml-auto"
              >
                <span className="truncate">{nextPost.title}</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
