"use client";

import { OptimizedImage } from "@/components/OptimizedImage";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const images = [
  {
    mobile: "https://ik.imagekit.io/6j5o4uwvz/TexasBest_webp/long-shot-of-fort-worth-drainage.webp?updatedAt=1763144537900",
    desktop: "https://ik.imagekit.io/6j5o4uwvz/TexasBest_webp/long-shot-of-fort-worth-drainage.webp?updatedAt=1763144537900",
    alt: "Fort Worth drainage long shot"
  },
  {
    mobile: "https://ik.imagekit.io/6j5o4uwvz/TexasBest_webp/gutter-shot.webp?updatedAt=1763144536860",
    desktop: "https://ik.imagekit.io/6j5o4uwvz/TexasBest_webp/gutter-shot.webp?updatedAt=1763144536860",
    alt: "Downspout and gutter connection"
  },
  {
    mobile: "https://ik.imagekit.io/6j5o4uwvz/TexasBest_webp/trencher.webp?updatedAt=1763144537647",
    desktop: "https://ik.imagekit.io/6j5o4uwvz/TexasBest_webp/trencher.webp?updatedAt=1763144537647",
    alt: "Trencher equipment for drainage"
  },
  {
    mobile: "https://ik.imagekit.io/6j5o4uwvz/TexasBest_webp/massive-drainage-project.webp?updatedAt=1763144537814",
    desktop: "https://ik.imagekit.io/6j5o4uwvz/TexasBest_webp/massive-drainage-project.webp?updatedAt=1763144537814",
    alt: "Large drainage installation"
  },
  {
    mobile: "https://ik.imagekit.io/6j5o4uwvz/TexasBest_webp/sprinklerHead.webp?updatedAt=1763144537428",
    desktop: "https://ik.imagekit.io/6j5o4uwvz/TexasBest_webp/sprinklerHead.webp?updatedAt=1763144537428",
    alt: "Sprinkler head close-up"
  },
  {
    mobile: "https://ik.imagekit.io/6j5o4uwvz/TexasBest_webp/drainage-t-off-gutter-connection.webp?updatedAt=1763144537797",
    desktop: "https://ik.imagekit.io/6j5o4uwvz/TexasBest_webp/drainage-t-off-gutter-connection.webp?updatedAt=1763144537797",
    alt: "Drainage T off gutter connection"
  },
  {
    mobile: "https://ik.imagekit.io/6j5o4uwvz/TexasBest_webp/sprinkler-head-rotating.webp?updatedAt=1763144537912",
    desktop: "https://ik.imagekit.io/6j5o4uwvz/TexasBest_webp/sprinkler-head-rotating.webp?updatedAt=1763144537912",
    alt: "Sprinkler head rotating"
  },
];

export const ScrollingCarousel = () => {
  const isMobile = useIsMobile();
  const speedOptions = [1, 2, 3, 4, 5];
  const [speedIndex, setSpeedIndex] = useState(0); // Start at 1x
  const [isPaused, setIsPaused] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);
  const animationFrameRef = useRef<number>();
  const lastTimestampRef = useRef<number>();
  const setWidthRef = useRef(0);

  const currentSpeed = speedOptions[speedIndex];
  const baseSpeed = 50; // pixels per second at 1x speed

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const computeSetWidth = () => {
      const children = Array.from(container.children).slice(0, images.length) as HTMLElement[];
      const total = children.reduce((acc, child) => acc + child.offsetWidth + 32, 0);
      setWidthRef.current = total;
    };

    computeSetWidth();
    window.addEventListener("resize", computeSetWidth);

    const animate = (timestamp: number) => {
      if (!lastTimestampRef.current) {
        lastTimestampRef.current = timestamp;
      }

      const deltaTime = (timestamp - (lastTimestampRef.current || timestamp)) / 1000; // seconds
      lastTimestampRef.current = timestamp;

      if (!isPaused) {
        scrollPositionRef.current += baseSpeed * currentSpeed * deltaTime;
        const totalWidth = setWidthRef.current;
        if (totalWidth > 0 && scrollPositionRef.current >= totalWidth) {
          scrollPositionRef.current -= totalWidth;
        }
        container.style.transform = `translateX(-${scrollPositionRef.current}px)`;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener("resize", computeSetWidth);
    };
  }, [currentSpeed, isPaused]);

  const cycleSpeed = () => setSpeedIndex((prev) => (prev + 1) % speedOptions.length);
  const togglePause = () => setIsPaused((prev) => !prev);

  return (
    <section className="py-16 overflow-hidden bg-white">
      <div className="container-custom px-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-irrigation-darkBlue mb-4">Recent Projects Gallery</h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
          A look at our irrigation and drainage work across Fort Worth and nearby cities.
        </p>

        <div className="flex justify-center items-center gap-3 mt-6">
          <Button
            variant="outline"
            size="icon"
            onClick={togglePause}
            aria-label={isPaused ? "Play carousel" : "Pause carousel"}
            className="rounded-full"
          >
            {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </Button>
          <Button
            variant="outline"
            onClick={cycleSpeed}
            aria-label={`Change speed (current: ${currentSpeed}x)`}
            className="rounded-full min-w-[80px] gap-2"
          >
            <Gauge className="h-4 w-4" />
            <span className="font-semibold">{currentSpeed}x</span>
          </Button>
        </div>
      </div>
      <div className="relative">
        <div ref={containerRef} className="flex items-center will-change-transform">
          {[...images, ...images, ...images].map((image, index) => {
            const baseIndex = index % images.length;
            const isWide = baseIndex === 1 || baseIndex === 3 || baseIndex === 4; // gutter shot, massive drainage, sprinkler head
            const imageSrc = isMobile ? image.mobile : image.desktop;
            return (
              <div
                key={`img-${index}`}
                className={`flex-shrink-0 mx-4 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white ${
                  isWide 
                    ? 'w-[320px] h-[180px] md:w-[570px] md:h-[320px]'
                    : 'w-[280px] h-[280px] md:w-[400px] md:h-[400px]'
                }`}
              >
                <OptimizedImage
                  src={imageSrc}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScrollingCarousel;
