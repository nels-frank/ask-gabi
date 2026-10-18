"use client";

import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function FinalAskGabiCTA() {
  return (
    <section className="bg-white px-5 py-2 sm:px-6 sm:py-2 lg:px-8 lg:py-2">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-md bg-emerald-950 px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border-[40px] border-emerald-800/40 sm:h-96 sm:w-96" />
        <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-emerald-900/60 blur-2xl" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-700 bg-emerald-900/70 px-4 text-sm font-semibold text-lime-400">
              <Sparkles className="h-4 w-4" />
              Your Journey. Better Informed.
            </div>

            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-4xl">
              Your Football Journey
              <span className="block text-lime-400">
                Deserves More.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base text-justify font-bold leading-7 text-emerald-100/80 sm:text-lg sm:leading-8">
              You have the talent. Now build the understanding to navigate
              your career with greater confidence. Learn from real
              experience, ask important questions and discover the support
              available to you.
            </p>

            <p className="mt-5 text-lg font-bold text-white sm:text-xl">
              You don&apos;t have to go through football alone.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-lime-400 px-7 py-3 text-sm font-bold text-emerald-950 transition hover:bg-lime-300"
              >
                Ask Gabi
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/about"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-emerald-700 px-7 py-3 text-sm font-semibold text-white transition hover:border-lime-400 hover:bg-emerald-900"
              >
                Discover Our Story
              </Link>
            </div>
          </div>

          {/* Supporting message */}
          <div className="w-full rounded-3xl border border-emerald-800 bg-emerald-900/60 p-6 sm:p-8 lg:w-72">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400 text-emerald-950">
              <MessageCircle className="h-6 w-6" />
            </div>

            <h3 className="mt-5 text-xl font-bold text-white">
              Start with a question.
            </h3>

            <p className="mt-3 text-sm leading-6 text-justify font-bold text-emerald-100/80">
              Whether you need direction, knowledge or guidance, taking the
              first step can help you make a more informed decision.
            </p>

            <div className="mt-6 flex items-start gap-3 border-t border-emerald-800 pt-5">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-lime-400" />

              <p className="text-xs leading-5 text-justify font-bold text-emerald-100/70">
                Real experience. Trusted knowledge. Qualified professional
                support when needed.
              </p>
            </div>
          </div>
        </div>

        {/* Brand closing */}
        <div className="relative border-t border-emerald-800 pt-7 text-center sm:mt-6">
          <p className="text-sm font-black tracking-[0.22em] text-white sm:text-base">
            ASK. <span className="text-lime-400">LEARN.</span> GROW.
          </p>

          <p className="mt-2 text-xs text-emerald-100/60 sm:text-sm">
            ASK GABI — Real Experience. Real Guidance.
          </p>
        </div>
      </div>
    </section>
  );
}