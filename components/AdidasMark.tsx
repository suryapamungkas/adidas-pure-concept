import React from "react";

interface AdidasMarkProps {
  className?: string;
}

export function AdidasMark({ className = "brand-mark" }: AdidasMarkProps) {
  return (
    <span className="brand" aria-label="Adidas Pure Concept">
      <svg aria-hidden="true" viewBox="0 0 56 36" className={className}>
        <path d="M3 31 16 8l7 4-11 19H3Z" />
        <path d="m18 31 14-25 7 4-12 21h-9Z" />
        <path d="M34 31 47 8l7 4-11 19h-9Z" />
      </svg>
      <span>Adidas Pure Concept</span>
    </span>
  );
}
