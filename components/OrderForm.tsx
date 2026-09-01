"use client";

import { useEffect, useState, type FormEvent } from "react";

function datePlusDays(days: number) {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + days);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export default function OrderForm() {
  const [submitted, setSubmitted] = useState(false);
  const [minPickup, setMinPickup] = useState("");

  useEffect(() => {
    setMinPickup(datePlusDays(7));
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-sand bg-ivory p-10 text-center shadow-sm">
        <h3 className="font-serif text-2xl text-terracotta-dark">
          Your order is in!
        </h3>
        <p className="mt-3 text-cocoa-light">
          We&apos;ll be in touch soon to confirm your pickup day and design
          details.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-full border-2 border-terracotta px-6 py-2 font-semibold text-terracotta hover:bg-terracotta hover:text-ivory active:scale-[0.97] active:bg-terracotta-dark active:text-ivory"
        >
          Place another order
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
            className="rounded-xl border border-sand bg-cream px-4 py-2.5 font-normal text-cocoa outline-none hover:border-caramel focus:border-terracotta"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-semibold text-cocoa">
          Email
          <input
            required
            type="email"
            name="email"
            className="rounded-xl border border-sand bg-cream px-4 py-2.5 font-normal text-cocoa outline-none hover:border-caramel focus:border-terracotta"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-semibold text-cocoa">
          Pickup date
          <input
            required
            type="date"
            name="pickupDate"
            min={minPickup || undefined}
            className="rounded-xl border border-sand bg-cream px-4 py-2.5 font-normal text-cocoa outline-none hover:border-caramel focus:border-terracotta"
          />
          <span className="font-normal text-xs text-cocoa-light">
            At least 7 days from today.
          </span>
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-semibold text-cocoa">
          How many dozen?
          <select
            name="dozens"
            defaultValue="2"
            className="rounded-xl border border-sand bg-cream px-4 py-2.5 font-normal text-cocoa outline-none hover:border-caramel focus:border-terracotta"
          >
            {[2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>
                {n} dozen{n === 2 ? " ($90)" : ` ($${90 + (n - 2) * 45})`}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-1.5 text-sm font-semibold text-cocoa">
        Tell us about your design
        <textarea
          required
          name="details"
          rows={5}
          placeholder="Occasion, theme, colors, and any design ideas..."
          className="rounded-xl border border-sand bg-cream px-4 py-2.5 font-normal text-cocoa outline-none focus:border-terracotta"
        />
      </label>

      <button
        type="submit"
        className="justify-self-start rounded-full bg-terracotta px-8 py-3 font-semibold text-ivory shadow-sm hover:bg-terracotta-dark hover:shadow-md active:scale-[0.97] active:brightness-95"
      >
        Place Order
      </button>
    </form>
  );
}
