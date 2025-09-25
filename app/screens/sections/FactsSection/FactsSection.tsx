import React from "react";
import { Card, CardContent } from "../../../components/ui/card";

// Data for the facts cards to enable mapping
const factsData = [
  {
    id: 1,
    title: "Availability",
    description:
      "Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis",
    iconUrl: "/clip-path-group.png",
  },
  {
    id: 2,
    title: "Comfort",
    description:
      "Gravida auctor fermentum morbi vulputate ac egestas orcietium convallis",
    iconUrl: "/clip-path-group-1.svg",
    hasExtraImage: false,
  },
  {
    id: 3,
    title: "Savings",
    description:
      "Pretium convallis id diam sed commodo vestibulum lobortis volutpat",
    iconUrl: "/clip-path-group-2.png",
  },
];

export default function FactsSection  () {
  return (
    <section className="bg-white flex justify-between gap-[20px] px-[72px] py-[60px] w-full max-[1200px]:px-[50px] max-[1100px]:px-[50px] max-[680px]:py-[40px] max-[640px]:flex-wrap max-[640px]:mx-auto max-[680px]:px-[25px]">
      {factsData.map((fact) => (
        <Card key={fact.id} className="bg-transparent border-none shadow-none max-[680px]:w-[100%]">
          <div className="flex flex-col items-center gap-[29px] p-0 max-[1200px]:gap-[10px]">
            <div className="flex flex-col items-center gap-5 h-auto justify-center max-[1100px]:gap-[5px]">
                  <div className="relative flex align-center w-16 h-16 max-[1100px]:w-[40px] max-[1100px]:h-[40px]">
                    <img
                      className="absolute  top-[0px] left-[0px] "
                      alt="G"
                      src={fact.iconUrl}
                    />
                  </div>

              <h3 className=" max-w-[336px] h-7  font-['WorkSans'] font-semibold text-defaultblack text-2xl text-center leading-[100%] whitespace-nowrap overflow-hidden   max-[767px]:text-[20px] max-[767px]:w-[100%]">
                {fact.title}
              </h3>
            </div>
            <p className="max-w-[357px]  font-['Inter'] font-normal text-defaultblack text-base text-center tracking-[0] leading-[24px]  max-[767px]:text-[14px] max-[767px]:leading-[20px] max-[680px]:w-[100%]">
              {fact.description}
            </p>
          </div>
        </Card>
      ))}
    </section>
  );
};
