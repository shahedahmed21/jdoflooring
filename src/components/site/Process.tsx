import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
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
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.6 });
  const height = useTransform(progress, [0, 1], ["0%", "100%"]);

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

        <div ref={ref} className="relative mt-20 pl-12 md:pl-24">
          <div className="absolute left-[7px] top-0 h-full w-px bg-ink/12 md:left-[15px]" />
          <motion.div
            style={{ height }}
            className="absolute left-[7px] top-0 w-px bg-ink md:left-[15px]"
          />

          <div className="flex flex-col gap-16 md:gap-24">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.9, ease: EASE }}
                className="group relative"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
                  className="absolute -left-12 top-2 size-[15px] rounded-full border border-ink bg-cream md:-left-24 md:size-8"
                >
                  <span className="absolute inset-1.5 hidden rounded-full bg-ink transition-transform duration-500 group-hover:scale-110 md:block" />
                </motion.span>

                <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:gap-12">
                  <span className="font-display text-5xl font-light text-ink/25 transition-colors duration-500 group-hover:text-gold md:text-6xl">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-display text-3xl text-ink md:text-4xl">{s.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/65">{s.copy}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1.4, ease: EASE }}
          className="mt-24 h-px origin-left bg-ink/15"
        />
      </div>
    </section>
  );
}
