
"use client";

import {
  Brain,
  Code2,
  Dumbbell,
  FileText,
  Handshake,
  Plane,
  Scale,
} from "lucide-react";
import { motion } from "framer-motion";

const lessons = [
  {
    icon: Handshake,
    number: "01",
    title: "Agents",
    description:
      "Understand representation, mandates and whether the person representing you genuinely has your best interests at heart.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Contracts",
    description:
      "Know what you are signing, what you are entitled to and what your commitments mean before making a career decision.",
  },
  {
    icon: Plane,
    number: "03",
    title: "Trials & Opportunities",
    description:
      "Learn the difference between a trial, an opportunity and a guaranteed professional contract before travelling or committing financially.",
  },
  {
    icon: Brain,
    number: "04",
    title: "Adaptation",
    description:
      "Different clubs, coaches and countries demand different things. Learn how to adapt quickly without losing your identity as a player.",
  },
  {
    icon: Scale,
    number: "05",
    title: "Player Rights",
    description:
      "Understand when a football situation requires proper advice and why qualified professionals can be important to your career.",
  },
  {
    icon: Dumbbell,
    number: "06",
    title: "Performance",
    description:
      "Professional football demands discipline beyond match day - training, recovery, nutrition and consistency all matter.",
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
      staggerChildren: 0.18,
    },
  },
};

export default function FootballLessons() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16 lg:py-16">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-10 h-50 w-50 rounded-full bg-emerald-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-2 -top-70 h-90 w-30 bg-green-600 blur-3xl md:h-100 md:w-110 md:bg-green-700 md:blur-3xl lg:h-98 lg:w-130" />

      <div className="pointer-events-none absolute -bottom-32 right-0 h-36 w-96 rounded-full bg-green-700 blur-3xl" />

      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-5">

        {/* Header */}
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
            What Football Has Taught Me
          </motion.div>

          <motion.h1
            variants={fadeLeft}
            className="text-left text-xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-3xl"
          >
            My Career Became My Classroom
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mb-5 mt-2 h-1 w-16 rounded-full bg-green-950"
          />

          <motion.p
            variants={fadeUp}
            className="mt-5 text-xl text-justify font-bold leading-7 text-slate-600 sm:text-xl sm:leading-8"
          >
            Football has taught me that building a career is about more
            than what happens on the pitch. These are some of the lessons he
            wants to share with the next generation.
          </motion.p>
        </motion.div>

        {/* Lessons */}
        <motion.div
          className="mt-14 grid gap-5 md:grid-cols-1 lg:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {lessons.map((lesson) => {
            const Icon = lesson.icon;

            return (
              <motion.article
                key={lesson.number}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Number */}
                <span className="absolute right-6 top-5 text-5xl font-black text-slate-100 transition group-hover:text-emerald-50">
                  {lesson.number}
                </span>

                {/* Icon */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-900 text-lime-400 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="relative mt-6 text-2xl font-bold text-slate-950">
                  {lesson.title}
                </h3>

                <p className="relative mt-3 text-xl text-left font-bold leading-6 text-slate-600">
                  {lesson.description}
                </p>

                <div className="mt-6 h-1 w-10 rounded-full bg-lime-400 transition-all duration-300 group-hover:w-16" />
              </motion.article>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
