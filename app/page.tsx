import Link from "next/link";
import CookieIllustration from "@/components/CookieIllustration";

const highlights = [
  {
    title: "Made from Scratch",
    body: "Every cookie starts with real butter, pure vanilla and a soft, tender sugar-cookie recipe our customers rave about.",
  },
  {
    title: "Hand-Decorated",
    body: "Each design is piped and painted by hand with royal icing — no two batches are ever exactly alike.",
  },
  {
    title: "Made to Order",
    body: "From bridal showers to birthdays, your cookies are custom-designed to match your colors, theme and vision.",
  },
];

const occasions = [
  "Weddings & Showers",
  "Birthdays",
  "Baby Announcements",
  "Holidays",
  "Corporate & Logo",
  "Just Because",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-block rounded-full bg-sand px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sage-dark">
              Small-batch · Handmade
            </span>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-terracotta-dark sm:text-5xl md:text-6xl">
              Where cookies become little works of art
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-cocoa-light">
              Little Cookie Cottage bakes beautifully decorated sugar cookies,
              made by hand for weddings, birthdays and every sweet moment in
              between.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/custom-cookies#order"
                className="rounded-full bg-terracotta px-7 py-3 font-semibold text-ivory shadow-sm transition-colors hover:bg-terracotta-dark"
              >
                Start Your Order
              </Link>
              <Link
                href="/custom-cookies"
                className="rounded-full border-2 border-terracotta px-7 py-3 font-semibold text-terracotta transition-colors hover:bg-terracotta hover:text-ivory"
              >
                View Pricing
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 -z-10 rounded-full bg-sand/60 blur-2xl" />
            <div className="grid grid-cols-2 gap-5">
              <CookieIllustration className="h-40 w-40 -rotate-6 drop-shadow-md sm:h-48 sm:w-48" />
              <CookieIllustration className="mt-10 h-40 w-40 rotate-8 drop-shadow-md sm:h-48 sm:w-48" />
              <CookieIllustration className="h-40 w-40 rotate-10 drop-shadow-md sm:h-48 sm:w-48" />
              <CookieIllustration className="-mt-2.5 h-40 w-40 -rotate-4 drop-shadow-md sm:h-48 sm:w-48" />
            </div>
          </div>
        </div>
        <div className="dot-divider h-4 w-full opacity-60" />
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-terracotta-dark sm:text-4xl">
            Baked with heart, decorated with care
          </h2>
          <p className="mt-4 text-cocoa-light">
            More than just a treat — our cookies are edible art crafted to make
            your celebration unforgettable.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-sand bg-ivory p-8 text-center shadow-sm"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center">
                <CookieIllustration className="h-16 w-16" />
              </div>
              <h3 className="mt-5 font-serif text-xl text-cocoa">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cocoa-light">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Occasions */}
      <section className="bg-sage/15">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl text-terracotta-dark sm:text-4xl">
                A cookie for every occasion
              </h2>
              <p className="mt-4 max-w-md text-cocoa-light">
                Whatever you&apos;re celebrating, we&apos;ll design a custom set
                that fits the moment perfectly. Just tell us your theme, colors
                and date — we&apos;ll handle the rest.
              </p>
              <Link
                href="/custom-cookies"
                className="mt-6 inline-block font-semibold text-terracotta underline-offset-4 hover:underline"
              >
                Explore custom tiers →
              </Link>
            </div>
            <ul className="grid grid-cols-2 gap-3">
              {occasions.map((o) => (
                <li
                  key={o}
                  className="rounded-2xl border border-sand bg-ivory px-5 py-4 text-center text-sm font-semibold text-cocoa shadow-sm"
                >
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="rounded-3xl bg-terracotta px-8 py-14 text-center text-ivory shadow-md">
          <h2 className="font-serif text-3xl sm:text-4xl">
            Ready to order something sweet?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-ivory/90">
            Custom orders book up quickly. Reach out early to reserve your date
            and start designing your perfect cookies.
          </p>
          <Link
            href="/custom-cookies#order"
            className="mt-8 inline-block rounded-full bg-ivory px-8 py-3 font-semibold text-terracotta-dark transition-colors hover:bg-cream"
          >
            Submit an Inquiry
          </Link>
        </div>
      </section>
    </>
  );
}
