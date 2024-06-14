import React from "react";
import { FiLoader } from "react-icons/fi";
export interface LoaderProps {
  label: string;
}
function Loader({ label }: LoaderProps) {
  return (
    <div className="fixed inset-0 bg-background/60 dark:bg-black/60  z-[10000] flex flex-1 flex-col items-center justify-center text-neutral-600 dark:text-white text-sm font-semibold">
      <div className="inline-flex items-center justify-center mb-10">
        <FiLoader className="w-8 h-8 animate-spin repeat-infinite" />
      </div>
      <p className="mb-2 ">Loading ...</p>
      <p className="">{label}</p>
    </div>
  );
}

export default Loader;
