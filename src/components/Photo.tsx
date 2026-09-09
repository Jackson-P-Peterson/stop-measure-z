import Image from "next/image";

export function Photo({
  src,
  alt,
  caption,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 960px, 100vw",
  fill = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
}) {
  return (
    <figure className={className}>
      <div
        className={`overflow-hidden bg-sage ${fill ? "absolute inset-0" : "relative aspect-[16/10] sm:aspect-[4/3]"}`}
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover"
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover"
          />
        )}
      </div>
      {caption ? (
        <figcaption className="relative mt-2 font-mono text-[11px] leading-snug text-bay">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
