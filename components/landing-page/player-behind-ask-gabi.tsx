import Image from "next/image";
import Link from "next/link";

export default function PlayerBehindAskGabi() {
  return (
    <section
      id="player-behind-ask-gabi"
      className="bg-slate-100 py-10 sm:py-16 lg:py-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        
        {/* TEXT */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-lime-500" />
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-800">
              The Player Behind ASK GABI
            </p>
          </div>

          <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-zinc-950 sm:text-5xl">
            Professional Footballer.
            <span className="block text-emerald-800">
              Learner. Mentor.
            </span>
          </h2>

          <div className="mt-6 max-w-xl space-y-4 text-base text-justify font-bold leading-7 text-zinc-600 sm:text-lg">
            <p>
              Gabriel Obekpa is a Nigerian professional footballer whose
              journey has taken him from Nigeria to professional football
              across Europe.
            </p>

            <p>
              His experiences on and off the pitch inspired the creation of
              <span className="font-semibold text-zinc-900"> ASK GABI</span> - a platform created to help young African footballers become
              better informed and better prepared.
            </p>
          </div>

          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-emerald-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
          >
            Discover My Journey
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
       {/* Image container */}
        <div className="relative aspect-[2/2] overflow-hidden rounded-[2rem] bg-emerald-950 sm:aspect-[2/1] lg:aspect-[3/2]">
        <Image
            src="/images/gabriel.jpg"
            alt="Gabriel Obekpa, professional footballer"
            fill
            priority={false}
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />

        {/* Image caption */}
        <div className="absolute bottom-6 left-6 right-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-400">
            Gabriel Obekpa
            </p>

            <p className="mt-1 text-sm font-medium text-white">
            Professional Footballer · No. 6
            </p>
        </div>
        </div>
      </div>
    </section>
  );
}