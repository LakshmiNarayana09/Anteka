import React from "react";
import profileMenu from "./profileMenu";

const ProfileSidebar = () => {
  return (
    <aside className="w-full lg:w-[260px]">

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">

        <h3 className="px-6 py-5 font-bold text-[#394045] border-b">
          My Account
        </h3>

        {profileMenu.map((item) => (
          <button
            key={item.id}
            className={`w-full text-left px-6 py-4 transition border-b last:border-b-0 ${
              item.active
                ? "bg-[#2FD3AE] text-white font-semibold"
                : "hover:bg-gray-50 text-gray-700"
            }`}
          >
            {item.title}
          </button>
        ))}

      </div>
    </aside>
  );
};

export default ProfileSidebar;