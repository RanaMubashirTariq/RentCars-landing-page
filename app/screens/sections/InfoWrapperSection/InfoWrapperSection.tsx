import React from "react";
import { Badge } from "../../../components/ui/badge";
import { Card, CardContent } from "../../../components/ui/card";

// Data for the information points
const infoPoints = [
  {
    number: 1,
    title: "Erat at semper",
    description:
      "Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum dui ornare praesent. Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer. Quisque eleifend tincidunt vulputate libero at nulla nibh quis. Quis neque donec est scelerisque lectus bibendum. Ut a a donec ante in venenatis. Risus tortor adipiscing eget enim.",
  },
  {
    number: 2,
    title: "Urna nec vivamus risus duis arcu",
    description:
      "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper",
  },
  {
    number: 3,
    title: "Lobortis euismod imperdiet tempus",
    description:
      "Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent nisl cras nunc luctus viverra nisi",
  },
  {
    number: 4,
    title: "Cras nulla aliquet nam eleifend amet et",
    description:
      "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer. Quisque eleifend tincidunt vulputate libero",
  },
];

export default function InfoWrapperSection  () {
  return (
    <section className="bg-white flex  justify-center max-[1000px]:flex-col max-[1000px]:items-start items-center gap-[110px] max-[1300px]:gap-[30px] p pl-[158px] pr-[72px] py-[60px] w-full max-[1100px]:pl-[50px] max-[1100px]:pr-[50px] max-[767px]:pr-[25px] max-[767px]:pl-[25px] max-[1000px]:py-[40px]">
      <div    className="  w-[550px] h-[350px]  md:h-[549px] max-[1000px]:w-[100%] rounded-[20px] bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: "url(./img.jpg)" }}
        aria-label="Information section image"
      />

      <div className="flex flex-col w-full  max-w-[550px] items-start gap-7 max-[1100px]:gap-5 max-[1000px]:max-w-[100%]">
        {infoPoints.map((point, index) => (
          <Card
            key={index}
            className="w-full border-none shadow-none bg-transparent"
          >
            <CardContent className="flex flex-col items-start gap-5 p-0 max-[767px]:gap-3">
              <div className="flex items-center gap-4 max-[767px]:gap-2 ">
                <Badge className="w-8 h-8 flex font-['WorkSans'] items-center justify-center max-[450px]:p-1 bg-[#5937e0] rounded-full text-white font-semibold text-base leading-[100%] max-[767px]:text-[18px] max-[450px]:text-[16px] max-[450px]:min-w-[20px] max-[450px]:min-h-[20px]">
                  {point.number}
                </Badge>
                <h3 className="font-['WorkSans'] font-semibold text-defaultblack text-[20px] tracking-[0] leading-[100%] max-[767px]:text-[18px] max-[450px]:text-[16px]">
                  {point.title}
                </h3>
              </div>
              <p className="font-['WorkSans'] font-normal text-[#00000099] text-base leading-[100%] tracking-[0] leading-normal overflow-hidden text-ellipsis line-clamp-2 max-[1000px]:line-clamb-3 max-[767px]:text-[14px] max-[680px]:line-clamp-2">
                {point.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
