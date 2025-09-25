import React from "react";

export default function MobileAppSection  () {


  return (
    <section className="flex  items-center justify-between gap-8 py-[131px] px-[158px] max-[1100px]:py-[80px] max-[1000px]:py-[40px] max-[1300px]:px-[100px] max-[1100px]:px-[50px] max-[767px]:px-[25px] w-full bg-white ">
      <div className="flex flex-col items-start gap-10 w-[536px]  max-[1000px]:items-center max-[1000px]:w-[100%] max-[680px]:gap-5">
        <div className="flex flex-col max-[1000px]:items-center space-y-6">
          <h2 className="text-[50px] w-[313px] max-[1000px]:w-[100%] max-[1000px]:text-center font-bold text-black font-['WorkSans'] leading-[100%] max-[1100px]:text-[36px] max-[767px]:text-[28px] max-[900px]:w-[100%]">
            Download mobile app
          </h2>

          <p className="text-base font-normal text-black/60 m-0 font-['WorkSans'] leading-6 max-[767px]:text-[14px] max-[1000px]:text-center">
            Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus
            turpis nibh placerat massa. Fermentum urna ut at et in. Turpis
            aliquet cras hendrerit enim condimentum. Condimentum interdum risus
            bibendum urna
          </p>
        </div>

        <div className="flex gap-10 flex-wrap stify-center max-[480px]:space-x-0  max-[480px]:gap-2">
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

      <div className="relative w-[427px] h-[527px] max-[1100px]:h-[427px] flex  max-[1000px]:hidden">
              <img src="/group-12.png" className="absolute  left-0  w-full h-full object-contain" alt="" />
              <img src="/group-12.png" className="absolute right-[171px] top-[69px] max-[1100px]:right-[160px] max-[1100px]:top-[50px] z-50 w-full h-full object-contain" alt="" />

      </div>
    </section>
  );
};
