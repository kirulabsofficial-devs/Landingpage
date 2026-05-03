"use client";

import { FadeImage } from "@/components/fade-image";

const services = [
  {
    id: 1,
    name: "IT Infrastructure Setup",
    description: "End-to-end hardware deployment and configuration",
    image: "/images/tech-hardware.jpg",
  },
  {
    id: 2,
    name: "Custom Software Development",
    description: "Tailored applications built for your business needs",
    image: "/images/tech-software.jpg",
  },
  {
    id: 3,
    name: "Cloud Migration Services",
    description: "Seamless transition to cloud-native architecture",
    image: "/images/tech-cloud.jpg",
  },
  {
    id: 4,
    name: "24/7 Technical Support",
    description: "Round-the-clock monitoring and assistance",
    image: "/images/tech-support.jpg",
  },
  {
    id: 5,
    name: "Security Audits & Compliance",
    description: "Comprehensive cybersecurity assessments",
    image: "/images/tech-security.jpg",
  },
  {
    id: 6,
    name: "Digital Transformation",
    description: "Strategic consulting for modern enterprises",
    image: "/images/tech-consulting.jpg",
  },
];

export function CollectionSection() {
  return (
    <section id="services" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 md:px-12 lg:px-20 md:py-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Our <span className="text-primary">Services</span>
        </h2>
      </div>

      {/* Services Grid/Carousel */}
      <div className="pb-24">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {services.map((service) => (
            <div key={service.id} className="group flex-shrink-0 w-[75vw] snap-center">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary border border-border">
                <FadeImage
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex-1">
                  <h3 className="text-lg font-medium leading-snug text-foreground">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 md:px-12 lg:px-20">
          {services.map((service) => (
            <div key={service.id} className="group">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary border border-border">
                <FadeImage
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex-1">
                  <h3 className="text-lg font-medium leading-snug text-foreground">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
