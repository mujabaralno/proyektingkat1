import AboutProduct from "@/components/shared/AboutProudct";
import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <section className="w-full relative ">
      <Header />
      <Hero />
      <AboutProduct />
    </section>
  );
};

export default HomePage;
