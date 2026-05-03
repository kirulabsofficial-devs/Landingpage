"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Users, Building2, MessageSquare, FolderKanban } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAboutOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header 
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl transition-all duration-300 ${isScrolled ? "bg-card/90 backdrop-blur-md rounded-full border border-border" : "bg-transparent"}`}
    >
      <div className="flex items-center justify-between transition-all duration-300 px-2 pl-5 py-2">
        {/* Logo */}
        <Link href="/" className={`text-lg font-bold tracking-tight transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-white"}`}>
          Kiru<span className="text-primary">Labs</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          <Link
            href="/#solutions"
            className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/70 hover:text-white"}`}
          >
            Solutions
          </Link>
          <Link
            href="/#technology"
            className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/70 hover:text-white"}`}
          >
            Technology
          </Link>
          <Link
            href="/#services"
            className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/70 hover:text-white"}`}
          >
            Services
          </Link>
          
          {/* About Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsAboutOpen(!isAboutOpen)}
              className={`flex items-center gap-1 text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/70 hover:text-white"}`}
            >
              About
              <ChevronDown 
                size={14} 
                className={`transition-transform duration-200 ${isAboutOpen ? "rotate-180" : ""}`} 
              />
            </button>
            
            {isAboutOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-card border border-border rounded-xl shadow-xl overflow-hidden">
                <div className="py-2">
                  <Link
                    href="/team"
                    onClick={() => setIsAboutOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-secondary transition-colors"
                  >
                    <Users size={18} className="text-primary" />
                    <div>
                      <div className="font-medium">Our Team</div>
                      <div className="text-xs text-muted-foreground">Meet the experts</div>
                    </div>
                  </Link>
                  <Link
                    href="/projects"
                    onClick={() => setIsAboutOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-secondary transition-colors"
                  >
                    <FolderKanban size={18} className="text-primary" />
                    <div>
                      <div className="font-medium">Projects</div>
                      <div className="text-xs text-muted-foreground">Our portfolio</div>
                    </div>
                  </Link>
                  <Link
                    href="/#about"
                    onClick={() => setIsAboutOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-secondary transition-colors"
                  >
                    <Building2 size={18} className="text-primary" />
                    <div>
                      <div className="font-medium">Company</div>
                      <div className="text-xs text-muted-foreground">Our story & mission</div>
                    </div>
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setIsAboutOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-secondary transition-colors"
                  >
                    <MessageSquare size={18} className="text-primary" />
                    <div>
                      <div className="font-medium">Contact</div>
                      <div className="text-xs text-muted-foreground">Get in touch</div>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/consultation"
            className={`px-4 py-2 text-sm font-medium transition-all rounded-full ${isScrolled ? "bg-primary text-primary-foreground hover:opacity-80" : "bg-primary text-primary-foreground hover:bg-primary/90"}`}
          >
            Get a Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`transition-colors md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-border bg-card px-6 py-8 md:hidden rounded-b-2xl">
          <nav className="flex flex-col gap-6">
            <Link
              href="/#solutions"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/#technology"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Technology
            </Link>
            <Link
              href="/#services"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            
            {/* Mobile About Section */}
            <div className="border-t border-border pt-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">About</p>
              <div className="flex flex-col gap-4 pl-2">
                <Link
                  href="/team"
                  className="flex items-center gap-3 text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Users size={18} className="text-primary" />
                  Our Team
                </Link>
                <Link
                  href="/projects"
                  className="flex items-center gap-3 text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FolderKanban size={18} className="text-primary" />
                  Projects
                </Link>
                <Link
                  href="/#about"
                  className="flex items-center gap-3 text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Building2 size={18} className="text-primary" />
                  Company
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-3 text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageSquare size={18} className="text-primary" />
                  Contact
                </Link>
              </div>
            </div>
            
            <Link
              href="/consultation"
              className="mt-4 bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground rounded-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
