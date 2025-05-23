
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <Hero />
      <Features />
      <About />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
