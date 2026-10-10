"use client";

import {
  Brain,
  Dumbbell,
  FileText,
  Handshake,
  Plane,
  Scale,
} from "lucide-react";

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
      "Professional football demands discipline beyond match day — training, recovery, nutrition and consistency all matter.",
  },
];

export default function FootballLessons() {
  return (
    <section className="bg-slate-50 py-10 sm:py-10 lg:py-10">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
            What Football Has Taught Me
          </p>

          <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            My Career Became My Classroom
          </h2>

          <p className="mt-5 text-base font-bold leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Football has taught me that building a career is about more
            than what happens on the pitch. These are some of the lessons he
            wants to share with the next generation.
          </p>
        </div>

        {/* Lessons */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {lessons.map((lesson) => {
            const Icon = lesson.icon;

            return (
              <article
                key={lesson.number}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Number */}
                <span className="absolute right-6 top-5 text-5xl font-black text-slate-100 transition group-hover:text-emerald-50">
                  {lesson.number}
                </span>

                {/* Icon */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-900 text-lime-400">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="relative mt-6 text-xl font-bold text-slate-950">
                  {lesson.title}
                </h3>

                <p className="relative mt-3 text-sm text-justify font-bold leading-6 text-slate-600">
                  {lesson.description}
                </p>

                <div className="mt-6 h-1 w-10 rounded-full bg-lime-400 transition-all duration-300 group-hover:w-16" />
              </article>
            );
          })}
        </div>

        {/* Closing Message */}
        <div className="mx-auto mt-14 max-w-3xl text-center">
          <p className="text-xl font-bold leading-8 text-slate-950 sm:text-2xl">
            Talent can get you noticed.
            <span className="text-emerald-800">
              {" "}
              Knowledge can help you navigate the journey.
            </span>
          </p>

          <p className="mt-4 text-sm leading-6 text-justify font-bold text-slate-600 sm:text-base">
            ASK GABI exists to help young African footballers ask better
            questions, learn from real experience and make more informed
            decisions.
          </p>
        </div>
      </div>
    </section>
  );
}