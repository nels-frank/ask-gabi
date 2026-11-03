"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { UserRound, ArrowUpRight } from "lucide-react";

export default function PlayerBehindAskGabi() {
  return (
    <section
      id="player-behind-ask-gabi"
      className="relative overflow-hidden bg-white py-12 md:py-16 lg:py-16"
    >
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-emerald-100/50 blur-3xl" />
      <div className="absolute -right-2 -top-70 h-100 w-85 bg-green-600 blur-3xl md:bg-green-700 md:blur-3xl md:h-120 md:w-110 lg:bg-green-700 lg:blur-3xl lg:h-120 lg:w-130" />
      <div className="pointer-events-none absolute -bottom-32 left-0 h-50 w-86 rounded-full bg-green-700 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-green-100/60 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10">

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.15 }}
          className="w-full"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-white px-4 py-2 shadow-sm">
            <div className="rounded-lg bg-emerald-900 p-2">
              <UserRound className="h-4 w-4 text-white" />
            </div>
            <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-emerald-900 sm:text-sm">
              Player Behind ASK GABI
            </span>
          </div>

          <h2 className="text-left text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-2xl lg:text-3xl lg:leading-[1.15]">
            Professional Footballer.
            <span className="text-emerald-800">
              {" "}
              Learner. Mentor.
            </span>
          </h2>

          <div className="mb-7 mt-1 h-1.5 w-20 rounded-full bg-gradient-to-r from-emerald-900 to-lime-500" />

          <div className="max-w-4xl space-y-5 text-justify text-xl font-bold leading-7 text-slate-600 sm:text-xl sm:leading-8">
            <p>
              Gabriel Obekpa is a Nigerian professional footballer whose
              journey has taken him from Nigeria to professional football
              across Europe.
            </p>

            <p>
              His experiences on and off the pitch inspired the creation of
              <span className="font-extrabold text-emerald-900">
                {" "}ASK GABI
              </span>{" "}
             - a platform created to help young African footballers become
              better informed and better prepared.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 rounded-xl bg-emerald-950 px-7 py-4 text-sm font-extrabold text-white shadow-lg shadow-emerald-950/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-800 hover:shadow-xl"
            >
              Discover My Journey
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </motion.div>

        {/* PLAYER IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto w-full max-w-[34rem]"
        >
          <div className="relative px-3 pb-3 pt-3 sm:px-5 sm:pb-5">
            {/* Decorative frame */}
            <div className="absolute inset-0 rounded-[2rem] bg-emerald-950 shadow-2xl" />

            <div className="absolute -right-1 -top-1 z-10 h-24 w-24 rounded-tr-[2rem] border-r-4 border-t-4 border-lime-400 sm:-right-2 sm:-top-2 sm:h-32 sm:w-32" />

            <div className="relative h-[28rem] overflow-hidden rounded-[1.5rem] border-4 border-white bg-emerald-100 shadow-xl md:h-[33rem] lg:h-[32rem]">
              <Image
                src="/images/gabi.jpg"
                alt="Gabriel Obekpa"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 550px"
                className="object-cover object-bottom"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-transparent to-transparent" />

              {/* Player caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="mb-3 h-1 w-14 rounded-full bg-lime-400" />

                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-lime-400 sm:text-sm">
                  Gabriel Obekpa
                </p>

                <p className="mt-2 text-xl font-extrabold text-white sm:text-2xl">
                  Professional Footballer
                </p>

                <p className="mt-1 text-sm font-semibold text-white/80">
                  Midfielder · No. 6
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}