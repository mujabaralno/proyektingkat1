"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { ArrowBigRightDash } from "lucide-react";
import { productList } from "@/constants";
const ProductPage = () => {
  const { user }: any = useUser();
  return (
    <>
      <section className="max-w-5xl mx-auto px-5 md:px-10 w-full  p-16-regular">
        <div className="home">
          <h1 className="home-heading">Welcome, <span className="text-gray-300">{user?.firstName}!</span> Try some of our products</h1>
          
        </div>
      </section>
      <div className="max-w-5xl mx-auto px-5 md:px-10 w-full flex flex-col gap-5  p-16-regular mt-5">
        {productList.map((item, i) => {
          return(
            <div 
            key={i}
            className="w-full  bg-white flex flex-row justify-between items-center shadow-md border-gray-400 border-2  p-5 rounded-3xl">
            <Image 
            src={item.imgUrl}
            width={50}
            height={50}
            alt="chat"
            />
            <div className="relative flex flex-col gap-2">
                <h4 className="h4-semibold">{item.title}</h4>
                <p className="p-medium-14">{item.desc}</p>
            </div>
            <div className="justify-end flex w-32">
             <Link href={item.route}>
                <ArrowBigRightDash size={24} />
             </Link>
            </div>
        </div>
          )
        })}
        
      </div>
    </>
  );
};

export default ProductPage;
