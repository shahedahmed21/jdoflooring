import { Quote } from "lucide-react";
import { MaskedHeading, Reveal } from "./Reveal";

type Slot = { id: string; name: string; location: string; initials: string };

const SLOTS: Slot[] = [
  { id: "01", name: "Your name here", location: "Your city", initials: "JD" },
  { id: "02", name: "Your name here", location: "Your city", initials: "JD" },
  { id: "03", name: "Your name here", location: "Your city", initials: "JD" },
  { id: "04", name: "Your name here", location: "Your city", initials: "JD" },
  { id: "05", name: "Your name here", location: "Your city", initials: "JD" },
  { id: "06", name: "Your name here", location: "Your city", initials: "JD" },
];

const COL_A: Slot[] = SLOTS.slice(0, 2);
const COL_B: Slot[] = SLOTS.slice(2, 4);
const COL_C: Slot[] = SLOTS.slice(4, 6);

function Card({ slot }: { slot: Slot }) {
  return (
    <figure className="rounded-2xl border border-ink/12 bg-cream-deep/35 p-7 shadow-[0_18px_50px_-40px_oklch(0_0_0/0.7)] backdrop-blur-[1px] transition-colors duration-500 hover:border-gold/50">
      <Quote className="size-5 text-gold" strokeWidth={1.2} />
      <div className="mt-6 space-y-3" aria-hidden>
        <span className="block h-px w-full bg-ink/12" />
        <span className="block h-px w-11/12 bg-ink/12" />
        <span className="block h-px w-9/12 bg-ink/12" />
      </div>
      <p className="mt-6 text-sm leading-relaxed text-ink/55">
        Review {slot.id} — awaiting a real customer review.
      </p>
      <figcaption className="mt-7 flex items-center gap-3 border-t border-ink/12 pt-5">
        <span className="flex size-10 items-center justify-center rounded-full border border-ink/20 bg-cream text-xs tracking-[0.14em] text-ink/50">
          {slot.initials}
        </span>
        <span className="leading-tight">
          <span className="block font-display text-lg text-ink">{slot.name}</span>
          <span className="block text-[0.6rem] uppercase tracking-[0.26em] text-ink/45">
            {slot.location}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

function Column({ slots, reverse, duration }: { slots: Slot[]; reverse: boolean; duration: number }) {
  const loop = [...slots, ...slots, ...slots, ...slots];
  return (
    <div className="relative h-full overflow-hidden">
      <div
        className={`flex flex-col gap-6 ${reverse ? "marquee-down" : "marquee-up"}`}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {loop.map((s, i) => (
          <Card key={`${s.id}-${i}`} slot={s} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 text-ink md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <span className="section-label text-ink/50">07 — Testimonials</span>
            </Reveal>
            <MaskedHeading
              lines={["In our clients' words."]}
              className="display-hero mt-6 text-[clamp(2rem,5.5vw,4.5rem)] text-ink"
            />
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-xs text-sm leading-relaxed text-ink/60">
              Reviews from real JDO Flooring customers will appear here.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div
            className="marquee-area relative mt-16 h-[520px] md:h-[620px]"
            style={{ perspective: "1400px" }}
          >
            <div
              className="grid h-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              style={{ transform: "rotateX(9deg) rotateZ(-2deg)", transformStyle: "preserve-3d" }}
            >
              <Column slots={COLUMNS[0]} reverse={false} duration={38} />
              <div className="hidden sm:block h-full">
                <Column slots={COLUMNS[1]} reverse duration={46} />
              </div>
              <div className="hidden lg:block h-full">
                <Column slots={COLUMNS[2]} reverse={false} duration={42} />
              </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-cream to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-cream to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
