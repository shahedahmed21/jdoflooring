import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";
import { EASE, imageMask, viewportOnce } from "@/lib/motion";
import { MaskedHeading, Reveal } from "./Reveal";

const PROJECTS = [
  { img: w1, title: "Bedroom Carpet", tag: "Residential" },
  { img: w2, title: "Herringbone Hallway", tag: "Hardwood" },
  { img: w3, title: "Office Lobby", tag: "Commercial" },
  { img: w4, title: "Stair Runner", tag: "Carpet" },
  { img: w5, title: "Open Plan Oak", tag: "Installation" },
  { img: w6, title: "Carpet Texture", tag: "Materials" },
];

export function Work() {
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [maxDrag, setMaxDrag] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current || !viewportRef.current) return;
      setMaxDrag(
        Math.max(0, trackRef.current.scrollWidth - viewportRef.current.offsetWidth),
      );
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const step = (dir: number) => {
    const card = 460;
    const next = Math.min(0, Math.max(-maxDrag, x.get() - dir * card));
    animate(x, next, { duration: 0.9, ease: EASE });
  };

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
            <div className="flex items-center gap-3">
              <button
                onClick={() => step(-1)}
                aria-label="Previous projects"
                className="flex size-12 items-center justify-center border border-ink/20 text-ink transition-colors duration-500 hover:border-ink hover:bg-ink hover:text-cream"
              >
                <ArrowLeft className="size-4" strokeWidth={1.3} />
              </button>
              <button
                onClick={() => step(1)}
                aria-label="Next projects"
                className="flex size-12 items-center justify-center border border-ink/20 text-ink transition-colors duration-500 hover:border-ink hover:bg-ink hover:text-cream"
              >
                <ArrowRight className="size-4" strokeWidth={1.3} />
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      <div ref={viewportRef} className="mt-14 overflow-hidden pl-6 md:pl-10">
        <motion.div
          ref={trackRef}
          drag="x"
          style={{ x }}
          dragConstraints={{ left: -maxDrag, right: 0 }}
          dragElastic={0.08}
          dragMomentum
          className="flex cursor-grab touch-pan-y gap-5 pr-6 active:cursor-grabbing md:gap-8 md:pr-10"
        >
          {PROJECTS.map((p, i) => (
            <motion.figure
              key={p.title}
              variants={imageMask}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              transition={{ delay: (i % 3) * 0.1 }}
              className="group relative w-[78vw] shrink-0 sm:w-[52vw] lg:w-[430px]"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-ink/10">
                <motion.img
                  src={p.img}
                  alt={`${p.title} — ${p.tag} flooring project by JDO Flooring`}
                  width={1200}
                  height={900}
                  loading="lazy"
                  draggable={false}
                  className="size-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
                />
                <div className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-700 group-hover:bg-ink/15" />
              </div>
              <figcaption className="mt-5 flex items-baseline justify-between border-t border-ink/15 pt-4">
                <span className="font-display text-2xl text-ink">{p.title}</span>
                <span className="text-[0.6rem] uppercase tracking-[0.26em] text-ink/45">
                  {p.tag}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>

      <p className="mx-auto mt-10 max-w-[1400px] px-6 text-[0.6rem] uppercase tracking-[0.28em] text-ink/40 md:px-10">
        Drag to explore
      </p>
    </section>
  );
}
