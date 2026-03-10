import type { HTMLAttributes } from "react";

type BoxProp = HTMLAttributes<HTMLDivElement>;

function Card({ children, className = "", ...props }: BoxProp) {
  return (
    <div
      className={`p-1 shadow-md ring-2 bg-background ring-accent text-foreground ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
