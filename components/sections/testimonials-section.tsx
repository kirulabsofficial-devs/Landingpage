"use client";

import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section id="about" className="bg-background">
      {/* Large Text Statement */}
      <div className="px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
        <p className="mx-auto max-w-5xl text-2xl leading-relaxed text-foreground md:text-3xl lg:text-[2.5rem] lg:leading-snug">
          At <span className="text-primary font-semibold">KiruLabs</span>, we combine enterprise-grade infrastructure 
          with innovative software solutions — empowering businesses to scale, secure their assets, and 
          lead in the digital economy.
        </p>
      </div>

      {/* About Image */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/tech-datacenter.jpg"
          alt="Enterprise technology infrastructure"
          fill
          className="object-cover"
        />
        {/* Fade gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>
    </section>
  );
}
