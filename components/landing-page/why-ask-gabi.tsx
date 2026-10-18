"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CircleCheck,
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
    <section className="bg-slate-100 py-8 sm:py-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -bottom-3 -left-3 h-full w-full rounded-[2rem] bg-emerald-950/100 sm:-bottom-6 sm:-left-6" />

            <div className="relative aspect-[2/2] overflow-hidden rounded-[1rem] bg-emerald-950">
              <Image
                src="/images/gabi.jpg"
                alt="Gabriel Obekpa"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/100 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime-400">
                  Real Experience
                </p>

                <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Real Guidance.
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
              Why Ask Gabi?
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Talent is important.{" "}
              <span className="text-emerald-800">
                But information matters too.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 text-justify font-bold sm:text-lg sm:leading-8">
              Professional football has taught me that talent is only
              one part of building a career. Contracts, agents, trials,
              adaptation, playing opportunities and career decisions can
              shape a player&apos;s future just as much as what happens on
              the pitch.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 text-justify font-bold sm:text-lg sm:leading-8">
              ASK GABI was created to make those lessons and experiences more
              accessible to young African footballers - helping them become
              better informed, better prepared and better equipped to
              navigate the football industry.
            </p>

            {/* Reasons */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {reasons.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-900 text-lime-400">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600 text-justify font-bold">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom message */}
            <div className="mt-10 border-l-4 border-lime-400 pl-5">
              <div className="flex items-start gap-3">
                <CircleCheck className="mt-1 h-5 w-5 shrink-0 text-emerald-700" />

                <div>
                  <p className="font-bold text-slate-950">
                    You don&apos;t have to go through football alone.
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-700 text-justify font-bold">
                    Ask questions. Learn from experience. Make informed
                    decisions.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/why-ask-gabi"
                className="inline-flex items-center gap-2 rounded-md bg-emerald-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
              >
                Learn More About ASK GABI
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}