"use client";

import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Dumbbell,
  GraduationCap,
  Handshake,
  Scale,
  Utensils,
  UsersRound,
  CheckCircle2,
} from "lucide-react";

const professionals = [
  {
    icon: Scale,
    title: "Football Lawyers",
    description:
      "For guidance on contracts, player rights, disputes and legal matters requiring qualified legal support.",
    tag: "Legal Guidance",
  },
  {
    icon: Handshake,
    title: "Licensed Football Professionals",
    description:
      "For informed discussions about representation, mandates, agents and professional opportunities.",
    tag: "Career Support",
  },
  {
    icon: Dumbbell,
    title: "Performance Coaches",
    description:
      "For improving physical preparation, fitness, recovery and the standards of professional football.",
    tag: "Performance",
  },
  {
    icon: Utensils,
    title: "Nutrition Professionals",
    description:
      "For reliable advice on nutrition, hydration and healthy habits that support athletic performance.",
    tag: "Nutrition",
  },
  {
    icon: GraduationCap,
    title: "Player Development Specialists",
    description:
      "For support with player growth, tactical understanding, adaptability and long-term development.",
    tag: "Development",
  },
  {
    icon: BriefcaseBusiness,
    title: "Football Coaches",
    description:
      "For insights into tactical systems, training expectations, positional demands and match preparation.",
    tag: "Coaching",
  },
];

export default function ProfessionalNetwork() {
  return (
    <section className="bg-slate-100 py-6 sm:py-10 lg:py-10">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-900 text-lime-400">
            <UsersRound className="h-7 w-7" />
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
            Our Professional Network
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            The Right Guidance.
            <span className="text-emerald-800">
              {" "}
              The Right People.
            </span>
          </h2>

          <p className="mt-5 text-base text-justify font-bold leading-7 text-slate-600 sm:text-lg sm:leading-8">
            No single person has every answer in football. ASK GABI aims to
            bridge the gap between players and qualified professionals who
            can provide specialist knowledge when it matters.
          </p>
        </div>

        {/* Professional cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {professionals.map((professional, index) => {
            const Icon = professional.icon;

            return (
              <article
                key={professional.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-900 text-lime-400 transition duration-300 group-hover:bg-emerald-800">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800">
                    {professional.tag}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-950">
                  {professional.title}
                </h3>

                <p className="mt-3 flex-1 text-sm text-justify font-bold leading-7 text-slate-600">
                  {professional.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Area {String(index + 1).padStart(2, "0")}
                  </span>

                  <CheckCircle2 className="h-5 w-5 text-emerald-700" />
                </div>
              </article>
            );
          })}
        </div>

        {/* Closing CTA */}
        <div className="relative mt-14 overflow-hidden rounded-[2rem] bg-emerald-950 px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border-[35px] border-emerald-800/40" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
                Better Together
              </p>

              <h3 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                Football careers deserve informed support.
              </h3>

              <p className="mt-4 text-sm text-justify font-bold leading-7 text-emerald-100/80 sm:text-base">
                Whether a player needs direction, specialist advice or a
                better understanding of the game, the goal is to help them
                find the right support for their situation.
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
        </div>
        <p className="mt-6 text-justify text-xs font-bold leading-5 text-slate-700 sm:text-sm sm:text-center lg:text-center">
          Specialist services are subject to professional qualifications,
          availability and individual arrangements.
        </p>
      </div>
    </section>
  );
}