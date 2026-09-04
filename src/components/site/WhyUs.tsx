import { motion } from "motion/react";
import { EASE } from "@/lib/motion";
import { MaskedHeading, Reveal } from "./Reveal";

const REASONS = [
  { title: "Quality", copy: "Work done properly the first time, with materials that hold up." },
  { title: "Precision", copy: "Level subfloors, accurate cuts and seams that sit where they should." },
  { title: "Attention to Detail", copy: "Transitions, thresholds and trim finished cleanly." },
  { title: "Professional Installation", copy: "Experienced installers, tidy sites, clear timelines." },
  { title: "Customer Focus", copy: "We listen first and keep you informed from start to finish." },
];

export function WhyUs() {
  return (
    <section className="relative bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <span className="section-label">06 — Why Choose Us</span>
        </Reveal>
        <MaskedHeading
          lines={["The reasons clients", "keep calling us back."]}
          className="display-hero mt-6 max-w-[20ch] text-[clamp(2rem,5vw,4.25rem)] text-warm-white"
        />

        <div className="mt-16 border-t border-border">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.85, ease: EASE, delay: i * 0.05 }}
              className="group relative overflow-hidden border-b border-border"
            >
              <motion.span
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="absolute inset-0 origin-bottom bg-ink-soft"
              />
              <div className="relative flex flex-col gap-3 py-8 md:flex-row md:items-center md:gap-12 md:py-10">
                <span className="w-14 text-[0.65rem] tracking-[0.28em] text-gold">
                  0{i + 1}
                </span>
                <h3 className="font-display text-3xl font-light text-warm-white transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:w-[380px] md:text-4xl md:group-hover:translate-x-3">
                  {r.title}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{r.copy}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
