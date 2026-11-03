
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Play,
  Code2,
} from "lucide-react";
import { motion } from "framer-motion";

const mediaItems = [
  {
    category: "On the Pitch",
    title: "The Game in Action",
    description: "Moments of competition, focus and commitment.",
    image: "/images/pitch.jpg",
    className: "lg:col-span-2",
  },
  {
    category: "Match Moments",
    title: "Every Moment Counts",
    description: "The work, decisions and intensity behind the game.",
    image: "/images/moments.jpeg",
    className: "lg:col-span-2",
  },
  {
    category: "Professional Journey",
    title: "A Journey Across Clubs",
    description: "Experiences and lessons from different football environments.",
    image: "/images/jurney.jpg",
    className: "lg:col-span-2",
  },
  {
    category: "Beyond the Game",
    title: "The Person Behind the Player",
    description: "The mindset, discipline and growth that football demands.",
    image: "/images/gabi.jpg",
    className: "lg:col-span-2",
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

export default function MediaOnThePitch() {
  return (
    <section className="bg-white py-8 md:py-0 lg:py-4">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-4">

        {/* Heading */}
        <motion.div
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
        >
          <div className="max-w-7xl">
            <motion.div
              variants={fadeUp}
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-950 px-3 py-1 text-sm font-bold text-white"
            >
              <Code2 className="h-4 w-4" />
              Media & Moments
            </motion.div>

            <motion.h1
              variants={fadeLeft}
              className="text-left text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-3xl"
            >
              Life on the Pitch.
              <span className="text-emerald-800">
                {" "}
                Lessons Beyond It.
              </span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="mb-5 mt-2 h-1 w-16 rounded-full bg-green-950"
            />

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-4xl text-xl text-justify font-bold leading-7 text-slate-600 sm:text-xl sm:leading-8"
            >
              A closer look at my football journey - the match
              moments, professional experiences and personal growth that
              continue to shape my perspective on the game.
            </motion.p>
          </div>
        </motion.div>

        {/* Media Gallery */}
        <motion.div
          className="mt-4 grid gap-5 sm:grid-cols-1 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
        >
          {mediaItems.map((item, index) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              className={`group relative isolate min-h-[600px] overflow-hidden rounded-md bg-emerald-950 sm:min-h-[700px] ${item.className}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority={index === 0}
                sizes={
                  item.className === "lg:col-span-2"
                    ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 66vw"
                    : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                }
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/25 to-transparent" />

              <motion.div
                className="absolute inset-x-0 bottom-0 ml-3"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.15, delay: 0.15 }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-lime-400">
                  {item.category}
                </p>

                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  {item.title}
                </h3>

                <p className="max-w-md text-sm leading-6 text-white/80">
                  {item.description}
                </p>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition group-hover:border-lime-400 group-hover:bg-lime-400 group-hover:text-emerald-950">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          className="mt-12 rounded-[2rem] border border-slate-200 bg-slate-50 px-6 py-8 sm:px-10 sm:py-10"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/media"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start rounded-full bg-emerald-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800 sm:self-center"
            >
              Explore Media
              <Play className="h-4 w-8" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
