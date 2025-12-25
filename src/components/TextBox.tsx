import type { HTMLAttributes } from "react";
import { motion } from "framer-motion";

type BoxProp = HTMLAttributes<HTMLDivElement>;

function TextBox({ children, className="", ...props }: BoxProp) {
  return (
    <p
      className={`p-1 text-pretty border-2 bg-surface text-surface-fg ${className}`}
      {...props}
    >
      {children}

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
    </p>
  );
}

export default TextBox;
