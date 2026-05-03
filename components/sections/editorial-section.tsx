"use client";

import Image from "next/image";

const stats = [
  { label: "Projects Delivered", value: "500+" },
  { label: "Enterprise Clients", value: "200+" },
  { label: "Uptime SLA", value: "99.9%" },
  { label: "Support Response", value: "< 1hr" },
];

export function EditorialSection() {
  return (
    <section className="bg-background">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 border-t border-border md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="border-b border-r border-border p-8 text-center last:border-r-0 md:border-b-0"
          >
            <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
              {stat.label}
            </p>
            <p className="font-bold text-primary text-4xl">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Full-width Image */}
      <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
        <Image
          src="/images/tech-innovation.jpg"
          alt="Technology innovation and development"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
        <div className="absolute inset-0 flex items-center px-6 md:px-12 lg:px-20">
          <div className="max-w-xl">
            <h3 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Ready to <span className="text-primary">Transform</span> Your Business?
            </h3>
            <p className="mt-4 text-muted-foreground text-lg">
              Contact us for a free consultation and discover how our IT solutions can accelerate your digital journey.
            </p>
            <button className="mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
