"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type MediaImageProps = Omit<ImageProps, "alt"> & {
  alt: string;
  frameClassName?: string;
};

/** Next Image + dark skeleton placeholder (lazy by default unless priority). */
export function MediaImage({
  className,
  frameClassName,
  alt,
  quality = 80,
  ...props
}: MediaImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-neutral-900",
        frameClassName,
      )}
    >
      {!loaded && (
        <div className="img-skeleton absolute inset-0 z-[1]" aria-hidden="true" />
      )}
      <Image
        alt={alt}
        quality={quality}
        className={cn(
          "transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
          className,
        )}
        onLoad={() => setLoaded(true)}
        {...props}
      />
    </div>
  );
}
