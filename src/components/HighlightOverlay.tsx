import { motion } from 'motion/react';

export function HighlightOverlay() {
  return (
    <>
      <motion.div
        className='absolute border-x-2 border-foreground'
        initial={{
          top: -400,
          left: -400,
          right: -400,
          bottom: -400,
          opacity: 1,
        }}
        animate={{
          top: [-400, -400, -8],
          left: [-400, -8, -8],
          right: [-400, -8, -8],
          bottom: [-400, -400, -8],
          opacity: [1, 1, 0],
        }}
        transition={{ duration: 0.5, ease: 'linear', times: [0, 0.7, 1] }}
      />
      <motion.div
        className='absolute border-y-2 border-foreground'
        initial={{
          top: -400,
          left: -400,
          right: -400,
          bottom: -400,
          opacity: 1,
        }}
        animate={{
          top: [-400, -8, -8],
          left: [-400, -400, -8],
          right: [-400, -400, -8],
          bottom: [-400, -8, -8],
          opacity: [1, 1, 0],
        }}
        transition={{ duration: 0.5, ease: 'linear', times: [0, 0.7, 1] }}
      />
      <motion.div
        className='absolute -top-2 -left-2 -right-2 -bottom-2 border-2 border-foreground animate-pulse'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
    </>
  );
}
