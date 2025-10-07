
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { CheckCircle2, Star, MessageSquare, MapPin } from 'lucide-react';

type StatDef = {
  target: number;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
  href?: string;
};

// Lightweight intersection observer hook for triggering animations on view
function useOnScreen<T extends Element>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, options || { root: null, rootMargin: '0px', threshold: 0.2 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isIntersecting } as const;
}

// Simple count-up component without external deps
function CountUp({ to, duration = 1400, suffix = '' }: { to: number; duration?: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const start = useRef<number | null>(null);

  useEffect(() => {
    let raf: number;
    const step = (ts: number) => {
      if (start.current === null) start.current = ts;
      const p = Math.min(1, (ts - start.current) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * to));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);

  return <>{val.toLocaleString()}<span>{suffix}</span></>;
}

const StatsSection: React.FC = () => {
  const stats: StatDef[] = useMemo(() => ([
    { target: 1000, suffix: '+', label: 'Projects Completed', icon: <CheckCircle2 className="w-5 h-5" /> },
    { target: 5, suffix: '', label: 'Google Rating', icon: <Star className="w-5 h-5" /> },
    { target: 100, suffix: '+', label: 'Google Reviews', icon: <MessageSquare className="w-5 h-5" />, href: 'https://www.google.com/search?q=Texas+Best+Sprinklers,+Drainage+and+Lighting+LLC+Reviews' },
    // Non-numeric stat rendered as label on the right
  ]), []);

  const { ref, isIntersecting } = useOnScreen<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden py-12 md:py-16">
      {/* Rich green gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-irrigation-darkGreen via-emerald-600 to-irrigation-blue" />
      {/* Subtle radial glows */}
      <div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-white/10 blur-3xl opacity-40" />
      <div className="absolute -bottom-20 left-[-10%] h-80 w-80 rounded-full bg-irrigation-blue/20 blur-3xl opacity-30" />
      {/* Diagonal sheen */}
      <div className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-white/10 to-transparent rotate-0" />

      {/* Subtle pattern */}
      <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:14px_14px]" />

      <div ref={ref} className="relative container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Stat cards with glass effect */}
          {stats.map((s, i) => {
            const Card = (
              <div
                key={i}
                className="relative group rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:bg-white/10 transition-colors"
              >
                <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <span className="text-white/90">{s.icon}</span>
                </div>
                <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                  {isIntersecting ? <CountUp to={s.target} suffix={s.suffix} /> : <>0<span>{s.suffix}</span></>}
                </p>
                <p className="mt-1 text-sm md:text-base text-white/80">{s.label}</p>
                {/* animated underline accent */}
                <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-1 h-[3px] w-0 rounded-full bg-white/70 transition-all duration-500 group-hover:w-2/3" />
              </div>
            );
            return s.href ? (
              <a
                key={`link-${i}`}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${s.label} on Google`}
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-xl"
              >
                {Card}
              </a>
            ) : Card;
          })}

          {/* Right-most location pill */}
          <div className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center text-white flex flex-col items-center justify-center shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]">
            <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
              <MapPin className="w-5 h-5 text-white/90" />
            </div>
            <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight">Fort Worth</p>
            <p className="mt-1 text-sm md:text-base text-white/80">Texas</p>
          </div>
        </div>
      </div>
      {/* Decorative curved edge at bottom */}
      <div className="absolute left-0 right-0 -bottom-12 h-24 rounded-t-[50%] bg-white/40 blur-2xl" />
    </section>
  );
};

export default StatsSection;
