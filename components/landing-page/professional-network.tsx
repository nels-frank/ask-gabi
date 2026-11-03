
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Code2,
  Dumbbell,
  GraduationCap,
  Handshake,
  Scale,
  Utensils,
} from "lucide-react";
import { motion } from "framer-motion";

const areas = [
  {
    icon: Scale,
    title: "Football Lawyers",
    description:
      "Connect with qualified football lawyers for support with contracts, player rights, disputes and other legal matters.",
  },
  {
    icon: Handshake,
    title: "Licensed Football Agent",
    description:
      "Access licensed football agents for guidance on representation, mandates, opportunities and career decisions.",
  },
  {
    icon: Dumbbell,
    title: "Performance Coaches",
    description:
      "Connect with performance coaches for support with physical preparation, fitness, recovery and the demands of professional football.",
  },
  {
    icon: Utensils,
    title: "Nutrition Professionals",
    description:
      "Access nutrition professionals for guidance on nutrition, hydration, recovery and healthy performance habits.",
  },
  {
    icon: GraduationCap,
    title: "Player Development",
    description:
      "Connect with specialists who can support mindset, awareness, adaptability and long-term player development.",
  },
  {
    icon: BookOpen,
    title: "Football Coaches",
    description:
      "Access experienced coaches for guidance on tactical understanding, positional demands, preparation and adapting to different playing styles.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -35 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function WhatIWantToShare() {
  return (
    <section className="relative overflow-hidden bg-white py-8 md:py-8 lg:py-16">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-10 h-50 w-50 rounded-full bg-emerald-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-2 -top-70 h-90 w-30 bg-green-600 blur-3xl md:h-95 md:w-110 md:bg-green-700 md:blur-3xl lg:h-98 lg:w-130" />

      <div className="pointer-events-none absolute -bottom-32 right-0 h-36 w-96 rounded-full bg-green-700 blur-3xl" />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-5">

        {/* Section Introduction */}
        <motion.div
          className="mx-auto max-w-7xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-950 px-3 py-1 text-sm font-bold text-white"
          >
            <Code2 className="h-8 w-8" />
            Access to the right support
          </motion.div>

          <motion.h1
            variants={fadeLeft}
            className="text-left text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-3xl"
          >
            The Right Knowledge.
            <span className="text-emerald-800">
              {" "}
              The Right People.
            </span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mb-5 mt-2 h-1 w-16 rounded-full bg-green-950"
          />

          <motion.p
            variants={fadeUp}
            className="mt-6 text-xl text-justify font-bold leading-7 text-slate-600 sm:text-xl sm:leading-8"
          >
            A football career requires more than talent. Players also
            need the right information, guidance and professional support.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-xl text-justify font-bold leading-7 text-slate-600 sm:text-lg sm:leading-8"
          >
            ASK GABI helps bridge that gap by helping players access and
            connect with qualified professionals when their situation
            requires specialist support.
          </motion.p>
        </motion.div>

        {/* Full-width Image */}
        <motion.div
          className="relative mx-auto mt-10 w-full"
          initial={{ opacity: 0, scale: 0.94, y: 35 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="relative aspect-[3/5] overflow-hidden rounded-md bg-emerald-950 md:aspect-[16/8] lg:aspect-[16/7]">
            <Image
              src="/images/hero.jpg"
              alt="Gabriel Obekpa sharing football knowledge"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[68%_center] sm:object-[72%_center]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/10 to-transparent" />

            <motion.div
              className="absolute bottom-4 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.15, delay: 0.15 }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
                Beyond the Pitch
              </p>

              <h3 className="mt-2 text-2xl font-bold leading-tight text-white sm:text-4xl">
                Knowledge that can change a career.
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/80 sm:text-base">
                Real experiences. Practical lessons. Access to the right
                guidance.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Professional Support Cards */}
        <motion.div
          className="mt-14 grid gap-4 md:grid-cols-1 lg:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
        >
          {areas.map((area) => {
            const Icon = area.icon;

            return (
              <motion.article
                key={area.title}
                variants={fadeUp}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-3 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-white hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-900 text-lime-400 transition duration-300 group-hover:scale-110 group-hover:bg-emerald-800">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-4 text-2xl font-bold text-slate-950 sm:text-lg">
                  {area.title}
                </h3>

                <p className="mt-2 text-xl text-left font-bold leading-6 text-slate-600">
                  {area.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Closing CTA */}
        <motion.div
          className="relative mt-14 overflow-hidden rounded-md bg-emerald-950 px-2 py-10 sm:px-10 sm:py-12 lg:px-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border-[35px] border-emerald-800/40" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
                The Right Connection
              </p>

              <h3 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                You don’t need to have every answer. You need access to people who do.
              </h3>

              <p className="mt-6 text-xl text-left font-bold leading-7 text-emerald-100/80 sm:text-base">
                ASK GABI helps you find the right knowledge, guidance and professional support for your football journey.
              </p>

              <p className="mt-6 text-xl font-bold leading-7 text-green-500 sm:text-base">
                ASK. LEARN. GROW.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-lime-400 px-6 py-3 text-sm font-bold text-emerald-950 transition hover:bg-lime-300"
              >
                Connect With ASK GABI
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          className="mt-6 text-justify text-lg font-bold leading-6 text-emerald-800 md:text-xl md:text-left lg:text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          Professional connections are made based on the player’s needs and the
          availability and suitability of the relevant professional.
        </motion.p>

      </div>
    </section>
  );
}
