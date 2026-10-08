import React from "react";
import img from "@/app/img/bazar-hero.png";
import Image from "next/image";
import BanglaDate from "../banglaDate/banglaDate";

export default function HeroSection() {
  return (
    <main className="hero-section bg-white my-5 md:rounded-4xl md:shadow-lg py-5 px-5">
      <div className="block  md:flex justify-between  gap-4 p-4">
        <div className="left-content mt-5 w-full lg:w-1/2">
          <span className="bg-green-100 py-3 text-md my-3   px-4 rounded-full text-green-700 font-semibold">
            <BanglaDate />
          </span>

          <h3 className="text-4xl mt-3 font-bold">আজকের বাজারের দাম এক নজরে</h3>
          <p className="my-7">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <button className="bg-green-600 mt-4 font-semibold text-white px-4 py-2 rounded cursor-pointer hover:bg-green-700">
            সব পণ্য দেখুন
          </button>
        </div>
        <div className="img w-full lg:w-1/2 flex justify-center items-center">
          <Image src={img} alt="hero-img" width={400} height={400} />
        </div>
      </div>
    </main>
  );
}
