import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-floor.jpg";
import { EASE } from "@/lib/motion";
import { SITE } from "@/lib/site";

const LINES = ["Flooring That", "Transforms", "Every Space."];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const overlay = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] overflow-hidden grain-overlay">
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <motion.img
          src={heroImg}
          alt="Warm oak hardwood flooring in a softly lit luxury living room"
          width={1920}
          height={1200}
          className="size-full object-cover"
          initial={{ scale: 1.18, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: EASE }}
        />
      </motion.div>
      <motion.div className="absolute inset-0 bg-ink" style={{ opacity: overlay }} />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink to-transparent" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-6 pb-20 pt-36 md:px-10 md:pb-28"
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.5 }}
          className="section-label"
        >
          Est. Craftsmanship — Floors &amp; Carpet
        </motion.span>

        <h1 className="display-hero mt-7 max-w-[16ch] text-[clamp(2.75rem,9vw,7.5rem)] text-warm-white">
          {LINES.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.25, ease: EASE, delay: 0.6 + i * 0.12 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: 1.1 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {SITE.tagline}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 1.3 } } }}
          className="mt-11 flex flex-wrap items-center gap-4"
        >
          <motion.a
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.9, ease: EASE }}
            href="#services"
            className="group relative overflow-hidden bg-gold px-9 py-4 text-xs uppercase tracking-[0.24em] text-primary-foreground"
          >
            <span className="relative z-10">Our Services</span>
            <span className="absolute inset-0 origin-left scale-x-0 bg-cream transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
          </motion.a>
          <motion.a
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.9, ease: EASE }}
            href="#contact"
            className="group relative overflow-hidden border border-warm-white/35 px-9 py-4 text-xs uppercase tracking-[0.24em] text-warm-white transition-colors duration-500 hover:border-gold hover:text-gold"
          >
            Get a Free Quote
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 1 }}
        className="pointer-events-none absolute bottom-8 right-6 hidden items-center gap-3 text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground md:flex md:right-10"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="size-3.5" strokeWidth={1.4} />
        </motion.span>
      </motion.div>
    </section>
  );
}
