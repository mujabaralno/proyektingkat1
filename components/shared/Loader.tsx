"use client";
import React, { useState, useEffect } from "react";

const Loader = () => {
  const [dot, setDot] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDot((prevDot) => {
        if (prevDot.length === 3) {
          return "";
        } else {
          return prevDot + ".";
        }
      });
    }, 300);
    return () => clearInterval(interval);
  }, []);
  return <span>{dot}</span>;
};

export default Loader;
