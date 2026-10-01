"use client";

import { useState } from "react";
import CardSlider from "@/components/ui/CardSlider";

const inputClass =
  "w-full rounded-xl border border-white/15 bg-brand-bg px-4 py-3 text-sm text-brand-cream placeholder:text-brand-muted focus:border-brand-accent focus:outline-none";

const mapSrc = "https://www.google.com/maps?q=Mardan,Pakistan&output=embed";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newErrors = { name: "", email: "", message: "" };

    if (form.name.trim() === "") {
      newErrors.name = "Please enter your name.";
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);

    if (newErrors.name || newErrors.email || newErrors.message) {
      return;
    }

    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <h2 className="font-heading text-3xl md:text-4xl">Request a demo</h2>
      <p className="mt-3 max-w-xl text-brand-muted">
        Tell us a little about your team and we will get back to you.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Left part: the form */}
        <div className="min-w-0">
          {submitted ? (
            <div className="rounded-2xl bg-brand-card p-6">
              <p className="font-medium">Thank you! Your message was sent.</p>
              <p className="mt-2 text-sm text-brand-muted">
                We will reply to you soon.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 rounded-full border border-white/30 px-5 py-2 text-sm"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClass}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClass}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className={inputClass}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="rounded-full bg-brand-cream px-6 py-3 text-sm font-medium text-brand-bg"
              >
                Send message
              </button>
            </form>
          )}
        </div>

        {/* Right part: map and sliding cards */}
      <div className="min-w-0 space-y-6">
          <iframe
            title="Our location on Google Maps"
            src={mapSrc}
            loading="lazy"
            className="h-64 w-full rounded-2xl border-0"
          />
          <CardSlider />
        </div>
      </div>
    </section>
  );
}