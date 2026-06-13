"use client";

import { useState } from "react";
import { site } from "@/app/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full border border-line bg-white px-4 py-3 text-cocoa outline-none transition-colors placeholder:text-taupe focus:border-accent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-line bg-paper p-8 text-center">
        <p className="font-serif text-2xl text-ink">Thank you.</p>
        <p className="mt-2 text-cocoa">
          Your message has been sent — the artist will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm text-taupe">
          Name
        </label>
        <input id="name" name="name" required className={field} />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm text-taupe">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={field}
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm text-taupe">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${field} resize-y`}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center bg-ink px-7 py-3 text-sm tracking-wide text-cream transition-colors hover:bg-accent disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "error" && (
        <p className="text-sm text-accent">
          Something went wrong. Please email {site.email} directly.
        </p>
      )}
    </form>
  );
}
