"use client";

import Link from "next/link";

const footerLinks = {
  solutions: [
    { label: "Hardware Solutions", href: "#solutions" },
    { label: "Software Development", href: "#solutions" },
    { label: "Cloud Services", href: "#technology" },
    { label: "Cybersecurity", href: "#technology" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Support", href: "#" },
  ],
};

export function FooterSection() {
  return (
    <footer id="contact" className="bg-card">
      {/* Main Footer Content */}
      <div className="border-t border-border px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <Link href="/" className="text-lg font-bold text-foreground">
              <span className="text-primary">NEXUS</span> TECH
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Enterprise IT solutions delivering cutting-edge hardware and software services. 
              Powering digital transformation for modern businesses.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border px-6 py-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground">
            2026 Nexus Tech. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              LinkedIn
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
