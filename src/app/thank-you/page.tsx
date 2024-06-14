import React from "react";
import Footer from "@/components/layouts/footer/footer";
import HeaderSection from "@/components/layouts/headers/header-section";
import HeroSection from "@/components/layouts/headers/hero-section";
import TabContainer from "@/components/tabs/tab-container";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeaderSection />
      <HeroSection />
      <div className="p-20 flex flex-col items-center justify-center max-w-screen-md mx-auto">
        <h1 className="font-black text-primary text-4xl mb-5">Thank You!</h1>
        <p className="font-medium text-xl text-center">
          Your form has been submitted successfully. our staff will immediately
          start attending to your request and you will be notified via email
          address or sms via the number you provided during registration
        </p>

        <div className="mt-20 p-10">
          <h1 className="text-center mb-5 text-gray-500">
            For Enquiries regarding your application do not hesitate to reach us
            via our support email or telephone number below
          </h1>
          <div className="border border-primary rounded-2xl text-3xl font-bold p-10 space-y-3">
            <div>Email : info@kilimo.go.tz</div>
            <div>Phone: +255 (0)22 2602917</div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
