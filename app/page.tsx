import Image from "next/image";
import Link from "next/link";
import Gallery from "@/components/Gallery";
import Logo from "@/components/Logo";
import OrderForm from "@/components/OrderForm";
import heroCookies from "@/public/images/hero-cookies.jpg";

const highlights = [
  {
    title: "Made from Scratch",
    body: "Every cookie starts with real butter, pure vanilla and a soft, tender sugar-cookie recipe our customers rave about.",
    photo: "/images/gallery/20.jpg",
  },
  {
    title: "Hand-Decorated",
    body: "Designs are hand-piped and painted with royal icing — no two batches are ever exactly alike.",
    photo: "/images/gallery/18.jpg",
  },
  {
    title: "Printed",
    body: "We also print custom artwork onto cookies — logos, photos, and extra-detailed designs piping can't always capture.",
    photo: "/images/gallery/13.jpg",
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

const steps = [
  {
    step: "1",
    title: "Pick a pickup day",
    body: "Choose a date at least 7 days out. Dates 7–14 days away include a $5 per dozen rush fee.",
  },
  {
    step: "2",
    title: "Place your order",
    body: "Tell us your theme and how many dozen. $90 for two dozen, $45 after that — no quote needed.",
  },
  {
    step: "3",
    title: "Bake & decorate",
    body: "Your cookies are handmade fresh for your pickup day and packaged with care.",
  },
  {
    step: "4",
    title: "Come pick them up",
    body: "We'll have your order ready — cookies are pickup only, no delivery.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="font-serif text-4xl leading-tight text-terracotta-dark sm:text-5xl md:text-6xl">
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
                className="rounded-full bg-terracotta px-7 py-3 font-semibold text-ivory shadow-sm hover:bg-terracotta-dark hover:shadow-md active:scale-[0.97] active:brightness-95"
              >
                Start Your Order
              </Link>
              <Link
                href="#pricing"
                className="rounded-full border-2 border-terracotta px-7 py-3 font-semibold text-terracotta hover:bg-terracotta hover:text-ivory active:scale-[0.97] active:bg-terracotta-dark active:text-ivory"
              >
                View Pricing
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-sand/70 blur-2xl" />
            <Image
              src={heroCookies}
              alt="Hand-decorated sea-themed baby shower cookies on a white wood table, including sea turtles, shells, and Sea you soon Baby lettering"
              placeholder="blur"
              preload
              sizes="(max-width: 768px) 100vw, 36rem"
              className="w-full rounded-[2rem] border border-sand object-cover shadow-lg"
            />
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
            <Link
              href="#gallery"
              key={item.title}
              className="group overflow-hidden rounded-3xl border border-sand bg-ivory shadow-sm hover:-translate-y-1 hover:border-terracotta/40 hover:shadow-md active:translate-y-0 active:scale-[0.99]"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={item.photo}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105 group-active:scale-100"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="font-serif text-xl text-cocoa">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cocoa-light">
                  {item.body}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="story" className="scroll-mt-24 bg-sage/15">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="rounded-[2.5rem] border border-sand bg-ivory p-8 shadow-sm md:p-10">
              <h2 className="font-serif text-4xl leading-tight text-terracotta-dark sm:text-5xl">
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
                <Logo className="h-44 w-44 object-contain" />
                <p className="text-center font-serif text-xl font-semibold italic text-terracotta-dark">
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
                className="rounded-3xl border border-sand bg-ivory p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-terracotta/40 hover:shadow-md"
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

      <section>
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
                className="mt-6 inline-block font-semibold text-terracotta underline-offset-4 hover:underline hover:text-terracotta-dark active:text-terracotta-dark"
              >
                See pricing →
              </Link>
            </div>
            <ul className="grid grid-cols-2 gap-3">
              {occasions.map((o) => (
                <li key={o}>
                  <Link
                    href="#order"
                    className="block rounded-2xl border border-sand bg-ivory px-5 py-4 text-center text-sm font-semibold text-cocoa shadow-sm hover:-translate-y-0.5 hover:border-terracotta hover:text-terracotta hover:shadow-md active:translate-y-0 active:scale-[0.98] active:bg-sand"
                  >
                    {o}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Gallery />

      <section id="pricing" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-5 pb-10 pt-16 md:pb-12 md:pt-20">
          <div className="text-center">
            <h2 className="font-serif text-4xl leading-tight text-terracotta-dark sm:text-5xl">
              Custom cookies & pricing
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-cocoa-light">
              Custom cookies, set pricing. No quote needed.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
            <Link
              href="#order"
              className="rounded-3xl border border-terracotta bg-ivory p-8 text-center shadow-sm hover:-translate-y-1 hover:shadow-md active:translate-y-0 active:scale-[0.99] active:bg-cream"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-dark">
                Starting order
              </p>
              <p className="mt-4 font-serif text-5xl leading-none text-terracotta-dark">
                $90
              </p>
              <p className="mt-3 font-semibold text-cocoa">two dozen</p>
              <p className="mt-1 text-sm text-cocoa-light">24 cookies · our minimum</p>
            </Link>
            <Link
              href="#order"
              className="rounded-3xl border border-sand bg-ivory p-8 text-center shadow-sm hover:-translate-y-1 hover:border-terracotta hover:shadow-md active:translate-y-0 active:scale-[0.99] active:bg-cream"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-dark">
                Extra dozen
              </p>
              <p className="mt-4 font-serif text-5xl leading-none text-terracotta-dark">
                $45
              </p>
              <p className="mt-3 font-semibold text-cocoa">each additional dozen</p>
              <p className="mt-1 text-sm text-cocoa-light">Add as many as you need</p>
            </Link>
          </div>
          <p className="mt-6 text-center text-sm text-cocoa-light">
            Pickup only. Orders 7–14 days out add $5 per dozen. Handmade and
            fully custom — just tell us your theme.
          </p>
          <div className="mt-8 text-center">
            <Link
              href="#order"
              className="inline-block rounded-full bg-terracotta px-8 py-3 font-semibold text-ivory shadow-sm hover:bg-terracotta-dark hover:shadow-md active:scale-[0.97] active:brightness-95"
            >
              Place your order
            </Link>
          </div>
        </div>
      </section>

      <div className="dot-divider my-6 h-4 w-full opacity-60" />

      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-terracotta-dark sm:text-4xl">
            How ordering works
          </h2>
          <p className="mt-4 text-cocoa-light">
            All orders are handmade to order and picked up locally — we don&apos;t
            offer delivery.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.step}
              className="rounded-3xl border border-sand bg-ivory p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-terracotta/40 hover:shadow-md"
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
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-cocoa-light">
          Pickup dates 7–14 days away include a $5 per dozen rush fee. We can&apos;t
          take orders with less than 7 days&apos; notice.
        </p>
      </section>

      <section id="order" className="scroll-mt-24 bg-sage/15">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
          <div className="mb-8 text-center">
            <h2 className="font-serif text-3xl text-terracotta-dark sm:text-4xl">
              Place your order
            </h2>
            <p className="mt-3 text-cocoa-light">
              $90 for two dozen, $45 each after that. Share your pickup day and
              design ideas — we&apos;ll take it from there.
            </p>
          </div>
          <OrderForm />
          <p className="mt-6 text-center text-xs text-cocoa-light">
            Please choose a pickup date at least 7 days out. Dates 7–14 days
            away include a $5 per dozen rush fee.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="rounded-3xl bg-terracotta px-8 py-14 text-center text-ivory shadow-md">
          <h2 className="font-serif text-3xl sm:text-4xl">
            Ready to order something sweet?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-ivory/90">
            Custom orders book up quickly. Choose a pickup day at least 7 days
            out and we&apos;ll start designing your cookies.
          </p>
          <Link
            href="#order"
            className="mt-8 inline-block rounded-full bg-ivory px-8 py-3 font-semibold text-terracotta-dark hover:bg-cream active:scale-[0.97] active:bg-sand"
          >
            Place an Order
          </Link>
        </div>
      </section>
    </>
  );
}
