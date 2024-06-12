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
      <TabContainer />
      <Footer />
    </main>
  );
}
