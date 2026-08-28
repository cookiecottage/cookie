"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import CookieIllustration from "./CookieIllustration";

const links = [
  { href: "/", label: "Home" },
  { href: "#story", label: "Meet the Baker" },
  { href: "#pricing", label: "Custom Cookies" },
  { href: "#order", label: "Order" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-sand/70 bg-cream/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <CookieIllustration className="h-11 w-11" />
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-semibold text-terracotta-dark">
              Little Cookie Cottage
            </span>
            <span className="text-[11px] uppercase tracking-[0.25em] text-sage-dark">
              Handmade with heart
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/" && !hash
                : hash === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-semibold transition-colors hover:text-terracotta ${
                    active ? "text-terracotta" : "text-cocoa"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="#order"
              className="rounded-full bg-terracotta px-5 py-2 text-sm font-semibold text-ivory shadow-sm transition-colors hover:bg-terracotta-dark"
            >
              Order Now
            </Link>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full text-cocoa hover:bg-sand md:hidden"
        >
          <span className="text-2xl leading-none">{open ? "\u00d7" : "\u2261"}</span>
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-sand/70 bg-cream px-5 py-3 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 font-semibold text-cocoa hover:bg-sand"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#order"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-full bg-terracotta px-3 py-2 text-center font-semibold text-ivory"
            >
              Order Now
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
