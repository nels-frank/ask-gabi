"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CircleCheck,
  Code2,
  FileText,
  Handshake,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "Information Matters",
    description:
      "Talent can open a door, but understanding the football industry can determine what happens after you walk through it.",
  },
  {
    icon: FileText,
    title: "Understand Before You Commit",
    description:
      "Trials, contracts, agents, transfers and opportunities all come with questions that every young player should learn to ask.",
  },
  {
    icon: ShieldCheck,
    title: "Avoid Costly Mistakes",
    description:
      "Gabriel shares lessons from experiences he wishes he had understood earlier in his own journey.",
  },
  {
    icon: Handshake,
    title: "Know When to Get Help",
    description:
      "When a situation requires specialist knowledge, ASK GABI can help players connect with qualified professionals.",
  },
];

export default function WhyAskGabi() {
  return (
    <section
      className="relative overflow-hidden bg-white py-12 md:py-16 lg:py-16"
    >
      <div className="pointer-events-none absolute -left-32 top-10 h-50 w-50 rounded-full bg-emerald-100/50 blur-3xl" />
      <div className="absolute -right-2 -top-70 h-90 w-30 bg-green-600 blur-3xl md:bg-green-700 md:blur-3xl md:h-110 md:w-110 lg:bg-green-700 lg:blur-3xl lg:h-120 lg:w-130" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-36 w-96 rounded-full bg-green-700 blur-3xl" />

      <div className="mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-8">
        {/* FIRST ROW: TEXT AND IMAGE */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-white px-4 py-2 shadow-sm">
            <div className="rounded-lg bg-emerald-900 p-2">
              <Code2 className="h-4 w-4 text-white" />
            </div>
            <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-900 sm:text-sm">
              Why ASK GABI?
            </span>
          </div>

            <h2 className="text-left text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
              Talent is important.
              <span className="block text-emerald-800">
                But information matters too.
              </span>
            </h2>

            <div className="mb-5 mt-1 h-1.5 w-20 rounded-full bg-green-950" />

            <div className="mt-6 max-w-3xl space-y-5 text-xl text-justify font-bold leading-7 text-slate-600 sm:text-xl sm:leading-8">
              <p>
                Professional football has taught me that talent is only
                one part of building a career. Contracts, agents, trials,
                adaptation, playing opportunities and career decisions can
                shape a player&apos;s future just as much as what happens on
                the pitch.
              </p>

              <p>
                ASK GABI was created to make those lessons and experiences more
                accessible to young African footballers - helping them become
                better informed, better prepared and better equipped to
                navigate the football industry.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="absolute -bottom-3 -left-3 h-full w-full rounded-[2rem] bg-emerald-950 sm:-bottom-5 sm:-left-5" />
            <div className="relative aspect-[2/3] overflow-hidden rounded-2xl border-4 border-white bg-emerald-950 shadow-xl md:aspect-[2/2] lg:aspect-[3/3]">
              <Image
                src="/images/gabriel.jpg"
                alt="Gabriel Obekpa"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime-400">
                  Real Experience
                </p>

                <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Real Guidance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SECOND ROW: REASON CARDS */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-2 lg:gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl sm:p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-900 text-lime-400 shadow-md transition-colors duration-300 group-hover:bg-green-700">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-xl font-extrabold leading-7 text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-left text-xl font-bold leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM MESSAGE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.15 }}
          className="mt-10 border-t border-slate-200 p-2 md:p-6"
        >
          <div className="mb-2 flex items-center gap-3">
            <div className="rounded-lg bg-green-600 p-2">
              <CircleCheck className="h-5 w-5 text-white" />
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              You don&apos;t have to go through football alone.
            </h3>
          </div>

          <p className="text-left text-xl font-bold leading-7 text-slate-600 sm:text-xl sm:leading-8">
            Ask questions. Learn from experience. Make informed decisions.
          </p>
        </motion.div>

        {/* CTA */}
        <div className="mt-4">
          <Link
            href="/why-ask-gabi"
            className="group inline-flex items-center gap-3 rounded-xl bg-emerald-900 px-7 py-4 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-800 hover:shadow-lg"
          >
            Learn More About ASK GABI
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}