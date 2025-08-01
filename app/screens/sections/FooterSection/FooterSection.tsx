import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";

export default function FooterSection (){
  // Contact information data
  const contactInfo = [
    {
      icon: '/location-icon.svg',
      title: "Address",
      value: "Oxford Ave. Cary, NC 27511",
      bgColor: "bg-[#ff9d0b]",
    },
    {
      icon: '/email-icon.svg',
      title: "Email",
      value: "nwiger@yahoo.com",
      bgColor: "bg-[#ff9d0b]",
    },
    {
      icon: '/sms.icon.svg',
      title: "Phone",
      value: "+537 547-6401",
      bgColor: "bg-[#ff9d0b]",
    },
  ];

  // Footer links data
  const usefulLinks = ["About us", "Contact us", "Gallery", "Blog", "F.A.Q"];
  const vehicleTypes = ["Sedan", "Cabriolet", "Pickup", "Minivan", "SUV"];

  return (
    <footer className=" w-full flex flex-col items-center gap-20 pt-[60px] pb-10 px-[72px] bg-white max-[1100px]:px-[50px] max-[1000px]:py-[40px] max-[680px]:px-[25px] max-[680px]:gap-5">
      <div className="flex flex-col gap-[60px] items-center w-full max-[500px]:gap-[30px]">
        {/* Top section with logo and contact info */}
        <div className="flex w-full gap-[20px]  justify-between items-center max-[1100px]:flex-col max-[1100px]:gap-10">
          {/* Logo */}
          <div className="flex items-center gap-2 mr-[180.33px] max-[1100px]:mr-[0]">
            <div className="relative w-6 h-[25.72px] bg-[url(/group-21.png)] bg-[100%_100%]" />
            <div className="font-['Poppins'] font-semibold text-[#5937e0] text-base leading-[150%] ">
              RENTCARS
            </div>
          </div>
         
         
          {/* Contact information */}
                 <div className="flex justify-between w-full max-[767px]:flex-col max-[767px]:gap-[20px]">
                {contactInfo.map((item, index) => (
            <div key={index} className="flex  items-center gap-3">
              <div
                className={` w-10 h-10 ${item.bgColor} rounded-[50px] flex items-center justify-center `}
              >
                
                  <img className="w-6 h-6" alt="Icon bg" src={item.icon} />
                
              </div>

              <div className="flex flex-col items-start justify-center ">
                <div className="font-['WorkSans'] font-normal text-defaultblack text-base leading-[26px]">
                  {item.title}
                </div>
                <div className="font-['WorkSans'] font-semibold text-defaultblack text-base leading-[26px] ">
                  {item.value}
                </div>
              </div>
            </div>
          ))}
                            </div>
             </div>


        {/* Main footer content */}
        <div className="w-full max-w-[1296px] flex items-start justify-between gap-[20px] max-[1022px]:flex-wrap  max-[767px]:gap-[40px] max-[500px]:gap-[20px]">
          {/* Company description and social media */}
          <div className="flex flex-col w-[280px] max-[800px]:w-[500px] max-[500px]:w-full items-start justify-between h-full">
            <div className="font-['WorkSans'] font-medium text-defaultblack text-[14px] leading-[21px]">
              Faucibus faucibus pellentesque dictum turpis. Id pellentesque
              turpis massa a id iaculis lorem turpis euismod. Purus at quisque
              integer sit. Libero quis sapien tempus pellentesque netus leo
              feugiat augue ut. Sollicitudin vitae dictum sed vulputate.
            </div>

            <div className="flex items-center gap-5 mt-4 max-[550px]:justify-between">
              <img
                className="w-[23.99px] h-6"
                alt="Facebook"
                src="/group-22.png"
              />
                         <div className="relative w-[23.99px] h-6 bg-[url(/vector-326.svg)] bg-black rounded-full">
                <img
                  className="absolute w-3.5 h-[13px] top-[5px] left-[5px]"
                  alt="Instagram"
                  src="/group-24.png"
                />
              </div>
              <div className="relative w-[23.99px] h-6 bg-[url(/vector-348.svg)] bg-black rounded-full">
                <img
                  className="absolute w-[15px] h-3.5 top-[5px] left-[5px]"
                  alt="Twitter"
                  src="/layer1.png"
                />
              </div>
              <img
                className="w-[23.99px] h-6"
                alt="LinkedIn"
                src="/group-23.png"
              />
            </div>
          </div>

          {/* Useful links */}
            <div className="w-full max-w-[520px] max-[1100px]:max-w-[420px] max-[767px]:flex-wrap flex gap-5 justify-between">
                           <div className="flex flex-col w-[180px] items-start gap-6  max-[500px]:gap-3 ">
            <div className="font-['WorkSans'] font-semibold text-defaultblack text-[20px] leading-[100%] max-[640px]:text-[16px]">
              Useful links
            </div>
            <div className="flex flex-col items-start gap-4 w-full  max-[500px]:gap-2">
              {usefulLinks.map((link, index) => (
                <div
                  key={index}
                  className="font-['WorkSans'] font-normal text-defaultblack text-base leading-[26px] cursor-pointer max-[680px]:text-[14px]"
                >
                  {link}
                </div>
              ))}
            </div>
          </div>

          {/* Vehicles */}
          <div className="flex flex-col w-[180px] max-[500px]:w-[100px] items-start gap-6  max-[500px]:gap-3 ">
            <div className="font-['WorkSans'] font-semibold text-defaultblack text-xl leading-[100%] max-[640px]:text-[14px] ">
              Vehicles
            </div>
            <div className="flex flex-col items-start gap-4 w-full  max-[500px]:gap-2">
              {vehicleTypes.map((vehicle, index) => (
                <div
                  key={index}
                  className="font-['WorkSans'] font-normal text-defaultblack text-base leading-[26px] cursor-pointer max-[680px]:text-[14px]"
                >
                  {vehicle}
                </div>
              ))}
            </div>
          </div>
            </div>

          {/* Download App */}
          <div className="flex flex-col w-[180px] items-start gap-6 max-[500px]:w-[100%] max-[500px]:items-center">
            <div className="font-['WorkSans'] font-semibold text-defaultblack text-[20px] leading-[100%]">
              Download App
            </div>
            <div className="flex gap-3 flex-wrap stify-center max-[480px]:space-x-0  max-[480px]:gap-2">
            <button className="flex items-center justify-center gap-2 w-[173px] h-[50px] bg-black border border-white border-opacity-20 rounded-lg p-2 max-[480px]:w-[100%]">
            <img className="h-8 object-contain" alt="Google Play" src="/icon-1.png" />
                 <div className="flex flex-col items-start">
                      <p className="text-white text-xs font-['poppins']">Download on the</p>
                      <h3 className="text-white text-sm font-['poppins']">App Store</h3>
                 </div>
            </button>
            <button className="flex items-center justify-center gap-2 w-[173px] h-[50px] bg-black border border-white border-opacity-20 rounded-lg p-2 max-[480px]:w-[100%] max-[480px]:mt-3">
            <img className="h-8 object-contain" alt="Google Play" src="/icon-2.png" />
                 <div className="flex flex-col items-start">
                      <p className="text-white text-xs font-['poppins']">GET IT ON</p>
                      <h3 className="text-white text-sm font-['poppins']">Google Play</h3>
                 </div>
            </button>
          </div>
          </div>
        </div>
      </div>


      <div className="font-['Inter'] font-normal text-[#00000080] text-sm leading-[26px] max-[500px]:text-[12px]">
        Copyright 2023 ・ Rentcars, All Rights Reserved
      </div>
          
    </footer>
  );
};
