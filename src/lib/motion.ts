import type { Variants, Transition } from "motion/react";

/** Cinematic easing curves — slow-out, long tail. */
export const EASE = [0.16, 1, 0.3, 1] as const;
export const EASE_SOFT = [0.22, 0.61, 0.36, 1] as const;

export const spring: Transition = {
  type: "spring",
  stiffness: 180,
  damping: 28,
  mass: 0.9,
};

export const viewportOnce = { once: true, amount: 0.25 } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.1, ease: EASE } },
};

export const staggerParent = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

/** Word / line mask reveal child. */
export const maskLine: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 1.05, ease: EASE } },
};

/** Image clip reveal. */
export const imageMask: Variants = {
  hidden: { clipPath: "inset(0% 0% 100% 0%)", scale: 1.12 },
  show: {
    clipPath: "inset(0% 0% 0% 0%)",
    scale: 1,
    transition: { duration: 1.3, ease: EASE },
  },
};
