import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import aboutImg from "@/assets/about-craft.jpg";
import { EASE, imageMask, viewportOnce } from "@/lib/motion";
import { MaskedHeading, Reveal, RevealGroup, RevealItem } from "./Reveal";

const PILLARS = [
  { title: "Quality", copy: "Materials chosen carefully and installed to last." },
  { title: "Precision", copy: "Exact measurements, clean cuts, tight seams." },
  { title: "Craftsmanship", copy: "Hands-on work by installers who take pride in it." },
  { title: "Detail", copy: "Edges, transitions and finishes checked twice." },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="about" className="relative bg-cream py-24 text-ink md:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-6 md:px-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-24">
        <div ref={ref} className="relative">
          <motion.div
            variants={imageMask}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative aspect-4/5 overflow-hidden"
          >
            <motion.img
              src={aboutImg}
              alt="Installer fitting a wide plank of oak flooring by hand"
              width={1200}
              height={1504}
              loading="lazy"
              style={{ y: imgY }}
              className="size-full scale-110 object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
            className="mt-6 h-px origin-left bg-ink/20"
          />
        </div>

        <div>
          <Reveal>
            <span className="section-label text-ink/50">01 — About JDO Flooring</span>
          </Reveal>
          <MaskedHeading
            lines={["Floors built on", "patience, skill", "and precision."]}
            className="display-hero mt-6 text-[clamp(2rem,5vw,4rem)] text-ink"
          />
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink/70">
              JDO Flooring installs hardwood, carpet and full floor replacements for homes and
              businesses. Every project starts with careful preparation and ends with a floor that
              sits flat, meets clean at every edge and feels right underfoot.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/70">
              We work room by room, respect your space and leave it clean — because the finish is
              only as good as the attention behind it.
            </p>
          </Reveal>

          <RevealGroup className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {PILLARS.map((p) => (
              <RevealItem key={p.title}>
                <div className="border-t border-ink/15 pt-5">
                  <h3 className="font-display text-2xl text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{p.copy}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
