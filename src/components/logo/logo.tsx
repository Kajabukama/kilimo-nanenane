import React from "react";
import Image from "next/image";
import logo from "/public/assets/images/logo.png";

type LogoProps = {
  width: number;
  height: number;
};
const LogoAsset = ({ width, height }: LogoProps) => {
  return <Image src={logo} width={width} height={height} alt="logo" />;
};

export default LogoAsset;
