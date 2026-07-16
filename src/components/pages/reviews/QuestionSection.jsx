import React from "react";

const QuestionSection = () => {
  return (
    <section className="mt-16 bg-[#F8F9FA] rounded-xl p-6 md:p-8">

      <h2 className="text-2xl font-bold text-[#394045]">
        Still Have Questions?
      </h2>

      <p className="text-gray-500 mt-2">
        Send us your question and our team will get back to you.
      </p>

      <form className="mt-8 space-y-5">

        <div className="grid md:grid-cols-2 gap-5">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#2FD3AE]"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#2FD3AE]"
          />

        </div>

        <textarea
          rows={6}
          placeholder="Write your question..."
          className="w-full border rounded-lg px-4 py-3 outline-none resize-none focus:border-[#2FD3AE]"
        />

        <button
          className="bg-[#394045] hover:bg-[#2c3135] text-white px-8 py-3 rounded-lg transition"
        >
          Send Question
        </button>

      </form>

    </section>
  );
};

export default QuestionSection;