import type { Variants } from "motion";

export const popIn: Variants = {
  hidden: { 
    scale: 0.1,
    opacity: 2,
  },
  visible: { 
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4
    },
  },
};
