 import Link from 'next/link';
import { LOCATIONS, getLocationData } from '@/data/locationData';
import { blogPosts } from '@/data/blogPosts';
import HeroSection from '@/components/HeroSection';

export const metadata = {
  title: 'Sitemap | Texas Best Sprinklers',
  description: 'Human-readable sitemap for Texas Best Sprinkler, Drainage and Lighting LLC.',
};

const services = [
  { name: 'Sprinklers & Irrigation', path: '/services/sprinkler-installation' },
  { name: 'Sprinkler System Repair', path: '/services/sprinkler-repair' },
  { name: 'Sprinkler System Check-Up', path: '/services/sprinkler-system-check-up' },
  { name: 'Sprinkler System Reroutes', path: '/services/sprinkler-system-reroutes' },
  { name: 'Drip Irrigation', path: '/services/drip-irrigation' },
  { name: 'French Drains', path: '/services/french-drains' },
  { name: 'Channel Drains, Catch Basins & Grates', path: '/services/channel-drains' },
  { name: 'Sump Pumps', path: '/services/sump-pumps' },
  { name: 'Yard Drainage Systems', path: '/services/yard-drainage-systems' },
  { name: 'Lighting Design & Installation Services', path: '/services/outdoor-lighting' },
  { name: 'Landscape Lighting Repair and Maintenance', path: '/services/landscape-lighting-repair' },
];

const primary = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

  export default function SitemapPage() {
  return (
    <>
      <HeroSection 
        title="Sitemap"
        subtitle="Browse all key pages, services, locations, and blog posts"
      />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <section className="container-custom py-6 md:py-8">
          <div
            style={{
              color: '#0f172a',
              fontSize: '0.95rem',
              lineHeight: 1.6,
            }}
          >
            <div className="bg-white rounded-lg shadow-md ring-1 ring-black/5 p-3 md:p-4">
              <h2
                className="text-xl md:text-2xl font-bold"
                style={{ color: '#0f172a', letterSpacing: '-0.01em', marginBottom: '0.25rem' }}
              >
                Sitemap
              </h2>
              <p className="text-gray-600 mb-4">Browse key pages on our website.</p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <h2
                    className="text-base font-semibold"
                    style={{ color: '#0f172a', marginTop: '0.5rem', marginBottom: '0.25rem' }}
                  >
                    Primary Pages
                  </h2>
                  <ul style={{ listStyle: 'disc', paddingLeft: '1rem', columnGap: '1rem' }} className="columns-1 sm:columns-2 [&_li]:mb-0.5">
                    {primary.map((p) => (
                      <li key={p.path}>
                        <Link href={p.path} className="underline hover:opacity-80" style={{ color: '#1d4ed8' }}>
                          {p.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2
                    className="text-base font-semibold"
                    style={{ color: '#0f172a', marginTop: '0.5rem', marginBottom: '0.25rem' }}
                  >
                    Our Services
                  </h2>
                  <ul style={{ listStyle: 'disc', paddingLeft: '1rem', columnGap: '1rem' }} className="columns-1 sm:columns-2 [&_li]:mb-0.5">
                    {services.map((s) => (
                      <li key={s.path}>
                        <Link href={s.path} className="underline hover:opacity-80" style={{ color: '#1d4ed8' }}>
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2
                    className="text-base font-semibold"
                    style={{ color: '#0f172a', marginTop: '0.5rem', marginBottom: '0.25rem' }}
                  >
                    Blog Posts
                  </h2>
                  <ul style={{ listStyle: 'disc', paddingLeft: '1rem', columnGap: '1rem' }} className="columns-1 sm:columns-2 [&_li]:mb-0.5">
                    {blogPosts.map((post) => (
                      <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`} className="underline hover:opacity-80" style={{ color: '#1d4ed8' }}>
                          {post.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2
                    className="text-base font-semibold"
                    style={{ color: '#0f172a', marginTop: '0.5rem', marginBottom: '0.25rem' }}
                  >
                    Legal
                  </h2>
                  <ul className="columns-1 [&_li]:mb-0.5" style={{ listStyle: 'disc', paddingLeft: '1rem', columnGap: '1rem' }}>
                    <li>
                      <Link href="/privacy-policy" className="underline hover:opacity-80" style={{ color: '#1d4ed8' }}>Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/terms-of-service" className="underline hover:opacity-80" style={{ color: '#1d4ed8' }}>Terms of Service</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-1 gap-4">
                <div>
                  <h2
                    className="text-base font-semibold"
                    style={{ color: '#0f172a', marginTop: '0.5rem', marginBottom: '0.25rem' }}
                  >
                    Locations We Serve
                  </h2>
                  <ul className="columns-2 sm:columns-4 md:columns-5 [&_li]:mb-0.5" style={{ listStyle: 'disc', paddingLeft: '1rem', columnGap: '1rem' }}>
                    {LOCATIONS.map((slug) => {
                      const data = getLocationData(slug);
                      return (
                        <li key={slug}>
                          <Link href={`/${slug}`} className="underline hover:opacity-80" style={{ color: '#1d4ed8' }}>
                            {data?.name || slug}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
