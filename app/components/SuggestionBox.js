"use client";

import { useState } from "react";
import { parish, suggestionCategories } from "../data";

const EMPTY = { name: "", email: "", category: "", message: "" };

export default function SuggestionBox() {
  const [form, setForm] = useState(EMPTY);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.message.trim()) {
      setError("Please write your suggestion before sending.");
      return;
    }

    const category = form.category || "General Suggestion";
    const subject = `Parish Suggestion: ${category}`;
    const body = [
      `Category: ${category}`,
      `Name: ${form.name.trim() || "(anonymous)"}`,
      `Email: ${form.email.trim() || "(not provided)"}`,
      "",
      form.message.trim(),
    ].join("\n");

    // No backend on this static site — open the visitor's email app addressed
    // to the parish. To collect submissions automatically instead, replace the
    // line below with a fetch() to a form service (e.g. Formspree) or API route.
    window.location.href = `mailto:${parish.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  };

  const reset = () => {
    setForm(EMPTY);
    setError("");
    setSent(false);
  };

  return (
    <section id="suggestions" className="relative bg-parchment py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal">
            Your Voice Matters
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-navy sm:text-5xl">
            Suggestion Box
          </h2>
          <div className="gold-rule mx-auto my-6" />
          <p className="mx-auto max-w-xl text-base font-light leading-relaxed text-navy/70">
            Have an idea, a request, or feedback to help our parish grow? Share
            it below. You may leave your name and email blank to remain anonymous.
          </p>
        </div>

        <div className="mt-12 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-navy/5 sm:p-10">
          {sent ? (
            <div className="py-8 text-center">
              <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <h3 className="font-display text-2xl font-semibold text-navy">
                Thank you!
              </h3>
              <p className="mx-auto mt-3 max-w-md text-sm font-light leading-relaxed text-navy/70">
                Your email app should have opened with your suggestion ready to
                send to the parish office. Please press send to deliver it. If
                nothing opened, you may email us directly at{" "}
                <a
                  href={`mailto:${parish.email}`}
                  className="font-medium text-teal underline decoration-gold/60 underline-offset-4 hover:text-gold"
                >
                  {parish.email}
                </a>
                .
              </p>
              <button
                type="button"
                onClick={reset}
                className="mt-7 rounded-full border border-navy/20 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-navy transition-all hover:border-gold hover:text-gold"
              >
                Submit another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="suggestion-name"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-teal"
                  >
                    Name <span className="font-normal normal-case text-navy/40">(optional)</span>
                  </label>
                  <input
                    id="suggestion-name"
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    autoComplete="name"
                    className="w-full rounded-xl border border-navy/15 bg-cream/40 px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-navy/35 focus:border-gold focus:ring-2 focus:ring-gold/30"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="suggestion-email"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-teal"
                  >
                    Email <span className="font-normal normal-case text-navy/40">(optional)</span>
                  </label>
                  <input
                    id="suggestion-email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    autoComplete="email"
                    className="w-full rounded-xl border border-navy/15 bg-cream/40 px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-navy/35 focus:border-gold focus:ring-2 focus:ring-gold/30"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="suggestion-category"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-teal"
                >
                  Topic
                </label>
                <select
                  id="suggestion-category"
                  value={form.category}
                  onChange={update("category")}
                  className="w-full rounded-xl border border-navy/15 bg-cream/40 px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/30"
                >
                  <option value="">Select a topic</option>
                  {suggestionCategories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="suggestion-message"
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-teal"
                >
                  Your Suggestion <span className="text-gold">*</span>
                </label>
                <textarea
                  id="suggestion-message"
                  value={form.message}
                  onChange={update("message")}
                  rows={5}
                  required
                  className="w-full resize-y rounded-xl border border-navy/15 bg-cream/40 px-4 py-3 text-sm leading-relaxed text-navy outline-none transition-colors placeholder:text-navy/35 focus:border-gold focus:ring-2 focus:ring-gold/30"
                  placeholder="Share your idea, request, or feedback…"
                />
              </div>

              {error && (
                <p className="text-sm font-medium text-red-600">{error}</p>
              )}

              <div className="flex flex-col items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="w-full rounded-full bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-navy-deep shadow-lg transition-all hover:bg-gold-soft hover:shadow-xl sm:w-auto"
                >
                  Send Suggestion
                </button>
                <p className="text-center text-xs font-light text-navy/50">
                  Submitting will open your email app with your message ready to send.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
