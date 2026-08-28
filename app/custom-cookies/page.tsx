import type { Metadata } from "next";
import CookieIllustration from "@/components/CookieIllustration";
import OrderForm from "@/components/OrderForm";

export const metadata: Metadata = {
  title: "Custom Cookies & Pricing",
  description:
    "Explore Little Cookie Cottage custom cookie tiers, pricing and how to place a custom order for your next celebration.",
};

const tiers = [
  {
    name: "Classic",
    price: "From $48 / dozen",
    description: "1–3 simple designs with understated details.",
    features: [
      "Perfect for smaller gatherings",
      "Solid colors & clean lines",
      "One or two accent details",
    ],
    featured: false,
  },
  {
    name: "Detailed",
    price: "From $65 / dozen",
    description:
      "4–7 designs with a variety of custom details — florals, metallics and lettering.",
    features: [
      "Coordinated design set",
      "Hand-painted accents",
      "Custom color palette",
    ],
    featured: true,
  },
  {
    name: "Elaborate",
    price: "From $85 / dozen",
    description:
      "8+ intricate designs with multi-step details, textures and royal icing transfers.",
    features: [
      "Showstopper centerpiece sets",
      "Painting & fine detailing",
      "Fully bespoke designs",
    ],
    featured: false,
  },
];

const steps = [
  {
    step: "1",
    title: "Submit your inquiry",
    body: "Share your date, theme and vision using the form below.",
  },
  {
    step: "2",
    title: "Design & quote",
    body: "We'll confirm details and send a custom quote to reserve your date.",
  },
  {
    step: "3",
    title: "Bake & decorate",
    body: "Your cookies are handmade fresh and packaged with care.",
  },
  {
    step: "4",
    title: "Pickup or delivery",
    body: "Collect your cookies ready to wow your guests.",
  },
];

export default function CustomCookiesPage() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-6xl px-5 py-16 text-center md:py-20">
        <span className="inline-block rounded-full bg-sand px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sage-dark">
          Custom Orders
        </span>
        <h1 className="mt-5 font-serif text-4xl leading-tight text-terracotta-dark sm:text-5xl">
          Custom cookies & pricing
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-cocoa-light">
          Every order is fully custom and priced by the level of detail. Choose a
          starting tier below — final pricing is confirmed once we design your
          set together. A two-dozen minimum applies to all custom orders.
        </p>
      </section>

      {/* Tiers */}
      <section className="mx-auto max-w-6xl px-5 pb-8">
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-3xl border p-8 shadow-sm ${
                tier.featured
                  ? "border-terracotta bg-terracotta text-ivory"
                  : "border-sand bg-ivory text-cocoa"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-caramel px-4 py-1 text-xs font-bold uppercase tracking-wider text-cocoa">
                  Most Popular
                </span>
              )}
              <CookieIllustration className="h-14 w-14" />
              <h3
                className={`mt-4 font-serif text-2xl ${
                  tier.featured ? "text-ivory" : "text-terracotta-dark"
                }`}
              >
                {tier.name}
              </h3>
              <p
                className={`mt-1 text-lg font-semibold ${
                  tier.featured ? "text-ivory" : "text-cocoa"
                }`}
              >
                {tier.price}
              </p>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  tier.featured ? "text-ivory/90" : "text-cocoa-light"
                }`}
              >
                {tier.description}
              </p>
              <ul className="mt-5 space-y-2 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span
                      className={
                        tier.featured ? "text-caramel" : "text-terracotta"
                      }
                    >
                      ✦
                    </span>
                    <span
                      className={tier.featured ? "text-ivory/90" : "text-cocoa-light"}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#order"
                className={`mt-7 rounded-full px-6 py-2.5 text-center font-semibold transition-colors ${
                  tier.featured
                    ? "bg-ivory text-terracotta-dark hover:bg-cream"
                    : "bg-terracotta text-ivory hover:bg-terracotta-dark"
                }`}
              >
                Choose {tier.name}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-cocoa-light">
          Gift sets, printed & logo cookies also available. Ask about add-ons and
          rush orders when you inquire.
        </p>
      </section>

      <div className="dot-divider my-6 h-4 w-full opacity-60" />

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-terracotta-dark sm:text-4xl">
            How ordering works
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.step}
              className="rounded-3xl border border-sand bg-ivory p-6 text-center shadow-sm"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sage/25 font-serif text-xl font-bold text-sage-dark">
                {s.step}
              </div>
              <h3 className="mt-4 font-serif text-lg text-cocoa">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cocoa-light">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Order form */}
      <section id="order" className="scroll-mt-24 bg-sage/15">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
          <div className="mb-8 text-center">
            <h2 className="font-serif text-3xl text-terracotta-dark sm:text-4xl">
              Request your custom order
            </h2>
            <p className="mt-3 text-cocoa-light">
              Fill out the form below and we&apos;ll get back to you to bring your
              cookie vision to life.
            </p>
          </div>
          <OrderForm />
          <p className="mt-6 text-center text-xs text-cocoa-light">
            Custom orders book quickly — please inquire at least 3 weeks before
            your event.
          </p>
        </div>
      </section>
    </>
  );
}
