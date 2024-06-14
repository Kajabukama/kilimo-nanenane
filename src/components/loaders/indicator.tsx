"use client";
import { FiLoader } from "react-icons/fi";

export default function Indicator() {
  return (
    <div className="inline-flex items-center justify-center mx-5">
      <FiLoader className="w-5 h-5 animate-spin repeat-infinite" />
    </div>
  );
}
