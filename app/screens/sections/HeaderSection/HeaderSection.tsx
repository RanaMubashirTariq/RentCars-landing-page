'use client'
import { PhoneIcon, Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import React, { useState , useEffect} from "react";
import  Link  from "next/link";

// Navigation menu items data
const navigationItems = [
  { label: "Home", id:'home'  },
  { label: "Vehicles",id:'vehicles' },
  { label: "Details", id:'details' },
  { label: "About Us", id:'mobile' },
  { label: "Contact Us", id:'contact' },
];

export default function HeaderSection () {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
 

    const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      setMenuOpen(false); // Close mobile menu
    }
  };



    useEffect(() => {
    const handleScroll = () => {
      const offset = 100; // adjust for header
      for (const item of navigationItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop - offset;
          const bottom = top + section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header className="fixed top-0 left-0 w-full z-51  bg-white px-[150px] max-[1500px]:px-[72px] py-[35.14px]  max-[1100px]:px-[50px] max-[767px]:px-[25px] max-[767px]:py-[20px]">
      {/* Logo */}
               <div className="flex  items-center justify-between relative">
                             <div className="flex items-center gap-2">
        <div className="relative w-6 h-[25.72px] bg-[url(/group.png)] bg-[100%_100%]" />
        <div className="font-['Poppins'] font-semibold text-[#5937e0] text-lg max-[1500px]:text-base leading-[150%]">
          RENTCARS
        </div>
      </div>

      {/* Navigation - Desktop */}
      <nav className=" custom1020:flex max-[1050px]:hidden">
        <div>
          <ul className="flex items-start gap-5">
          {navigationItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleScrollTo(item.id)}
                className={`font-['Inter'] text-[18px] leading-[100%] text-black cursor-pointer ${
                  activeSection === item.id ? "font-bold" : "font-medium"
                }`}
              >
                {item.label}
              </button>
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
          <h1 className="font-['WorkSans'] font-normal text-black text-base leading-[26px] m-0">
            Need help?
          </h1>
          <p className="font-['WorkSans'] font-semibold text-black text-base leading-[26px] m-0">
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
        <div className="max-[1050px]:block hidden absolute top-full right-0 w-full h-[100vh] bg-white shadow-lg z-50 custom1020:hidden animate-fade-in">
          <div>
            <ul className="flex flex-col items-start  gap-2 p-4">
          {navigationItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleScrollTo(item.id)}
                className={`font-['Inter'] text-[18px] leading-[100%] text-defaultblack cursor-pointer ${
                  activeSection === item.id ? "font-bold" : "font-medium"
                }`}
              >
                {item.label}
              </button>
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
               </div>
    </header>
  );
};
