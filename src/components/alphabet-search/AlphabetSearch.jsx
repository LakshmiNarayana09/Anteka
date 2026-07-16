import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { englishAlphabet, numbers } from "./alphabetData";

function AlphabetSearch() {
  const navigate = useNavigate();

  const [activeLetter, setActiveLetter] = useState("A");

  return (
    <section className="bg-white py-16 lg:py-20">

      <div className="max-w-[1440px] mx-auto px-5 lg:px-8">

        <div className="flex flex-wrap items-center gap-4 lg:gap-8">

          <h2
            className="
              text-[#333333]
              text-[28px]
              lg:text-[34px]
              font-bold
              leading-none
            "
          >
            Browse by Alphabet
          </h2>

          <button
            onClick={() => navigate("/select-products-by-condition")}
            className="
              text-[16px]
              sm:text-[17px]
              lg:text-[18px]
              font-medium
              text-[#35D5BC]
              transition-all
              duration-300
              hover:text-[#28c5ae]
              relative
              z-10
            "
          >
            Browse Products by Condition
          </button>
        </div>

        

        <div className="flex justify-between items-start mt-8">

          
          <div className="flex-1 pr-10">

            <div className="flex flex-wrap gap-x-3 gap-y-4">

              {englishAlphabet.map((letter) => (

                <button
                  key={letter}
                  onClick={() => setActiveLetter(letter)}
                  className={`
                    w-10
                    h-10
                    rounded-[4px]
                    text-[14px]
                    font-semibold
                    transition-all
                    duration-300
                    ${
                      activeLetter === letter
                        ? "bg-white text-[#35D5BC] shadow-md"
                        : "text-[#666666] hover:text-[#35D5BC]"
                    }
                  `}
                >
                  {letter}
                </button>

              ))}

            </div>


            <div className="flex gap-8 mt-7">

              {numbers.map((number) => (

                <button
                  key={number}
                  className="
                    text-[#666666]
                    text-[14px]
                    font-semibold
                    hover:text-[#35D5BC]
                    transition-all
                  "
                >
                  {number}
                </button>

              ))}

            </div>

          </div>


          <div
            className="
              hidden
              lg:flex
              items-center
              justify-center
              w-[260px]
              h-[170px]
              shrink-0
              select-none
            "
          >

            <h1
              className="
                text-[150px]
                xl:text-[165px]
                font-bold
                leading-none
                text-[#E5F8F4]
            "
            >
              A-Z
            </h1>

          </div>

        </div>

        

        <div className="flex justify-center lg:hidden mt-10">

          <h2
            className="
              text-[70px]
              sm:text-[90px]
              font-bold
              text-[#E5F8F4]
              leading-none
              select-none
            "
          >
            A-Z
          </h2>

        </div>

      </div>
    </section>
  );
}

export default AlphabetSearch;