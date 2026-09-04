import { useEffect, useState } from "react";
import { motion, type PanInfo } from "motion/react";
import { Play, ArrowLeft, ArrowRight } from "lucide-react";
import { EASE, spring } from "@/lib/motion";
import { SITE } from "@/lib/site";
import { MaskedHeading, Reveal } from "./Reveal";

/**
 * Exactly three reel placeholders. Real Facebook Reel embeds/links can be
 * dropped in later by filling `url` on each item.
 */
const REELS: { id: string; label: string; url?: string }[] = [
  { id: "reel-1", label: "Reel 01" },
  { id: "reel-2", label: "Reel 02" },
  { id: "reel-3", label: "Reel 03" },
];

function useCardMetrics() {
  const [m, setM] = useState({ offset: 340, width: 300 });
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setM({ offset: Math.min(w * 0.62, 240), width: Math.min(w * 0.68, 280) });
      else if (w < 1024) setM({ offset: 300, width: 300 });
      else setM({ offset: 380, width: 340 });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return m;
}

export function Reels() {
  const [active, setActive] = useState(1);
  const { offset, width } = useCardMetrics();

  const go = (dir: number) =>
    setActive((i) => Math.min(REELS.length - 1, Math.max(0, i + dir)));

  const onDragEnd = (_: unknown, info: PanInfo) => {
    const power = info.offset.x + info.velocity.x * 0.18;
    if (power < -70) go(1);
    else if (power > 70) go(-1);
  };

  return (
    <section id="reels" className="relative overflow-hidden bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <span className="section-label">04 — Facebook</span>
            </Reveal>
            <MaskedHeading
              lines={["Our Latest Reels."]}
              className="display-hero mt-6 text-[clamp(2rem,5.5vw,4.5rem)] text-warm-white"
            />
          </div>
          <Reveal delay={0.2}>
            <div className="flex items-center gap-3">
              <button
                onClick={() => go(-1)}
                disabled={active === 0}
                aria-label="Previous reel"
                className="flex size-12 items-center justify-center border border-border text-warm-white transition-colors duration-500 hover:border-gold hover:text-gold disabled:opacity-30"
              >
                <ArrowLeft className="size-4" strokeWidth={1.3} />
              </button>
              <button
                onClick={() => go(1)}
                disabled={active === REELS.length - 1}
                aria-label="Next reel"
                className="flex size-12 items-center justify-center border border-border text-warm-white transition-colors duration-500 hover:border-gold hover:text-gold disabled:opacity-30"
              >
                <ArrowRight className="size-4" strokeWidth={1.3} />
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.14}
        onDragEnd={onDragEnd}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: EASE }}
        className="relative mt-16 flex h-[520px] cursor-grab touch-pan-y items-center justify-center active:cursor-grabbing md:h-[600px]"
      >
        {REELS.map((reel, i) => {
          const d = i - active;
          const isActive = d === 0;
          return (
            <motion.div
              key={reel.id}
              animate={{
                x: d * offset,
                scale: isActive ? 1 : 0.78,
                opacity: Math.abs(d) > 1 ? 0 : isActive ? 1 : 0.45,
                filter: isActive ? "blur(0px)" : "blur(2px)",
              }}
              transition={spring}
              style={{ width, zIndex: isActive ? 10 : 5 - Math.abs(d) }}
              onClick={() => !isActive && setActive(i)}
              className="absolute aspect-9/16 select-none"
            >
              <div
                className={`group relative flex size-full flex-col items-center justify-center overflow-hidden border bg-ink-soft transition-colors duration-500 ${
                  isActive ? "border-gold/45" : "border-border"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/70" />
                <span className="absolute left-5 top-5 text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
                  {reel.label}
                </span>

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  aria-label={`Play ${reel.label}`}
                  className="relative flex size-20 items-center justify-center rounded-full border border-gold/50 text-gold"
                >
                  <Play className="ml-1 size-6" strokeWidth={1.1} />
                </motion.button>

                <p className="relative mt-6 text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
                  Video coming soon
                </p>

                <a
                  href={reel.url ?? SITE.messenger}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="absolute bottom-6 text-[0.65rem] uppercase tracking-[0.24em] text-warm-white/80 transition-colors duration-400 hover:text-gold"
                >
                  Watch on Facebook
                </a>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="mt-10 flex items-center justify-center gap-2.5">
        {REELS.map((r, i) => (
          <button
            key={r.id}
            onClick={() => setActive(i)}
            aria-label={`Go to ${r.label}`}
            className="h-px w-10 overflow-hidden bg-border"
          >
            <motion.span
              animate={{ scaleX: i === active ? 1 : 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="block h-px w-full origin-left bg-gold"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
