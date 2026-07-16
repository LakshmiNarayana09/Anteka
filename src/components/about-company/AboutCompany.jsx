import React from "react";
import { Circle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import companyData from "./companyData";

function AboutCompany({ title }) {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16 xl:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2
          className="
            text-[#2D2D2D]
            text-[28px]
            sm:text-[34px]
            md:text-[38px]
            lg:text-[46px]
            font-bold
            leading-tight
            mb-10
            md:mb-12
            lg:mb-14
          "
        >
          {title}
        </h2>

        
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
            md:gap-10
            xl:gap-12
          "
        >
          
          <div className="space-y-8 lg:space-y-10">
            {companyData.left.map((text, index) => (
              <p
                key={index}
                className="
                  text-[#555555]
                  text-[16px]
                  sm:text-[17px]
                  lg:text-[18px]
                  leading-8
                  lg:leading-9
                "
              >
                {text}
              </p>
            ))}
          </div>

          
          <div className="space-y-8 lg:space-y-10">
            {companyData.center.map((text, index) => (
              <div
                key={index}
                className="
                  flex
                  items-start
                  gap-3
                  sm:gap-4
                "
              >
                <Circle
                  size={10}
                  className="
                    mt-3
                    shrink-0
                    fill-[#35D5BC]
                    text-[#35D5BC]
                  "
                />

                <p
                  className="
                    text-[#555555]
                    text-[16px]
                    sm:text-[17px]
                    lg:text-[18px]
                    leading-8
                    lg:leading-9
                  "
                >
                  {text}
                </p>
              </div>
            ))}
          </div>

          
          <div className="space-y-8 lg:space-y-10 md:col-span-2 xl:col-span-1">
            {companyData.right.map((text, index) => (
              <p
                key={index}
                className="
                  text-[#555555]
                  text-[16px]
                  sm:text-[17px]
                  lg:text-[18px]
                  leading-8
                  lg:leading-9
                "
              >
                {text}
              </p>
            ))}
          </div>
        </div>

        
        <div
          className="
            mt-14
            lg:mt-20
            rounded-[10px]
            overflow-hidden
            bg-gradient-to-r
            from-[#0D2D87]
            via-[#1F8FA8]
            to-[#35D5BC]
            px-5
            py-6
            sm:px-6
            sm:py-7
            lg:px-12
            lg:py-10
            shadow-[0_20px_50px_rgba(0,0,0,0.12)]
          "
        >
          <div
            className="
              flex
              flex-col
              md:flex-row
              items-start
              md:items-center
              gap-6
              lg:gap-8
            "
          >
            
            <div
              className="
                w-14
                h-14
                sm:w-16
                sm:h-16
                rounded-full
                border-2
                border-white/70
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              <span
                className="
                  text-white
                  text-[30px]
                  sm:text-[34px]
                  font-bold
                  leading-none
                "
              >
                !
              </span>
            </div>

            
            <p
              className="
                text-white
                text-[16px]
                sm:text-[17px]
                lg:text-[20px]
                leading-8
                lg:leading-9
                font-medium
              "
            >
              {companyData.highlight}
            </p>
          </div>
        </div>

        
        <div className="mt-12 lg:mt-16">
          <p
            className="
              text-[#555555]
              text-[16px]
              sm:text-[17px]
              lg:text-[18px]
              leading-8
              lg:leading-9
            "
          >
            {companyData.description}
          </p>

          
          <button
            onClick={() => navigate("/about")}
            className="
              mt-8
              lg:mt-10
              inline-flex
              items-center
              gap-2
              sm:gap-3
              text-[#35D5BC]
              text-[16px]
              sm:text-[17px]
              lg:text-[18px]
              font-bold
              uppercase
              tracking-wide
              transition-all
              duration-300
              hover:gap-5
            "
          >
            <span className="text-[20px] sm:text-[22px]">»</span>
            Show Full Text
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutCompany;