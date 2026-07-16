import React from "react";

const ComparisonTable = () => {
  const medicines = [
    {
      name: "Paracetamol",
      use: "Pain Relief",
      dosage: "500 mg",
      frequency: "Every 6 hrs",
    },
    {
      name: "Ibuprofen",
      use: "Inflammation",
      dosage: "400 mg",
      frequency: "Every 8 hrs",
    },
    {
      name: "Amoxicillin",
      use: "Infection",
      dosage: "250 mg",
      frequency: "3 times/day",
    },
    {
      name: "Vitamin C",
      use: "Supplement",
      dosage: "1000 mg",
      frequency: "Daily",
    },
  ];

  return (
    <div className="my-12 overflow-x-auto">

      <table className="w-full border-collapse rounded-lg overflow-hidden">

        <thead className="bg-[#2FD3AE] text-white">

          <tr>
            <th className="p-4 text-left">Medicine</th>
            <th className="p-4 text-left">Use</th>
            <th className="p-4 text-left">Dosage</th>
            <th className="p-4 text-left">Frequency</th>
          </tr>

        </thead>

        <tbody>

          {medicines.map((item, index) => (
            <tr
              key={index}
              className="border-b even:bg-gray-50"
            >
              <td className="p-4">{item.name}</td>
              <td className="p-4">{item.use}</td>
              <td className="p-4">{item.dosage}</td>
              <td className="p-4">{item.frequency}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default ComparisonTable;