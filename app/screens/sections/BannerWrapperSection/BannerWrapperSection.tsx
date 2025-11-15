import React from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";

export default function BannerWrapperSection  () {
  return (
    <section className="py-[60px] bg-white px-[72px] w-full max-[1100px]:px-[50px] max-[1000px]:py-[40px] max-[767px]:px-[25px]">
      <Card className="bg-[#5937e0] rounded-[20px] overflow-hidden relative">
            <div className="w-full max-w-[1246px] h-[146px] absolute top-[80px] left-[-572px] max-[1100px]:left-[-400px] max-[1100px]:h-[100px] max-[1000px]:top-[20px] max-[1000px]:h-[150px] max-[1000px]:left-[-350px] max-[800px]:h-[100px] max-[800px]:left-[-0px]  max-[500px]:h-[120px] max-[800px]:top-[10px] z-0">
                 <img src="/black-dotted-2.svg" className="w-full h-full object-cover" alt="" />
            </div>
        <CardContent className="z-50 flex items-center justify-between  px-[86px] py-[58px] max-[1100px]:gap-10 max-[1100px]:px-[50px] max-[1000px]:px-[40px] max-[1000px]:py-[40] max-[800px]:flex-col max-[500px]:px-[20px] max-[500px]:py-[20px]">
          <div className="flex flex-col items-start max-w-[756px] max-[800px]:items-center relative z-50">
            <h2 className="text-[50px] h-[160px] max-[1100px]:h-[80px] max-[1000px]:h-auto font-bold text-white font-['WorkSans'] leading-[100%] mb-4 max-[1100px]:text-[36px] max-[767px]:text-[28px] max-[800px]:text-center">
              Enjoy every mile with adorable companionship.
            </h2>

            <p className="text-base font-normal text-white font-['WorkSans'] leading-[100%] mb-[37px] max-w-[550px] max-[800px]:text-center max-[767px]:text-[14px]  max-[500px]:mb-2">
              Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
              bibendum ullamcorper in. Diam tincidunt tincidunt erat
            </p>

            <div className="relative w-[464px] h-[60px] border-none outline-none bg-white rounded-[20px] max-[767px]:rounded-[12px] flex items-center max-[1100px]:w-[350px] max-[500px]:w-[100%] max-[767px]:h-[50px]">
              {/* <span className="absolute left-[25px] font-['Inter',Helvetica] font-semibold text-gray-600 text-base max-[767px]:text-[14px] ">
                City
              </span> */}
              <Input
                className="h-full w-full border-none text-[#6c757d] shadow-none border-none outline-none   font-['Inter'] font-semibold text-gray-600 text-base max-[767px]:text-[14px] "
                placeholder="City"
              />
              <Button className="cursor-pointer absolute right-2.5 max-[767]:right-1 h-10 bg-[#ff9d0b] hover:bg-[#ff9E0c] rounded-xl px-7 max-[767px]:h-[40px] max-[767px]:px-5">
                <span className="font-['Inter'] font-semibold text-white text-base leading-[100%] max-[680px]:text-[14px] ">
                  Search
                </span>
              </Button>
            </div>
          </div>

          <img
            className="w-[380px] h-[380px] max-[1100px]:w-[300px] max-[1100px]:h-[300px] max-[1000px]:w-[250px] max-[1000px]:h-[250px] max-[767px]:w-[200px] max-[767px]:h-[200px]"
            alt="Car illustration"
            src="/car-3--2.svg"
          />
        </CardContent>
      </Card>
    </section>
  );
};
