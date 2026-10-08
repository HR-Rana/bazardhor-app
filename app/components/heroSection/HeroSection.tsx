import React from "react";
import img from "@/app/img/bazar-hero.png";
import Image from "next/image";

export default function HeroSection() {
  const date = new Date();
  const banglaDate = Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);

  return (
    <main className="hero-section bg-white my-5 md:rounded-4xl md:shadow-lg py-5 px-5">
      <div className="block  md:flex justify-between  gap-4 p-4">
        <div className="left-content mt-5 w-full lg:w-1/2">
          <p className="bg-green-200 text-green-700  px-5 py-2 rounded-full w-fit font-semibold mb-3">
            {banglaDate}
          </p>
          <h3 className="text-4xl font-bold">আজকের বাজারের দাম এক নজরে</h3>
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
