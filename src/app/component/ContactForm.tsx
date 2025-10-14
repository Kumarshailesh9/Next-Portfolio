"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    const res = await fetch("/api/sendMail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);
    if (res.ok) {
      setSuccess("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setSuccess("❌ Failed to send message. Try again later.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-2xl p-8 max-w-lg mx-auto space-y-6 border border-gray-100"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Get in Touch
      </h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        value={formData.name}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        value={formData.email}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows={4}
        required
        value={formData.message}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full background1 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {success && (
        <p className="text-center text-sm text-gray-700 mt-2">{success}</p>
      )}
    </form>
  );
}
