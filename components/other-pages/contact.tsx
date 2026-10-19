"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const WHATSAPP_NUMBER = "234XXXXXXXXXX"; // Replace with Gabriel's WhatsApp number, digits only.

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "Career Guidance",
    message: "",
  });

  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (WHATSAPP_NUMBER.includes("X")) {
      setError(
        "Please add Gabriel's WhatsApp number in the page configuration before using this form.",
      );
      return;
    }

    const message = [
      "Hello Gabriel, I am reaching out through ASK GABI.",
      "",
      `Name: ${formData.name}`,
      `Email: ${formData.email || "Not provided"}`,
      `Topic: ${formData.topic}`,
      "",
      "Message:",
      formData.message,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Contact introduction */}
      <section className="relative mx-auto mt-21 max-w-7xl overflow-hidden rounded-2xl bg-white px-4 py-0 shadow-sm ring-1 ring-green-950/5 sm:rounded-3xl md:px-10 md:py-0 lg:py-0">
        <div className="relative mx-auto max-w-7xl px-0 py-6 md:py-6 lg:px-10 lg:py-6">
          <div className="absolute -right-2 -top-70 h-100 w-85 bg-green-600 blur-3xl md:bg-green-700 md:blur-3xl md:h-120 md:w-130 lg:bg-green-700 lg:blur-3xl lg:h-120 lg:w-130" />
          <div className="absolute -bottom-160 -left-60 h-46 w-66 bg-green-700 blur-3xl md:-bottom-70 md:-left-60 md:h-96 md:w-66 md:bg-green-700 md:blur-3xl lg:bg-green-700 lg:blur-3xl" />
        </div>

        <div className="relative grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-950 px-3 py-1 text-sm font-bold text-white">
              <MessageCircle size={15} />
              Contact ASK GABI
            </span>

            <h1 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-green-950 lg:text-4xl md:text-4xl">
              Your next step could start with a conversation.
            </h1>

            <div className="mt-3 h-1 w-16 rounded-full bg-green-950" />

            <p className="mt-3 max-w-4xl text-justify text-xl font-bold leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Every football journey comes with questions. Whether you are
              an aspiring player looking for direction or someone who wants
              to learn from the professional game, ASK GABI is here to help
              you start the conversation.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
              >
                Send Message
                <ArrowRight size={17} />
              </a>

              <a
                href="#contact-options"
                className="inline-flex items-center justify-center rounded-xl border border-green-950/15 bg-white px-5 py-3 text-sm font-bold text-green-950 transition hover:border-green-800 hover:bg-green-50"
              >
                Get Connected
                <ArrowRight size={17} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl bg-green-950 p-6 text-white sm:rounded-3xl sm:p-8">
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 h-44 w-44 rounded-full border-[24px] border-white/5"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-20 -left-12 h-52 w-52 rounded-full bg-green-800/70 blur-2xl"
              />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-300 text-green-950">
                  <Sparkles size={25} />
                </div>

                <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-lime-300">
                  The ASK GABI Mission
                </p>

                <h2 className="mt-3 text-xl text-justify font-extrabold leading-snug lg:text-3xl md:text-2xl">
                  Better information. Better decisions. A stronger journey.
                </h2>

                <p className="mt-4 text-l text-justify font-bold leading-7 text-green-50/85 sm:text-base">
                  Football talent matters, but knowing how to navigate the
                  journey matters too. Ask your questions, seek clarity,
                  and keep moving forward.
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-white/15 pt-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <ShieldCheck size={21} className="text-lime-300" />
                  </div>
                  <p className="text-l font-semibold leading-6 text-white/90">
                    A space to learn, connect, and grow through football
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact options */}
      <section
        id="contact-options"
        className="mx-auto mt-4 max-w-7xl px-4 py-10 md:px-8"
      >
        <div className="mb-6">
          <p className="text-l font-extrabold uppercase tracking-[0.16em] text-green-800">
            Let&apos;s Connect
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-green-950 sm:text-3xl">
            Choose how to reach out
          </h2>
          <p className="mt-3 max-w-3xl text-justify text-xl font-bold leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Have a question about your football journey? Start with the
            option that works best for you.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <motion.a
            whileHover={{ y: -4 }}
            href="#contact-form"
            className="group flex h-full flex-col rounded-2xl border border-green-950/10 bg-white p-5 shadow-sm transition hover:border-green-800/30 hover:shadow-md sm:p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-900">
              <MessageCircle size={24} />
            </div>

            <h3 className="mt-4 text-2xl font-extrabold text-green-950">
              Ask a Football Question
            </h3>
            <p className="mt-2 text-xl text-justify font-bold leading-6 text-gray-600 sm:text-base sm:leading-7">
              Share a challenge, ask for guidance, or seek insight into
              life and decisions in professional football.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="transition group-hover:translate-x-1 inline-flex items-center justify-center gap-2 rounded-xl bg-green-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
              >
                Write your message
                <ArrowRight size={17} />
              </a>
            </div>
          </motion.a>

          <motion.a
            whileHover={{ y: -4 }}
            href="#contact-form"
            className="group flex h-full flex-col rounded-2xl border border-green-950/10 bg-white p-5 shadow-sm transition hover:border-green-800/30 hover:shadow-md sm:p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime-100 text-green-900">
              <Send size={23} />
            </div>

            <h3 className="mt-4 text-2xl font-extrabold text-green-950">
              Collaborations &amp; Enquiries
            </h3>
            <p className="mt-2 text-xl text-justify font-bold leading-6 text-gray-600 sm:text-base sm:leading-7">
              Interested in working with ASK GABI, sharing an opportunity,
              or discussing a football-related initiative? Get in touch.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="transition group-hover:translate-x-1 inline-flex items-center justify-center gap-2 rounded-xl bg-green-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
              >
                Contact ASK GABI
                <ArrowRight size={17} />
              </a>
            </div>
          </motion.a>
        </div>
      </section>

      {/* Message form */}
      <section
        id="contact-form"
        className="mx-auto mt-4 max-w-7xl px-3 py-4 md:px-8"
      >
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
          <div className="rounded-2xl bg-green-950 p-6 text-white sm:rounded-3xl sm:p-8">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-lime-300">
              Your Message Matters
            </p>

            <h2 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl">
              Tell us what is on your mind.
            </h2>

            <p className="mt-4 text-l font-bold text-justify leading-7 text-green-50/85 sm:text-base">
              You do not need to have everything figured out before asking
              a question. Give us a little context about what you need, and
              let&apos;s start from there.
            </p>

            <div className="mt-8 space-y-5 border-t border-white/15 pt-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-lime-300">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-extrabold">Clear communication</h3>
                  <p className="mt-1 text-l font-bold text-justify leading-6 text-green-50/75">
                    Explain your question or enquiry in your own words.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-lime-300">
                  <Clock3 size={20} />
                </div>
                <div>
                  <h3 className="font-extrabold">Send it when ready</h3>
                  <p className="mt-1 text-l text-justify font-bold leading-6 text-green-50/75">
                    Your message will open in WhatsApp for you to review
                    and send.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-lime-300">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className="font-extrabold">Share thoughtfully</h3>
                  <p className="mt-1 text-l font-bold text-justify leading-6 text-green-50/75">
                    Only include information relevant to your enquiry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-green-950/10 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-8">
            <div className="mb-6">
              <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-950">
                Get in Touch
              </span>
              <h2 className="mt-3 text-2xl font-extrabold text-green-950 sm:text-3xl">
                Send your message
              </h2>
              <p className="mt-2 text-l font-bold text-justify leading-6 text-gray-600 sm:text-base">
                Complete the details below to prepare your WhatsApp message.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-xl font-bold text-gray-800"
                  >
                    Your Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(event) =>
                      setFormData({ ...formData, name: event.target.value })
                    }
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm font-medium text-gray-900 outline-none transition placeholder:font-normal placeholder:text-gray-400 focus:border-green-800 focus:bg-white focus:ring-2 focus:ring-green-800/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-xl font-bold text-gray-800"
                  >
                    Email Address{" "}
                    <span className="font-medium text-gray-400">
                      (Optional)
                    </span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(event) =>
                      setFormData({ ...formData, email: event.target.value })
                    }
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm font-medium text-gray-900 outline-none transition placeholder:font-normal placeholder:text-gray-400 focus:border-green-800 focus:bg-white focus:ring-2 focus:ring-green-800/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-topic"
                  className="mb-2 block text-xl font-bold text-gray-800"
                >
                  What would you like to discuss?
                </label>
                <select
                  id="contact-topic"
                  value={formData.topic}
                  onChange={(event) =>
                    setFormData({ ...formData, topic: event.target.value })
                  }
                  className="w-full rounded-xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm font-medium text-gray-800 outline-none transition focus:border-green-800 focus:bg-white focus:ring-2 focus:ring-green-800/10"
                >
                  <option>Career Guidance</option>
                  <option>Professional Football</option>
                  <option>Opportunities &amp; Trials</option>
                  <option>Mentorship</option>
                  <option>Collaboration</option>
                  <option>General Enquiry</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-xl font-bold text-gray-800"
                >
                  Your Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={6}
                  minLength={10}
                  value={formData.message}
                  onChange={(event) =>
                    setFormData({ ...formData, message: event.target.value })
                  }
                  placeholder="Tell us about your question, goal, or enquiry..."
                  className="w-full resize-y rounded-xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm font-medium leading-6 text-gray-900 outline-none transition placeholder:font-normal placeholder:text-gray-400 focus:border-green-800 focus:bg-white focus:ring-2 focus:ring-green-800/10"
                />
              </div>

              {error && (
                <p
                  role="alert"
                  className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold leading-6 text-amber-900"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-950 px-5 py-3.5 text-sm font-extrabold text-white transition hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 sm:w-auto"
              >
                Continue with WhatsApp
                <ArrowRight size={18} />
              </button>

              <p className="text-l font-bold text-justify leading-5 text-gray-500">
                WhatsApp will open with your message prepared. You can review
                it before sending. This form does not send or store your
                message on this website.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto mt-4 max-w-7xl px-3 pb-10 pt-4 md:px-8 md:pb-14">
        <div className="relative overflow-hidden rounded-2xl bg-green-950 px-2 py-8 text-center text-white sm:rounded-3xl sm:px-2 sm:py-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-20 h-52 w-52 rounded-full bg-green-700/50 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-10 h-52 w-52 rounded-full bg-lime-400/10 blur-3xl"
          />

          <div className="relative max-w-6xl">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-300 text-green-950">
              <CheckCircle2 size={25} />
            </div>

            <h2 className="mt-4 text-xl font-bold leading-tight lg:text-4xl md:text-4xl">
              Every great journey starts somewhere.
            </h2>

            <p className="mx-auto mt-3 max-w-4xl text-base font-bold leading-7 text-green-50/85 sm:text-lg sm:leading-8">
              Take the first step. Ask the question. Find the information
              that helps you move forward.
            </p>

            <a
              href="/mentorship"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-lime-300 px-5 py-3 text-sm font-extrabold text-green-950 transition hover:bg-lime-200 focus:outline-none focus:ring-2 focus:ring-lime-200 focus:ring-offset-2 focus:ring-offset-green-950"
            >
              Explore Mentorship
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
