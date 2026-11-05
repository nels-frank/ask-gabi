
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CircleUserRound,
  Trophy,
  UserRound,
} from "lucide-react";

// TODO: replace with your WhatsApp link, e.g. "https://wa.me/234XXXXXXXXXX?text=Hello%20Gabi"
const WHATSAPP_LINK = "#";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -35 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[760px] overflow-hidden bg-[#003d2b] md:min-h-[400px] lg:min-h-[660px]"
    >
      {/* Hero Image */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 -z-30"
      >
        <Image
          src="/images/hero.jpg"
          alt="Gabriel playing professional football"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center] sm:object-[72%_center] lg:object-[40%_center]"
        />
      </motion.div>

      {/* Deep Green Overlay */}
      <div className="absolute inset-0 -z-20 bg-[#003d2b]/45" />

      {/* Strong Left Gradient for Text */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#002f21] via-[#003d2b]/90 to-[#003d2b]/15" />

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 z-0 h-48 bg-gradient-to-t from-[#00271c] to-transparent" />

      {/* Subtle diagonal design */}
      <div className="pointer-events-none absolute -left-24 top-0 h-full w-[42%] -skew-x-12 bg-white/[0.025]" />

      <div className="relative mx-auto flex min-h-[500px] w-full max-w-[1440px] items-center px-5 pb-2 pt-26 md:pt-28 sm:min-h-[700px] sm:px-8 lg:min-h-[800px] lg:px-10 lg:pb-2 lg:pt-18">

        {/* Hero Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 w-full max-w-[680px]"
        >

          {/* Small Label */}
          <motion.div
            variants={fadeUp}
            className="mb-10 inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-white px-4 py-2 shadow-sm"
          >
            <div className="rounded-lg bg-emerald-900 p-2">
              <UserRound className="h-4 w-4 text-white" />
            </div>

            <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-900 sm:text-sm">
              Professional Footballer
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeLeft}
            className="max-w-[680px] text-2xl font-black leading-[1.04] tracking-[-0.025em] text-white text-justify md:text-3xl lg:text-4xl"
          >
            GABI - THE
            <span className="mt-4 block text-emerald-300">
              FOOTBALL PHILOSOPHER
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            variants={fadeUp}
            className="mb-5 mt-6 max-w-[600px] text-[20px] text-justify font-bold leading-7 text-white/90 md:mb-5 sm:text-[20px] sm:leading-8 lg:text-[20px]"
          >
            A professional football journey driven by discipline, experience,
            mentorship and the ambition to help the next generation reach their
            full potential.
          </motion.p>

          {/* Ask Gabi Card (replaces the two CTA buttons) */}
          <motion.div
            variants={fadeUp}
            className="relative mt-2 w-full max-w-[620px] overflow-hidden rounded-2xl border border-emerald-400/70 bg-gradient-to-br from-[#00432f]/95 via-[#003d2b]/95 to-[#00271c]/95 p-2 shadow-[0_0_28px_rgba(52,211,153,0.25)] backdrop-blur-md sm:p-5"
          >
            {/* Decorative corner curves */}
            <div className="pointer-events-none absolute -bottom-20 -right-14 h-44 w-44 rounded-full bg-emerald-400/10" />
            <div className="pointer-events-none absolute -bottom-28 -right-8 h-52 w-52 rounded-full border border-emerald-400/25" />

            <div className="relative flex items-center gap-2 sm:gap-5">
              {/* Chat bubbles icon */}
              <div
                aria-hidden="true"
                className="relative h-16 w-20 shrink-0 sm:h-16 sm:w-20"
              >
                {/* Filled bubble with "?" */}
                <div className="absolute left-0 top-0 flex h-10 w-14 items-center justify-center rounded-2xl rounded-bl-sm bg-emerald-400 text-xl font-black leading-none text-white shadow-lg shadow-emerald-950/30 sm:h-10 sm:w-14">
                  ?
                </div>

                {/* Outlined bubble with dots */}
                <div className="absolute bottom-0 right-0 flex h-9 w-12 items-center justify-center gap-[3px] rounded-full rounded-tr-sm border-2 border-emerald-400 bg-[#003d2b] sm:h-10 sm:w-14">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>
              </div>

              {/* Divider */}
              <div className="w-px self-stretch bg-white/20" />

              {/* Text */}
              <div className="min-w-0">
                <h2 className="text-[18px] font-black uppercase leading-[1.1] tracking-[-0.01em] text-white sm:text-[24px]">
                  Have questions about your{" "}
                  <span className="text-emerald-400">football career?</span>
                </h2>

                <p className="mt-2 text-[12px] font-bold leading-5 text-white/65 sm:text-[16px]">
                  Whether it&apos;s about agents, contracts, trials, or career
                  decisions, you don&apos;t have to figure everything out alone.
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="pl-12 sm:pl-30">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mt-4 inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full bg-gradient-to-b from-emerald-300 to-emerald-500 px-14 sm:px-28 text-[14px] font-bold uppercase tracking-[-0.01em] text-black shadow-[0_0_20px_rgba(52,211,153,0.45)] transition-all duration-200 hover:from-emerald-200 hover:to-emerald-400 hover:shadow-[0_0_30px_rgba(52,211,153,0.6)] sm:min-h-[46px] sm:text-[14px]"
            >
              Ask Gabi Now
              <ArrowRight
                size={22}
                strokeWidth={3}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
            </div>
          </motion.div>

          {/* Trust / Identity Items */}
          <motion.div
            variants={staggerContainer}
            className="mb-3 md:mb-10 mt-4 grid max-w-[680px] grid-cols-2 gap-5 border-t border-white/15 pt-4 sm:grid-cols-3 sm:gap-0"
          >

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 sm:border-r sm:border-white/15 sm:pr-5"
            >
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
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 sm:border-r sm:border-white/15 sm:px-5"
            >
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
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 sm:pl-5"
            >
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
            </motion.div>

          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Shape */}
      <div className="absolute bottom-[-1px] left-0 right-0 z-20 h-8 bg-[#003d2b] [clip-path:polygon(0_55%,100%_0,100%_100%,0_100%)] sm:h-12" />
    </section>
  );
}
