import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-auto bg-cocoa text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <div className="inline-block overflow-hidden rounded-2xl bg-cream">
            <Logo className="h-24 w-24 object-contain" />
          </div>
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
              <Link href="/" className="hover:text-ivory active:text-caramel">
                Home
              </Link>
            </li>
            <li>
              <Link href="#story" className="hover:text-ivory active:text-caramel">
                Meet the Baker
              </Link>
            </li>
            <li>
              <Link href="#gallery" className="hover:text-ivory active:text-caramel">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="hover:text-ivory active:text-caramel">
                Custom Cookies &amp; Pricing
              </Link>
            </li>
            <li>
              <Link href="#order" className="hover:text-ivory active:text-caramel">
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
                className="hover:text-ivory active:text-caramel"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ivory active:text-caramel"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@littlecookiecottage.com"
                className="hover:text-ivory active:text-caramel"
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
