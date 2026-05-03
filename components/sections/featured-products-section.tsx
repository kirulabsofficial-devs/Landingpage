"use client";

import { FadeImage } from "@/components/fade-image";

const features = [
  {
    title: "Cloud Infrastructure",
    description: "Scalability",
    image: "/images/tech-cloud.jpg",
  },
  {
    title: "Cybersecurity Solutions",
    description: "Protection",
    image: "/images/tech-security.jpg",
  },
  {
    title: "Data Center Services",
    description: "Infrastructure",
    image: "/images/tech-datacenter.jpg",
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligence",
    image: "/images/tech-ai.jpg",
  },
  {
    title: "Network Architecture",
    description: "Connectivity",
    image: "/images/tech-network.jpg",
  },
  {
    title: "System Integration",
    description: "Unification",
    image: "/images/tech-integration.jpg",
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="technology" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 text-center md:px-12 md:py-28 lg:px-20 lg:py-32 lg:pb-20">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Technology That Drives
          <br />
          <span className="text-primary">Business Forward.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm text-muted-foreground">
          Our Capabilities
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-4 px-6 pb-20 md:grid-cols-3 md:px-12 lg:px-20">
        {features.map((feature) => (
          <div key={feature.title} className="group">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
              <FadeImage
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                fill
                className="object-cover group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="py-6">
              <p className="mb-2 text-xs uppercase tracking-widest text-primary">
                {feature.description}
              </p>
              <h3 className="text-foreground text-xl font-semibold">
                {feature.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Link */}
      <div className="flex justify-center px-6 pb-28 md:px-12 lg:px-20">
        
      </div>
    </section>
  );
}
