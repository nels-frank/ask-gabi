"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  Code2,
  Images,
  Minus,
  Play,
  Plus,
  RotateCcw,
  Video,
  X,
} from "lucide-react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

type Category =
  | "All Media"
  | "Landscape"
  | "Portrait"
  | "Short Clips"
  | "Highlights";

type Photo = {
  id: string;
  src: string;
  alt: string;
  category: "Landscape" | "Portrait";
};

type VideoItem = {
  id: string;
  src: string;
  title: string;
  category: "Short Clips" | "Highlights";
};

const landscapePhotos: Photo[] = Array.from({ length: 24 }, (_, index) => ({
  id: `landscape-${index + 1}`,
  src: `/images/gallery/landscape/landscape-${String(index + 1).padStart(2, "0")}.webp`,
  alt: `Gabriel Obekpa football moment ${index + 1}`,
  category: "Landscape",
}));

const portraitPhotos: Photo[] = Array.from({ length: 32 }, (_, index) => ({
  id: `portrait-${index + 1}`,
  src: `/images/gallery/portrait/portrait-${String(index + 1).padStart(2, "0")}.webp`,
  alt: `Gabriel Obekpa portrait ${index + 1}`,
  category: "Portrait",
}));

const shortClips: VideoItem[] = Array.from({ length: 9 }, (_, index) => ({
  id: `clip-${index + 1}`,
  src: `/videos/gallery/clip/clip-${String(index + 1).padStart(2, "0")}.mp4`,
  title: `Football Moment ${String(index + 1).padStart(2, "0")}`,
  category: "Short Clips",
}));

const highlights: VideoItem[] = Array.from({ length: 8 }, (_, index) => ({
  id: `highlight-${index + 1}`,
  src: `/videos/gallery/highlight/highlight-${String(index + 1).padStart(2, "0")}.mp4`,
  title: `Career Highlight ${index + 1}`,
  category: "Highlights",
}));

const photos = [...landscapePhotos, ...portraitPhotos];
const videos = [...shortClips, ...highlights];

