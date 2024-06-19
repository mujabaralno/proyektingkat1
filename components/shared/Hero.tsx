"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
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
  const fadeIn = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        type: "spring",
        ease: "linear",
        duration: 1.5,
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
    <section className="w-full mt-12 relative md:h-[70vh] lg:h-[80vh] flex justify-center items-center overflow-y-hidden overflow-x-hidden">
      <motion.div
        className="wrapperHero flex mx-auto  flex-col gap-5 relative z-20 justify-center items-center text-center"
        variants={heroVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.h1
          className="h1-bold text-black"
          variants={textVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          The Next Generation of Mindfulness, AI assistants and Meditation.
        </motion.h1>
        <motion.p className="p-regular-20 text-black"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        >
          We are building the next generation of Mindfulness, AI assistants and
          Meditation. Our goal is to help you achieve your goals. We are
          building
        </motion.p>
        <motion.div className="flex flex-row gap-5"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        >
          <Button className="buttonPrimary py-6">Get Started</Button>
          <Button className="buttonSecondary">
            <Link href="#aboutPage">Learn More</Link>
          </Button>
        </motion.div>
       
      </motion.div>
      
      
    </section>
  );
};

export default Hero;