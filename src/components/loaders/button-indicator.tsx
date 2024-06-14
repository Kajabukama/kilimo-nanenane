import React from "react";
import Indicator from "./indicator";

function ButtonIndicator({ label = "Loading" }: { label: string }) {
  return (
    <div className="flex items-center">
      <Indicator />
      <span className="ml-2 transition-all animate-pulse duration-300 delay-150 ease-in-out">
        {label} ...
      </span>
    </div>
  );
}

export default ButtonIndicator;
