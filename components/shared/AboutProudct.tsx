"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { features } from "@/constants";


const AboutProduct = () => {
  const heroVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };
 const slideIn = (
    direction: "left" | "right" | "up" | "down",
    type: "tween" | "spring",
    delay: number,
    duration: number
  ): { hidden: { x: number | string; y: number | string }; show: { x: number; y: number; transition: { type: string; delay: number; duration: number; ease: string } } } => ({
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  });


  return (
    <section  id="aboutPage" className="w-full h-screen">
      <motion.div
        className="wrapperHero flex flex-col gap-5 justify-center items-center text-center"
        variants={heroVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.h1 className="h3-bold"
        variants={textVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        >
        What News in this website?
        </motion.h1>
        <motion.p>
          The latest news in the world of technology is here
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {features.map((item, i) => {
            return (
              <motion.div className="w-full h-full p-8 flex-col mt-7 justify-center items-center bg-white rounded-lg shadow-2xl shadow-black/20"
              variants={slideIn("up", "spring", i * 0.4, 0.6)}
              initial="hidden"
              whileInView="show"
              >
                <div className=" flex justify-center">
                  <Image
                    src={item.imgUrl}
                    width={45}
                    height={1000}
                    alt="logo"
                    className="gradient-blue p-2 rounded-lg"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="md:h4-medium text-center mt-4">{item.title}</h4>
                  <p className="p-regular-16 text-center line-clamp-2 md:line-clamp-4">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutProduct;