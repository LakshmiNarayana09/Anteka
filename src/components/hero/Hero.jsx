import React from 'react'
import heroImage from '../../assets/hero/hero-img.png'
import promoImage from "../../assets/hero/promo-img.png";
import product1 from "../../assets/hero/product1.png";
import product2 from "../../assets/hero/product2.png";
import product3 from "../../assets/hero/product3.png";
import { useNavigate } from "react-router-dom";


const products = [
  {
    image: product1,
    title: "Nature's Beauty Hair, Skin & Nails Capsules (60)",
    price: "$24.99",
  },
  {
    image: product2,
    title: "Cold & Flu Relief Tablets",
    price: "$14.99",
  },
  {
    image: product3,
    title: "Smoking Cessation Tablets",
    price: "$44.99",
  },
];


function Hero() {

  const navigate = useNavigate();

  return (
    <section className="bg-[#F7FCFD] py-8 sm:py-10 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            gap-8
            xl:gap-8
            items-start
          "
        >


          <div className="flex flex-col justify-center order-1">
            <h1
              className="
                text-[#0B2D87]
                text-[34px]
                sm:text-[42px]
                lg:text-[56px]
                leading-tight
                font-bold
              "
            >
              Oral-B Vitality
            </h1>

            <h2
              className="
                text-[#0B2D87]
                text-[24px]
                sm:text-[30px]
                lg:text-[42px]
                leading-tight
                font-light
                mt-2
              "
            >
              Electric Toothbrush
            </h2>

            <p
              className="
                mt-8
                lg:mt-10
                max-w-[540px]
                text-[#7D94A5]
                text-[16px]
                sm:text-[17px]
                lg:text-[18px]
                leading-8
                lg:leading-9
              "
            >
              Clinically proven to remove more plaque than
              a regular manual toothbrush while providing
              a gentle and comfortable brushing experience
              for everyday use.
            </p>

            <button
              onClick={() => {
                console.log("clicked");
                navigate(`/products`);
              }}
              className="
                mt-8
                lg:mt-12
                w-fit
                px-8
                lg:px-10
                h-[56px]
                lg:h-[64px]
                rounded-full
                bg-[#0B2D87]
                text-white
                font-semibold
                text-[16px]
                lg:text-[18px]
                hover:bg-[#08246D]
                duration-300
              "
            >
              Shop Now →
            </button>

          </div>


          <div className="flex justify-center order-2">

            <img
              src={heroImage}
              alt="Oral B"
              className="
                w-full
                max-w-[280px]
                sm:max-w-[340px]
                lg:max-w-[420px]
                object-contain
              "
            />

          </div>


            <div className="flex justify-center xl:justify-start order-3">
              <div
                className="
                  relative
                  w-full
                  max-w-[380px]
                  h-[430px]
                  sm:h-[470px]
                  lg:h-[520px]
                  rounded-[12px]
                  bg-[#F85B79]
                  overflow-hidden
                  flex
                  flex-col
                  items-center
                  px-6
                  sm:px-8
                  pt-8
                  sm:pt-10
                  shadow-xl
                "
              >
                

                <p
                  className="
                    text-white/90
                    text-[16px]
                    sm:text-lg
                    text-center
                  "
                >
                  Daily Face Moisturizing Cream
                </p>

                <h2
                  className="
                    text-white
                    font-bold
                    text-[42px]
                    sm:text-[48px]
                    lg:text-[56px]
                    leading-none
                    mt-2
                    text-center
                  "
                >
                  Nivea Care
                </h2>

                

                <div className="flex-1 flex items-center justify-center w-full">
                  <img
                    src={promoImage}
                    alt="Nivea Care"
                    className="
                      w-full
                      max-w-[240px]
                      sm:max-w-[280px]
                      lg:max-w-[310px]
                      object-contain
                      drop-shadow-2xl
                    "
                  />
                </div>

                

                <button
                  className="
                    absolute
                    bottom-6
                    sm:bottom-8
                    lg:bottom-10
                    left-1/2
                    -translate-x-1/2
                    w-[200px]
                    sm:w-[220px]
                    lg:w-[235px]
                    h-[54px]
                    lg:h-[60px]
                    rounded-full
                    bg-[#F05A3A]
                    hover:bg-[#e64d2d]
                    duration-300
                    text-white
                    font-semibold
                    text-[16px]
                    lg:text-[17px]
                    shadow-lg
                  "
                >
                  Shop Now →
                </button>
              </div>
            </div>

            

            <div className="flex flex-col gap-5 lg:gap-6 order-4">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="
                    relative
                    bg-white
                    rounded-xl
                    p-4
                    lg:p-5
                    shadow-sm
                    hover:shadow-xl
                    transition-all
                    duration-300
                    flex
                    items-center
                    gap-4
                    lg:gap-5
                  "
                >
                  

                  <div
                    className="
                      absolute
                      top-4
                      left-[72px]
                      sm:left-20
                      bg-[#F05A3A]
                      text-white
                      text-[11px]
                      lg:text-[12px]
                      font-semibold
                      px-3
                      py-1
                      rounded-full
                    "
                  >
                    HOT
                  </div>

                  

                  <div
                    className="
                      w-[80px]
                      h-[80px]
                      sm:w-[90px]
                      sm:h-[90px]
                      lg:w-[95px]
                      lg:h-[95px]
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full object-contain"
                    />
                  </div>

                  

                  <div className="flex-1 min-w-0">
                    <h3
                      className="
                        text-[#4A4A4A]
                        text-[16px]
                        sm:text-[17px]
                        lg:text-[18px]
                        leading-6
                        lg:leading-7
                        font-medium
                      "
                    >
                      {product.title}
                    </h3>

                    <div
                      className="
                        flex
                        flex-wrap
                        items-center
                        justify-between
                        gap-2
                        mt-4
                      "
                    >
                      <span
                        className="
                          text-[#2C2C2C]
                          text-[24px]
                          sm:text-[28px]
                          lg:text-[32px]
                          font-bold
                        "
                      >
                        {product.price}
                      </span>

                      <div className="flex gap-1 text-[#FFC107] text-base lg:text-lg">
                        ★★★★★
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  )
}

export default Hero;

                                


