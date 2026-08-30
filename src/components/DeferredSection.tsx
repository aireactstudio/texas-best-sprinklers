'use client';

import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface DeferredSectionProps {
  children: ReactNode;
  /** Reserve space so layout doesn't shift when the section mounts. */
  minHeight?: number;
  /** How far before the viewport to start mounting (IntersectionObserver rootMargin). */
  rootMargin?: string;
}

/**
 * Mounts children only when the placeholder scrolls near the viewport.
 * Combined with dynamic(..., { ssr: false }) imports, this keeps below-fold
 * section JS from downloading and executing during initial page load.
 */
export default function DeferredSection({
  children,
  minHeight = 400,
  rootMargin = '500px',
}: DeferredSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [rootMargin, visible]);

  return (
    <div ref={ref} style={visible ? undefined : { minHeight }}>
      {visible ? children : null}
    </div>
  );
}
