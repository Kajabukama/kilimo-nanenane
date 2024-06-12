import LogoAsset from "@/components/logo/logo";
import React from "react";
import { NavMenu } from "../menu/nav-menu";
import CountDown from "@/components/counter/counter";

const HeaderSection = () => {
  return (
    <header className="flex flex-col">
      <nav
        className="mx-auto w-full flex items-center justify-between max-w-screen-2xl gap-x-10 bg-white py-5 z-50"
        aria-label="Global"
      >
        <div className="flex items-center gap-x-10">
          <LogoAsset width={50} height={50} />
          <div className="flex flex-col">
            <span className="text-primary font-black text-4xl">
              Wizara ya Kilimo
            </span>
            <span className="text-xl font-bold text-yellow-500">
              Nanenane - 08-08-2024, Dodoma
            </span>
          </div>
        </div>
        {/* <NavMenu /> */}
        <CountDown />
      </nav>
    </header>
  );
};

export default HeaderSection;
