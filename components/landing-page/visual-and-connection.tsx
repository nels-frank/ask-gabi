
"use client";

import { Code2, Pause, Play } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -35 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function VisualAndConnection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);

  // Clear the existing timer
  const clearHideTimer = () => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
  };

  // Show controls and automatically hide them during playback
  const revealControls = useCallback(() => {
    setShowControls(true);
    clearHideTimer();

    if (videoRef.current && !videoRef.current.paused) {
      hideTimer.current = setTimeout(() => {
        setShowControls(false);
      }, 2500);
    }
  }, []);

  // Hide controls when the mouse leaves the video
  const hideControls = () => {
    clearHideTimer();

    if (videoRef.current && !videoRef.current.paused) {
      setShowControls(false);
    }
  };

  // Play and pause video
  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
        setIsPlaying(true);
        setShowControls(true);
        clearHideTimer();

        hideTimer.current = setTimeout(() => {
          setShowControls(false);
        }, 2500);
      } catch {
        setIsPlaying(false);
        setShowControls(true);
      }
    } else {
      video.pause();
      setIsPlaying(false);
      setShowControls(true);
      clearHideTimer();
    }
  };

  // Keep the controls visible when playback stops or ends
  const handlePause = () => {
    setIsPlaying(false);
    setShowControls(true);
    clearHideTimer();
  };

  useEffect(() => {
    return () => clearHideTimer();
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-8 md:py-8 lg:py-16">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-10 h-50 w-50 rounded-full bg-emerald-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-2 -top-70 h-90 w-30 bg-green-600 blur-3xl md:h-95 md:w-110 md:bg-green-700 md:blur-3xl lg:h-98 lg:w-130" />

      <div className="pointer-events-none absolute -bottom-32 right-0 h-36 w-96 rounded-full bg-green-700 blur-3xl" />

      <div className="mx-auto w-full max-w-7xl px-3 sm:px-6 lg:px-5">
        {/* Section Introduction */}
        <motion.div
          className="mx-auto max-w-7xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-950 px-3 py-1 text-sm font-bold text-white"
          >
            <Code2 className="h-8 w-8" />
            Visual & Connection
          </motion.div>

          <motion.h1
            variants={fadeLeft}
            className="text-left text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-3xl"
          >
            Watch. Learn.
            <span className="text-emerald-800"> Be Inspired.</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mb-5 mt-2 h-1 w-16 rounded-full bg-green-950"
          />

          <motion.p
            variants={fadeUp}
            className="mt-6 text-xl text-justify font-bold leading-7 text-slate-600 sm:text-2xl sm:leading-8"
          >
            Explore inspiring moments, behind-the-scenes insights and practical
            advice from Gabriel Obekpa and the ASK GABI community. Discover
            experiences that go beyond the pitch and offer valuable lessons
            for your football journey.
          </motion.p>
        </motion.div>

        {/* Full-width Video Area */}
        <motion.div
          className="relative mx-auto mt-10 w-full overflow-hidden rounded-md bg-emerald-950 shadow-xl"
          initial={{ opacity: 0, scale: 0.94, y: 35 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div
            className="relative aspect-[3/5] w-full bg-emerald-950 md:aspect-[16/8] lg:aspect-[16/7]"
            onMouseEnter={revealControls}
            onMouseMove={revealControls}
            onMouseLeave={hideControls}
            onTouchStart={revealControls}
          >

            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover"
              src="/videos/gallery/highlight/highlight-01.mp4"
              playsInline
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={handlePause}
              onEnded={handlePause}
            />

            {/* Video Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-emerald-950/10" />

            {/* Video Caption */}
            <motion.div
              className="pointer-events-none absolute bottom-4 left-5 right-5 sm:bottom-2 sm:left-5 sm:right-10"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.15, delay: 0.15 }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600 sm:text-base">
                Gabriel Obekpa
              </p>

              <h3 className="text-2xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                My Journey. My Message.
              </h3>

              <p className="text-sm font-semibold leading-6 text-white/80 sm:text-base">
                Real experiences. Valuable lessons. A message for the next generation.
              </p>
            </motion.div>

            {/* Central Play / Pause Button */}
            <button
              type="button"
              onClick={togglePlayback}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className={`absolute left-1/2 top-1/2 z-20 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-emerald-950/60 text-white shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-emerald-800 sm:h-24 sm:w-24 ${
                !isPlaying || showControls
                  ? "visible scale-100 opacity-100"
                  : "invisible scale-90 opacity-0 pointer-events-none"
              }`}
            >
              {isPlaying ? (
                <Pause className="h-9 w-9 fill-current sm:h-11 sm:w-11" />
              ) : (
                <Play className="ml-1 h-9 w-9 fill-current sm:h-11 sm:w-11" />
              )}
            </button>

            {/* Bottom Video Controls */}
            <div
              className={`absolute bottom-0 left-0 right-0 z-10 flex items-center gap-3 bg-gradient-to-t from-black/80 to-transparent px-4 py-4 transition-all duration-300 sm:px-8 sm:py-5 ${
                !isPlaying || showControls
                  ? "visible opacity-100"
                  : "invisible opacity-0 pointer-events-none"
              }`}
            >
              <button
                type="button"
                onClick={togglePlayback}
                aria-label={isPlaying ? "Pause video" : "Play video"}
                className="text-white transition hover:text-lime-400"
              >
                {isPlaying ? (
                  <Pause className="h-6 w-6 fill-current" />
                ) : (
                  <Play className="h-6 w-6 fill-current" />
                )}
              </button>

              <span className="text-xs font-bold text-white sm:text-sm">
                {isPlaying ? "PLAYING" : "READY TO PLAY"}
              </span>

              <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/40">
                <div className="h-full w-0 rounded-full bg-lime-400" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Media Connections */}
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-8 md:gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
        >
          <motion.a
            variants={fadeUp}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-700 text-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:h-16 sm:w-16 md:h-20 md:w-20"
          >
            <FaInstagram className="h-8 w-8 sm:h-9 sm:w-9 md:h-11 md:w-11" />
          </motion.a>

          <motion.a
            variants={fadeUp}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:h-16 sm:w-16 md:h-20 md:w-20"
          >
            <FaFacebookF className="h-8 w-8 sm:h-9 sm:w-9 md:h-11 md:w-11" />
          </motion.a>

          <motion.a
            variants={fadeUp}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:h-16 sm:w-16 md:h-20 md:w-20"
          >
            <FaYoutube className="h-8 w-8 sm:h-9 sm:w-9 md:h-11 md:w-11" />
          </motion.a>

          <motion.a
            variants={fadeUp}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:h-16 sm:w-16 md:h-20 md:w-20"
          >
            <FaXTwitter className="h-8 w-8 sm:h-9 sm:w-9 md:h-11 md:w-11" />
          </motion.a>

          <motion.a
            variants={fadeUp}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:h-16 sm:w-16 md:h-20 md:w-20"
          >
            <FaTiktok className="h-8 w-8 sm:h-9 sm:w-9 md:h-11 md:w-11" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
