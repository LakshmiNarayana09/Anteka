import React from "react";
import {
  Pill,
  Syringe,
  Droplets,
  ArrowUpDown,
} from "lucide-react";

const catalog = [
  {
    title: "External Medicines",
    icon: <Droplets size={28} className="text-[#2FD3AE]" />,
  },
  {
    title: "Syrups, Drops, Suspensions",
    icon: <Syringe size={28} className="text-[#2FD3AE]" />,
  },
  {
    title: "Tablets & Capsules",
    icon: <Pill size={28} className="text-[#2FD3AE]" />,
  },
  {
    title: "External Medicines",
    icon: <Droplets size={28} className="text-[#2FD3AE]" />,
  },
  {
    title: "Tablets & Capsules",
    icon: <Pill size={28} className="text-[#2FD3AE]" />,
  },
  {
    title: "External Medicines",
    icon: <Droplets size={28} className="text-[#2FD3AE]" />,
  },
  {
    title: "External Medicines",
    icon: <Droplets size={28} className="text-[#2FD3AE]" />,
  },
  {
    title: "Syrups, Drops, Suspensions",
    icon: <Syringe size={28} className="text-[#2FD3AE]" />,
  },
];

const brands = [
  "Smeg",
  "Abat",
  "Comenda",
  "Kocateq",
  "Apach",
  "Modular",
  "Compack",
  "Apach",
  "Grodtorgmash",
  "Dihr",
  "Elettrobar",
  "Silanos",
  "Electrolux",
  "Vortmax",
  "EKSI",
  "Electrolux",
  "Mach Easy",
  "Adler",
  "Solis",
  "Amika",
  "Fagor",
  "ATA",
  "Kromo",
  "Fagor",
  "Krupps",
  "MEC",
  "Meiko",
  "Omniwash",
  "Tatra",
  "Viatto",
  "Winterhalter",
  "Tatra",
];

const ProductsHeader = () => {
  return (
    <div className="space-y-8">

      <div>
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-700 mb-4">
          Catalog
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {catalog.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-3 border rounded-md bg-white hover:shadow-sm transition"
            >
              {item.icon}

              <span className="text-sm text-gray-700">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      

      <div>
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-700 mb-4">
          Popular Brands
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-y-2 text-sm text-gray-500">
          {brands.map((brand, index) => (
            <span
              key={index}
              className="hover:text-[#2FD3AE] cursor-pointer transition"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>

      

      <div className="bg-gray-50 rounded-md border px-5 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div className="flex items-center gap-6 flex-wrap">
          <span className="text-sm font-bold uppercase tracking-wide">
            Sort By:
          </span>

          <button className="flex items-center gap-2 text-[#2FD3AE] text-sm font-medium">
            <ArrowUpDown size={16} />
            Price
          </button>

          <button className="text-sm text-gray-500 hover:text-[#2FD3AE]">
            Popularity
          </button>
        </div>

        

        <div className="flex items-center gap-2">
          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              className={`w-8 h-8 rounded text-sm ${
                page === 1
                  ? "bg-[#2FD3AE] text-white"
                  : "border hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}

          <span className="px-2 text-gray-500">...</span>

          <button className="w-8 h-8 border rounded text-sm hover:bg-gray-100">
            32
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsHeader;