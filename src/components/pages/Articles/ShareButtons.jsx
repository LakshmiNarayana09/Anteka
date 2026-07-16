import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import { FaPinterestP } from "react-icons/fa";

const ShareButtons = () => {
  return (
    <div className="mt-12 flex flex-col md:flex-row md:items-center justify-between gap-5">

      <h3 className="text-xl font-semibold text-[#243B6B]">
        Share this article
      </h3>

      <div className="flex gap-4">

        <button className="w-11 h-11 rounded-full bg-[#1877F2] text-white flex items-center justify-center">
          <FaFacebookF />
        </button>

        <button className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center">
          <FaXTwitter />
        </button>

        <button className="w-11 h-11 rounded-full bg-[#0A66C2] text-white flex items-center justify-center">
          <FaLinkedinIn />
        </button>

        <button className="w-11 h-11 rounded-full bg-[#E60023] text-white flex items-center justify-center">
          <FaPinterestP />
        </button>

      </div>
    </div>
  );
};

export default ShareButtons;