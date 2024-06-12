"use client";
import React, { useState } from "react";
import CustomTab from "./tab";

const TabContainer = () => {
  const [selectedTab, setSelectedTab] = useState<boolean | null>(false);

  const handleChange = () => {};

  return (
    <div>
      <div className="w-full bg-yellow-500/90">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex items-center gap-x-0 uppercase">
            <CustomTab label="Registration" />
            <CustomTab label="Accommodation" />
            <CustomTab label="Logistics" />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl">
        <div className="flex p-10">
          <div className="max-w-96 text-3xl font-black uppercase">
            Nanenane REGISTRATION 2024
          </div>
          <div className="px-10 space-y-10">
            <div className="border-b pb-10">
              <p>
                Welcome to The Ministry of Agriculture Nanenane 2024 Farmers
                Annual Festival registration page. The The Ministry of
                Agriculture Nanenane 2024 Farmers Annual Festival, will take
                place from October 1st to 8th, 2024 in Dodoma, Tanzania.
              </p>
            </div>

            <div className="border-b pb-10">
              <p className="tracking-normal leading-7">
                Organized under the Ministry of Agriculture on behalf of the
                President of the United Republic of Tanzania,{" "}
                <strong>Honorable, Mama Samia Suluhu Hassan</strong> The
                Nanenane 2024 Farmers Annual Festival, will be held under the
                theme “Innovate, Accelerate and Scale: Delivering food systems
                transformation in a digital and climate era”. With only six
                years left to reach the Sustainable Development Goals (SDGs) and
                one year away from the Malabo Declaration&rsquo;s deadline,
                transforming African food systems stands as a paramount task,
                crucial for ensuring food security and fostering job
                opportunities particularly for youth and women on the continent.
                The Nanenane 2024 Farmers Annual Festival aims to catalyze this
                transformation through innovative science and policies, digital
                technologies and equipment’s, home-grown and global solutions,
                and scaled investments.
              </p>
            </div>
            <div className="flex flex-col gap-y-1 font-semibold">
              <span className="underline">Dates</span>
              <span>Pre-Festive - October 8, 2024</span>
              <span>Nanenane Festival - October 8-15, 2024,</span>
              <span>Grounds - Dodoma Nanenane Grounds, Dodoma, Tanzania</span>
            </div>
            <div className="py-10 border-y">
              <p>
                Join us and over 15000 farmers and sagricultural stakeholders as
                we discuss, define, and adopt ways of working towards
                sustainable, resilient, and equitable Agriculture in Tanzania
                #88TZ2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabContainer;
