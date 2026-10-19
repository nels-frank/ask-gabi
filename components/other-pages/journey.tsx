"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Compass,
  Flag,
  GraduationCap,
  MapPin,
  Rocket,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BiFootball } from "react-icons/bi";

const journey = [
  {
    number: "01",
    title: "The Beginning",
    location: "Nigeria",
    description:
      "My football journey began in Nigeria, where my foundation was built through development, discipline, and a growing ambition to play at the highest level.",
    image: "/images/nigeria.jpg",
  },
  {
    number: "02",
    title: "First European Chapter",
    location: "Serbia",
    description:
      "The journey moved to Serbia with IMT Novi Beograd, followed by a loan spell at Tekstilac Odžaci and a short chapter with Mladost Lučani.",
    image: "/images/serbia.jpeg",
  },
  {
    number: "03",
    title: "A New Level",
    location: "Türkiye",
    description:
      "In August 2024, I joined Bodrum FK, stepping into Turkish professional football and competing at the Süper Lig level.",
    image: "/images/t0key.jpg",
  },
  {
    number: "04",
    title: "Another Chapter",
    location: "Moldova",
    description:
      "In 2025, I continued my European journey on loan with FC Zimbru Chișinău before returning to Bodrum FK.",
    image: "/images/moldova.jpg",
  },
];

const clubs = [
  {
    country: "NIGERIA",
    club: "Dynamo Academica",
    period: "The beginning",
    description:
      "Where my football development began and my ambition to play professionally in Europe took shape.",
  },
  {
    country: "SERBIA",
    club: "IMT Novi Beograd",
    period: "2022–2024",
    description:
      "I adapted to a more demanding football environment and developed my defensive ability, discipline and work rate.",
  },
  {
    country: "SERBIA",
    club: "Tekstilac Odžaci",
    period: "2024 · Loan",
    description:
      "Another chapter that taught me to remain adaptable as my football journey evolved.",
  },
  {
    country: "SERBIA",
    club: "Mladost Lučani",
    period: "2024",
    description:
      "An additional professional experience that contributed to my development.",
  },
  {
    country: "TÜRKIYE",
    club: "Bodrum FK",
    period: "Joined August 2024",
    description:
      "Experienced the demands of top-flight football and learned more about the professional realities beyond the pitch.",
  },
  {
    country: "MOLDOVA",
    club: "FC Zimbru Chișinău",
    period: "February–June 2025 · Loan",
    description:
      "A different football environment challenged me to adapt to new expectations and roles.",
  },
  {
    country: "TÜRKIYE",
    club: "Bodrum FK",
    period: "Returned June 2025",
    description:
      "This chapter further shaped my understanding of career decisions, playing time, transfers and professional guidance.",
  },
];

const lessons = [
  {
    number: "01",
    title: "Ask Questions",
    description:
      "Understand the opportunity, the people involved and what is expected of you before making a major decision.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Adapt to Change",
    description:
      "Different countries, coaches and tactical systems require discipline, flexibility and a willingness to learn.",
    icon: Rocket,
  },
  {
    number: "03",
    title: "Understand the Details",
    description:
      "Trials, contracts, transfers and representation deserve careful attention - not assumptions.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Keep Developing",
    description:
      "Talent matters, but consistent work, tactical awareness and professional discipline also shape progress.",
    icon: GraduationCap,
  },
];

const flags: Record<string, string> = {
  NIGERIA: "/images/nigeriaflag.JPG",
  SERBIA: "/images/serbiaflag.jpg",
  TÜRKIYE: "/images/turkyflag.JPG",
  MOLDOVA: "/images/moldovaflag.JPG",
};

