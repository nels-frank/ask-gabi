
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  GraduationCap,
  Handshake,
  HeartPulse,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const lessons = [
  {
    number: "01",
    title: "Agents & Representation",
    description:
      "Understand representation, mandates, and who genuinely has your interests at heart before trusting someone with your career.",
    icon: Handshake,
  },
  {
    number: "02",
    title: "Contracts",
    description:
      "Learn why contract terms matter, what to clarify before signing, and when to seek qualified legal advice.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Trials & Opportunities",
    description:
      "Understand the difference between a trial and a guaranteed contract, clarify costs, and ask the right questions before travelling.",
    icon: Target,
  },
  {
    number: "04",
    title: "Adaptation",
    description:
      "Prepare for different football cultures, tactical systems, coaching expectations, and the demands of life in a new country.",
    icon: TrendingUp,
  },
  {
    number: "05",
    title: "Transfers & Loans",
    description:
      "Understand how transfers, loans, playing opportunities, and changing circumstances can influence your development.",
    icon: ArrowRight,
  },
  {
    number: "06",
    title: "Player Rights",
    description:
      "Recognise the importance of your rights, understand when a situation needs attention, and know when to consult a qualified professional.",
    icon: ShieldCheck,
  },
  {
    number: "07",
    title: "Performance & Development",
    description:
      "Appreciate the role of discipline, training, recovery, nutrition, and continuous learning in a professional football career.",
    icon: HeartPulse,
  },
];

const professionals = [
  {
    title: "Football Lawyers",
    description: "Legal guidance on contracts, rights, and disputes.",
    icon: ShieldCheck,
  },
  {
    title: "Licensed Football Professionals",
    description: "Appropriate guidance on representation and football opportunities.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Performance Coaches",
    description: "Support for physical preparation and performance.",
    icon: TrendingUp,
  },
  {
    title: "Nutrition Professionals",
    description: "Evidence-based guidance on nutrition and recovery.",
    icon: HeartPulse,
  },
  {
    title: "Player Development Specialists",
    description: "Support for long-term growth and career development.",
    icon: GraduationCap,
  },
  {
    title: "Football Coaches",
    description: "Technical, tactical, and positional development.",
    icon: Users,
  },
];

