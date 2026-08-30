import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react';
import CTA from '@/components/CTA';
import type { Metadata } from 'next';

import { blogPosts } from '@/data/blogPosts';

type BlogPostPageProps = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    return {
      title: 'Blog Article | Texas Best Sprinklers',
    };
  }

  const url = `https://sprinkleranddrains.com/blog/${post.slug}`;

  return {
    title: `${post.title} | Texas Best Sprinklers Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: 'article',
      images: [{ url: post.image, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = params;

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  const articleUrl = `https://sprinkleranddrains.com/blog/${post.slug}`;
  const isLandLevelingPost = post.slug === 'land-leveling-bobcat-track-loader-north-texas-clay';

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: [post.image],
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: 'https://sprinkleranddrains.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Texas Best Sprinklers',
      url: 'https://sprinkleranddrains.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      <div className="relative h-96">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-irrigation-blue bg-opacity-70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container-custom text-center text-white">
            <h1 className="mb-4 text-3xl font-bold md:text-5xl">{post.title}</h1>
            <div className="flex items-center justify-center text-sm opacity-90">
              <span className="mr-6 flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center">
                <User className="mr-1 h-4 w-4" />
                {post.author}
              </span>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <div className="lg:col-span-3">
              <div className="rounded-lg bg-white p-8 shadow-md">
                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-irrigation-blue prose-h2:mb-4 prose-h2:mt-10 prose-h2:text-2xl prose-h3:mb-3 prose-h3:mt-8 prose-h3:text-xl prose-p:mb-4 prose-p:leading-relaxed prose-p:text-gray-700 prose-li:my-1 prose-li:text-gray-700 prose-ul:my-5 prose-ol:my-5 [&_a]:font-semibold [&_a]:text-irrigation-blue [&_a]:underline [&_a]:decoration-irrigation-blue/40 [&_a]:underline-offset-2 hover:[&_a]:text-irrigation-green hover:[&_a]:decoration-irrigation-green [&_ol]:border-l-2 [&_ol]:border-irrigation-blue/20 [&_ol]:pl-5 [&_ul]:border-l-2 [&_ul]:border-irrigation-blue/20 [&_ul]:pl-5">
                  <div className="mb-6 flex flex-wrap gap-2 not-prose">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-irrigation-blue/10 px-3 py-1 text-xs text-irrigation-blue"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {post.contentHtml ? (
                    <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
                  ) : (
                    <>
                      <p className="mb-6 leading-relaxed text-gray-700">{post.content}</p>
                      <p className="mb-6 leading-relaxed text-gray-700">
                        Water conservation is a critical concern for homeowners in the Fort Worth and Weatherford
                        areas. With proper irrigation system design and regular maintenance, you can significantly
                        reduce your water usage while maintaining a healthy, vibrant landscape.
                      </p>
                      <h2 className="mb-4 mt-8 text-2xl font-bold text-irrigation-blue">Key Considerations</h2>
                      <p className="mb-6 leading-relaxed text-gray-700">
                        When planning your irrigation system, it&apos;s important to consider your soil type, plant
                        varieties, sun exposure, and local water restrictions. A professionally designed system takes
                        all these factors into account to deliver optimal results.
                      </p>
                      <p className="mb-6 leading-relaxed text-gray-700">
                        Texas Best Sprinklers specializes in designing water-efficient irrigation systems that meet the
                        specific needs of North Texas landscapes. Contact us today to learn how we can help you achieve
                        a beautiful, water-smart yard.
                      </p>
                    </>
                  )}
                </div>

                {isLandLevelingPost && (
                  <div className="mt-10 rounded-xl border border-irrigation-blue/15 bg-gradient-to-br from-slate-50 to-emerald-50/50 p-6 not-prose">
                    <h3 className="text-xl font-bold text-irrigation-blue">Ready to level your yard?</h3>
                    <p className="mt-2 text-gray-700">
                      See how our in-house Bobcat track loader, sod install, and drainage work fit together on the
                      service page — then request an estimate.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Link
                        href="/services/sod-and-land-leveling"
                        className="inline-flex rounded-lg bg-irrigation-blue px-4 py-2.5 text-sm font-semibold text-white hover:bg-irrigation-darkBlue"
                      >
                        SOD &amp; Land Leveling Services
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex rounded-lg border border-irrigation-blue px-4 py-2.5 text-sm font-semibold text-irrigation-blue hover:bg-white"
                      >
                        Get a Free Estimate
                      </Link>
                    </div>
                  </div>
                )}

                <div className="mt-12 border-t border-gray-200 pt-8">
                  <div className="flex items-center">
                    <div className="mr-4 flex h-14 w-14 items-center justify-center rounded-full bg-irrigation-blue/20">
                      <User className="h-6 w-6 text-irrigation-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{post.author}</h3>
                      <p className="text-sm text-gray-600">
                        Irrigation, drainage &amp; outdoor services in Fort Worth and surrounding cities
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-4 border-t border-gray-200 pt-8">
                  {prevPost ? (
                    <Link
                      href={`/blog/${prevPost.slug}`}
                      className="flex items-center text-irrigation-blue transition-colors hover:text-irrigation-green"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      <span className="text-sm">Previous: {prevPost.title}</span>
                    </Link>
                  ) : (
                    <div />
                  )}

                  {nextPost ? (
                    <Link
                      href={`/blog/${nextPost.slug}`}
                      className="flex items-center justify-end text-irrigation-blue transition-colors hover:text-irrigation-green"
                    >
                      <span className="text-sm">Next: {nextPost.title}</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-xl font-bold text-irrigation-blue">Related Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <Link
                      href="/services/sod-and-land-leveling"
                      className="transition-colors hover:text-irrigation-green"
                    >
                      SOD &amp; Land Leveling
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/drainage-solutions"
                      className="transition-colors hover:text-irrigation-green"
                    >
                      Drainage Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/french-drains"
                      className="transition-colors hover:text-irrigation-green"
                    >
                      French Drains
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/sprinkler-installation"
                      className="transition-colors hover:text-irrigation-green"
                    >
                      Sprinkler Installation
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-xl font-bold text-irrigation-blue">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <div key={relatedPost.id} className="flex items-start">
                      <div className="relative mr-3 h-16 w-16 flex-shrink-0">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          sizes="64px"
                          className="rounded object-cover"
                        />
                      </div>
                      <div>
                        <Link
                          href={`/blog/${relatedPost.slug}`}
                          className="font-medium transition-colors hover:text-irrigation-green"
                        >
                          {relatedPost.title}
                        </Link>
                        <p className="mt-1 text-sm text-gray-500">{relatedPost.date}</p>
                      </div>
                    </div>
                  ))}

                  {relatedPosts.length === 0 && (
                    <p className="text-gray-600">No related articles found.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title={
          isLandLevelingPost
            ? 'Need Land Leveling or New SOD?'
            : 'Need Professional Irrigation Services?'
        }
        subtitle={
          isLandLevelingPost
            ? 'Get a plan for Bobcat grading, drainage-friendly slope, and a finished lawn.'
            : 'Contact our team of experts for a consultation and free estimate.'
        }
        buttonText="Contact Us"
        buttonLink="/contact"
        variant="primary"
      />
    </>
  );
}