export default function Journey() {
  const whatsappLink = "https://wa.me/"; // Add Gabriel's full international number.

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Contact introduction */}
      <section className="relative mx-auto mt-21 max-w-7xl overflow-hidden rounded-2xl bg-white px-5 py-0 shadow-sm ring-1 ring-green-950/5 sm:rounded-3xl md:px-10 md:py-0 lg:py-0">
      <div className="relative mx-auto max-w-7xl px-0 py-6 md:py-6 lg:px-10 lg:py-6">
        <div className="absolute -right-2 -top-70 h-100 w-85 bg-green-600 blur-3xl md:bg-green-700 md:blur-3xl md:h-120 md:w-130 lg:bg-green-700 lg:blur-3xl lg:h-120 lg:w-130" />
        <div className="absolute -bottom-160 -left-60 h-46 w-66 bg-green-700 blur-3xl md:-bottom-70 md:-left-60 md:h-96 md:w-66 md:bg-green-700 md:blur-3xl lg:bg-green-700 lg:blur-3xl" />
      </div>

        <div className="relative grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
               className="mb-2 text-left"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-green-950 px-3 py-1 text-sm font-bold text-white">
                <BiFootball className="h-4 w-4" />
                My Football Journey
              </div>

              <h1 className="text-left text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl md:text-4xl">
                Every Journey Teaches you Something.
              </h1>

              <div className="mt-3 h-1 w-16 rounded-full bg-green-950" />
              
              <p className="mt-4 max-w-4xl text-justify text-xl font-bold leading-7 text-gray-600 sm:text-lg sm:leading-8">
                From Nigeria to professional football in Europe, my journey has
                taught me valuable lessons about ambition, sacrifice, adaptation
                and the realities of pursuing a football career abroad.
              </p>

              <p className="mt-3 max-w-4xl text-justify text-xl font-bold leading-7 text-gray-600 sm:text-lg sm:leading-8">
                Along the way, I experienced situations that made me realise how
                important it is for young players to ask questions and understand
                the opportunities they are pursuing.
              </p>

              <p className="mt-3 max-w-4xl text-justify text-xl font-bold leading-7 text-gray-600 sm:text-lg sm:leading-8">
                Is it a trial or a guaranteed contract? Who is arranging the
                opportunity? What costs are involved? Are the terms clear?
              </p>

              <p className="mt-3 max-w-4xl text-justify text-xl font-bold leading-7 text-gray-600 sm:text-lg sm:leading-8">
                These experiences inspired me to create ASK GABI; a platform where
                young footballers can ask questions, learn from my journey and
                find qualified professional support when they need expertise
                beyond my own experience.
              </p>

              <p className="mt-3 max-w-4xl text-justify text-xl font-bold leading-7 text-gray-600 sm:text-lg sm:leading-8">
                You don’t need to know everything. You need access to people who do.
              </p>


              <div className="my-6 rounded-xl border-l-4 border-green-600 bg-green-50 p-5 sm:p-6">
                  <div className="flex items-start gap-3">
                    <Rocket className="mt-1 h-6 w-6 shrink-0 text-green-700" />
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 sm:text-xl">
                        One lesson that stayed with me
                      </h4>
                      <p className="mt-2 text-justify text-l font-bold leading-7 text-slate-600 sm:text-base sm:leading-8">
                        Talent can open a door. Discipline, adaptability and
                        informed decisions help you navigate what comes next.
                      </p>
                    </div>
                  </div>
                </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
             className="md:flex justify-center lg:justify-end mt-10 md:mt-10"
            >
  
              <div className="relative h-120 w-84 md:h-155 md:w-155 lg:h-155 lg:w-124">
                <div className="absolute -right-3 -top-3 h-full w-full rounded-3xl bg-green-950 sm:-right-4 sm:-top-4" />
                 <div className="relative h-120 w-82 overflow-hidden rounded-3xl border-4 border-white bg-green-100 shadow-xl md:h-155 md:w-155 lg:h-155 lg:w-124">
                  <Image
                    src="/images/journeymenu.jpg"
                    alt="Gabriel Obekpa reflecting on his football journey"
                    fill
                    priority
                    sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 456px"
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
        </div>
      </section>

      {/* CAREER TIMELINE */}
      <section className="relative mx-auto mt-21 max-w-7xl overflow-hidden rounded-2xl bg-white px-4 py-0 shadow-sm ring-1 ring-green-950/5 sm:rounded-3xl md:px-10 md:py-0 lg:py-0">
          <div className="border-b border-slate-200 bg-slate-50 p-5 md:p-8">
            <div className="mb-2 flex items-center gap-3">
              <div className="rounded-lg bg-green-600 p-2">
                <BiFootball className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                My Career Timeline
              </h2>
            </div>

            <h3 className="text-xl font-extrabold tracking-tight text-green-700 sm:text-2xl md:text-3xl">
              Every club taught me something
            </h3>

            <p className="mt-2 max-w-3xl text-justify text-xl font-bold leading-7 text-slate-500 sm:text-base sm:leading-8">
              Different countries, different expectations and experiences
              shaped my understanding of professional football.
            </p>
          </div>

          <div className="p-4 md:p-8">
            <div className="grid gap-4 lg:grid-cols-2">
              {clubs.map((item, index) => (
                <motion.article
                  key={`${item.club}-${item.period}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.45, delay: (index % 2) * 0.08 }}
                  className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:p-5"
                >
                  <div className="flex h-12 w-14 shrink-0 items-center justify-center overflow-hidden rounded-md bg-slate-100 sm:h-14 sm:w-16">
                    <Image
                      src={flags[item.country]}
                      alt={`${item.country} flag`}
                      width={64}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold text-green-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                        {item.club}
                      </h3>
                    </div>

                    <p className="mt-1 text-xs font-bold text-green-700 sm:text-sm">
                      {item.country} · {item.period}
                    </p>

                    <p className="mt-2 text-justify text-l font-bold leading-7 text-slate-500 sm:text-base sm:leading-8">
                      {item.description}
                    </p>
                  </div>

                  {index < clubs.length - 1 && (
                    <ArrowRight className="mt-1 hidden h-4 w-4 shrink-0 text-slate-300 md:block" />
                  )}
                </motion.article>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-200 bg-slate-50 p-5 md:p-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 rounded-full bg-green-100 p-3">
                <UserRound className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  More than club names
                </h3>
                <p className="mt-2 text-justify text-l font-bold leading-7 text-slate-600 sm:text-base sm:leading-8">
                  Each stage brought different expectations and decisions.
                  These experiences helped me appreciate the importance of
                  preparation, adaptability and understanding the professional
                  side of football.
                </p>
              </div>
            </div>
          </div>
      </section>

      <section className="relative mx-auto mt-21 max-w-7xl overflow-hidden rounded-2xl bg-white px-4 py-0 shadow-sm ring-1 ring-green-950/5 sm:rounded-3xl md:px-10 md:py-0 lg:py-0">
          <div className="border-b border-slate-200 bg-slate-50 p-5 md:p-8">
            <div className="mb-2 flex items-center gap-3">
                <div className="rounded-lg bg-green-600 p-2">
                <BiFootball className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                The Journey
              </h2>
            </div>
      
                <h3 className="text-2xl font-bold tracking-tight text-green-700 sm:text-2xl md:text-3xl">
                  From Africa to Europe
                </h3>
      
                <p className="mt-2 max-w-3xl text-justify text-xl font-bold leading-7 text-slate-500 sm:text-base sm:leading-8">
                  From my beginnings in Nigeria to professional football across
                  Europe, every chapter has brought a new challenge, experience,
                  and opportunity to grow.
                </p>
              </div>
      
              {/* Journey Cards */}
            <div className="p-0 md:p-8">
            <div className="grid gap-8 lg:grid-cols-2">
                {journey.map((item) => (
                  <article
                    key={item.number}
                    className="group overflow-hidden rounded-[1rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/5] overflow-hidden bg-emerald-950">
                      <Image
                        src={item.image}
                        alt={`${item.title} - ${item.location}`}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
      
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />
                      <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-lime-400 text-sm font-bold text-emerald-950">
                        {item.number}
                      </span>
                    </div>
      
                    {/* Content */}
                    <div className="p-3">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-emerald-700">
                        <MapPin className="h-3.5 w-3.5" />
                        {item.location}
                      </div>
      
                      <h3 className="mt-3 text-xl font-bold text-slate-950">
                        {item.title}
                      </h3>
      
                      <p className="mt-3 text-l font-bold text-justify leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

      {/* LESSONS */}
      <section className="mt-4 px-6 py-3 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-green-950 px-3 py-1 text-sm font-bold text-white">
            <GraduationCap className="h-4 w-4" />
            Lessons Along the Way
          </div>

          <h2 className="text-left text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-3xl">
            What my journey has taught me
          </h2>

          <div className="mt-2 h-1 w-16 rounded-full bg-green-950" />

          <p className="mt-2 max-w-3xl text-justify text-xl font-bold leading-7 text-slate-500 sm:text-xl sm:leading-8">
            A football career involves more than talent and opportunity. These
            are some of the lessons I carry from my experiences.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {lessons.map((lesson, index) => {
              const Icon = lesson.icon;

              return (
                <motion.article
                  key={lesson.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md md:p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-green-600">
                      {lesson.number}
                    </span>
                    <span className="rounded-lg bg-green-100 p-2">
                      <Icon className="h-5 w-5 text-green-800" />
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-bold text-slate-950">
                    {lesson.title}
                  </h3>

                  <p className="mt-3 text-l font-bold text-justify leading-6 text-slate-600">
                    {lesson.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}