"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const photos = [
  { src: "/images/gallery/01.jpg", alt: "Hand-decorated custom sugar cookies" },
  { src: "/images/gallery/02.jpg", alt: "Hand-decorated custom sugar cookies" },
  { src: "/images/gallery/03.jpg", alt: "Hand-decorated custom sugar cookies" },
  { src: "/images/gallery/04.jpg", alt: "Hand-decorated custom sugar cookies" },
  { src: "/images/gallery/05.jpg", alt: "Hand-decorated custom sugar cookies" },
  { src: "/images/gallery/06.jpg", alt: "Hand-decorated custom sugar cookies" },
  { src: "/images/gallery/07.jpg", alt: "Hand-decorated custom sugar cookies" },
  { src: "/images/gallery/08.jpg", alt: "Hand-decorated custom sugar cookies" },
  { src: "/images/gallery/09.jpg", alt: "Hand-decorated custom sugar cookies" },
  { src: "/images/gallery/10.jpg", alt: "Hand-decorated custom sugar cookies" },
  { src: "/images/gallery/11.jpg", alt: "Hand-decorated custom sugar cookies" },
  { src: "/images/gallery/12.jpg", alt: "Hand-decorated custom sugar cookies" },
  { src: "/images/gallery/13.jpg", alt: "Hand-decorated custom sugar cookies" },
  { src: "/images/gallery/14.jpg", alt: "Hand-decorated custom sugar cookies" },
  { src: "/images/gallery/15.jpg", alt: "Hand-decorated custom sugar cookies" },
  { src: "/images/gallery/16.jpg", alt: "Hand-decorated custom sugar cookies" },
  { src: "/images/gallery/17.jpg", alt: "Leo Season beach and campfire birthday cookies" },
  { src: "/images/gallery/18.jpg", alt: "Garden-bug cookies with ladybugs, snails, and flowers" },
  { src: "/images/gallery/19.jpg", alt: "Folk-art floral cookies with a custom name" },
  { src: "/images/gallery/20.jpg", alt: "Baby in Bloom floral baby shower cookies" },
  { src: "/images/gallery/21.jpg", alt: "Light blue teddy bear baby shower cookies" },
  { src: "/images/gallery/22.jpg", alt: "Lemon and citrus Oh baby shower cookies" },
  { src: "/images/gallery/23.jpg", alt: "Over the Moon pink and gold baby cookies" },
  { src: "/images/gallery/24.jpg", alt: "Tropical flamingo and hibiscus birthday cookies" },
  { src: "/images/gallery/25.jpg", alt: "Little Dude on the Way baby shower cookies" },
  { src: "/images/gallery/26.jpg", alt: "Aylani first birthday duckling and gingham cookies" },
  { src: "/images/gallery/27.jpg", alt: "Wild One jungle first birthday cookies" },
  { src: "/images/gallery/28.jpg", alt: "Baby in Bloom wildflower shower cookies" },
  { src: "/images/gallery/29.jpg", alt: "A Little Meatball is on the Way shower cookies" },
  { src: "/images/gallery/30.jpg", alt: "Emma is One party hat and balloon cookies" },
  { src: "/images/gallery/31.jpg", alt: "Mamma Mia wedding cookies" },
  { src: "/images/gallery/32.jpg", alt: "Frozen-themed birthday cookies" },
];

export default function Gallery() {
  const [open, setOpen] = useState<(typeof photos)[number] | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <section id="gallery" className="scroll-mt-24 bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-terracotta-dark sm:text-4xl">
            Artwork you can eat
          </h2>
          <p className="mt-4 text-cocoa-light">
            A peek at custom sets for showers, birthdays, and every sweet
            celebration in between.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {photos.map((photo) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setOpen(photo)}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand shadow-sm ring-terracotta/0 transition-all hover:-translate-y-0.5 hover:shadow-md hover:ring-2 active:translate-y-0 active:scale-[0.98]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105 group-active:scale-100"
              />
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-cocoa/80 p-5"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            aria-label="Close photo"
            className="absolute top-5 right-5 rounded-full bg-ivory px-4 py-2 text-sm font-semibold text-cocoa hover:bg-cream active:scale-95"
            onClick={() => setOpen(null)}
          >
            Close
          </button>
          <div
            className="relative h-[80vh] w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={open.src}
              alt={open.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
