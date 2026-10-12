"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "My Story", href: "/my-story" },
  { label: "Football Journey", href: "/football-journey" },
  { label: "Why ASK GABI", href: "/why-ask-gabi" },
  { label: "Our Vision & Mission", href: "/vision-mission" },
];

const supportLinks = [
  { label: "What We Share", href: "/what-i-want-to-share" },
  { label: "Professional Network", href: "/professional-network" },
  { label: "Media & Moments", href: "/media" },
  { label: "Contact ASK GABI", href: "/contact" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: FaInstagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: FaFacebookF,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: FaYoutube,
  },
  {
    label: "X",
    href: "https://x.com/",
    icon: FaXTwitter,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/",
    icon: FaTiktok,
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-emerald-950 text-white">
      {/* Main footer */}
      <div className="px-5 pt-4 sm:px-6 sm:pt-20 lg:px-8">
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 lg:gap-6">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex flex-col">
              <span className="text-3xl font-black tracking-tight">
                ASK <span className="text-lime-400">GABI</span>
              </span>
              <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-200/70">
                Real Experience. Real Guidance.
              </span>
            </Link>

            <p className="mt-2 max-w-sm text-sm text-justify font-bold leading-7 text-emerald-100/75">
              Helping African footballers, especially Nigerian players,
              make informed career decisions through real experience,
              trusted knowledge and access to professional support.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-6 w-6 items-center justify-center rounded-full border border-emerald-800 text-emerald-100 transition hover:border-lime-400 hover:bg-lime-400 hover:text-emerald-950"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-lime-400">
              Explore
            </h2>

            <ul className="mt-1 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-bold text-emerald-100/75 transition hover:text-lime-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-lime-400">
              Resources
            </h2>

            <ul className="mt-2 space-y-4">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex font-bold items-center gap-2 text-sm text-emerald-100/75 transition hover:text-lime-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / CTA */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-lime-400">
              Start a Conversation
            </h2>

            <p className="mt-2 text-sm text-justify font-bold leading-7 text-emerald-100/75">
              Have a question about your football journey? Take the first
              step towards making a more informed decision.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-lime-400 px-5 py-3 text-sm font-bold text-emerald-950 transition hover:bg-lime-300"
            >
              Contact <br /> ASK GABI
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <div className="mt-2 space-y-3 text-sm text-emerald-100/75">
              <p className="flex items-center gap-3 font-bold">
                <Mail className="h-4 w-4 shrink-0 text-lime-400" />
                <span>Use our contact page to reach us</span>
              </p>
              <p className="flex items-center gap-3 font-bold">
                <MapPin className="h-4 w-4 shrink-0 text-lime-400" />
                <span>Connecting footballers and professionals</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-emerald-900">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-center sm:px-6 md:flex-row md:items-center md:justify-between md:text-left lg:px-8">
          <p className="text-xs leading-5 text-emerald-100/60 sm:text-sm">
            © {new Date().getFullYear()} ASK GABI. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-emerald-100/60 sm:text-sm">
            <Link
              href="/privacy-policy"
              className="transition hover:text-lime-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-lime-400"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}