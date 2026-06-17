'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setStatus("success");
      (e.target as HTMLFormElement).reset(); // Clear the form
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-blue-900/30 backdrop-blur border border-blue-500/30 relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-white-500 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-20 transition duration-500 blur"></div>
      <div className="relative space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-400">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required
            className="w-full bg-blue-900/20 backdrop-blur border border-blue-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-300 transition-colors text-white placeholder:text-slate-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-400">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your email"
            required
            className="w-full bg-blue-900/20 backdrop-blur border border-blue-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-300 transition-colors text-white placeholder:text-slate-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-slate-400">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message..."
            required
            rows={4}
            className="w-full bg-blue-900/20 backdrop-blur border border-blue-500/20 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-300 transition-colors text-white h-32 resize-none placeholder:text-slate-500"
          />
        </div>
        
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-blue-500 text-white font-bold py-4 rounded-lg hover:bg-blue-400 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed shadow-lg shadow-blue-500/30"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-center text-sm">
            Message sent successfully!
          </div>
        )}
        {status === "error" && (
          <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-center text-sm">
            Something went wrong. Please try again.
          </div>
        )}
      </div>
    </form>
  );
}