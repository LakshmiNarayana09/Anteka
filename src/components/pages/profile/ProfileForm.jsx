import React from "react";

const ProfileForm = () => {
  return (
    <section>

      <h2 className="text-2xl font-bold text-[#394045] mb-8">
        Personal Information
      </h2>

      <form className="space-y-5">

        <input
          type="text"
          placeholder="Full Name"
          className="w-full h-12 border rounded-full px-5 focus:outline-none focus:border-[#2FD3AE]"
        />


        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          <select className="h-12 border rounded-full px-5 focus:outline-none focus:border-[#2FD3AE]">
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <select className="h-12 border rounded-full px-5 focus:outline-none focus:border-[#2FD3AE]">
            <option>Day</option>

            {[...Array(31)].map((_, i) => (
              <option key={i + 1}>{i + 1}</option>
            ))}
          </select>

          <select className="h-12 border rounded-full px-5 focus:outline-none focus:border-[#2FD3AE]">
            <option>Month</option>

            {[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ].map((month) => (
              <option key={month}>{month}</option>
            ))}
          </select>

          <select className="h-12 border rounded-full px-5 focus:outline-none focus:border-[#2FD3AE]">
            <option>Year</option>

            {Array.from({ length: 70 }, (_, i) => (
              <option key={1955 + i}>{1955 + i}</option>
            ))}
          </select>

        </div>

        

        <input
          type="email"
          placeholder="Email Address"
          className="w-full h-12 border rounded-full px-5 focus:outline-none focus:border-[#2FD3AE]"
        />

        {/* Phone */}

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full h-12 border rounded-full px-5 focus:outline-none focus:border-[#2FD3AE]"
        />

        

        <input
          type="password"
          placeholder="Password"
          className="w-full h-12 border rounded-full px-5 focus:outline-none focus:border-[#2FD3AE]"
        />

        

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full h-12 border rounded-full px-5 focus:outline-none focus:border-[#2FD3AE]"
        />

        <button
          type="submit"
          className="px-10 h-11 rounded-full bg-[#2FD3AE] text-white font-semibold hover:bg-[#27b99a] transition"
        >
          Save Changes
        </button>

      </form>

    </section>
  );
};

export default ProfileForm;