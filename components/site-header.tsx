"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, UserRound } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Journey", href: "/journey" },
  { label: "Mentorship", href: "/mentorship" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-green-950 backdrop-blur-md">
      <div className="mx-auto flex h-[78px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-10">
        
        {/* Logo */}
        <Link
          href="/"
          className="relative flex shrink-0 items-center"
          aria-label="Gabriel Football"
        >
          <img
            src="/images/logo.png"
            alt="Gabriel Football"
            className="h-11 w-auto object-contain sm:h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={`relative py-7 text-[15px] font-extrabold tracking-[0.01em] transition-colors duration-200 ${
              pathname === item.href
                ? "text-emerald-300"
                : "text-white hover:text-emerald-300"
            }`}
            >
              {item.label}

              {pathname === item.href && (
              <span className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-emerald-400" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop Connect Button */}
        <Link
          href="#contact"
          className="hidden items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-[15px] font-extrabold text-white transition-all duration-200 hover:border-emerald-300 hover:bg-emerald-400 hover:text-[#003d2b] lg:flex"
        >
          <UserRound size={18} strokeWidth={2.5} />
          Connect
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-white transition hover:border-emerald-300 hover:text-emerald-300 lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X size={25} strokeWidth={2.5} />
          ) : (
            <Menu size={25} strokeWidth={2.5} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#003d2b]/98 px-5 py-5 shadow-xl lg:hidden">
          <nav className="mx-auto flex max-w-[1440px] flex-col">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`border-b border-white/10 py-4 text-[16px] font-extrabold ${
                  pathname === item.href
                    ? "text-emerald-300"
                    : "text-white hover:text-emerald-300"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-5 py-3 text-[16px] font-extrabold text-[#003d2b] transition hover:bg-emerald-300"
            >
              <UserRound size={19} strokeWidth={2.5} />
              Connect
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}