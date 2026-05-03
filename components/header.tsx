"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl transition-all duration-300 ${isScrolled ? "bg-card/90 backdrop-blur-md rounded-full border border-border" : "bg-transparent"}`}
    >
      <div className="flex items-center justify-between transition-all duration-300 px-2 pl-5 py-2">
        {/* Logo */}
        <Link href="#" className={`text-lg font-bold tracking-tight transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-white"}`}>
          <span className="text-primary">NEXUS</span> TECH
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          <Link
            href="#solutions"
            className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/70 hover:text-white"}`}
          >
            Solutions
          </Link>
          <Link
            href="#technology"
            className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/70 hover:text-white"}`}
          >
            Technology
          </Link>
          <Link
            href="#services"
            className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/70 hover:text-white"}`}
          >
            Services
          </Link>
          <Link
            href="#about"
            className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/70 hover:text-white"}`}
          >
            About
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="#contact"
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
              href="#solutions"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="#technology"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Technology
            </Link>
            <Link
              href="#services"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
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
