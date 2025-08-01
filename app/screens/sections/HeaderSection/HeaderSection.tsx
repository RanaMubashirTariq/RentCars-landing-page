'use client'
import { PhoneIcon, Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import React, { useState } from "react";
import  Link  from "next/link";

// Navigation menu items data
const navigationItems = [
  { label: "Home", isActive: false },
  { label: "Vehicles", isActive: true },
  { label: "Details", isActive: false },
  { label: "About Us", isActive: false },
  { label: "Contact Us", isActive: false },
];

export default function HeaderSection () {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="flex w-full items-center justify-between px-[72px] py-[35.14px] bg-transparent relative max-[1100px]:px-[50px] max-[767px]:px-[25px] max-[767px]:py-[20px]">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="relative w-6 h-[25.72px] bg-[url(/group.png)] bg-[100%_100%]" />
        <div className="font-['Poppins'] font-semibold text-[#5937e0] text-base leading-[150%]">
          RENTCARS
        </div>
      </div>

      {/* Navigation - Desktop */}
      <nav className=" custom1020:flex max-[1050px]:hidden">
        <div>
          <ul className="flex items-start gap-5">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <Link href='#' className="inline-flex items-center justify-center px-3 py-1">
                  <span
                    className={`font-['Inter'] cursor-pointer text-[18px] leading-[100%] text-defaultblack ${item.isActive ? "font-bold" : "font-medium"}`}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>


      {/* Contact Info */}
      <div className="flex items-center gap-3 w-[180px] h-10 custom1020:flex max-[1050px]:hidden">
        <div className="relative w-10 h-10 bg-[#5937e0] rounded-[50px] flex items-center justify-center">
          <img src='./phone-icon.svg' className="w-6 h-6" />
        </div>
        <div className="flex flex-col items-start justify-center ">
          <h1 className="font-['WorkSans'] font-normal text-defaultblack text-base leading-[26px] m-0">
            Need help?
          </h1>
          <p className="font-['WorkSans'] font-semibold text-defaultblack text-base leading-[26px] m-0">
            +996 247-1680
          </p>
        </div>
      </div>

       {/*Toggle Mobile Responsive */}       
                <button  className="max-[1050px]:block hidden flex items-center justify-center p-2"
                          onClick={() => setMenuOpen((prev) => !prev)}  aria-label={menuOpen ? "Close menu" : "Open menu"}  >
                          {menuOpen ? <CloseIcon className="w-7 h-7 text-[#5937e0]" /> : <MenuIcon className="w-7 h-7 text-[#5937e0]" />}
              </button>



      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="max-[1050px]:block hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 custom1020:hidden animate-fade-in">
          <div>
            <ul className="flex flex-col items-start gap-2 p-4">
              {navigationItems.map((item, index) => (
                <li key={index}>
                  <Link href='#' className="inline-flex items-center justify-start px-3 py-2 w-full">
                    <span
                      className={`font-['Inter'] text-base leading-[100%] text-defaultblack ${item.isActive ? "font-bold" : "font-medium"}`}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
              <div className="flex items-center gap-3 mt-4">
                <div className="relative w-10 h-10 bg-[#5937e0] rounded-[50px] flex items-center justify-center">
                  <img src='./phone-icon.svg' className="w-6 h-6" />
                </div>
                <div className="flex flex-col items-start justify-center ">
                  <div className="font-['Work_Sans'] font-normal text-defaultblack text-base leading-[26px]">
                    Need help?
                  </div>
                  <div className="font-['Work_Sans'] font-semibold text-defaultblack text-base leading-[26px]">
                    +996 247-1680
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};
