import React, { useState } from "react";
import logo from '../../assets/logo.png'
import { useNavigate } from "react-router-dom";
import {
  MapPinned,
  Menu,
  Heart,
  User,
  Mail,
  Phone,
  Search,
  ShoppingCart,
  Pill,
  PackagePlus,
  Sparkles,
  Droplets,
  Eye,
  Baby,
  BriefcaseMedical,
  PawPrint,
  Stethoscope,
  X,
  ChevronDown,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const navItems = [
  {
    title: "Medicines",
    icon: Pill,
    path: "/medicines",
  },
  {
    title: "Vitamins",
    icon: PackagePlus,
    path: "/select-products-by-condition",
  },
  {
    title: "Beauty",
    icon: Sparkles,
    path: "/blog",
  },
  {
    title: "Hygiene",
    icon: Droplets,
    path: "/select-products-by-condition",
  },
  {
    title: "Contact Lenses",
    icon: Eye,
    path: "/select-products-by-condition",
  },
  {
    title: "Mother & Baby",
    icon: Baby,
    path: "/articles",
  },
  {
    title: "Medical Products",
    icon: BriefcaseMedical,
    path: "/products",
  },
  {
    title: "Pet Care",
    icon: PawPrint,
    path: "/select-products-by-condition",
  },
  {
    title: "Medical Equipment",
    icon: Stethoscope,
    path: "/medicines",
  },
];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
  return (
    <header className="w-full font-sans">

      
      <div className="hidden lg:flex h-10 bg-[#1b1b1b] text-white text-[14px]">

        <div className="max-w-[1440px] mx-auto w-full flex justify-between items-center px-6">

          

          <div className="flex items-center gap-10">

            <div className="flex items-center gap-2 cursor-pointer">

              <MapPinned
                size={15}
                className="text-[#2ED3B7]"
              />

              <span className="text-[#cfcfcf]">
                New York, USA
              </span>

            </div>

            <div className="flex items-center gap-2 cursor-pointer">

              <Menu
                size={15}
                className="text-[#2ED3B7]"
              />

              <span className="text-[#cfcfcf]">
                Service Pages
              </span>

            </div>

          </div>

          

          <div className="flex items-center gap-8">

            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/favorites")}>

              <Heart
                size={15}
                className="text-[#2ED3B7]"
              />

              <span 
                className="text-[#cfcfcf]">
                Favorites
              </span>

            </div>

            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/account")}>

              <User
                size={15}
                className="text-[#2ED3B7]"
              />

              <span 
                className="text-[#cfcfcf]">
                My Account
              </span>

            </div>

          </div>

        </div>

      </div>

      

      <div className="bg-white border-b border-gray-200">

        <div className="max-w-[1440px] mx-auto px-6">

          <div className="min-h-[110px] lg:min-h-[110px] xl:h-[110px] flex flex-wrap xl:flex-nowrap items-center justify-between gap-4 py-4">

            
            <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate("/")}>
                <img
                    src={logo}
                    alt="Pharmacy Online"
                    className="w-[62px] h-[62px] object-contain"
                />

                <div>
                    <h1 className="text-[20px] font-bold text-[#444444] leading-none">
                    Pharmacy<span className="font-normal">.online</span>
                    </h1>

                    <p className="text-[14px] text-[#7A7A7A] mt-1">
                    Your Online Pharmacy
                    </p>
                </div>
            </div>

            

            <div className="hidden xl:flex items-center gap-3">
                {[FaFacebookF, FaInstagram, FaYoutube].map((Icon, index) => (
                    <div
                    key={index}
                    className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-[#34d4bc] hover:text-white duration-300 cursor-pointer"
                    >
                    <Icon size={18} />
                    </div>
                ))}
            </div>

            

            <div className="hidden xl:flex items-center gap-4">

              <Mail
                size={24}
                className="text-[#32D5B9]"
              />

              <div>

                <h3 className="font-bold text-[18px]">

                  INFO@RESTOLL.RU

                </h3>

                <p className="text-gray-500 text-sm">

                  Email us

                </p>

              </div>

            </div>

            

            <div className="hidden md:flex items-center gap-4">

              <Phone
                size={24}
                className="text-[#32D5B9]"
              />

              <div>

                <h3 className="font-bold text-[18px]">

                  8-800-777-22-33

                </h3>

                <p className="text-gray-500 text-sm">

                  24/7 Support

                </p>

              </div>

            </div>

            

            <div className="hidden 2xl:flex items-center gap-4">

              <Phone
                size={24}
                className="text-[#32D5B9]"
              />

              <div>

                <h3 className="font-bold text-[18px]">

                  (800) 223-34-03

                </h3>

                <p className="text-gray-500 text-sm">

                  Online Pharmacy

                </p>

              </div>

            </div>

            

            <div className="flex items-center gap-2 lg:gap-3 xl:gap-4">

                

                <button className="hidden lg:flex w-[52px] h-[52px] rounded-full border items-center justify-center hover:bg-[#34D4BC] hover:text-white duration-300">
                    <Search size={22} />
                </button>

                <button className="hidden md:flex px-8 h-[52px] rounded-full bg-[#35D4BC] text-white font-semibold hover:bg-[#28c3ab] duration-300 items-center">
                    Request Call
                </button>

                <button 
                  onClick={() => navigate("/cart")}
                  className="hidden lg:flex w-[52px] h-[52px] rounded-full border items-center justify-center hover:bg-[#34D4BC] hover:text-white duration-300">
                    <ShoppingCart size={22} />
                </button>

                

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden w-11 h-11 rounded-full border flex items-center justify-center"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

            </div>

          </div>

        </div>

      </div>

      

        <div
        className="
            bg-gradient-to-r
            from-[#0B2D87]
            via-[#155E98]
            to-[#37D5BC]
        "
        >
        <div className="max-w-[1440px] mx-auto px-3 lg:px-4 xl:px-6">

            <nav className="hidden lg:flex items-center justify-center gap-2 xl:gap-5 h-[68px]">

              {navItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <button
                    key={index}
                    onClick={() => navigate(item.path)}
                    className="
                      group
                      flex
                      items-center
                      h-full
                      gap-1 lg:gap-2 xl:gap-3
                      px-1 lg:px-1.5 xl:px-3
                      transition-all
                      duration-300
                    "
                  >
                    <Icon
                      size={22}
                      className="text-white/90 w-4 h-4 xl:w-5 xl:h-5"
                    />

                    <span className="text-[12px] lg:text-[13px] xl:text-[15px] font-semibold whitespace-nowrap">
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </nav>

        </div>
        {menuOpen && (
            <div className="lg:hidden bg-white shadow-xl border-t">

                <div className="px-6 py-6">

                

                <button className="w-full h-12 rounded-full border flex items-center justify-center gap-2 mb-4">
                    <Search size={20} />
                    Search
                </button>

                

                <button className="w-full h-12 rounded-full bg-[#35D4BC] text-white font-semibold mb-6">
                    Request Call
                </button>

                

                <div className="space-y-4 border-b pb-5">

                    <div className="flex items-center gap-3">
                    <Mail className="text-[#35D4BC]" size={20} />
                    INFO@RESTOLL.RU
                    </div>

                    <div className="flex items-center gap-3">
                    <Phone className="text-[#35D4BC]" size={20} />
                    8-800-777-22-33
                    </div>

                </div>

                

                <div className="mt-5">

                    {navItems.map((item, index) => {

                    const Icon = item.icon;

                    return (

                        <button
                          key={index}
                          onClick={() => {
                            navigate(item.path);
                            setMenuOpen(false); 
                          }}
                          className="w-full flex justify-between items-center py-4 border-b"
                        >

                        <div className="flex items-center gap-3">

                            <Icon
                            size={20}
                            className="text-[#0B2D87]"
                            />

                            <span className="font-medium">
                            {item.title}
                            </span>

                        </div>

                        <ChevronDown size={18} />

                        </button>

                    );

                    })}

                </div>

                

                <div className="flex gap-3 mt-6">

                    {[FaFacebookF, FaInstagram, FaYoutube].map((Icon, index) => (

                    <div
                        key={index}
                        className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-[#35D4BC] hover:text-white duration-300 cursor-pointer"
                    >
                        <Icon size={18} />
                    </div>

                    ))}

                </div>

                </div>

            </div>
        )}
        </div>
    </header>
  );
}

export default Navbar;