import Link from "next/link";
import React from "react";
import { PiTagChevronLight } from "react-icons/pi";

function ErrorLoader() {
  return (
    <div>
      <div className="fixed inset-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-[10000] flex flex-1 flex-col items-center justify-center">
        <div className="w-[30rem] text-center bg-accent p-10 flex flex-col">
          <p className="text-lg font-bold">
            Failed to load data, check your internet connection, and refresh
            this page to try again
          </p>
          <Link className="px-3 py-2 my-3 font-bold text-xl" href={"/"}>
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorLoader;
