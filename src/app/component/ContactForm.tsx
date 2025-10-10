"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message sent!\n\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-600"
        required
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your Email"
        className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-600"
        required
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Your Message"
        className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-600 resize-none h-32"
        required
      />
      <button type="submit" className="bg-gray-600 text-white rounded-md py-3 hover:bg-gray-700 transition">
        Send Message
      </button>
    </form>
  );
}
