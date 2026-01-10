"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactSection() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Header />

      {/* ===================== */}
      {/* CONTACT BANNER */}
      {/* ===================== */}
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        <Image
          src="/frame.png"
          alt="Banner"
          fill
          priority
          className="object-contain"
        />

        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="
              text-[5rem] md:text-[20rem]
              font-black
              text-transparent
              tracking-tight
              select-none
            "
            style={{ WebkitTextStroke: "1px white" }}
          >
            Contact
          </h1>
        </div>
      </section>

      {/* ===================== */}
      {/* CONTACT FORM */}
      {/* ===================== */}
      <section className="relative bg-black py-24 px-6">
        <div className="mx-auto max-w-xl flex flex-col items-center">
          <p className="mb-10 text-3xl text-center">
            <span className="text-[#F2360C]">Let’s create</span>{" "}
            <span className="text-white">beauty together</span>
          </p>

          <form
            className="w-full space-y-4"
            onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              setLoading(true);

              const form = e.currentTarget;
              const formData = new FormData(form);

              const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  name: formData.get("name"),
                  email: formData.get("email"),
                  phone: formData.get("phone"),
                  message: formData.get("message"),
                }),
              });

              setLoading(false);

              if (res.ok) {
                setShowSuccess(true);
                form.reset();
              }
            }}
          >
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="contact-input"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              className="contact-input"
              required
            />

            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              className="contact-input"
            />

            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              className="contact-input resize-none"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="
                w-full mt-4
                rounded-xl
                bg-[#F2360C]
                py-4
                font-medium
                text-black
                transition
                hover:brightness-110
                disabled:opacity-50
              "
            >
              {loading ? "Sending..." : "Talk to me"}
            </button>
          </form>
        </div>
      </section>

      {/* ===================== */}
      {/* SUCCESS MODAL */}
      {/* ===================== */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowSuccess(false)}
          />

          <div className="relative z-10 w-[90%] max-w-md rounded-2xl bg-[#0f0f0f] p-8 text-center shadow-2xl">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#F2360C]/20">
                    <Image
  src="/favicon.ico"
  alt="Success"
  width={28}
  height={28}
  className="object-contain"
/>

            </div>

            <h3 className="mb-2 text-2xl font-semibold text-white">
              Message sent!
            </h3>

            <p className="mb-6 text-sm text-white/70">
              Thank you for reaching out. I’ll get back to you soon.
            </p>

            <button
              onClick={() => setShowSuccess(false)}
              className="w-full rounded-xl bg-[#F2360C] py-3 font-medium text-black transition hover:brightness-110"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
  