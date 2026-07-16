import React from "react";

const ContactCard = ({ icon: Icon, title, children }) => {
  return (
    <div className="bg-white border rounded-xl p-6">

      <div className="flex items-center gap-3 mb-5">

        <div className="w-11 h-11 rounded-full bg-[#2FD3AE]/10 flex items-center justify-center">

          <Icon
            size={20}
            className="text-[#2FD3AE]"
          />

        </div>

        <h3 className="font-bold text-[#394045]">
          {title}
        </h3>

      </div>

      {children}

    </div>
  );
};

export default ContactCard;