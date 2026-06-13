"use client";

import { useState } from "react";
import { site } from "@/app/lib/site";

type Status = "idle" | "sent";

const field =
  "w-full border border-line bg-white px-4 py-3 text-cocoa outline-none transition-colors placeholder:text-taupe focus:border-accent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`Enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    // Open the visitor's email client with the message pre-filled
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="border border-line bg-paper p-8 text-center">
        <p className="font-serif text-2xl text-ink">Almost there.</p>
        <p className="mt-2 text-cocoa">
          Your email app should have opened with the message ready — just press
          send. If nothing opened, email{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-accent underline transition-colors hover:text-ink"
          >
            {site.email}
          </a>{" "}
          directly.
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
        className="inline-flex items-center bg-ink px-7 py-3 text-sm tracking-wide text-cream transition-colors hover:bg-accent"
      >
        Send message
      </button>
    </form>
  );
}
