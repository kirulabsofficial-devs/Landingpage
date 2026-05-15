"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Users,
  Building2,
  MessageSquare,
  FolderKanban,
} from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsAboutOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sticky top-4 z-50 flex justify-center px-3">
      <header
        className="
          w-full
          max-w-5xl
          rounded-full
          border
          border-black/5
          bg-neutral-200/95
          shadow-lg
        "
      >
        <div className="flex h-[72px] items-center justify-between px-5 md:px-7">
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 text-xl font-bold tracking-tight text-black"
          >
            Kiru<span className="text-primary">Labs</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-8 xl:gap-10">
            <Link
              href="/#solutions"
              className="text-sm text-black/70 hover:text-black whitespace-nowrap"
            >
              Solutions
            </Link>

            <Link
              href="/#technology"
              className="text-sm text-black/70 hover:text-black whitespace-nowrap"
            >
              Technology
            </Link>

            <Link
              href="/#services"
              className="text-sm text-black/70 hover:text-black whitespace-nowrap"
            >
              Services
            </Link>

            {/* About Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                className="flex items-center gap-1 text-sm text-black/70 hover:text-black"
              >
                About

                <ChevronDown
                  size={14}
                  className={isAboutOpen ? "rotate-180" : ""}
                />
              </button>

              {isAboutOpen && (
                <div
                  className="
                    absolute
                    top-full
                    left-1/2
                    -translate-x-1/2
                    mt-4
                    w-64
                    overflow-hidden
                    rounded-2xl
                    border
                    border-black/10
                    bg-neutral-100
                    shadow-2xl
                  "
                >
                  <div className="py-2">
                    <Link
                      href="/team"
                      onClick={() => setIsAboutOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-black hover:bg-black/5"
                    >
                      <Users size={18} className="text-primary" />

                      <div>
                        <div className="font-medium">Our Team</div>

                        <div className="text-xs text-black/50">
                          Meet the experts
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/projects"
                      onClick={() => setIsAboutOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-black hover:bg-black/5"
                    >
                      <FolderKanban size={18} className="text-primary" />

                      <div>
                        <div className="font-medium">Projects</div>

                        <div className="text-xs text-black/50">
                          Our portfolio
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/#about"
                      onClick={() => setIsAboutOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-black hover:bg-black/5"
                    >
                      <Building2 size={18} className="text-primary" />

                      <div>
                        <div className="font-medium">Company</div>

                        <div className="text-xs text-black/50">
                          Our story & mission
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/contact"
                      onClick={() => setIsAboutOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-black hover:bg-black/5"
                    >
                      <MessageSquare size={18} className="text-primary" />

                      <div>
                        <div className="font-medium">Contact</div>

                        <div className="text-xs text-black/50">
                          Get in touch
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/consultation"
              className="
                rounded-full
                bg-primary
                px-5
                py-2.5
                text-sm
                font-medium
                text-primary-foreground
                hover:opacity-80
                whitespace-nowrap
              "
            >
              Get a Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black lg:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="
              lg:hidden
              border-t
              border-black/10
              bg-neutral-200
              px-6
              py-8
              rounded-b-3xl
            "
          >
            <nav className="flex flex-col gap-6">
              <Link
                href="/#solutions"
                className="text-lg text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </Link>

              <Link
                href="/#technology"
                className="text-lg text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                Technology
              </Link>

              <Link
                href="/#services"
                className="text-lg text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>

              {/* Mobile About Section */}
              <div className="border-t border-black/10 pt-4">
                <p className="mb-3 text-xs uppercase tracking-wider text-black/50">
                  About
                </p>

                <div className="flex flex-col gap-4 pl-2">
                  <Link
                    href="/team"
                    className="flex items-center gap-3 text-black"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Users size={18} className="text-primary" />
                    Our Team
                  </Link>

                  <Link
                    href="/projects"
                    className="flex items-center gap-3 text-black"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FolderKanban size={18} className="text-primary" />
                    Projects
                  </Link>

                  <Link
                    href="/#about"
                    className="flex items-center gap-3 text-black"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Building2 size={18} className="text-primary" />
                    Company
                  </Link>

                  <Link
                    href="/contact"
                    className="flex items-center gap-3 text-black"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <MessageSquare size={18} className="text-primary" />
                    Contact
                  </Link>
                </div>
              </div>

              <Link
                href="/consultation"
                className="
                  mt-4
                  rounded-full
                  bg-primary
                  px-5
                  py-3
                  text-center
                  text-sm
                  font-medium
                  text-primary-foreground
                "
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Consultation
              </Link>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}