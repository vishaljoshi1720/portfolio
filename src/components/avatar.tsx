"use client";

import Image from "next/image";

export function Avatar({
  size = 36,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`relative inline-block shrink-0 overflow-hidden rounded-full border border-line-strong bg-bg-panel ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/images/vishal-avatar.jpg"
        alt="Vishal Joshi"
        fill
        sizes={`${size}px`}
        quality={75}
        priority
        className="object-cover object-[center_18%]"
      />
    </span>
  );
}
