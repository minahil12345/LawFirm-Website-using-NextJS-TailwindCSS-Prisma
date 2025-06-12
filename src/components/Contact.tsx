"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Thank you, ${formData.name.trim() || "client"}! Your consultation request has been received. We will contact you shortly.`
    );
    fetch("/api/sendMail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="max-w-[1080px] mx-auto px-4 py-4">
      <section id="office">
        <h2 className="text-lg font-bold border-l-4 border-black pl-2 mb-4">
          Our Office
        </h2>
        <div className="bg-white rounded-lg p-4 shadow-[0_3px_14px_rgba(0,0,0,0.07)] text-[0.85rem] text-[#222]">
          <p className="my-1 font-semibold">
            <strong>Address:</strong> 742 Grandview Blvd, Suite 210, Springfield, IL 62704
          </p>
          <p className="my-1 font-semibold">
            <strong>Phone:</strong>{" "}
            <a href="tel:+12175551234" className="text-blue-600 hover:underline">
              (217) 555-1234
            </a>
          </p>
          <p className="my-1 font-semibold">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:contact@stonebridgelegallawfirm.com"
              className="text-blue-600 hover:underline"
            >
              contact@stonebridgelegallawfirm.com
            </a>
          </p>
          <p className="my-1 font-semibold">
            <strong>Office Hours:</strong> Mon - Fri: 8:30 AM – 5:30 PM
          </p>
          <div className="mt-4 overflow-hidden rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.1)]">
            <iframe
              title="Our Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3069.9822082375646!2d-89.67698768462187!3d39.7817219794436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8875214818e918bd%3A0xd22f3b573d8a2747!2s742%20Grandview%20Blvd%2C%20Springfield%2C%20IL%2062704%2C%20USA!5e0!3m2!1sen!2sus!4v1687988123456"
              width="100%"
              height="300"
              className="border-0 rounded-lg w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="text-right text-sm mt-1">
              <a
                href="https://maps.google.com/?q=742+Grandview+Blvd,+Springfield,+IL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-[0_3px_14px_rgba(0,0,0,0.07)] p-4 mt-4"
        aria-label="Consultation Request Form"
      >
        <h3 className="text-black mb-3 font-bold text-lg">Request a Consultation</h3>
        <label htmlFor="name" className="block mb-1 font-bold text-[0.9rem] text-black">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          className="w-full p-2 mb-4 border border-gray-400 rounded-md text-[0.9rem]"
        />
        <label htmlFor="email" className="block mb-1 font-bold text-[0.9rem] text-black">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email address"
          className="w-full p-2 mb-4 border border-gray-400 rounded-md text-[0.9rem]"
        />
        <label htmlFor="phone" className="block mb-1 font-bold text-[0.9rem] text-black">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your phone number"
          className="w-full p-2 mb-4 border border-gray-400 rounded-md text-[0.9rem]"
        />
        <label htmlFor="message" className="block mb-1 font-bold text-[0.9rem] text-black">
          Brief Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your legal needs"
          className="w-full p-2 mb-4 border border-gray-400 rounded-md text-[0.9rem]"
        ></textarea>
        <button
          type="submit"
          className="bg-black text-white font-extrabold text-[1rem] py-3 w-full rounded-md transition duration-300 hover:bg-[#222]"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
