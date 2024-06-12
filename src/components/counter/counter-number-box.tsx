import React from "react";

interface numProp {
  num: string | number;
  unit: string;
  flip: boolean;
}

export const NumberBox = ({ num, unit, flip }: numProp) => {
  return (
    <div className="flex flex-col items-center px-2">
      <div className=" relative bg-transparent flex flex-col items-center justify-center rounded-lg w-20 h-20  text-2xl md:text-2xl">
        <div className="rounded-t-lg rounded-b-lg bg-primary w-full h-full"></div>

        <div className="text-5xl absolute text-white z-10 font-bold font-redhat md:text-5xl font-mono ">
          {num}
        </div>

        <div className=" rounded-b-lg rounded-t-lg bg-yellow-400 w-full h-full"></div>

        <div
          className={`absolute  w-full h-1/2 top-0  rounded-t-lg z-5 ${
            flip ? "animate-flip bg-yellow-400" : "bg-transparent"
          }`}
        ></div>
        {/* Two Small Dots */}
        <div className="absolute -right-1 top-[35px] rounded-full w-[12px] h-[12px] bg-white"></div>
        <div className="absolute -left-1 top-[35px] rounded-full w-[12px] h-[12px] bg-white"></div>
      </div>
      <p className="text-lg mt-3 font-semibold text-primary  md:text-xl ">
        {unit}
      </p>
    </div>
  );
};
