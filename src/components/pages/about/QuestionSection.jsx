import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const QuestionSection = () => {
  return (
    <section className="py-20">

      <div className="bg-[#F8F9FB] rounded-2xl p-6 md:p-10">

        <div className="grid lg:grid-cols-2 gap-12">

          

          <div>

            <span className="text-[#2FD3AE] font-semibold uppercase tracking-widest">
              Contact Us
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#394045] mt-4">
              Have Questions?
            </h2>

            <p className="text-gray-600 leading-8 mt-6">
              We'd love to hear from you. If you have any questions about
              our products, services, or orders, simply fill out the form
              and our team will respond as soon as possible.
            </p>

            <div className="space-y-5 mt-10">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#2FD3AE] flex items-center justify-center">
                  <Phone size={20} className="text-white" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <h4 className="font-semibold">+1 (555) 123-4567</h4>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#2FD3AE] flex items-center justify-center">
                  <Mail size={20} className="text-white" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <h4 className="font-semibold">
                    support@pharmacy.com
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#2FD3AE] flex items-center justify-center">
                  <MapPin size={20} className="text-white" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <h4 className="font-semibold">
                    25 Healthcare Street, New York
                  </h4>
                </div>
              </div>

            </div>

          </div>

          

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:border-[#2FD3AE]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:border-[#2FD3AE]"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:border-[#2FD3AE]"
            />

            <textarea
              rows={6}
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-5 py-3 resize-none focus:outline-none focus:border-[#2FD3AE]"
            />

            <button
              type="submit"
              className="bg-[#2FD3AE] hover:bg-[#28bea0] transition text-white px-8 py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default QuestionSection;