
"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Rocket,
  UserRound,
} from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* INTRODUCTION */}
      <section className="relative overflow-hidden rounded-2xl bg-slate-50 sm:rounded-3xl">
        <div className="relative mx-auto max-w-7xl px-0 py-6 md:py-6 lg:px-10 lg:py-6">
          <div className="absolute -right-2 -top-70 h-100 w-85 bg-green-600 blur-3xl md:bg-green-700 md:blur-3xl md:h-120 md:w-130 lg:bg-green-700 lg:blur-3xl lg:h-120 lg:w-130" />
          <div className="absolute -bottom-160 -left-60 h-46 w-66 bg-green-700 blur-3xl md:-bottom-70 md:-left-60 md:h-96 md:w-66 md:bg-green-700 md:blur-3xl lg:bg-green-700 lg:blur-3xl" />
        </div>

        <div className="mt-14 mx-auto max-w-7xl px-6 py-8 md:px-10 lg:py-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-2 text-left"
            >
              <div className="mb-10 inline-flex items-center gap-2 rounded-full bg-green-950 px-3 py-1 text-sm font-bold text-white">
                <Code2 className="h-4 w-4" />
                Ask Gabi
              </div>

              <h1 className="text-left text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-5xl">
                About Me
              </h1>

              <div className="mt-2 h-1 w-16 rounded-full bg-green-950" />

              <p className="mt-3 max-w-4xl text-justify text-base font-bold leading-7 text-gray-600 sm:text-lg sm:leading-8">
                I am Gabriel Obekpa, a Nigerian professional footballer
                and the founder of ASK GABI. My journey through
                professional football has taught me lessons that go
                far beyond the pitch.
              </p>

              <p className="mt-3 max-w-4xl text-justify text-base font-bold leading-7 text-gray-600 sm:text-lg sm:leading-8">
                I created ASK GABI to share those lessons and help
                young African footballers make better - informed
                decisions about their careers.
              </p>

              <p className="mt-3 max-w-4xl text-justify text-base font-bold leading-7 text-gray-600 sm:text-lg sm:leading-8">
                I realised that talented footballers can face
                difficult situations not because they lack ability,
                but because they lack access to reliable information.
              </p>

              <p className="mt-3 max-w-4xl text-justify text-base font-bold leading-7 text-gray-600 sm:text-lg sm:leading-8">
                I have experienced situations I would have approached
                differently if I had understood more at the time.
                ASK GABI is my way of sharing those experiences and
                helping young players become better informed.
              </p>
              <p className="mt-3 max-w-4xl text-justify text-base font-bold leading-7 text-gray-600 sm:text-lg sm:leading-8">
                I do not claim to have every answer. I believe in
                learning, asking questions and recognising the
                importance of informed decisions.
              </p>

              <p className="mt-3 max-w-4xl text-justify text-base font-bold leading-7 text-gray-600 sm:text-lg sm:leading-8">
               You don't need to know everything. You need to ask
               questions, keep learning and make informed decisions.
              </p>

              <p className="mt-3 max-w-4xl text-justify text-base font-bold leading-7 text-gray-600 sm:text-lg sm:leading-8">
              ASK GABI was created to turn real experiences into
              useful knowledge for the next generation of footballers.
              </p>
            </motion.div>

            {/* Profile Picture */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex justify-center lg:justify-end mt-10 md:mt-10"
            >
              <div className="relative h-120 w-84 md:h-135 md:w-135 lg:h-155 lg:w-124">
                <div className="absolute -right-3 -top-3 h-full w-full rounded-3xl bg-green-950 sm:-right-4 sm:-top-4" />

                <div className="relative h-120 w-82 overflow-hidden rounded-3xl border-4 border-white bg-green-100 shadow-xl md:h-135 md:w-135 lg:h-155 lg:w-124">
                  <Image
                    src="/images/about-us.jpg"
                    alt="Gabriel Obekpa"
                    fill
                    className="object-cover object-bottom object-top"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PERSONAL STORY */}
      <section className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="mt-4 mx-auto max-w-7xl px-3 py-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-left order-1 lg:order-2 mb-8"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-green-950 px-3 py-1 text-sm font-bold text-white">
            <Code2 className="h-4 w-4" />
              My Story
            </div>

            <h2 className="text-left text-2xl text-justify font-bold tracking-tight text-gray-900 md:text-3xl lg:text-3xl">
              The Experiences That Shaped Me
            </h2>

            <div className="mt-2 h-1 w-16 rounded-full bg-green-950" />
            <br />

            <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="p-4 md:p-6 lg:p-4 lg:pl-10">
                {/* Story Image */}
                <div className="relative mb-6 flex justify-center lg:absolute lg:right-10 lg:top-30 lg:mb-0">
                  <div className="relative h-120 w-84 overflow-hidden rounded-2xl border-4 border-white shadow-xl md:h-150 md:w-150 lg:h-140 lg:w-122">
                    <Image
                      src="/images/story.jpg"
                      alt="Gabriel Obekpa reflecting on his football journey"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Personal Story */}
                <div className="max-w-4xl lg:max-w-3xl lg:pr-36">
                  <h3 className="mt-3 max-w-2xl text-xl font-extrabold leading-7 text-green-700 sm:leading-8 md:text-2xl md:text-left lg:text-2xl">
                    A Dream That Became a Learning Experience
                  </h3>

                  <p className="mt-3 max-w-4xl text-justify text-base font-bold leading-7 text-gray-600 sm:text-lg sm:leading-8">
                    Like many young Nigerian footballers, I grew up
                    dreaming of becoming a professional and playing
                    in Europe. I was naturally a creative midfielder
                    who loved having the ball, creating chances and
                    making the decisive pass.
                  </p>

                  <p className="mt-3 max-w-4xl text-justify text-base font-bold leading-7 text-gray-600 sm:text-lg sm:leading-8">
                    My opportunity to move to Europe came through
                    Serbia. My family made significant financial
                    sacrifices to support the journey. We believed
                    I was travelling with a professional contract,
                    but I arrived to discover that I still had to
                    prove myself through what was effectively a trial.
                  </p>

                  <p className="mt-3 max-w-4xl text-justify text-base font-bold leading-7 text-gray-600 sm:text-lg sm:leading-8">
                    That experience changed how I look at football
                    opportunities. It taught me to ask questions,
                    understand the details and never let excitement
                    replace careful judgement.
                  </p>

                  <p className="mt-3 max-w-4xl text-justify text-base font-bold leading-7 text-gray-600 sm:text-lg sm:leading-8">
                    I also learned the importance of discipline,
                    adaptability and continuous growth. These
                    experiences shaped not only my approach to
                    football but also my desire to help other
                    young players become better prepared.
                  </p>

                  {/* Personal Values */}
                  <div className="my-8 rounded-xl border-l-4 border-green-600 bg-green-50 p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        <Rocket className="h-6 w-6 text-green-700" />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-slate-900">
                          How I See Football
                        </h3>

                        <p className="text-sm text-justify font-bold leading-7 md:text-base md:leading-8 text-slate-600">
                          Talent can open a door. Discipline,
                          adaptability and informed decisions help
                          you navigate what comes next.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Where I Am Today */}
              <div className="border-t border-slate-200 p-4 md:p-4">
                <div className="flex items-start gap-4">
                  <div className="mt-6 rounded-full bg-green-100 p-3">
                    <UserRound className="h-8 w-8 text-green-600" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Where I Am Today
                    </h3>

                    <p className="text-sm text-justify font-bold leading-7 md:text-base md:leading-8 text-slate-600">
                      Today, I remain focused on growing as a
                      professional footballer while using my
                      experiences to create something meaningful
                      beyond the pitch. Through ASK GABI, I want
                      young African footballers to have access to
                      useful knowledge that can help them approach
                      their careers with greater confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-lime-50 px-6 py-10 sm:py-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-green-950 px-3 py-1 text-sm font-bold text-white">
            <Code2 className="h-4 w-4" />
              The Future We Are Building
            </div>
            <h1 className="text-left text-xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
              A more informed generation of footballers
            </h1>
           <div className="mt-2 h-1 w-16 rounded-full bg-green-950" />

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl bg-white p-3 shadow-sm sm:p-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">
                Our Vision
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Where we want to go
              </h3>

              <p className="mt-5 text-base leading-7 text-justify font-bold text-slate-600 sm:text-lg sm:leading-8">
                To become a trusted global football platform that
                empowers players with the knowledge, guidance and
                opportunities they need to navigate their careers,
                while building a reliable bridge between players
                and qualified professionals.
              </p>
            </article>

            <article className="rounded-2xl bg-emerald-950 p-3 text-white shadow-sm sm:p-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400">
                Our Mission
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                What we aim to do
              </h3>

              <p className="mt-5 text-base leading-7 text-justify font-bold text-white sm:text-lg sm:leading-8">
                To educate, guide and support African footballers,
                especially Nigerian players, through trusted
                knowledge, real-life experiences and access to
                appropriate professional help.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}