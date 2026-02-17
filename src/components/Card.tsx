import type { HTMLAttributes } from "react";

type BoxProp = HTMLAttributes<HTMLDivElement>;

function Card({ children, className = "", ...props }: BoxProp) {
  return (
    <div
      className={`p-1 ring-2 bg-surface text-surface-fg ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
