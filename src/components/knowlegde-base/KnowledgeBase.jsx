import React from "react";
import knowledgeData from "./knowledgeData";
import KnowledgeCard from "./KnowlegdeCard";

function KnowledgeBase() {
  const medicines = knowledgeData.find((item) => item.id === 1);
  const vitamins = knowledgeData.find((item) => item.id === 2);
  const medicalEquipment = knowledgeData.find((item) => item.id === 9);

  
  const rightCards = knowledgeData.filter(
    (item) => item.id >= 3 && item.id <= 8
  );

  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            xl:grid-cols-[360px_360px_1fr]
            gap-6
            lg:gap-8
          "
        >
          

          <KnowledgeCard category={medicines} />

          
          <div
            className="
              flex
              flex-col
              gap-8
              lg:gap-12
              xl:gap-28
            "
          >
            <KnowledgeCard category={vitamins} />

            <KnowledgeCard category={medicalEquipment} />
          </div>

          

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-2
              gap-6
              lg:gap-8
            "
          >
            {rightCards.map((category) => (
              <KnowledgeCard
                key={category.id}
                category={category}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default KnowledgeBase;