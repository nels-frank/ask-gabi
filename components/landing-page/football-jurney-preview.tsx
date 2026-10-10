import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

const journey = [
  {
    number: "01",
    title: "The Beginning",
    location: "Nigeria",
    description:
      "My football journey began in Nigeria, where my foundation was built through development, discipline, and a growing ambition to play at the highest level.",
    image: "/images/gabriel-obekpa/journey-nigeria.webp",
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

export default function FootballJourneyPreview() {
  return (
    <section className="bg-white py-20 sm:py-10 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-justify">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-emerald-700">
            The Journey
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-6xl">
            From Africa to Europe
          </h2>

          <p className="mt-5 text-lg leading-7 text-slate-600 font-bold sm:text-lg">
            From my beginnings in Nigeria to professional football across
            Europe, every chapter has brought a new challenge, experience,
            and opportunity to grow.
          </p>
        </div>

        {/* Journey Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {journey.map((item) => (
            <article
              key={item.number}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-emerald-950">
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
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-emerald-700">
                  <MapPin className="h-3.5 w-3.5" />
                  {item.location}
                </div>

                <h3 className="mt-3 text-xl font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-m font-bold text-justify leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/football-journey"
            className="inline-flex items-center gap-2 rounded-md bg-emerald-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
          >
            Explore My Journey
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}