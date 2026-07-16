import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const tabs = [
  "Overview",
  "Instructions",
  "Variants",
  "Reviews",
  "Delivery",
  "Pickup",
];

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-6">
      
      <div className="hidden md:flex bg-[#F8F9FA] rounded-md overflow-hidden border">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
                      if (tab === "Delivery") {
                        navigate("/delivery");
                        return;
                      }

                      if (tab === "Pickup") {
                        navigate("/pickup");
                        return;
                      }

                      setActiveTab(tab);
                    }}
            className={`flex-1 py-4 text-sm font-medium transition-all border-b-2 ${
              activeTab === tab
                ? "border-[#F5C542] text-gray-900 bg-white"
                : "border-transparent text-gray-500 hover:text-[#2FD3AE]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      
      <div className="md:hidden overflow-x-auto">
        <div className="flex min-w-max gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                        if (tab === "Delivery") {
                          navigate("/delivery");
                          return;
                        }

                        if (tab === "Pickup") {
                          navigate("/pickup");
                          return;
                        }

                        setActiveTab(tab);
                      }}
              className={`px-5 py-3 rounded-md whitespace-nowrap text-sm font-medium transition ${
                activeTab === tab
                  ? "bg-[#2FD3AE] text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;