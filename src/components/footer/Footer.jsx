import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-[#0C2D82] via-[#0E7DB2] to-[#2DD4BF] pt-64 sm:pt-60 lg:pt-28 pb-10">


      <div
        className="
          absolute
          left-1/2
          -translate-x-1/2
          -top-44
          sm:-top-36
          lg:-top-12
          w-[92%]
          max-w-6xl
          rounded-md
          bg-white
          px-5
          py-6
          sm:px-8
          sm:py-8
          shadow-2xl
        "
      >
        <h2 className="text-[24px] font-bold text-gray-800 mb-6">
          Have Any Questions?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="
              h-12
              rounded-full
              border
              border-gray-200
              px-5
              outline-none
              focus:border-cyan-500
            "
          />

          <input
            type="tel"
            placeholder="+1 (___) ___-____"
            className="
              h-12
              rounded-full
              border
              border-gray-200
              px-5
              outline-none
              focus:border-cyan-500
            "
          />

          <p
            className="
              text-xs
              text-gray-500
              flex
              items-center
              leading-5
            "
          >
            By clicking the button, you agree to our Personal Data Processing
            Policy.
          </p>

          <button
            className="
              h-12
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              to-teal-400
              font-semibold
              text-white
              transition
              hover:scale-105
            "
          >
            SEND MESSAGE
          </button>
        </div>
      </div>

      

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-[30px]">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-10
            lg:gap-12
          "
        >
          

          <div>
            <h2 className="text-2xl font-bold text-white">
              <span className="text-green-300">+</span> HealthCare
            </h2>

            <p className="mt-2 text-sm text-cyan-100">
              Your trusted online pharmacy.
            </p>

            <p className="mt-8 lg:mt-10 text-xs text-cyan-100">
              © All rights reserved.
            </p>
          </div>

          

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm text-cyan-100">
              <li>About Us</li>
              <li>Delivery</li>
              <li>Pharmacies</li>
              <li>Reviews</li>
              <li>Health Articles</li>
              <li>Licenses</li>
            </ul>
          </div>

          

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Support
            </h3>

            <ul className="space-y-2 text-sm text-cyan-100">
              <li>Feedback</li>
              <li>Advertising</li>
              <li>FAQ</li>
              <li>Vacancies</li>
              <li>User Agreement</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm text-cyan-100">
              <div className="flex items-center gap-3">
                <Mail size={18} className="shrink-0" />
                <span>support@healthcare.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="shrink-0" />
                <span>+1 (800) 777-2233</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0" />

                <span>
                  123 Wellness Street
                  <br />
                  New York, NY 10001
                </span>
              </div>

              

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#"
                  className="
                    rounded-full
                    bg-white/20
                    p-2
                    transition
                    hover:bg-white
                    hover:text-cyan-600
                  "
                >
                  <FaFacebookF size={16} />
                </a>

                <a
                  href="#"
                  className="
                    rounded-full
                    bg-white/20
                    p-2
                    transition
                    hover:bg-white
                    hover:text-cyan-600
                  "
                >
                  <FaInstagram size={16} />
                </a>

                <a
                  href="#"
                  className="
                    rounded-full
                    bg-white/20
                    p-2
                    transition
                    hover:bg-white
                    hover:text-cyan-600
                  "
                >
                  <FaXTwitter size={16} />
                </a>

                <a
                  href="#"
                  className="
                    rounded-full
                    bg-white/20
                    p-2
                    transition
                    hover:bg-white
                    hover:text-cyan-600
                  "
                >
                  <FaLinkedinIn size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;