import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto bg-cocoa text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-xl text-ivory">Little Cookie Cottage</h3>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/80">
            Small-batch, hand-decorated sugar cookies made with love for life&apos;s
            sweetest celebrations.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-caramel">
            Explore
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li>
              <Link href="/" className="hover:text-ivory">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-ivory">
                Meet the Baker
              </Link>
            </li>
            <li>
              <Link href="/custom-cookies" className="hover:text-ivory">
                Custom Cookies &amp; Pricing
              </Link>
            </li>
            <li>
              <Link href="/custom-cookies#order" className="hover:text-ivory">
                Place an Order
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-caramel">
            Stay Connected
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ivory"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ivory"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@littlecookiecottage.com"
                className="hover:text-ivory"
              >
                hello@littlecookiecottage.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/15 py-5 text-center text-xs text-cream/60">
        © {new Date().getFullYear()} Little Cookie Cottage. All rights reserved.
      </div>
    </footer>
  );
}
