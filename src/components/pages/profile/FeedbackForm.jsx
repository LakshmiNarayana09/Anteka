import React from "react";
import feedbackFields from "./feedbackFields";

const FeedbackForm = () => {
  return (
    <section>

      <h2 className="text-2xl font-bold text-[#394045] mb-6">
        Feedback
      </h2>

      <div className="bg-white border rounded-xl shadow-sm p-8">

        <p className="text-gray-500 leading-7 mb-6">
          We'd love to hear your experience. Send us your suggestions,
          questions, or feedback using the form below.
        </p>

        <form className="space-y-5">

          {feedbackFields.map((field) => (
            <input
              key={field.id}
              type={field.type}
              placeholder={field.placeholder}
              className="w-full h-12 border rounded-full px-5 focus:outline-none focus:border-[#2FD3AE]"
            />
          ))}

          <textarea
            rows={5}
            placeholder="Write your message..."
            className="w-full border rounded-2xl p-5 resize-none focus:outline-none focus:border-[#2FD3AE]"
          />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-sm text-gray-500">
              By submitting this form you agree to our privacy policy.
            </p>

            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-[#2FD3AE] text-white font-semibold hover:bg-[#25b595] transition"
            >
              Send Feedback
            </button>

          </div>

        </form>

      </div>

    </section>
  );
};

export default FeedbackForm;