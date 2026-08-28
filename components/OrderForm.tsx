"use client";

import { useState, type FormEvent } from "react";

const tiers = ["Classic", "Detailed", "Elaborate", "Not sure yet"];

export default function OrderForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-sand bg-ivory p-10 text-center shadow-sm">
        <h3 className="font-serif text-2xl text-terracotta-dark">
          Thank you!
        </h3>
        <p className="mt-3 text-cocoa-light">
          Your inquiry has been received. We&apos;ll be in touch soon to start
          designing your cookies.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-full border-2 border-terracotta px-6 py-2 font-semibold text-terracotta transition-colors hover:bg-terracotta hover:text-ivory"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-3xl border border-sand bg-ivory p-8 shadow-sm sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-semibold text-cocoa">
          Name
          <input
            required
            type="text"
            name="name"
            className="rounded-xl border border-sand bg-cream px-4 py-2.5 font-normal text-cocoa outline-none focus:border-terracotta"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-semibold text-cocoa">
          Email
          <input
            required
            type="email"
            name="email"
            className="rounded-xl border border-sand bg-cream px-4 py-2.5 font-normal text-cocoa outline-none focus:border-terracotta"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-semibold text-cocoa">
          Event date
          <input
            type="date"
            name="date"
            className="rounded-xl border border-sand bg-cream px-4 py-2.5 font-normal text-cocoa outline-none focus:border-terracotta"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-semibold text-cocoa">
          Cookie tier
          <select
            name="tier"
            defaultValue=""
            className="rounded-xl border border-sand bg-cream px-4 py-2.5 font-normal text-cocoa outline-none focus:border-terracotta"
          >
            <option value="" disabled>
              Select a tier
            </option>
            {tiers.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-1.5 text-sm font-semibold text-cocoa">
        Tell us about your order
        <textarea
          required
          name="details"
          rows={5}
          placeholder="Occasion, theme, colors, quantity, and any design ideas..."
          className="rounded-xl border border-sand bg-cream px-4 py-2.5 font-normal text-cocoa outline-none focus:border-terracotta"
        />
      </label>

      <button
        type="submit"
        className="justify-self-start rounded-full bg-terracotta px-8 py-3 font-semibold text-ivory transition-colors hover:bg-terracotta-dark"
      >
        Send Inquiry
      </button>
    </form>
  );
}
