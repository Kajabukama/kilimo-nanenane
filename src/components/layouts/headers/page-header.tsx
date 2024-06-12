import React from "react";
import Image from "next/image";

import cover from "/public/assets/images/bg.jpg";

const PageHeader = () => {
  return (
    <div className="relative h-[70vh] z-20">
      <Image
        src={cover}
        alt="Links"
        height={2160}
        width={3840}
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover h-full w-full"
      />
      <div className="absolute flex flex-col top-20 left-32 max-w-screen-lg w-full z-10 p-20  bg-primary/70">
        <div className="text-white">
          <div className="flex flex-col mt-20">
            <div className="text-white text-xl uppercase font-black">
              Maonyesho ya Nanenane, Wizara ya Kilimo
            </div>
            <h1 className="mb-10 uppercase font-black text-6xl">
              Sasa unaweza ujisajili
            </h1>
          </div>
          <div className="font-bold text-4xl space-y-3">
            <div>Innovate, Accelerate, and Scale</div>
            <div>Delivering food systems transformation </div>
            <div>In a digital and climate era</div>
          </div>
          <div className="flex flex-col text-white font-semibold mt-10">
            <span>08 October 2024</span>
            <span>Dodoma, Tanzania</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
