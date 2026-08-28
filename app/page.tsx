import Link from "next/link";
import CookieIllustration from "@/components/CookieIllustration";
import OrderForm from "@/components/OrderForm";

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

export default function Home() {
  return (
    <>
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
                href="#order"
                className="rounded-full bg-terracotta px-7 py-3 font-semibold text-ivory shadow-sm transition-colors hover:bg-terracotta-dark"
              >
                Start Your Order
              </Link>
              <Link
                href="#pricing"
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

      <section id="story" className="scroll-mt-24 bg-sage/15">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-sand px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sage-dark">
                Our Story
              </span>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-terracotta-dark sm:text-5xl">
                Meet the baker
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-cocoa-light">
                <p>
                  Hi, I&apos;m the heart and hands behind Little Cookie Cottage!
                  What started as a cozy hobby in my home kitchen quickly grew
                  into a love for creating cookies that are almost too pretty to
                  eat.
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

      <section className="bg-cream">
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
                href="#pricing"
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

      <section id="pricing" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-5 pb-10 pt-16 md:pb-12 md:pt-20">
          <div className="text-center">
            <span className="inline-block rounded-full bg-sand px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sage-dark">
              Custom Orders
            </span>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-terracotta-dark sm:text-5xl">
              Custom cookies & pricing
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-cocoa-light">
              Every order is fully custom and priced by the level of detail.
              Choose a starting tier below — final pricing is confirmed once we
              design your set together. A two-dozen minimum applies to all custom
              orders.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
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
                        className={
                          tier.featured ? "text-ivory/90" : "text-cocoa-light"
                        }
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
            Gift sets, printed &amp; logo cookies also available. Ask about add-ons
            and rush orders when you inquire.
          </p>
        </div>
      </section>

      <div className="dot-divider my-6 h-4 w-full opacity-60" />

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
            href="#order"
            className="mt-8 inline-block rounded-full bg-ivory px-8 py-3 font-semibold text-terracotta-dark transition-colors hover:bg-cream"
          >
            Submit an Inquiry
          </Link>
        </div>
      </section>
    </>
  );
}
