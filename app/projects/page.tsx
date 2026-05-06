import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock, CheckCircle2 } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SecureBank Digital Platform",
    client: "GoldCoast Financial",
    category: "Software Development",
    status: "completed",
    description: "A comprehensive digital banking platform featuring secure transactions, real-time analytics, and mobile-first design. Serving over 500,000 active users.",
    image: "/images/projects/project-banking.jpg",
    tags: ["FinTech", "React", "Node.js", "AWS"],
  },
  {
    id: 2,
    title: "MediCare Hospital System",
    client: "Regional Health Network",
    category: "Healthcare IT",
    status: "completed",
    description: "Integrated hospital management system with patient records, appointment scheduling, and telemedicine capabilities across 12 facilities.",
    image: "/images/projects/project-healthcare.jpg",
    tags: ["Healthcare", "HIPAA Compliant", "Cloud"],
  },
  {
    id: 3,
    title: "RetailPro E-Commerce Suite",
    client: "AfroMart Retail",
    category: "E-Commerce",
    status: "in-progress",
    description: "Enterprise e-commerce platform with inventory management, multi-vendor support, and AI-powered recommendations. Currently in Phase 2 deployment.",
    image: "/images/projects/project-ecommerce.jpg",
    tags: ["E-Commerce", "AI/ML", "Microservices"],
  },
  {
    id: 4,
    title: "LogiTrack Fleet Management",
    client: "TransGlobal Logistics",
    category: "IoT & Logistics",
    status: "completed",
    description: "Real-time fleet tracking and logistics optimization system managing 2,000+ vehicles across West Africa with predictive maintenance alerts.",
    image: "/images/projects/project-logistics.jpg",
    tags: ["IoT", "GPS Tracking", "Analytics"],
  },
  {
    id: 5,
    title: "EduConnect LMS Platform",
    client: "National Education Board",
    category: "EdTech",
    status: "in-progress",
    description: "Scalable learning management system serving 50+ schools with virtual classrooms, assessment tools, and progress tracking.",
    image: "/images/projects/project-education.jpg",
    tags: ["EdTech", "Video Streaming", "SaaS"],
  },
  {
    id: 6,
    title: "SmartCity Infrastructure",
    client: "Accra Metropolitan",
    category: "Smart Infrastructure",
    status: "in-progress",
    description: "IoT-based smart city platform for traffic management, energy monitoring, and public safety systems across the metropolitan area.",
    image: "/images/projects/project-iot.jpg",
    tags: ["IoT", "Smart City", "Data Analytics"],
  },
];

export default function ProjectsPage() {
  const completedProjects = projects.filter((p) => p.status === "completed");
  const inProgressProjects = projects.filter((p) => p.status === "in-progress");

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl bg-card/90 backdrop-blur-md rounded-full border border-border">
        <div className="flex items-center justify-between px-2 pl-5 py-2">
          <Link href="/" className="text-lg font-bold tracking-tight text-foreground">
            Kiru<span className="text-primary">Labs</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider text-primary border border-primary/30 rounded-full bg-primary/10">
            OUR PORTFOLIO
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Projects That Drive{" "}
            <span className="text-primary">Innovation</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our portfolio of successful implementations across various industries. 
            From startups to enterprises, we deliver solutions that make an impact.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6 text-center">
              <p className="text-4xl font-bold text-primary mb-2">50+</p>
              <p className="text-sm text-muted-foreground">Projects Delivered</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 text-center">
              <p className="text-4xl font-bold text-primary mb-2">30+</p>
              <p className="text-sm text-muted-foreground">Enterprise Clients</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 text-center">
              <p className="text-4xl font-bold text-primary mb-2">8</p>
              <p className="text-sm text-muted-foreground">Industries Served</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 text-center">
              <p className="text-4xl font-bold text-primary mb-2">98%</p>
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* In Progress Projects */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <Clock className="text-primary" size={28} />
            <h2 className="text-3xl font-bold text-foreground">In Progress</h2>
            <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full">
              {inProgressProjects.length} Active
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inProgressProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-yellow-500/90 text-yellow-950 text-xs font-semibold rounded-full flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-yellow-950 rounded-full animate-pulse" />
                      In Progress
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-xs text-primary font-medium uppercase tracking-wider mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.client}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-secondary text-muted-foreground text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-16 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <CheckCircle2 className="text-primary" size={28} />
            <h2 className="text-3xl font-bold text-foreground">Completed</h2>
            <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full">
              {completedProjects.length} Delivered
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-background border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-500/90 text-green-950 text-xs font-semibold rounded-full flex items-center gap-1.5">
                      <CheckCircle2 size={12} />
                      Completed
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-xs text-primary font-medium uppercase tracking-wider mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.client}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-secondary text-muted-foreground text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card border border-border rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let&apos;s discuss how KiruLabs can help bring your vision to life with our expertise in hardware and software solutions.
            </p>
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              Start Your Project
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            2024 KiruLabs. All rights reserved.
          </p>
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </footer>
    </main>
  );
}
