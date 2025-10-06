'use client'
import React , {useState , useRef} from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

export default function MainHeroSection  () {
  // Form field data for mapping
  const formFields = [
    { id: 1, label: "Car type", icon: "/selectarrow-1.svg" },
    { id: 2, label: "Place of rental", icon: "/selectarrow.svg" },
    { id: 3, label: "Place of return", icon: "/selectarrow.svg" },
    {
      id: 4,
      label: "Rental date",
      icon: "/end-adornment.svg",
      isCalendar: true,
    },
    {
      id: 5,
      label: "Return date",
      icon: "/end-adornment.svg",
      isCalendar: true,
    },
  ];

    const [cityName , setCityName] = useState('Car type')
   const [fromCity, setFromCity] = useState("Place of rental");
  const [toCity, setToCity] = useState("Place of return");
  const [rentalDate , setRentalDate] = useState('Rental Date')
  const [returnDate , setReturnDate] = useState('Return Date')
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  
  // ---------- DROPDOWN COMPONENT ----------
  const CustomDropdown = ({
    name,
    options,
    selected,
    setSelected,
  }: {
    name: string;                          // each dropdown’s unique name
    options: string[];
    selected: string;
    setSelected: (value: string) => void;
  }) => {
    const isOpen = openDropdown === name;

    const toggleDropdown = () => {
      setOpenDropdown(isOpen ? null : name); // open this one, close others
    };

    return (
      <div className="relative w-full z-20">
        <div
          onClick={toggleDropdown}
          className=" z-0 font-['WorkSans'] font-regular bg-[#FAFAFA] text-black text-base leading-[20px] border-none rounded-[10px] px-4 py-[9px] cursor-pointer flex justify-between items-center"
        >
          <span>{selected}</span>
          <svg
            className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {isOpen && (
          <ul className="absolute font-['WorkSans'] top-full mt-1 w-full bg-white rounded-[10px] shadow z-50 max-[1500px]:top-[-100px] transition-all duration-300">
            {options.map((option) => (
              <li
                key={option}
                onClick={() => {
                  setSelected(option);
                  setOpenDropdown(null); // close after selecting
                }}
                className="px-4 py-2 font-['WorkSans'] hover:bg-[#5937E0] hover:text-white cursor-pointer text-black text-base font-regular font-['WorkSans] leading-[20px] max-[500px]:py-3"
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };


const CustomDropdown2 = ({
  name,
  selected,
  setSelected,
}: {
  name: string;
  selected: string;
  setSelected: (value: string) => void;
}) => {
  const dateInputRef = useRef<HTMLInputElement>(null);
  const isOpen = openDropdown === name;

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
    setOpenDropdown(null); // close after picking date
  };

  const openDatePicker = () => {
    setOpenDropdown(name); // open this dropdown
    dateInputRef.current?.showPicker();
  };

  return (
    <div className="relative w-full z-20">
      {/* Instead of display: none, use visually hidden input */}
      <input
        type="date"
        ref={dateInputRef}
        onChange={handleDateChange}
        className="absolute opacity-0 w-full h-full top-0 left-0 z-[-1]"
      />

      <div
        onClick={openDatePicker}
        className="bg-[#FAFAFA] text-[#000000] font-regular text-base leading-[20px] border-none rounded-[10px] px-4 py-[9px] cursor-pointer flex justify-between items-center"
      >
        <span className="text-black text-base leading-[20px] font-regular">{selected}</span>
        <img
          src="/date-icon.svg"
          className="w-4 h-4 object-contain"
          alt="calendar"
        />
      </div>
    </div>
  );
};




  return (
    <section className="relative bg-white flex flex-col items-center px-[150px] max-[1500px]:px-[72px] py-0 w-full max-[1100px]:px-[50px] max-[680px]:px-[25px] ">
      <div className="flex flex-col items-start justify-center w-full h-[660px] max-[1000px]:h-auto bg-[#5937e0] rounded-[40px] overflow-hidden px-[72px] max-[1000px]:py-5 relative   max-[1000px]:px-[40px] max-[1000px]:px-[20px] max-[680px]:px-[10px]  max-[680px]:rounded-[20px]">
        <div className="absolute w-[713px] h-[366px] top-[353px] left-[455px] max-[1000px]:w-[500px] max-[1000px]:h-[200px] max-[1000px]:top-[110px] max-[1000px]:left-[150px] max-[680px]:w-[300px] max-[680px]:h-[150px] max-[680px]:top-[150px] max-[680px]:left-[100px]">
          <img
            className="absolute w-[713px] h-[337px] top-0 left-0"
            alt="Car"
            src="/car-2-1.png"
          />
        </div>

        <div className="flex items-center w-full justify-between gap-11 relative max-[1000px]:flex-col">

                       <div className="absolute w-[1600]  max-[1100px]:h-[488px]  max-[1100px]:top-[-0px] z-0  h-auto top-[-85px] left-[-72px] transform-[-22.55deg] max-[1000px]:w-[1000px] max-[1000px]:h-[400px] max-[1000px]:top-[-100px] max-[1000px]:left-[-50px]">
                                             <img
                className=" w-full h-full object-cover"
                alt="Group"
                src="/group-1.svg"
              />
                       </div>
          <div className=" z-50 flex flex-col items-start gap-[33px]  px-0  max-[500px]:gap-[20px]  max-[1000px]:items-center">
            <div className="flex flex-col w-[686px] items-start gap-[27px] relative max-[1300px]:w-[500px] max-[1300px]:gap-[10px] max-[1100px]:w-[430px] max-[1000px]:w-[90%] max-[1000px]:items-center">

              <h1 className="relative w-[686px]   [font-family:'WorkSans'] font-bold text-white text-[74px] max-[1500px]:text-[60px] max-[1000px]:text-center leading-[100%] max-[1300px]:text-5xl max-[1300px]:w-[500px]  max-[1100px]:w-[400px] max-[1100px]:text-4xl max-[1000px]:text-[36px] max-[767px]:text-[28px]  max-[1000px]:w-[100%]  ">
                Experience the road like never before
              </h1>

              <p className="relative w-[464px]  [font-family:'WorkSans'] font-normal text-white text-lg max-[1500px]:text-base tracking-[0] leading-[100%]  max-[1100px]:w-[350px] max-[1000px]:w-[100%] max-[1000px]:text-center max-[680px]:text-sm max-[375px]:text-xs max-[370px]:h-16">
                Aliquam adipiscing velit semper morbi. Purus non eu cursus
                porttitor tristique et gravida. Quis nunc interdum gravida
                ullamcorper
              </p>
            </div>

            <Button className="h-13 min-[1500px]:h-10 bg-[#ff9e0c] hover:bg-[#e68c0a] text-white rounded-xl px-7 py-[13px] max-[500px]:w-[90%]">
              <span className="[font-family:'Inter'] font-semibold text-lg max-[1500px]:text-base leading-[100%]">
                View all cars
              </span>
            </Button>
          </div>

          <Card className="min-[1500px]:w-[460px] z-50 w-[416px] bg-white rounded-[20px] overflow-hidden border-none max-[1100px]:w-[300px] max-[1000px]:w-[70%] max-[500px]:w-[90%]">
            <CardContent className="flex flex-col items-center gap-10 p-10 max-[1100px]:p-5">
              <h2 className="[font-family:'WorkSans'] font-semibold text-black text-[28px] text-center tracking-[0] leading-[100%] whitespace-nowrap">
                Book your car
              </h2>

              <div className="flex flex-col items-center gap-5 w-full">
              <CustomDropdown
                name="car"
                options={['Land Cruiser', 'Fortuner', 'Civic', 'Jeep']}
                selected={cityName}
                setSelected={setCityName}
              />

<CustomDropdown
                name="rental"
                options={['Dallas', 'New York', 'Los Angeles', 'Miami']}
                selected={fromCity}
                setSelected={setFromCity}
              />

              <CustomDropdown
                name="return"
                options={['Chicago', 'Houston', 'Seattle', 'Boston']}
                selected={toCity}
                setSelected={setToCity}
              />

              <CustomDropdown2
                name="rentalDate"
                selected={rentalDate}
                setSelected={setRentalDate}
              />

              <CustomDropdown2
                name="returnDate"
                selected={returnDate}
                setSelected={setReturnDate}
              />
              </div>

              <Button className="w-full h-10 bg-[#ff9d0b] hover:bg-[#e68c0a] text-white rounded-xl px-7 py-[13px]">
                <span className="[font-family:'Inter'] font-semibold text-base leading-[100%]">
                  Book now
                </span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
