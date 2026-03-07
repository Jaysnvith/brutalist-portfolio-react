import { motion } from "motion/react";

export function BackgroundSquare() {
  const items = Array.from({ length: 8*8 }, (_, idx) => idx)

  return (
    <div className="grid grid-cols-2 md:grid-cols-8 gap-24 justify-items-center">
      {items.map(idx => (
        <motion.div
          key={idx}
          className="w-20 h-20 border-3 border-surface-fg/30"
          animate={{ 
            rotate: [0, 180, 180, 180],
            scale: [1, 1, 1.2, 1],
           }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
            times: [0, 0.5, 0.75, 1], // controls when each keyframe hits
          }}
        />
      ))}
    </div>
  )
}