const categories: { label: Category; count: number }[] = [
  { label: "All Media", count: photos.length + videos.length },
  { label: "Landscape", count: landscapePhotos.length },
  { label: "Portrait", count: portraitPhotos.length },
  { label: "Short Clips", count: shortClips.length },
  { label: "Highlights", count: highlights.length },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All Media");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const closeLightbox = () => setSelectedPhoto(null);

  useEffect(() => {
    if (!selectedPhoto) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedPhoto(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedPhoto]);

  const filteredPhotos =
    activeCategory === "All Media"
      ? photos
      : activeCategory === "Landscape" || activeCategory === "Portrait"
        ? photos.filter((photo) => photo.category === activeCategory)
        : [];

  const filteredVideos =
    activeCategory === "All Media"
      ? videos
      : activeCategory === "Short Clips" || activeCategory === "Highlights"
        ? videos.filter((video) => video.category === activeCategory)
        : [];

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50">
      {/* INTRODUCTION */}
      <section className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-white px-3 py-0 shadow-sm ring-1 ring-green-950/5 sm:rounded-3xl md:px-2 md:py-0 lg:py-0 lg:mt-21">
        <div className="relative mx-auto max-w-7xl px-0 py-6 md:py-6 lg:px-10 lg:py-6">
          <div className="absolute -right-2 -top-70 h-100 w-85 bg-green-600 blur-3xl md:bg-green-700 md:blur-3xl md:h-120 md:w-130 lg:bg-green-700 lg:blur-3xl lg:h-100 lg:w-130" />
          <div className="absolute -bottom-160 -left-60 h-46 w-66 bg-green-700 blur-3xl md:-bottom-70 md:-left-60 md:h-96 md:w-66 md:bg-green-700 md:blur-3xl lg:bg-green-700 lg:blur-3xl" />
        </div>

        <div className="relative mx-auto mt-6 max-w-7xl px-1 py-14 md:px-10 md:py-16 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl text-left"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-950 px-3 py-1 text-sm font-bold text-white">
              <Code2 className="h-4 w-4" />
              Ask Gabi
            </div>

            <h1 className="text-left text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl md:text-3xl">
              My Football Journey in Pictures
            </h1>

            <div className="mt-2 h-1 w-16 rounded-full bg-green-950" />

            <p className="mt-3 max-w-4xl text-justify text-xl font-bold leading-7 text-gray-600 lg:text-xl sm:leading-8">
              Every match, every challenge and every experience has been part
              of my journey. Welcome to my gallery, where I share moments from
              my life in professional football, both on and off the pitch.
            </p>

            <p className="mt-3 max-w-4xl text-justify text-xl font-bold leading-7 text-gray-600 sm:text-2xl sm:leading-8">
              These pictures and videos capture the experiences behind ASK GABI
              and the lessons that continue to shape my career.
            </p>
          </motion.div>

          {/* MEDIA COUNTS */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Landscape Photos", count: "24", icon: Images },
              { label: "Portrait Photos", count: "32", icon: Camera },
              { label: "Short Clips", count: "09", icon: Play },
              { label: "Highlights", count: "08", icon: Video },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm sm:p-5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="rounded-xl bg-green-50 p-2">
                      <Icon className="h-5 w-5 text-green-800" />
                    </div>
                    <span className="text-2xl font-extrabold text-green-950 sm:text-3xl">
                      {item.count}
                    </span>
                  </div>
                  <p className="mt-3 text-l font-bold text-slate-600">
                    {item.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto mt-6 max-w-7xl px-4 py-10 md:px-8">
        <div className="mb-2">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-green-950 px-3 py-1 text-sm font-bold text-white">
            <Images className="h-4 w-4" />
            Moments That Matter
          </div>

          <h2 className="text-left text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
            Explore the Gallery
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-green-950" />
          <p className="mt-3 max-w-3xl text-justify text-xl font-bold leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Browse match moments, portraits, short clips and career highlights.
            Select a category to explore.
          </p>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-3">
          {categories.map((category) => (
            <button
              key={category.label}
              type="button"
              onClick={() => setActiveCategory(category.label)}
              className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition ${
                activeCategory === category.label
                  ? "border-green-950 bg-green-950 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-green-700 hover:text-green-900"
              }`}
            >
              {category.label}
              <span
                className={`rounded-full px-2 py-0.5 text-xs ${
                  activeCategory === category.label
                    ? "bg-white/15 text-white"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* PHOTOS */}
        {filteredPhotos.length > 0 && (
          <div className="mb-12">
            {activeCategory === "All Media" && (
              <h3 className="mb-5 text-2xl font-bold text-slate-900 md:text-2xl">
                Photos
              </h3>
            )}

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
              {filteredPhotos.map((photo, index) => (
                <motion.button
                  key={photo.id}
                  type="button"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: (index % 4) * 0.04 }}
                  onClick={() => setSelectedPhoto(photo)}
                  aria-label={`View ${photo.alt}`}
                  className={`group relative block w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 text-left shadow-sm ${
                    photo.category === "Portrait" ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-green-950/70 via-transparent to-transparent opacity-70 transition group-hover:opacity-100" />

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-3 sm:p-4">
                    <span className="text-xs font-bold text-white sm:text-sm">
                      {photo.category === "Landscape"
                        ? "Football Moments"
                        : "Player Portraits"}
                    </span>
                    <span className="rounded-full bg-white/20 p-2 text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                      <Images className="h-4 w-4" />
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        )}

        {/* VIDEOS */}
        {filteredVideos.length > 0 && (
          <div className="mb-12">
            {activeCategory === "All Media" && (
              <h3 className="mb-5 text-2xl font-bold text-slate-900 md:text-2xl">
                Videos &amp; Highlights
              </h3>
            )}

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredVideos.map((video, index) => (
                <motion.article
                  key={video.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index % 3) * 0.05 }}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="relative aspect-video bg-green-950">
                    <video
                      className="h-full w-full object-cover"
                      controls
                      preload="metadata"
                      playsInline
                      aria-label={video.title}
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support video playback.
                    </video>
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-green-800">
                      {video.category}
                    </p>
                    <h4 className="mt-2 text-base font-bold text-slate-900 sm:text-lg">
                      {video.title}
                    </h4>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        {/* EMPTY STATE */}
        {filteredPhotos.length === 0 && filteredVideos.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <Images className="mx-auto h-10 w-10 text-green-800" />
            <h3 className="mt-4 text-xl font-bold text-slate-900">
              No media in this category
            </h3>
            <p className="mt-2 text-sm font-bold text-slate-500">
              Select another category to explore the gallery.
            </p>
          </div>
        )}
      </section>

      {/* CLOSING CTA */}
      <section className="px-3 py-2 md:px-8 md:py-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-0xl bg-green-950 px-3 py-4 text-white sm:px-10 md:py-14">
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-green-600/40 blur-3xl" />
          <div className="relative flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="max-w-6xl">
              <p className="text-xl font-bold uppercase tracking-[0.2em] text-lime-300">
                Beyond the Pictures
              </p>
              <h2 className="mt-2 text-justify text-xl font-bold tracking-tight sm:text-3xl md:text-3xl">
                Every journey has a lesson to share.
              </h2>
              <p className="mt-2 text-base font-bold leading-7 text-green-50 sm:text-lg sm:leading-8">
                Discover the experiences behind ASK GABI and learn why
                knowledge matters on and off the pitch.
              </p>
              <br />
              <a
                href="/mentorship"
                className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-white px-16 py-3 text-sm font-extrabold text-green-950 transition hover:bg-lime-100"
              >
                Explore ASK GABI
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO LIGHTBOX: manual zoom, drag-to-pan, reset and close */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Image viewer: ${selectedPhoto.alt}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeLightbox();
          }}
        >
          <div className="absolute inset-x-3 top-3 z-[110] flex items-center justify-between gap-3 sm:inset-x-6 sm:top-6">
            <p className="max-w-[45vw] truncate text-sm font-semibold text-white/90 sm:max-w-[60vw]">
              {selectedPhoto.alt}
            </p>

            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close image"
                title="Close"
                className="rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-white/20"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          <div className="mt-12 h-[calc(100vh-6rem)] w-full max-w-7xl sm:mt-14">
            <TransformWrapper
              key={selectedPhoto.id}
              initialScale={1}
              minScale={1}
              maxScale={4}
              centerOnInit
              limitToBounds={false}
              wheel={{ disabled: true }}
              doubleClick={{ disabled: true }}
              panning={{ velocityDisabled: true }}
            >
              {({ zoomIn, zoomOut, resetTransform }) => (
                <div className="relative h-full w-full">
                  <div className="absolute right-0 top-0 z-20 flex gap-2">
                    <button
                      type="button"
                      onClick={() => zoomOut()}
                      aria-label="Zoom out"
                      title="Zoom out"
                      className="rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-white/20 disabled:opacity-40"
                    >
                      <Minus size={20} />
                    </button>
                    <button
                      type="button"
                      onClick={() => zoomIn()}
                      aria-label="Zoom in"
                      title="Zoom in"
                      className="rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-white/20"
                    >
                      <Plus size={20} />
                    </button>
                    <button
                      type="button"
                      onClick={() => resetTransform()}
                      aria-label="Reset zoom"
                      title="Reset zoom"
                      className="rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-white/20"
                    >
                      <RotateCcw size={20} />
                    </button>
                  </div>

                  <TransformComponent
                    wrapperStyle={{
                      width: "100%",
                      height: "100%",
                      cursor: "grab",
                    }}
                    contentStyle={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Image
                      src={selectedPhoto.src}
                      alt={selectedPhoto.alt}
                      width={2000}
                      height={1600}
                      priority
                      draggable={false}
                      sizes="100vw"
                      className="max-h-[calc(100vh-8rem)] max-w-[92vw] select-none object-contain sm:max-w-[90vw]"
                    />
                  </TransformComponent>
                </div>
              )}
            </TransformWrapper>
          </div>

          <p className="pointer-events-none absolute bottom-3 left-0 right-0 text-center text-xs font-medium text-white/60 sm:bottom-5">
            Use + and − to zoom · Drag the image to move · Press Esc to close
          </p>
        </div>
      )}
    </main>
  );
}

