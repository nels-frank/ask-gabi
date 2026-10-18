"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Camera,
  Play,
  Images,
} from "lucide-react";

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

export default function MediaOnThePitch() {
  return (
    <section className="bg-white py-8 sm:py-8 lg:py-8">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
              Media & Moments
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Life on the Pitch.
              <span className="text-emerald-800">
                {" "}
                Lessons Beyond It.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base text-justify font-bold leading-7 text-slate-600 sm:text-lg sm:leading-8">
              A closer look at my football journey - the match
              moments, professional experiences and personal growth that
              continue to shape my perspective on the game.
            </p>
          </div>

          <div className="flex items-center gap-3 text-sm font-semibold text-emerald-900">
            <Camera className="h-5 w-5 text-emerald-700" />
            <span>Real moments. Real experiences.</span>
          </div>
        </div>

        {/* Media gallery */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {mediaItems.map((item, index) => (
            <article
              key={item.title}
              className={`group relative isolate min-h-[340px] overflow-hidden rounded-md bg-emerald-950 sm:min-h-[380px] ${item.className}`}
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

              <div className="absolute inset-x-0 bottom-0 ml-3">
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
              </div>
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-12 rounded-[2rem] border border-slate-200 bg-slate-50 px-6 py-8 sm:px-10 sm:py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-900 text-lime-400">
                <Images className="h-6 w-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-950">
                  Every picture tells part of the journey.
                </h3>

                <p className="mt-2 max-w-2xl text-sm text-justify font-bold leading-6 text-slate-600 sm:text-base">
                  Explore the experiences behind the player and the lessons
                  he hopes to share with the next generation.
                </p>
              </div>
            </div>

            <Link
              href="/media"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start rounded-full bg-emerald-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800 sm:self-center"
            >
              Explore Media
              <Play className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}