import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Selasi Dzeamesi",
    role: "Chief Executive Officer",
    bio: "As a visionary leader in tech innovation, Selasi drives Kirulabs' mission to become a leading tech company.",
    image: "/ceo1.jpg",
    linkedin: "https://www.linkedin.com/in/selasi-dzeamesi-818206251/",
    Github: "#",
    email: "selasidzeamesi82@gmail.com",
  },
  {
    name: "David Mends",
    role: "Chief Technology Officer",
    bio: "David oversees all technical operations and drives our R&D initiatives. His expertise spans cloud architecture, AI, and enterprise systems.",
    image: "/images/team/cto.jpg",
    linkedin: "#",
    twitter: "#",
    email: "david@kirulabs.com",
  },
  {
    name: "Deborah Narh",
    role: "Brand Ambassador and Social Media Manager",
    bio: "Sarah ensures seamless delivery of our services and maintains the highest standards of operational excellence across all projects.",
    image: "remikiru.jpg",
    linkedin: "#",
    twitter: "#",
    email: "sarah@kirulabs.com",
  },
  {
    name: "Paa Joe",
    role: "Lead Cloud Engineer",
    bio: "Michael leads our development team, specializing in full-stack development and creating scalable software solutions for enterprise clients.",
    image: "/images/team/lead-developer.jpg",
    linkedin: "#",
    twitter: "#",
    email: "michael@kirulabs.com",
  },
  {
    name: "Regina Kumah",
    role: "UX/UI Design Lead",
    bio: "Emily brings creativity and user-centered design thinking to every project, ensuring our solutions are both beautiful and functional.",
    image: "/Regina1.jpg",
    linkedin: "#",
    twitter: "#",
    email: "emily@kirulabs.com",
  },
  {
    name: "Robert Anderson",
    role: "Infrastructure Engineer",
    bio: "Robert manages our cloud infrastructure and ensures 99.9% uptime for all client systems with robust security implementations.",
    image: "/images/team/engineer.jpg",
    linkedin: "#",
    twitter: "#",
    email: "robert@kirulabs.com",
  },
];

export default function TeamPage() {
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
            OUR TEAM
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Meet the Experts Behind{" "}
            <span className="text-primary">KiruLabs</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our talented team of professionals is dedicated to delivering innovative IT solutions 
            that drive your business forward. Get to know the people who make it happen.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 -mt-16 relative z-10">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href={member.linkedin}
                      className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href={member.Github}
                      className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      aria-label={`${member.name}'s Github`}
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={16} />
                    </a>
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
              Want to Join Our Team?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              We&apos;re always looking for talented individuals who are passionate about technology 
              and innovation. Check out our open positions.
            </p>
            <Link
              href="#careers"
              className="inline-flex px-8 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            2026 KiruLabs. All rights reserved.
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
