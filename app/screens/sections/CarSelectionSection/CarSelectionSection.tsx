import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../../components/ui/card";

// Car data for mapping
const carData = [
  {
    id: 1,
    brand: "Mercedes",
    type: "Sedan",
    price: 25,
    image: "/img-1.png",
    features: [
      { icon: "/gear-shift-1--1.svg", text: "Automat" },
      { icon: "/g17.svg", text: "Pb 95" },
      { icon: "/g1593.svg", text: "Air Conditioner" },
    ],
  },
  {
    id: 2,
    brand: "Mercedes",
    type: "Sport",
    price: 50,
    image: "/img-2.png",
    features: [
      { icon: "/gear-shift-1--1.svg", text: "Automat" },
      { icon: "/g17.svg", text: "Pb 95" },
      { icon: "/g1593.svg", text: "Air Conditioner" },
    ],
  },
  {
    id: 3,
    brand: "Mercedes",
    type: "Sedan",
    price: 45,
    image: "/img-3.png",
    features: [
      { icon: "/gear-shift-1--1.svg", text: "Automat" },
      { icon: "/g17.svg", text: "Pb 95" },
      { icon: "/g1593.svg", text: "Air Conditioner" },
    ],
  },
  {
    id: 4,
    brand: "Porsche",
    type: "Suv",
    price: 40,
    image: "/img-4.png",
    features: [
      { icon: "/gear-shift-1--1.svg", text: "Automat" },
      { icon: "/g17.svg", text: "Pb 95" },
      { icon: "/g1593.svg", text: "Air Conditioner" },
    ],
  },
  {
    id: 5,
    brand: "Toyota",
    type: "Sedan",
    price: 35,
    image: "/img-5.png",
    features: [
      { icon: "/gear-shift-1--1.svg", text: "Automat" },
      { icon: "/g17.svg", text: "Pb 95" },
      { icon: "/g1593.svg", text: "Air Conditioner" },
    ],
  },
  {
    id: 6,
    brand: "Porsche",
    type: "Suv",
    price: 50,
    image: "/img-6.png",
    features: [
      { icon: "/gear-shift-1--1.svg", text: "Automat" },
      { icon: "/g17.svg", text: "Pb 95" },
      { icon: "/g1593.svg", text: "Air Conditioner" },
    ],
  },
];

export default function CarSelectionSection  () {
  return (
    <section className="flex flex-col items-center gap-10   px-[72px] py-[60px] w-full max-[1100px]:px-[50px] max-[1000px]:py-[40px] max-[767px]:px-[25px] max-[767px]:gap-5">
      <div className="flex flex-col max-[767px]:items-center md:flex-row w-full max-w-[1296px] items-start md:items-end justify-between gap-4 ">
        <h2 className="[font-family:'WorkSans'] font-bold text-defaultblack text-[50px]  leading-[100%] max-[1100px]:text-[36px] max-[767px]:text-[28px] tracking-[0] max-[767px]:text-center">
          Choose the car that <br />
          suits you
        </h2>

        <Button
          variant="ghost"
          className="flex items-center gap-2 p-0 hover:bg-transparent"
        >
          <span className="[font-family:'WorkSans'] font-bold text-defaultblack text-[20px] leading-[100%] max-[480px]:text-[16px]">
            View All
          </span>
          <ArrowRightIcon className="w-6 h-6 max-[480px]:w-[20px] max-[480px]:h-[20px]" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-[1296px] gap-6">
        {carData.map((car) => (
          <Card
            key={car.id}
            className="flex flex-col items-center gap-10 p-6 bg-neutral-50 rounded-[20px] overflow-hidden border-none max-[680px]:p-4 max-[480px]:gap-5"
          >
            <CardContent className="flex flex-col items-center gap-5 p-0 w-full max-[480px]:gap-2">
              <div
                className="w-full h-60 max-[480px]:h-[150px] bg-contain bg-center rounded-md"
                style={{ backgroundImage: `url(${car.image})` }}
              />

              <div className="flex flex-col items-center gap-10 w-full max-[1100px]:gap-5">
                <div className="flex items-start justify-between w-full">
                  <div className="flex flex-col items-start gap-1">
                    <h3 className="[font-family:'WorkSans'] font-semibold text-defaultblack text-2xl tracking-[0] leading-[100%] max-[767px]:text-[18px] ">
                      {car.brand}
                    </h3>
                    <p className="[font-family:'WorkSans'] font-normal text-[#00000099] text-base tracking-[0] leading-[100%] max-[767px]:text-[14px]">
                      {car.type}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span className="[font-family:'WorkSans'] font-semibold text-[#5937e0] text-2xl tracking-[0] leading-[100%] max-[767px]:text-[18px] ">
                      ${car.price}
                    </span>
                    <span className="[font-family:'WorkSans'] font-normal text-[#00000099] text-sm tracking-[0] leading-[100%] max-[767px]:text-[14px] ">
                      per day
                    </span>
                  </div>
                </div>

                <div className="flex items-start justify-between w-full max-[1100px]:flex-col max-[1100px]:gap-2 max-[767px]:flex-row max-[400px]:flex-col">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 max-[1300px]:flex-col max-[1100px]:flex-row ">
                      <img
                        className="w-6 h-6 "
                        alt={feature.text}
                        src={feature.icon}
                      />
                      <span className="[font-family:'WorkSans'] font-normal text-[#00000099] text-base tracking-[0] leading-[100%] max-[767px]:text-[14px] ">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>

            <CardFooter className="p-0 w-full">
              <Button className="w-full h-[50px] max-[480px]:h-[40px] max-[360px]:h-[30px] bg-[#5937e0] hover:bg-[#4a2dc0] text-white text-[16px] leading-[100%] rounded-xl [font-family:'Inter'] font-semibold">
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
