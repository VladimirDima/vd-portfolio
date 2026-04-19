/** Same easing as AnimatedTitle / word animations */
export const pageTransitionEase: [number, number, number, number] = [
  0.2, 0.65, 0.3, 0.9,
];

/** Parent: staggerChildren like AnimatedWords delayChildren / staggerChildren */
export const pageStaggerContainer = {
  initial: {},
  visible: {
    transition: {
      delayChildren: 0.06,
      staggerChildren: 0.09,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.07,
      staggerDirection: -1 as const,
    },
  },
};

export const pageStaggerItem = {
  initial: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: pageTransitionEase,
    },
  },
  exit: {
    opacity: 0,
    y: -22,
    transition: {
      duration: 0.28,
      ease: pageTransitionEase,
    },
  },
};
