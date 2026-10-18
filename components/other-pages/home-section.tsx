
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  FileText,
  MessageCircle,
  Plane,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const learningAreas = [
  {
    number: "01",
    icon: Users,
    title: "Agents & Representation",
    description:
      "Understand representation, ask the right questions, and know whose interests are being protected.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Contracts & Player Rights",
    description:
      "Learn why agreements matter and when to seek qualified professional advice before committing.",
  },
  {
    number: "03",
    icon: Plane,
    title: "Trials & Opportunities",
    description:
      "Know the difference between a genuine opportunity, a trial, and a guaranteed professional contract.",
  },
  {
    number: "04",
    icon: Brain,
    title: "Adaptation & Development",
    description:
      "Explore the discipline, flexibility, and learning mindset needed to navigate different football environments.",
  },
];

const careerJourney = [
  { country: "Nigeria", club: "Dynamo Academica", period: "Youth development" },
  { country: "Serbia", club: "IMT Novi Beograd", period: "2022–2024" },
  { country: "Serbia", club: "Tekstilac Odžaci", period: "2024 · Loan" },
  { country: "Serbia", club: "Mladost Lučani", period: "2024" },
  { country: "Türkiye", club: "Bodrum FK", period: "From 2024" },
  { country: "Moldova", club: "FC Zimbru Chișinău", period: "2025 · Loan" },
];

