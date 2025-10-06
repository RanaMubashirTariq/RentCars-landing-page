import React from "react";
import Link from "next/link";

export default function MobileAppSection  () {


  return (
    <section className="flex  items-center justify-between max-[767px]:flex-col gap-8 py-[131px] px-[230px] max-[1500px]:px-[158px] max-[1100px]:py-[80px] max-[1000px]:py-[40px] max-[1300px]:px-[100px] max-[1100px]:px-[50px] max-[767px]:px-[25px] w-full bg-white ">
      <div className="flex flex-col items-start gap-10 w-[536px] max-[767px]:items-center max-[767px]:w-[100%]   max-[1000px]:w-[50%] max-[680px]:gap-5">
        <div className="flex flex-col max-[767px]:items-center  space-y-6">
          <h2 className="text-[50px] w-[313px] max-[1000px]:w-[100%]  font-bold text-black max-[767px]:text-center font-['WorkSans'] leading-[100%] max-[1100px]:text-[36px] max-[767px]:text-[28px] max-[900px]:w-[100%]">
            Download mobile app
          </h2>

          <p className="text-base font-normal text-black/60 m-0 font-['WorkSans'] leading-6 max-[767px]:text-[14px] max-[767px]:text-center">
            Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus
            turpis nibh placerat massa. Fermentum urna ut at et in. Turpis
            aliquet cras hendrerit enim condimentum. Condimentum interdum risus
            bibendum urna
          </p>
        </div>

        <div className="flex gap-10 max-[1000px]:gap-5 stify-center max-[480px]:space-x-0  max-[480px]:gap-2">
        <button className="">
            <Link href='https://www.apple.com/app-store/'><img className="w-[173px] h-[52px] object-contain" alt="Google Play" src="/App-Store.png" /></Link>
            </button>
            <button className="">
            <Link href='https://play.google.com/store'><img className="w-[173px] h-[52px] object-contain" alt="Google Play" src="/Google-Play.png" /></Link>
            </button>
          </div>
      </div>

      <div className="relative w-[427px] h-[527px] max-[767px]:h-[300px] max-[1100px]:h-[400px] max-[767px]:w-[350px] flex ">
              <img src="/Group-12.png" className="absolute  left-0  w-full h-full object-contain" alt="" />
              <img src="/Group-12.png" className="absolute right-[171px] top-[69px] max-[1100px]:right-[160px] max-[1000px]:right-[120px] max-[767px]:right-[100px] max-[1100px]:top-[50px] z-50 w-full h-full object-contain" alt="" />

      </div>
    </section>
  );
};
