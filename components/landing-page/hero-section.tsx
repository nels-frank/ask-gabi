"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  CircleUserRound,
  Trophy,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[760px] overflow-hidden bg-[#003d2b] sm:min-h-[620px] lg:min-h-[660px]"
    >
      {/* Hero Image */}
      <div className="absolute inset-0 -z-30">
        <Image
          src="/images/hero.png"
          alt="Gabriel playing professional football"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center] sm:object-[60%_center] lg:object-[40%_center]"
        />
      </div>

      {/* Deep Green Overlay */}
      <div className="absolute inset-0 -z-20 bg-[#003d2b]/65" />

      {/* Strong Left Gradient for Text */}

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 z-0 h-48 bg-gradient-to-t from-[#00271c] to-transparent" />

      {/* Subtle diagonal design */}
      <div className="pointer-events-none absolute -left-24 top-0 h-full w-[42%] -skew-x-12 bg-white/[0.025]" />

      <div className="relative mx-auto flex min-h-[500px] w-full max-w-[1440px] items-center px-5 pb-2 pt-26 sm:min-h-[700px] sm:px-8 lg:min-h-[800px] lg:px-10 lg:pb-2 lg:pt-2">
        
        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[680px]">
          
          {/* Small Label */}
          <div className="mb-26 inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-4 backdrop-blur-sm sm:mb-6 lg:mb-6">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

            <span className="text-[13px] font-extrabold uppercase tracking-[0.12em] text-emerald-300 sm:text-[14px]">
              Professional Footballer
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="max-w-[680px] text-6xl font-black leading-[1.04] tracking-[-0.025em] text-white text-justify sm:text-5xl md:text-6xl lg:text-[70px] xl:text-[78px] sm:mt-4 lg:mt-4">
            Building the
            <span className="block text-emerald-300">
              next level.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="max-w-[600px] text-[18px] text-justify font-semibold leading-7 text-white/90 sm:text-[19px] sm:leading-8 lg:text-[20px] sm:mt-4 lg:mt-4">
            A professional football journey driven by discipline, experience,
            mentorship and the ambition to help the next generation reach their
            full potential.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:mt-10 lg:mt-12">
            <Link
              href="#journey"
               className="inline-flex min-h-[52px] items-center justify-center rounded-md bg-[#003d2b]/95 px-7 text-[16px] font-extrabold text-white backdrop-blur-sm transition-all duration-200 hover:border-emerald-300 border-2 hover:bg-white/10 hover:text-emerald-300"
            >
              Explore the Journey

              <ArrowRight
                size={19}
                strokeWidth={2.8}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#mentorship"
              className="inline-flex min-h-[52px] items-center justify-center rounded-md border-2 bg-[#003d2b]/95 px-7 text-[16px] font-extrabold text-white backdrop-blur-sm transition-all duration-200 hover:border-emerald-300 hover:bg-white/10 hover:text-emerald-300"
            >
              Discover Mentorship
            </Link>
          </div>

          {/* Trust / Identity Items */}
          <div className="mt-3 grid max-w-[680px] grid-cols-2 gap-5 border-t border-white/15 pt-4 sm:grid-cols-3 sm:gap-0 sm:mt-16 lg:mt-16">
            
            <div className="flex items-center gap-3 sm:border-r sm:border-white/15 sm:pr-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                <Trophy size={22} strokeWidth={2.5} />
              </div>

              <div>
                <p className="text-[14px] font-black text-white sm:text-[15px]">
                  Professional
                </p>
                <p className="mt-0.5 text-[12px] font-semibold text-white/60 sm:text-[13px]">
                  Footballer
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:border-r sm:border-white/15 sm:px-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                <CircleUserRound size={22} strokeWidth={2.5} />
              </div>

              <div>
                <p className="text-[14px] font-black text-white sm:text-[15px]">
                  Mentorship
                </p>
                <p className="mt-0.5 text-[12px] font-semibold text-white/60 sm:text-[13px]">
                  Next Generation
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:pl-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                <BarChart3 size={22} strokeWidth={2.5} />
              </div>

              <div>
                <p className="text-[14px] font-black text-white sm:text-[15px]">
                  Development
                </p>
                <p className="mt-0.5 text-[12px] font-semibold text-white/60 sm:text-[13px]">
                  Skills & Discipline
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}