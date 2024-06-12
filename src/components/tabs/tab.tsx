import React from "react";

const CustomTab = ({ label }: { label: string }) => {
  return (
    <div className="text-white text-xl font-black transition-all duration-300 delay-75 cursor-pointer px-10 py-6 hover:bg-black/80 ">
      {label}
    </div>
  );
};

export default CustomTab;
