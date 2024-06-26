import React from "react";
import Image from "next/image";

import cover from "/public/assets/images/nanenane-cover.jpeg";
import agenda from "/public/assets/images/agenda.png";

const HeroSection = () => {
  return (
    <div className="relative h-[60vh] z-20">
      <Image
        src={cover}
        alt="Links"
        height={2160}
        width={3840}
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover h-full w-full"
      />

      <div className="absolute w-96 bg-white right-0 bottom-0">
        <Image
          src={agenda}
          alt="Links"
          height={2160}
          width={3840}
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="absolute flex-col top-0 left-0 bottom-0 right-0 w-full z-10 px-20 bg-gradient-to-r from-primary">
        <div className="text-white max-w-screen-xl  flex flex-col items-start justify-start pb-10 pt-10">
          <div className="flex flex-col mt-10 mb-10">
            <h1 className="uppercase font-black text-6xl">
              Karibu kwenye maonyesho
            </h1>
            <h1 className="max-w-screen-lg uppercase font-black text-6xl mt-3">
              ya kimataifa ya{" "}
              <span className="bg-white text-primary px-5">Nanenane</span>
            </h1>
          </div>
          <div className="flex flex-col text-yellow-400 text-3xl font-semibold my-5">
            <span>08 October 2024 - Dodoma, Tanzania</span>
          </div>
          <div className="font-bold text-4xl space-y-3 mb-20 uppercase">
            <div className="bg-white inline-flex text-primary px-4 py-4 font-black">
              Kauli Mbiu
            </div>
            <div className="font-medium mt-5">
              &rdquo;Chagua Viongozi Bora wa Serikali za Mitaa kwa Maendeleo
              Endelevu ya Kilimo, Mifugo na Uvuvi&rdquo;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
