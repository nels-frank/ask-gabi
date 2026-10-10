"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Dumbbell,
  GraduationCap,
  Handshake,
  Scale,
  Utensils,
} from "lucide-react";

const areas = [
  {
    icon: Scale,
    title: "Football Lawyers",
    description:
      "Understand player rights, contracts and when to seek qualified legal support.",
  },
  {
    icon: Handshake,
    title: "Licensed Football Professionals",
    description:
      "Learn about representation, agents, mandates and making informed career decisions.",
  },
  {
    icon: Dumbbell,
    title: "Performance Coaches",
    description:
      "Explore the discipline, training and preparation required to compete professionally.",
  },
  {
    icon: Utensils,
    title: "Nutrition Professionals",
    description:
      "Understand how nutrition, recovery and healthy habits support performance.",
  },
  {
    icon: GraduationCap,
    title: "Player Development",
    description:
      "Build the mindset, awareness and adaptability needed to grow on and off the pitch.",
  },
  {
    icon: BookOpen,
    title: "Football Coaches",
    description:
      "Learn about tactical systems, coaching expectations and adapting to different playing styles.",
  },
];

export default function WhatIWantToShare() {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image placeholder */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -right-2 -top-4 h-full w-full rounded-[2rem] bg-emerald-700 sm:-right-6 sm:-top-6" />

            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-emerald-950 sm:aspect-[3/3] lg:aspect-[3/3]">
              <Image
                src="/images/hero.jpg"
                alt="Gabriel Obekpa sharing football knowledge"
                fill
                priority
                sizes="100vw"
                className="object-cover object-[68%_center] sm:object-[72%_center] lg:object-[72%_center]"
                />

            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/10 to-transparent" />
              <div className="absolute bottom-2 left-6 right-6 sm:bottom-2 sm:left-8 sm:right-8">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
                  Beyond the Pitch
                </p>

                <h3 className="mt-1 text-l font-bold leading-tight text-white sm:text-4xl">
                  Knowledge that can change a career.
                </h3>

                <p className="mt-1 text-sm leading-6 text-white/80 sm:text-base">
                  Real experiences. Practical lessons. Access to the right
                  guidance.
                </p>
              </div>
            </div>
          </div>

          {/* Section content */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
              What I Want to Share
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              More Than Motivation.
              <span className="text-emerald-800">
                {" "}
                Knowledge That Matters.
              </span>
            </h2>

            <p className="mt-6 text-base leading-7 text-justify font-bold text-slate-600 sm:text-lg sm:leading-8">
              My football journey has taught me lessons that go beyond the
              game. I want to share real experiences, practical knowledge
              and guidance that help young players understand the
              professional football world.
            </p>

            <p className="mt-4 text-base leading-7 text-justify font-bold text-slate-600 sm:text-lg sm:leading-8">
              From contracts and representation to performance and player
              development, ASK GABI aims to make reliable information more
              accessible and connect players with qualified professionals
              when specialist support is needed.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {areas.map((area) => {
                const Icon = area.icon;

                return (
                  <article
                    key={area.title}
                    className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-white hover:shadow-lg"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-900 text-lime-400 transition group-hover:bg-emerald-800">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-4 text-base font-bold text-slate-950 sm:text-lg">
                      {area.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-justify font-bold text-slate-600">
                      {area.description}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mt-9 border-l-4 border-lime-400 pl-5">
              <p className="text-lg font-bold text-slate-950 sm:text-xl">
                Real Experience. Real Guidance.
              </p>

              <p className="mt-2 text-sm leading-6 text-justify font-bold text-slate-600 sm:text-base">
                Helping players ask better questions, recognize risks and
                make informed decisions about their future.
              </p>
              <p className="mt-2 text-sm leading-6 text-justify font-bold text-slate-600 sm:text-base">
                Every player deserves the opportunity to learn, prepare and
                navigate their football journey with greater confidence.
              </p>
              <div className="mt-6 rounded-[1rem] bg-emerald-950 px-6 py-2 text-center sm:px-10 sm:py-2">  
               <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
                The ASK GABI Approach
               </p>

                <h3 className="mt-4 text-l font-black tracking-[0.08em] text-white sm:text-2xl lg:text-2xl">
                    ASK. <span className="text-lime-400">LEARN.</span> GROW.
                </h3>
                </div>
                </div>

            <Link
              href="/what-i-want-to-share"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-emerald-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              Explore What We Share
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}