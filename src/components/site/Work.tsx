import { motion } from "motion/react";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";
import { EASE, viewportOnce } from "@/lib/motion";
import { MaskedHeading, Reveal } from "./Reveal";

const PROJECTS = [
  { img: w1, title: "Bedroom Carpet", tag: "Residential", span: "lg:col-span-2 lg:row-span-2" },
  { img: w2, title: "Herringbone Hallway", tag: "Hardwood", span: "" },
  { img: w3, title: "Office Lobby", tag: "Commercial", span: "" },
  { img: w4, title: "Stair Runner", tag: "Carpet", span: "" },
  { img: w5, title: "Open Plan Oak", tag: "Installation", span: "" },
  { img: w6, title: "Carpet Texture", tag: "Materials", span: "sm:col-span-2 lg:col-span-4" },
];

export function Work() {
  return (
    <section id="work" className="relative overflow-hidden bg-cream py-24 text-ink md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <span className="section-label text-ink/50">05 — Our Work</span>
            </Reveal>
            <MaskedHeading
              lines={["Recent floors."]}
              className="display-hero mt-6 text-[clamp(2rem,5.5vw,4.5rem)] text-ink"
            />
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-xs text-sm leading-relaxed text-ink/60">
              A selection of hardwood, carpet and full-replacement projects finished edge to edge.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-[240px] grid-cols-1 gap-5 sm:grid-cols-2 md:auto-rows-[260px] lg:grid-cols-4 lg:gap-6">
          {PROJECTS.map((p, i) => (
            <motion.figure
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.9, ease: EASE, delay: (i % 3) * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl bg-ink/10 ${p.span}`}
            >
              <img
                src={p.img}
                alt={`${p.title} — ${p.tag} flooring project by JDO Flooring`}
                width={1200}
                height={900}
                loading={i < 2 ? "eager" : "lazy"}
                className="size-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-baseline justify-between gap-3 p-6">
                <span className="font-display text-2xl text-warm-white">{p.title}</span>
                <span className="text-[0.6rem] uppercase tracking-[0.26em] text-gold">{p.tag}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
