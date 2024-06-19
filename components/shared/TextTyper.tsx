'use client';

import React, { useState, useEffect } from "react";

const TextTyper = ({ text }: { text: string }) => {
  const [typedText, setTypedText] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(true);
  useEffect(() => {
    let index = 0;
    const timePerChar = 10; 

    const interval = setInterval(() => {
      if (text && index < text.length) {
        setTypedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, timePerChar);
    
    return () => clearInterval(interval); 
  }, [text]);

  useEffect(() => {
    setIsTyping(true);
    const timeout = setTimeout(() => {
      setIsTyping(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [typedText]);
  
  return <span className="text-black flex items-center">{typedText}
    <span className={` ${isTyping ? "blinking-dot h1-bold " : "opacity-0"}`}>{isTyping ? "." : ""}</span>
  </span>;
};

export default TextTyper;
