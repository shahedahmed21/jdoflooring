import { Quote } from "lucide-react";
import { MaskedHeading, Reveal, RevealGroup, RevealItem } from "./Reveal";

const SLOTS = ["Testimonial 01", "Testimonial 02", "Testimonial 03"];

export function Testimonials() {
  return (
    <section className="relative bg-cream py-24 text-ink md:py-36">
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

        <RevealGroup className="mt-16 grid gap-6 md:grid-cols-3">
          {SLOTS.map((slot) => (
            <RevealItem key={slot}>
              <div className="flex h-full flex-col justify-between border border-ink/15 p-9">
                <Quote className="size-6 text-ink/25" strokeWidth={1.1} />
                <div className="mt-10 space-y-3" aria-hidden>
                  <span className="block h-px w-full bg-ink/12" />
                  <span className="block h-px w-11/12 bg-ink/12" />
                  <span className="block h-px w-9/12 bg-ink/12" />
                </div>
                <p className="mt-10 text-[0.6rem] uppercase tracking-[0.28em] text-ink/40">
                  {slot} — awaiting review
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
