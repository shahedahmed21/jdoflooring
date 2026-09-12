import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { EASE, viewportOnce } from "@/lib/motion";
import { MaskedHeading, Reveal } from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Consultation",
    copy: "We visit, measure and talk through the space, the traffic it takes and what you want from it.",
  },
  {
    n: "02",
    title: "Selection & Design",
    copy: "Together we choose materials, direction, transitions and finishes that suit the room.",
  },
  {
    n: "03",
    title: "Professional Installation",
    copy: "Subfloor prepared, material acclimated, then installed with precise cuts and clean seams.",
  },
  {
    n: "04",
    title: "Final Inspection",
    copy: "We walk the floor with you, check every edge and leave the space clean and ready.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative bg-cream py-24 text-ink md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <span className="section-label text-ink/50">03 — Process</span>
        </Reveal>
        <MaskedHeading
          lines={["From first visit", "to final walk-through."]}
          className="display-hero mt-6 max-w-[18ch] text-[clamp(2rem,5vw,4.25rem)] text-ink"
        />
      </div>

      <div className="relative mt-12 md:mt-20">
        <div className="overflow-visible md:overflow-x-auto md:pb-4 md:[-ms-overflow-style:none] md:[scrollbar-width:none] md:[&::-webkit-scrollbar]:hidden">
          <div className="mx-auto flex max-w-[1400px] flex-col items-stretch px-6 md:min-w-0 md:flex-row md:gap-0 md:px-10">
            {STEPS.map((s, i) => (
              <div key={s.n} className="flex min-w-0 flex-col items-stretch md:flex-row">
                <motion.div
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.9, ease: EASE, delay: i * 0.12 }}
                  className="group w-full min-w-0 rounded-2xl border border-ink/12 bg-cream-deep/40 p-6 transition-colors duration-500 hover:border-ink/30 sm:p-7 md:w-auto md:flex-1 md:max-w-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-ink/25 font-display text-lg text-ink transition-colors duration-500 group-hover:border-gold group-hover:text-gold">
                      {s.n}
                    </span>
                    <span className="h-px flex-1 bg-ink/15" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl leading-tight text-ink md:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{s.copy}</p>
                </motion.div>

                {i < STEPS.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.2 + i * 0.12 }}
                    className="flex h-10 shrink-0 items-center justify-center md:h-auto md:w-10"
                    aria-hidden
                  >
                    <ArrowRight className="size-4 rotate-90 text-ink/35 md:rotate-0" strokeWidth={1.2} />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1.4, ease: EASE }}
          className="mt-20 h-px origin-left bg-ink/15"
        />
      </div>
    </section>
  );
}
