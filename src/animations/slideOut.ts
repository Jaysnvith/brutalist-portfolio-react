import type { Variants } from "motion"

export const slideOut: Variants = {
  hidden: {
    width: 0,
    opacity: 0,
    paddingLeft: 0,
  },
  visible: {
    width: "auto",
    opacity: 1,
    paddingLeft: 10,
  }
};