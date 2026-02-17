import { motion } from "framer-motion";

function Cursor() {
  return (
    <motion.span
      aria-hidden
      className="relative top-px inline-block w-[0.6em] h-[1em] bg-current ml-1"
      animate={{ opacity: [1, 0] }}
      transition={{
        duration: 0.7,
        repeat: Infinity,
        repeatType: "mirror",
      }}
    />
  );
}

export default Cursor;
