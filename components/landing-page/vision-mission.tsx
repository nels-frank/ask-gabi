"use client";

import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  Target,
  UsersRound,
} from "lucide-react";

const vision =
  "To become a trusted global football platform that empowers players with the right knowledge, guidance and opportunities - serving as a reliable support system, a bridge between players and professionals, and a leading football consulting brand.";

const mission =
  "To educate, guide and support African footballers, especially Nigerian players, by providing trusted knowledge, real-life experience and access to professional help.";

export default function VisionMission() {
  return (
    <section className="bg-emerald-950 py-10 text-white sm:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-justify">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
            The Bigger Picture
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Building More Than a Football Platform
          </h2>

          <p className="mt-5 text-base leading-7 font-bold text-emerald-100/80 sm:text-lg sm:leading-8">
            ASK GABI is built around a simple belief: players deserve access
            to the knowledge, guidance and support they need to navigate their
            football careers.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Vision */}
          <article className="rounded-[2rem] border border-emerald-800 bg-white p-7 text-slate-950 sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-900 text-lime-400">
              <Globe2 className="h-6 w-6" />
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Our Vision
            </p>

            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
              A trusted global football platform.
            </h3>

             <p className="mt-5 text-base leading-7 text-justify font-bold text-slate-600 sm:text-lg sm:leading-8">
              {vision}
            </p>
          </article>

          {/* Mission */}
          <article className="rounded-[2rem] border border-emerald-800 bg-white p-7 text-slate-950 sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-900 text-lime-400">
              <Target className="h-6 w-6" />
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
              Our Mission
            </p>

            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
              Educate. Guide. Support.
            </h3>

            <p className="mt-5 text-base leading-7 text-justify font-bold text-slate-600 sm:text-lg sm:leading-8">
              {mission}
            </p>
          </article>
        </div>

        {/* Support Statement */}
        <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-900 ring-1 ring-emerald-700">
            <UsersRound className="h-5 w-5 text-lime-400" />
          </div>

          <p className="mt-5 text-xl font-bold sm:text-2xl">
            A support system for the journey.
          </p>

          <p className="mt-3 text-sm text-justify font-boldleading-6 text-emerald-100/70 sm:text-base">
            Real experience, trusted knowledge and access to the right
            professionals when players need them.
          </p>

          <Link
            href="/vision-mission"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-lime-400 px-6 py-3 text-sm font-bold text-emerald-950 transition hover:bg-lime-300"
          >
            Discover the Vision
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}