export default function MentorshipPage() {
  const whatsappLink = "https://wa.me/"; // Replace with Gabriel's full international number.

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO — BEYOND THE PITCH */}
      <section className="relative overflow-hidden rounded-2xl bg-slate-50 sm:rounded-3xl">
        <div className="relative mx-auto max-w-7xl px-0 py-6 md:py-6 lg:px-0 lg:py-6">
          <div className="absolute -right-2 -top-70 h-100 w-85 bg-green-600 blur-3xl md:h-120 md:w-130 md:bg-green-700 lg:h-120 lg:w-130" />
          <div className="absolute -bottom-160 -left-60 h-46 w-66 bg-green-700 blur-3xl md:-bottom-70 md:-left-60 md:h-96 md:w-66" />
        </div>

        <div className="mt-14 mx-auto max-w-7xl px-4 py-4 md:px-10 lg:py-2 lg:mt-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 text-left"
            >
              <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-green-950 px-3 py-1 text-sm font-bold text-white">
                <BookOpen className="h-4 w-4" />
                Beyond the Pitch
              </div>

              <h1 className="text-left text-xl font-bold tracking-tight text-gray-900 lg:text-3xl md:text-4">
                Talent is important. Information is essential.
              </h1>

              <div className="mt-3 h-1 w-16 rounded-full bg-green-950" />

              <p className="mt-4 max-w-3xl text-justify text-xl font-bold leading-7 text-gray-600 sm:text-lg sm:leading-8">
                Football is more than talent, training, and what happens
                on the pitch. The decisions you make about agents,
                contracts, trials, and your future can shape your entire
                career.
              </p>

              <p className="mt-3 max-w-3xl text-justify text-xl font-bold leading-7 text-gray-600 sm:text-lg sm:leading-8">
                Through ASK GABI, I want to share lessons from my own
                professional football journey and help young African
                footballers ask better questions, understand their
                options, and make informed decisions.
              </p>

              <p className="mt-3 max-w-3xl text-justify text-xl font-bold leading-7 text-gray-600 sm:text-lg sm:leading-8">
                I may not have every answer, but I believe every player
                deserves access to useful knowledge and the right
                professional support when it matters.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-green-950 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-green-800"
                >
                  <MessageCircle className="h-4 w-4" />
                  Ask Gabi
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="#mentorship-areas"
                  className="inline-flex items-center gap-2 rounded-full border border-green-950 px-6 py-3 text-sm font-bold text-green-950 transition-colors hover:bg-green-50"
                >
                  Explore Learnings
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="md:flex justify-center lg:justify-end mt-10 md:mt-10"
            >
              <div className="relative h-120 w-86 md:h-155 md:w-154 lg:h-155 lg:w-124">
                <div className="absolute -right-3 -top-3 h-full w-full rounded-3xl bg-green-950 sm:-right-4 sm:-top-4" />
                 <div className="relative h-120 w-85 overflow-hidden rounded-3xl border-4 border-white bg-green-100 shadow-xl md:h-155 md:w-155 lg:h-155 lg:w-124">
                  <Image
                  src="/images/mentorship.jpeg"
                  alt="Gabriel Obekpa reflecting on his football journey"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 456px"
                  className="object-cover"
                  />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-green-950 via-green-950/75 to-transparent px-2 pb-0 pt-16 sm:px-7 sm:pb-1">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400">
                      Real Experience.Real Guidance
                    </p>
                    <h2 className="mt-1 text-xl font-bold text-white sm:text-3xl">
                      Learn beyond the pitch.
                    </h2>
                    <p className="mt-1 text-sm font-bold leading-6 text-white/80">
                      ASK. LEARN. GROW.
                    </p>
                  </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE PURPOSE */}
      <section className="mt-4 px-3 py-3 md:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="p-5 sm:p-8 lg:p-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-green-950 px-3 py-1 text-sm font-bold text-white">
                <Sparkles className="h-4 w-4" />
                Why Mentorship Matters
              </div>

              <h2 className="text-left text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Your dream deserves more than guesswork.
              </h2>

              <div className="mt-3 h-1 w-16 rounded-full bg-green-950" />

              <div className="mt-4 space-y-3 text-xl text-justify font-bold leading-7 text-gray-600 sm:text-lg sm:leading-8">
                <p>
                  Many talented footballers work hard for the chance to
                  play professionally, yet still face difficult decisions
                  without enough reliable information.
                </p>

                <p>
                  An exciting opportunity can come with unanswered
                  questions about the club, the contract, the costs,
                  accommodation, or the person arranging the move.
                </p>

                <p>
                  I created ASK GABI to help make these conversations
                  easier to start. My aim is to share what experience
                  has taught me and encourage players to seek the right
                  advice before making important decisions.
                </p>
              </div>
            </div>

            <div className="relative flex flex-col justify-center overflow-hidden bg-green-950 p-5 text-white sm:p-8 lg:p-10">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-green-700/30 blur-3xl" />

              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400">
                  The Principle Behind ASK GABI
                </p>

                <blockquote className="mt-5 text-l text-justify font-bold leading-relaxed md:text-2xl lg:text-3xl">
                  You don&apos;t need to know everything. You need access
                  to people who do.
                </blockquote>

                <div className="mt-6 h-1 w-16 rounded-full bg-lime-400" />

                <p className="mt-5 text-base text-justify font-bold leading-7 text-emerald-50/80 sm:text-lg sm:leading-8">
                  Real experiences. Practical lessons. Better questions.
                  Appropriate professional support when it matters.
                </p>

                <div className="mt-7 flex items-center gap-3">
                  <div className="rounded-full bg-white/10 p-3">
                    <MessageCircle className="h-6 w-6 text-lime-400" />
                  </div>
                  <p className="text-sm font-bold leading-6 text-white/90">
                    Every question can be the beginning of a better-informed
                    decision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MENTORSHIP AREAS */}
      <section
        id="mentorship-areas"
        className="mt-4 px-3 py-3 md:px-8"
      >
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="p-4 md:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-green-950 px-3 py-1 text-sm font-bold text-white">
                <GraduationCap className="h-4 w-4" />
                Areas of Guidance
              </div>

              <h2 className="text-left text-xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Lessons every aspiring professional should understand.
              </h2>

              <div className="mt-3 h-1 w-16 rounded-full bg-green-950" />

              <p className="mt-4 max-w-4xl text-justify text-xl font-bold leading-7 text-gray-600 sm:text-lg sm:leading-8">
                My career has become a classroom. These are some of the
                important subjects I want to discuss with young African
                footballers as they navigate their own journeys.
              </p>
            </motion.div>
          </div>

          <div className="px-4 pb-6 md:px-6 lg:px-8 lg:pb-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {lessons.map((lesson, index) => {
                const Icon = lesson.icon;

                return (
                  <motion.article
                    key={lesson.number}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
                    className="flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-green-200 hover:shadow-md md:p-5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-green-700">
                        {lesson.number}
                      </span>
                      <div className="rounded-xl bg-green-50 p-3">
                        <Icon className="h-5 w-5 text-green-800" />
                      </div>
                    </div>

                    <h3 className="mt-2 text-2xl font-bold leading-7 text-slate-900">
                      {lesson.title}
                    </h3>

                    <p className="mt-3 text-xl text-justify font-bold leading-7 text-slate-500 md:text-base md:leading-8">
                      {lesson.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>

          <div className="border-t border-slate-200 bg-green-950 px-4 py-5 text-left  md:px-2 lg:px-8">
            <p className="text-base font-bold leading-7 text-white sm:text-lg sm:leading-8">
              Don&apos;t be blinded by the opportunity.
              <span className="text-lime-400">
                {" "}Ask questions. Get advice. Understand. Then decide.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* LEARNING FROM EXPERIENCE */}
      <section className="mt-4 px-2 py-3 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <p className="mb-4 text-s font-extrabold uppercase tracking-[0.22em] text-green-700">
              Learning Through Experience
            </p>

            <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">
              I want the next player to be better prepared.
            </h2>

            <div className="mt-4 h-1 w-16 rounded-full bg-green-700" />

            <div className="mt-5 space-y-4 text-xl text-justify font-bold leading-7 text-slate-600 sm:text-lg sm:leading-8">
              <p>
                My journey through Serbia, Türkiye, and Moldova taught me
                that professional football can bring different expectations,
                changing opportunities, and difficult decisions.
              </p>

              <p>
                Some things become clearer only after you experience them.
                Looking back, I understand why asking questions, adapting
                quickly, and knowing when to seek advice are so important.
              </p>

              <p>
                Through ASK GABI, I want to turn those experiences into
                practical lessons that can help the next generation prepare
                for the realities of the game.
              </p>
            </div>

            <Link
              href="/journey"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-green-800 transition-colors hover:text-green-600"
            >
              Explore My Football Journey
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-lime-50 p-3 sm:p-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-950 text-lime-400">
              <BookOpen className="h-6 w-6" />
            </div>

            <p className="mt-5 text-s font-bold uppercase tracking-[0.2em] text-green-800">
              What I Want for Young Players
            </p>

            <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">
              Better informed. Better prepared. Better equipped.
            </h2>

            <div className="mt-4 space-y-4">
              {[
                "Ask questions before committing to an opportunity.",
                "Understand the decisions that can affect your career.",
                "Learn from real experiences, not motivation alone.",
                "Seek qualified help when a situation requires specialist knowledge.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-800" />
                  <p className="text-xl text-justify font-bold leading-7 text-slate-600 sm:text-base sm:leading-8">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL SUPPORT */}
      <section className="mt-4 bg-green-950 px-4 py-10 sm:py-14 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm font-bold text-white">
              <Users className="h-4 w-4 text-lime-400" />
              Learning Through the Right People
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Real experiences. Qualified professionals.
            </h2>

            <div className="mt-3 h-1 w-16 rounded-full bg-lime-400" />

            <p className="mt-4 text-xl text-justify font-bold leading-7 text-emerald-50/80 sm:text-lg sm:leading-8">
              Football involves more than what happens on the pitch.
              Some situations require expertise beyond my own experience.
              ASK GABI aims to help players identify the type of professional
              support they may need.
            </p>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {professionals.map((professional, index) => {
              const Icon = professional.icon;

              return (
                <motion.article
                  key={professional.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
                  className="rounded-xl border border-white/10 bg-white/[0.06] p-4 transition-colors hover:bg-white/[0.10] sm:p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400/10">
                    <Icon className="h-5 w-5 text-lime-400" />
                  </div>

                  <h3 className="mt-4 text-xl font-bold leading-7 text-white">
                    {professional.title}
                  </h3>

                  <p className="mt-2 text-xl text-justify font-bold leading-7 text-emerald-50/70 sm:text-base sm:leading-8">
                    {professional.description}
                  </p>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 sm:p-5">
            <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-lime-400" />
            <p className="text-m text-justify font-bold leading-7 text-emerald-50/80 sm:text-base sm:leading-8">
              ASK GABI shares personal experiences and educational guidance.
              It does not replace legal, medical, financial, or other
              specialist advice. Professional referrals depend on suitable
              qualified support being available.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 py-8 sm:py-12 md:px-8 lg:px-10">
        <div className="relative max-w-7xl overflow-hidden rounded-2xl bg-lime-50 px-5 py-10 sm:px-8 sm:py-4">
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-green-200/60 blur-3xl" />

          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-green-950 px-3 py-1 text-sm font-bold text-white">
              <MessageCircle className="h-4 w-4 text-lime-400" />
              Your Next Step
            </div>

            <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-3xl">
              Have a question about your football journey?
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-xl text-justify font-bold leading-7 text-slate-600 sm:text-center sm:text-lg sm:leading-8">
              Start by asking. Share what you are trying to understand,
              learn from the experience I can offer, and identify when
              further professional guidance may be helpful.
            </p>

            <Link
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-green-950 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-green-800"
            >
              <MessageCircle className="h-4 w-4" />
              Ask Gabi on WhatsApp
              <ArrowRight className="h-4 w-4" />
            </Link>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.28em] text-green-800">
              Ask. Learn. Grow.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
