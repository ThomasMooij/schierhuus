"use client";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emails: string[] = JSON.parse(localStorage.getItem("submittedEmails") || "[]");

    if (emails.includes(formData.email)) {
      setError("This email has already submitted a message.");
      return;
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      alert("Message sent successfully!");
      emails.push(formData.email);
      localStorage.setItem("submittedEmails", JSON.stringify(emails));
      setFormData({ name: "", email: "", message: "" });
      setError("");
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <form className="w-full max-w-md flex flex-col items-center" onSubmit={handleSubmit}>
      <div className="mb-4 w-full">
        {error && <p style={{ color: "red" }}>{error}</p>}
        <label htmlFor="name" className="mb-2 text-white block">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="John Doe"
          required
          className="p-2 bg-transparent border-2 border-gray-500 rounded focus:outline-none focus:border-blue-500 w-full"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 w-full">
        <label htmlFor="email" className="mb-2 text-white block">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="your@email.com"
          required
          className="p-2 bg-transparent border-2 border-gray-500 rounded focus:outline-none focus:border-blue-500 w-full"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 w-full">
        <label htmlFor="message" className="mb-2 text-white block">Message:</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="How can we assist you?"
          rows={4}
          className="p-2 bg-transparent border-2 border-gray-500 rounded focus:outline-none focus:border-blue-500 w-full"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <button
        type="submit"
        className="py-2 px-4 bg-Terracota hover:bg-blue-700 text-white font-bold rounded transition-colors duration-300"
      >
        Send message
      </button>
    </form>
  );
};
