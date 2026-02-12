'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  radius: number;
}

const COLORS = ['#fbbf24', '#f59e0b', '#fcd34d', '#ffffff', '#60a5fa', '#93c5fd'];
const PARTICLE_COUNT = 20;
const DURATION = 900; // ms per burst
const GRAVITY = 0.03;

function createBurst(cx: number, cy: number): Particle[] {
  const particles: Particle[] = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 1.5 + Math.random() * 2.5;
    particles.push({
      x: cx,
      y: cy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: 1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      radius: 1 + Math.random() * 2,
    });
  }
  return particles;
}

export default function AnniversaryBanner() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let animId: number;
    let running = true;

    // Track active bursts
    const bursts: { particles: Particle[]; startTime: number }[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    window.addEventListener('resize', resize);

    // Spawn a burst originating from the banner's screen position
    function spawnBurst() {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      // Pick random x positions weighted toward the sides (where there's no text)
      const side = Math.random() < 0.5 ? 'left' : 'right';
      const x = side === 'left'
        ? rect.left + rect.width * (0.05 + Math.random() * 0.15)
        : rect.left + rect.width * (0.80 + Math.random() * 0.15);
      const y = rect.top + rect.height * (0.2 + Math.random() * 0.6);
      bursts.push({ particles: createBurst(x, y), startTime: performance.now() });
    }

    // Spawn initial bursts staggered
    spawnBurst();
    setTimeout(() => { if (running) spawnBurst(); }, 400);
    setTimeout(() => { if (running) spawnBurst(); }, 800);

    // Keep spawning bursts on an interval
    const spawnInterval = setInterval(() => {
      if (!running) return;
      spawnBurst();
      // Occasionally double-burst for variety
      if (Math.random() < 0.4) {
        setTimeout(() => { if (running) spawnBurst(); }, 200 + Math.random() * 300);
      }
    }, 1200 + Math.random() * 800);

    function animate(now: number) {
      if (!running || !ctx || !canvas || !container) return;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Update & draw each burst
      for (let b = bursts.length - 1; b >= 0; b--) {
        const burst = bursts[b];
        const elapsed = now - burst.startTime;
        const t = Math.min(elapsed / DURATION, 1);

        if (t >= 1) {
          bursts.splice(b, 1);
          continue;
        }

        for (const p of burst.particles) {
          p.vy += GRAVITY;
          p.x += p.vx;
          p.y += p.vy;
          p.alpha = Math.max(0, 1 - t);

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color;
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(animate);
    }

    animId = requestAnimationFrame(animate);

    return () => {
      running = false;
      clearInterval(spawnInterval);
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-center py-1 sm:py-1.5 px-2 sm:px-4 border-b border-white/10"
    >
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 9999 }}
        aria-hidden="true"
      />
      <div className="relative z-10 leading-tight">
        <p className="text-xs sm:text-sm font-medium text-white/90 tracking-wide">
          <span className="text-amber-400 mr-0.5 sm:mr-1">★</span>
          Celebrating <span className="font-bold text-white">10 Years</span> this February
          <span className="text-amber-400 ml-0.5 sm:ml-1">★</span>
        </p>
        <p className="text-[10px] sm:text-xs text-white/60 mt-0.5">
          Thank you for a decade of trust
        </p>
      </div>
    </div>
  );
}
