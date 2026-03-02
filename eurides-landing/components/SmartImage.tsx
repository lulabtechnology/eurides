"use client";

import Image, { type ImageProps } from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

type Props = Omit<ImageProps, "alt"> & {
  alt: string;
  ratio?: "square" | "video" | "heroDesktop" | "heroMobile" | "badge" | "logo";
  fallbackLabel?: string;
  className?: string;
  imgClassName?: string;
};

const ratioClass: Record<NonNullable<Props["ratio"]>, string> = {
  square: "aspect-square",
  video: "aspect-video",
  heroDesktop: "aspect-[12/9]",
  heroMobile: "aspect-square",
  badge: "aspect-square",
  logo: "aspect-[3/1]"
};

export function SmartImage({
  ratio = "square",
  fallbackLabel = "Image Placeholder",
  className,
  imgClassName,
  ...props
}: Props) {
  const [failed, setFailed] = React.useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "grid place-items-center rounded-2xl border border-black/10 bg-white/40 text-sm text-black/60",
          ratioClass[ratio],
          className
        )}
        role="img"
        aria-label={fallbackLabel}
      >
        {fallbackLabel}
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden rounded-2xl", ratioClass[ratio], className)}>
      <Image
        {...props}
        alt={props.alt}
        fill
        sizes="(max-width: 768px) 92vw, 50vw"
        className={cn("object-contain", imgClassName)}
        onError={() => setFailed(true)}
        priority={props.priority}
      />
    </div>
  );
}
