import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X } from "lucide-react";
import { EASE } from "@/lib/motion";
import { NAV_LINKS, SITE } from "@/lib/site";
import { Logo } from "./Logo";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: EASE, delay: 0.2 }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled ? "bg-ink/85 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1400px] items-center justify-between px-6 transition-all duration-500 md:px-10 ${
            scrolled ? "py-3" : "py-6"
          }`}
        >
          <a href="#top" aria-label="JDO Flooring home">
            <Logo />
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors duration-300 hover:text-warm-white"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-right scale-x-0 bg-gold transition-transform duration-500 ease-out group-hover:origin-left group-hover:scale-x-100" />
              </a>
            ))}
            <a
              href={SITE.phoneHref}
              className="border border-gold/60 px-5 py-2.5 text-xs uppercase tracking-[0.22em] text-gold transition-colors duration-500 hover:bg-gold hover:text-primary-foreground"
            >
              {SITE.phone}
            </a>
          </nav>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="text-warm-white lg:hidden"
          >
            <Menu className="size-6" strokeWidth={1.2} />
          </button>
        </div>
        <div className={`hairline transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`} />
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="fixed inset-0 z-60 bg-ink px-6 py-6 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-warm-white">
                <X className="size-6" strokeWidth={1.2} />
              </button>
            </div>

            <motion.nav
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } } }}
              className="mt-16 flex flex-col gap-2"
            >
              {NAV_LINKS.map((l) => (
                <div key={l.href} className="overflow-hidden">
                  <motion.a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    variants={{ hidden: { y: "110%" }, show: { y: "0%" } }}
                    transition={{ duration: 0.8, ease: EASE }}
                    className="block font-display text-4xl font-light text-warm-white"
                  >
                    {l.label}
                  </motion.a>
                </div>
              ))}
            </motion.nav>

            <div className="mt-14 space-y-3 text-sm tracking-[0.12em] text-muted-foreground">
              <a href={SITE.phoneHref} className="block hover:text-gold">
                {SITE.phone}
              </a>
              <a href={SITE.emailHref} className="block hover:text-gold">
                {SITE.email}
              </a>
              <a
                href={SITE.messenger}
                target="_blank"
                rel="noreferrer noopener"
                className="block hover:text-gold"
              >
                Messenger — JDO Flooring
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
