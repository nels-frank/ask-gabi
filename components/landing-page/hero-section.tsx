
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CircleUserRound,
  Trophy,
  UserRound,
} from "lucide-react";

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

      <div className="relative mx-auto flex min-h-[500px] w-full max-w-[1440px] items-center px-5 pb-2 pt-26 md:pt-0 sm:min-h-[700px] sm:px-8 lg:min-h-[800px] lg:px-10 lg:pb-2 lg:pt-2">

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
            className="mt-6 max-w-[600px] text-[20px] text-justify font-bold leading-7 text-white/90 sm:text-[20px] sm:leading-8 lg:text-[20px]"
          >
            A professional football journey driven by discipline, experience,
            mentorship and the ambition to help the next generation reach their
            full potential.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="#journey"
              className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md bg-emerald-400 px-7 text-[16px] font-extrabold text-[#003d2b] shadow-lg shadow-emerald-950/20 transition-all duration-200 hover:bg-emerald-300 hover:shadow-xl"
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
              className="inline-flex min-h-[52px] items-center justify-center rounded-md border-2 border-white/40 bg-white/5 px-7 text-[16px] font-extrabold text-white backdrop-blur-sm transition-all duration-200 hover:border-emerald-300 hover:bg-white/10 hover:text-emerald-300"
            >
              Discover Mentorship
            </Link>
          </motion.div>

          {/* Trust / Identity Items */}
          <motion.div
            variants={staggerContainer}
            className="mt-12 grid max-w-[680px] grid-cols-2 gap-5 border-t border-white/15 pt-4 sm:grid-cols-3 sm:gap-0"
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
