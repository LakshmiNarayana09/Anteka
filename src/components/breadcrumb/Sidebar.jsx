import React from 'react';
import Category from './Category'

const categories = [
  "Pregnancy & Gynecology",
  "Allergy",
  "Anesthesia",
  "Antibiotics",
  "Blood Disorders",
  "Pain & Fever",
  "Hemorrhoids",
  "Eye Care",
  "Parasites",
  "Homeopathy",
  "Diabetes",
  "Diagnostic Products",
  "Respiratory System",
  "Stomach & Liver",
];

const Sidebar = () => {
  return (
    <aside
      className="
      w-full
      lg:w-[280px]
      bg-white
      rounded-md
      border
      border-gray-200
      p-5
      "
    >
      <h3
        className="
        text-sm
        font-bold
        uppercase
        tracking-[0.2em]
        text-gray-700
        mb-5
        "
      >
        Categories
      </h3>
      <Category categories={categories} />
    </aside>
  );
};

export default Sidebar;