import { motion } from "motion/react";
import { Layers, Ruler, Hammer, RefreshCw, Home, Building2 } from "lucide-react";
import { EASE, fadeUp } from "@/lib/motion";
import { MaskedHeading, Reveal, RevealGroup, RevealItem } from "./Reveal";

const SERVICES = [
  {
    icon: Layers,
    title: "Hardwood Flooring",
    copy: "Solid and engineered hardwood installed plank by plank with tight, level joints.",
  },
  {
    icon: Ruler,
    title: "Carpet Installation",
    copy: "Stretched, seamed and trimmed carpet with clean edges in every room.",
  },
  {
    icon: Hammer,
    title: "Floor Installation",
    copy: "Full installation from subfloor preparation through to final trim.",
  },
  {
    icon: RefreshCw,
    title: "Floor Replacement",
    copy: "Careful removal of old flooring and a precise fit for the new surface.",
  },
  {
    icon: Home,
    title: "Residential Flooring",
    copy: "Living rooms, bedrooms, stairs and hallways finished to a high standard.",
  },
  {
    icon: Building2,
    title: "Commercial Flooring",
    copy: "Durable flooring for offices and business spaces, scheduled around you.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <span className="section-label">02 — Services</span>
            </Reveal>
            <MaskedHeading
              lines={["What we install."]}
              className="display-hero mt-6 text-[clamp(2rem,5.5vw,4.5rem)] text-warm-white"
            />
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              A focused range of flooring work, delivered with the same care whether it's one room
              or an entire property.
            </p>
          </Reveal>
        </div>

        <RevealGroup stagger={0.08} className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, copy }) => (
            <RevealItem key={title} variants={fadeUp}>
              <motion.article
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="group relative h-full overflow-hidden bg-ink p-9 md:p-11"
              >
                <motion.span
                  variants={{ rest: { scaleY: 0 }, hover: { scaleY: 1 } }}
                  transition={{ duration: 0.7, ease: EASE }}
                  className="absolute inset-0 origin-bottom bg-ink-soft"
                />
                <div className="relative">
                  <motion.div
                    variants={{ rest: { y: 0 }, hover: { y: -4 } }}
                    transition={{ duration: 0.6, ease: EASE }}
                  >
                    <Icon className="size-6 text-gold" strokeWidth={1.1} />
                  </motion.div>
                  <h3 className="mt-8 font-display text-3xl font-light text-warm-white">{title}</h3>
                  <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                    {copy}
                  </p>
                  <motion.span
                    variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                    transition={{ duration: 0.8, ease: EASE }}
                    className="mt-8 block h-px w-16 origin-left bg-gold"
                  />
                </div>
              </motion.article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
