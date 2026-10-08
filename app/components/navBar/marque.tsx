import { getAllData } from "@/app/page";
import React from "react";
import MarqueeText from "react-marquee-text";

export default async function Marque() {
  const data = await getAllData();

  const product = data.slice(0, 5);

  return (
    <div className="marquee-text w-full flex gap-3 bg-gray-100">
      <MarqueeText
        duration={18}
        direction="right"
        // loop={true}
        className="flex gap-3"
      >
        <div className="text mx-2  gap-0.5">
          {product.map((item: any) => (
            <span
              key={item._id}
              className=" border-gray-200  px-2 py-1 border-r-2"
            >
              <span>{item.categoryIcon}</span>
              <span> {item.nameBn} </span>
              <span> {item.today} টাকা/কেজি</span>

              <span
                className={
                  item.change.dir === "up" ? "text-green-600" : "text-red-500"
                }
              >
                {" "}
                {item.change.dir === "up" ? "↑" : "↓"} {item.change.pct}%
              </span>
            </span>
          ))}
        </div>
      </MarqueeText>
    </div>
  );
}
