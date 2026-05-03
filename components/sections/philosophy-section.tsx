"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

export function PhilosophySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hardwareTranslateX, setHardwareTranslateX] = useState(-100);
  const [softwareTranslateX, setSoftwareTranslateX] = useState(100);
  const [titleOpacity, setTitleOpacity] = useState(1);
  const rafRef = useRef<number | null>(null);

  const updateTransforms = useCallback(() => {
    if (!sectionRef.current) return;
    
    const rect = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = sectionRef.current.offsetHeight;
    
    // Calculate progress based on scroll position
    const scrollableRange = sectionHeight - windowHeight;
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollableRange));
    
    // Hardware comes from left (-100% to 0%)
    setHardwareTranslateX((1 - progress) * -100);
    
    // Software comes from right (100% to 0%)
    setSoftwareTranslateX((1 - progress) * 100);
    
    // Title fades out as blocks come together
    setTitleOpacity(1 - progress);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Cancel any pending animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      // Use requestAnimationFrame for smooth updates
      rafRef.current = requestAnimationFrame(updateTransforms);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateTransforms();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateTransforms]);

  return (
    <section id="solutions" className="bg-background">
      {/* Scroll-Animated Solutions Grid */}
      <div ref={sectionRef} className="relative" style={{ height: "200vh" }}>
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="relative w-full">
            {/* Title - positioned behind the blocks */}
            <div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
              style={{ opacity: titleOpacity }}
            >
              <h2 className="text-[12vw] font-bold leading-[0.95] tracking-tighter text-foreground md:text-[10vw] lg:text-[8vw] text-center px-6">
                Hardware & Software.
              </h2>
            </div>

            {/* Solutions Grid */}
            <div className="relative z-10 grid grid-cols-1 gap-4 px-6 md:grid-cols-2 md:px-12 lg:px-20">
              {/* Hardware Image - comes from left */}
              <div 
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                style={{
                  transform: `translate3d(${hardwareTranslateX}%, 0, 0)`,
                  WebkitTransform: `translate3d(${hardwareTranslateX}%, 0, 0)`,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <Image
                  src="/images/tech-hardware.jpg"
                  alt="Enterprise hardware solutions"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="backdrop-blur-md px-4 py-2 text-sm font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
                    Hardware Solutions
                  </span>
                </div>
              </div>

              {/* Software Image - comes from right */}
              <div 
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                style={{
                  transform: `translate3d(${softwareTranslateX}%, 0, 0)`,
                  WebkitTransform: `translate3d(${softwareTranslateX}%, 0, 0)`,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <Image
                  src="/images/tech-software.jpg"
                  alt="Enterprise software development"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="backdrop-blur-md px-4 py-2 text-sm font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
                    Software Solutions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-36 lg:pb-14">
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-primary">
            Enterprise Solutions
          </p>
          <p className="mt-8 leading-relaxed text-muted-foreground text-3xl text-center">
            We deliver comprehensive IT solutions spanning enterprise hardware infrastructure 
            and custom software development. Built for scale, security, and performance.
          </p>
        </div>
      </div>
    </section>
  );
}