export default function HomeSections() {
  return (
    <main className="overflow-hidden bg-slate-50">
      {/* 1. THE STORY BEHIND ASK GABI */}
      <section className="relative px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-12 h-72 w-72 rounded-full bg-green-200/40 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-md lg:mx-0"
          >
            <div className="absolute -bottom-3 -left-3 h-full w-full rounded-3xl bg-green-950 sm:-bottom-4 sm:-left-4" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border-4 border-white bg-green-100 shadow-xl">
              <Image
                src="/images/about-us.jpg"
                alt="Gabriel Obekpa, professional footballer and founder of ASK GABI"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover object-top"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-green-950/95 via-green-950/45 to-transparent p-5 pt-20 sm:p-7 sm:pt-24">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
                  Beyond the Pitch
                </p>
                <p className="mt-2 text-2xl font-black text-white sm:text-3xl">
                  Gabriel Obekpa
                </p>
                <p className="mt-1 text-sm font-semibold text-white/75">
                  Professional Footballer · ASK GABI Founder
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-left"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-green-950 px-3 py-1 text-sm font-bold text-white">
              <Sparkles className="h-4 w-4 text-emerald-300" />
              The Story Behind ASK GABI
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Talent opens doors.
              <span className="mt-1 block text-green-800">
                Knowledge helps you navigate them.
              </span>
            </h2>

            <div className="mt-3 h-1 w-16 rounded-full bg-green-950" />

            <p className="mt-4 text-justify text-base font-bold leading-7 text-gray-600 sm:text-lg sm:leading-8">
              My journey through professional football has taught me that
              talent alone is not enough. Understanding opportunities,
              contracts, adaptation, and career decisions matters just as
              much.
            </p>

            <p className="mt-3 text-justify text-base font-bold leading-7 text-gray-600 sm:text-lg sm:leading-8">
              I created ASK GABI to share what I have learned and help
              young African footballers make better-informed decisions.
              I may not have every answer, but I believe every player
              deserves the opportunity to ask questions and learn.
            </p>

            <div className="mt-6 border-l-4 border-emerald-500 bg-green-50 px-5 py-4">
              <p className="text-lg font-black leading-7 text-green-950 sm:text-xl">
                You don&apos;t need to know everything. You need access
                to people who do.
              </p>
              <p className="mt-2 text-sm font-extrabold uppercase tracking-[0.16em] text-green-800">
                Ask. Learn. Grow.
              </p>
            </div>

            <Link
              href="/about"
              className="group mt-6 inline-flex items-center gap-2 text-base font-extrabold text-green-900 transition hover:text-green-700"
            >
              More About Gabriel
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. WHAT PLAYERS CAN LEARN */}
      <section
        id="mentorship"
        className="relative bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-lime-100/70 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-green-950 px-3 py-1 text-sm font-bold text-white">
              <ShieldCheck className="h-4 w-4 text-emerald-300" />
              Learn Beyond the Game
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Understand the game beyond the pitch.
            </h2>

            <div className="mt-3 h-1 w-16 rounded-full bg-green-950" />

            <p className="mt-4 text-justify text-base font-bold leading-7 text-gray-600 sm:text-lg sm:leading-8">
              From evaluating opportunities to adapting to professional
              football, explore the practical subjects that can shape a
              player&apos;s career.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
            {learningAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.article
                  key={area.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-white hover:shadow-lg sm:p-6"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-950 text-emerald-300 transition group-hover:bg-emerald-400 group-hover:text-green-950">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="text-sm font-black tracking-widest text-green-800/35">
                      {area.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-extrabold leading-6 text-green-950">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm font-bold leading-6 text-slate-600 sm:text-base sm:leading-7">
                    {area.description}
                  </p>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-7 flex flex-col gap-4 rounded-2xl bg-green-950 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <p className="text-lg font-extrabold text-white sm:text-xl">
                Have a question about your own journey?
              </p>
              <p className="mt-1 text-sm font-semibold leading-6 text-white/70 sm:text-base">
                Start a conversation with ASK GABI.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-emerald-400 px-5 py-3 text-sm font-extrabold text-green-950 transition hover:bg-emerald-300"
            >
              Ask Gabi
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. GABRIEL'S REAL FOOTBALL JOURNEY */}
      <section
        id="journey"
        className="relative overflow-hidden bg-slate-100 px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20"
      >
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-green-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-14">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-green-950 px-3 py-1 text-sm font-bold text-white">
                <ArrowUpRight className="h-4 w-4 text-emerald-300" />
                My Football Journey
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Different countries.
                <span className="mt-1 block text-green-800">
                  Lessons at every step.
                </span>
              </h2>

              <div className="mt-3 h-1 w-16 rounded-full bg-green-950" />

              <p className="mt-4 text-justify text-base font-bold leading-7 text-gray-600 sm:text-lg sm:leading-8">
                From Nigeria to European football, every move has brought
                new challenges, lessons, and opportunities to grow. These
                experiences are part of what inspired ASK GABI.
              </p>

              <Link
                href="/journey"
                className="group mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-green-950 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-green-800"
              >
                Explore My Full Journey
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-7">
              <div className="absolute bottom-10 left-[35px] top-12 w-px bg-emerald-200 sm:left-[43px]" />

              <div className="relative space-y-5">
                {careerJourney.map((step, index) => (
                  <div key={`${step.club}-${step.period}`} className="flex gap-4 sm:gap-5">
                    <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-4 border-white bg-green-950 text-[10px] font-black text-emerald-300 shadow-sm">
                      {index + 1}
                    </div>

                    <div className="min-w-0 flex-1 border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-base font-extrabold text-green-950 sm:text-lg">
                          {step.club}
                        </h3>
                        <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-bold text-green-800">
                          {step.country}
                        </span>
                      </div>
                      <p className="mt-1 text-sm font-semibold text-slate-500">
                        {step.period}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6 rounded-xl bg-green-50 px-4 py-3 text-sm font-bold leading-6 text-green-950">
                Every chapter has something to teach. The journey continues
                through learning, reflection, and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CALL TO ACTION */}
      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-green-950 px-6 py-10 text-center shadow-xl sm:rounded-3xl sm:px-10 sm:py-14 lg:py-16"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full border-[36px] border-white/[0.04]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-emerald-700/40 blur-3xl"
          />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400 text-green-950">
              <MessageCircle className="h-6 w-6" />
            </div>

            <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.2em] text-emerald-300">
              Your Journey Matters
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
              You don&apos;t have to figure it all out alone.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-justify text-base font-semibold leading-7 text-white/75 sm:text-center sm:text-lg sm:leading-8">
              Ask questions. Learn from real experiences. Make more informed
              decisions as you build your football future.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-emerald-400 px-6 py-3 text-sm font-extrabold text-green-950 transition hover:bg-emerald-300"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/about"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/25 px-6 py-3 text-sm font-extrabold text-white transition hover:border-emerald-300 hover:bg-white/5 hover:text-emerald-300"
              >
                Discover ASK GABI
              </Link>
            </div>

            <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.24em] text-white/45">
              Ask. Learn. Grow.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}