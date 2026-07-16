import React from "react";

const ContactForm = () => {
  return (
    <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 h-fit">

      <h2 className="text-2xl font-bold text-[#394045] mb-3">
        We'll Call You Back
      </h2>

      <p className="text-gray-500 mb-8 leading-7">
        Leave your contact details and one of our specialists will get in touch
        with you shortly.
      </p>

      <form className="space-y-5">

        <input
          type="text"
          placeholder="Full Name"
          className="w-full h-12 border rounded-full px-5 focus:outline-none focus:border-[#2FD3AE]"
        />

        <input
          type="tel"
          placeholder="+1 (___) ___-____"
          className="w-full h-12 border rounded-full px-5 focus:outline-none focus:border-[#2FD3AE]"
        />

        <textarea
          rows={5}
          placeholder="Write your message..."
          className="w-full border rounded-2xl p-5 resize-none focus:outline-none focus:border-[#2FD3AE]"
        />

        <p className="text-xs text-gray-500 leading-6">
          By submitting this form, you agree to our Privacy Policy and Terms of
          Service.
        </p>

        <button
          type="submit"
          className="w-full h-12 rounded-full bg-[#2FD3AE] text-white font-semibold hover:bg-[#27b79b] transition"
        >
          Request Callback
        </button>

      </form>

    </section>
  );
};

export default ContactForm;