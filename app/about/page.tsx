import type { Metadata } from "next";
import Link from "next/link";
import CookieIllustration from "@/components/CookieIllustration";

export const metadata: Metadata = {
  title: "Meet the Baker",
  description:
    "Meet the baker behind Little Cookie Cottage and the story of how a love of decorating turned into hand-crafted cookie art.",
};

const values = [
  {
    title: "Quality Ingredients",
    body: "Real butter, pure vanilla and simple, wholesome ingredients — never anything artificial.",
  },
  {
    title: "Handmade, Always",
    body: "Every cookie is baked, iced and decorated by hand in small batches, one order at a time.",
  },
  {
    title: "Made with Love",
    body: "So much heart goes into each set, because your celebration deserves something truly special.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-sand px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sage-dark">
              Our Story
            </span>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-terracotta-dark sm:text-5xl">
              Meet the baker
            </h1>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-cocoa-light">
              <p>
                Hi, I&apos;m the heart and hands behind Little Cookie Cottage!
                What started as a cozy hobby in my home kitchen quickly grew into
                a love for creating cookies that are almost too pretty to eat.
              </p>
              <p>
                Every design begins as a little idea and becomes an edible work
                of art — carefully piped, painted and packaged just for you. I
                pour so much joy into each set, and there&apos;s nothing I love
                more than being part of your special moments.
              </p>
              <p>
                When I&apos;m not covered in flour and royal icing, you&apos;ll
                find me dreaming up new designs and flavors to share with this
                wonderful community.
              </p>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-sage/20" />
            <div className="flex flex-col items-center gap-4 rounded-[2.5rem] border border-sand bg-ivory p-10 shadow-sm">
              <CookieIllustration className="h-44 w-44" />
              <p className="text-center font-serif text-xl text-terracotta-dark">
                &ldquo;Artwork you can eat.&rdquo;
              </p>
              <p className="text-sm text-cocoa-light">— Little Cookie Cottage</p>
            </div>
          </div>
        </div>
      </section>

      <div className="dot-divider h-4 w-full opacity-60" />

      {/* Values */}
      <section className="bg-sage/15">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl text-terracotta-dark sm:text-4xl">
              What goes into every batch
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl border border-sand bg-ivory p-8 text-center shadow-sm"
              >
                <h3 className="font-serif text-xl text-cocoa">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cocoa-light">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients / allergy note */}
      <section className="mx-auto max-w-3xl px-5 py-16 text-center md:py-20">
        <h2 className="font-serif text-2xl text-terracotta-dark sm:text-3xl">
          A little note on our cookies
        </h2>
        <p className="mt-4 leading-relaxed text-cocoa-light">
          All cookies are vanilla sugar cookies finished with vanilla royal
          icing. They are made in a home kitchen that also processes common
          allergens including wheat, dairy, eggs, tree nuts, peanuts and soy.
        </p>
        <Link
          href="/custom-cookies#order"
          className="mt-8 inline-block rounded-full bg-terracotta px-8 py-3 font-semibold text-ivory transition-colors hover:bg-terracotta-dark"
        >
          Let&apos;s Create Something Together
        </Link>
      </section>
    </>
  );
}
