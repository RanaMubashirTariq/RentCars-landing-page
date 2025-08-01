'use client'
import { useEffect, useRef, useState } from 'react';
import { CarIcon, GaugeIcon } from "lucide-react";
import { Card, CardContent } from "../../../components/ui/card";

// Define the data for the stats cards

type CounterProps = {
  targetNumber: number;
  duration?: number; // in ms
  className?: string;
};

const Counter: React.FC<CounterProps> = ({ targetNumber, duration = 2000, className }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          animateCount();
          hasAnimated.current = true;
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const animateCount = () => {
    let start = 0;
    const startTime = performance.now();

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * targetNumber);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setCount(targetNumber);
      }
    };

    requestAnimationFrame(update);
  };

  const formatWithCommas = (num: number) => num.toLocaleString();

  return (
    <div ref={ref} className={className}>
      {formatWithCommas(count)}
    </div>
  );
};





const statsData = [
  {
    icon: null,
    value: "540+",
    label: "Cars",
    iconSrc: "/car-7--1.svg",
  },
  {
    icon: null,
    value: "20k+",
    label: "Customers",
    iconSrc: "/icon.png",
  },
  {
    icon: null,
    value: "25+",
    label: "Years",
    iconSrc: "/group-11.png",
  },
  {
    icon: null,
    value: "20m+",
    label: "Miles",
    iconSrc: "/speedometer-1.svg",
  },
];

export default function HeroSection  () {
  return (
    <section className="relative flex flex-col items-center py-[60px] px-[72px] w-full gap-2.5 max-[1100px]:px-[50px] max-[1000px]:py-[40px] max-[680px]:px-[25px] ">
         <img src="/black-dotted.svg" className=" absolute left-[75px] max-[1100px]:left-[50px] z-10 top-[60px]  transform-[-18.66deg]  max-[1100px]:hidden" alt="" />
      <div className="flex flex-col items-center relative w-full h-[486px] max-[1100px]:h-auto rounded-[20px] bg-[#5937e0] px-[72px] pt-[60px] pb-[125px] gap-20 overflow-hidden max-[1100px]:px-[40px] max-[1100px]:pt-[40px] max-[1100px]:pb-[100px] max-[1000px]:gap-10 max-[680px]:px-[20px] max-[680px]:py-[20px] max-[680px]:gap-5">
        {/* Background image */}
        <img  className="absolute  left-[20%] top-[15%] max-[1100px]:left-[15%]  max-[1100px]:top[20%] max-[1100px]:-translate-x-1/15 max-[1100px]:-translate-y-1/20 max-[1000px]:left-[10%] max-[1000px]:top-[30%] max-[800px]:top-[40%] max-[767px]:left-1/2 max-[767px]:top-1/2 max-[767px]:-translate-x-1/2 max-[767px]:-translate-y-1/2  mix-blend-multiply    max-w-[799px] max-h-[483px] max-[1000px]:max-w-[700px]  max-[800px]:max-w-[600px]  max-[767px]:max-w-[500px]  max-[680px]:max-h-[300px] max-[480px]:max-w-[300px] max-[480px]:max-h-[180px] object-cover  z-0"
          alt="Background"
          src="/img-7.png"
        />
         

        {/* Heading content */}
        <div className="flex flex-col items-center gap-5 relative z-10">
          <h2 className="text-[50px] font-bold text-white leading-[100%] text-center font-['WorkSans'] max-w-[756px] max-[1100px]:text-[36px] max-[767px]:text-[28px]">
            Facts In Numbers
          </h2>

          <div className="max-w-[712px] text-base font-normal text-white leading-[100%] text-center font-['WorkSans'] overflow-hidden">
            Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
            bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper
            fermentum
          </div>
        </div>

        {/* Stats cards */}
        <div className="z-50 flex justify-center items-start gap-16 w-full max-[1100px]:gap-5 max-[1000px]:flex-wrap">
          {statsData.map((stat, index) => (
            <Card
              key={index}
              className="w-60 bg-white rounded-[20px] overflow-hidden bg-white "
            >
              <CardContent className="flex items-center gap-4 p-4">
                <div className="w-[72px] h-[68px] max-[680px]:w-[50px] max-[680px]:h-[50px] bg-[#ff9d0b] rounded-xl overflow-hidden flex items-center justify-center">
                  {stat.icon ? (
                    stat.icon
                  ) : (
                    <img
                      className="w-10 h-10 max-[680px]:w-[16px] max-[680px]:h-[16px]"
                      alt={stat.label}
                      src={stat.iconSrc}
                    />
                  )}
                </div>

                <div className="flex flex-col items-start gap-2 max-[680px]:gap-1">
                      <div>
                             <div
                   className="font-bold text-2xl text-black leading-[100%] font-['WorkSans'] max-[1000px]:text-[18px]">
                     {stat.value}
                  </div>
                      </div>
                  <div className="font-semibold text-base text-[#00000099] leading-[100%] font-['WorkSans'] max-[767px]:text-[14px]">
                    {stat.label}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
