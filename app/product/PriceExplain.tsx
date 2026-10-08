import React from "react";
import { ProductType } from "../types/ProductTypes";

interface propsType {
  data: ProductType;
}

export default function PriceExplain({ data }: propsType) {
  const market = data.markets;
  console.log(market);

  const lowPrice = Math.min(...market.map((item) => item.min));
  console.log("price", lowPrice);
  const highPrice = Math.max(...market.map((item) => item.max));

  return (
    <div className="bg-white my-7 rounded-2xl p-5 py-10">
      <section>
        <h3 className="text-xl font-semibold mb-5">দামের সারসংক্ষেপ</h3>
        <div className="price-section-card lg:flex justify-between grid  grid-cols-1 lg:grid-cols-3  gap-5">
          <div className="card px-5 text-center lg:text-left py-7 shadow-sm shadow-black rounded-2xl w-full">
            <p>সর্বনিম্ন দাম</p>
            <h4 className="text-3xl text-green-600 font-semibold">
              {lowPrice} টাকা
            </h4>
            <p>সবচেয়ে কম দামের বাজার</p>
          </div>
          <div className="card px-5 text-center lg:text-left py-7 shadow-sm shadow-black rounded-2xl w-full">
            <p>সর্বাধিক দাম</p>
            <h4 className="text-3xl text-red-400 font-semibold">
              {highPrice} টাকা
            </h4>
            <p>সসবচেয়ে বেশি দামের বাজার</p>
          </div>
          <div className="card px-5 text-center lg:text-left py-7 shadow-sm shadow-black rounded-2xl w-full">
            <p>গড় দাম</p>
            <h4 className="text-3xl text-green-600 font-semibold">
              {Math.round((lowPrice + highPrice) / 2)} টাকা
            </h4>
            <p>প্রতি কেজি-এর হিসাবে</p>
          </div>
        </div>
      </section>

      <section className="my-8">
        <h3 className="pt-8 text-xl font-semibold">বাজারভিত্তিক আজকের দাম</h3>
        <div className=" mt-5  overflow-x-auto rounded-2xl border-2 border-gray-100">
          <table className="min-w-[750px] w-full">
            <thead className="min-w-full [&>th]:p-3 text-left! h-8 px-5!">
              {/* <tr className="flex justify-around"> */}
              <th className="px-3">বাজার</th>
              <th>বিভাগ</th>
              <th>সর্বনিম্ন</th>
              <th>সর্বাধিক</th>
              <th>গড়</th>
              {/* </tr> */}
            </thead>
            <tbody>
              {market.map((items) => {
                return (
                  <tr
                    className="flex-col [&>td]:p-2 gap-2 border border-gray-100 p-2"
                    key={items.market}
                  >
                    <td>{items.market} টাকা</td>
                    <td>{items.division} টাকা</td>
                    <td>{items.min} টাকা</td>
                    <td>{items.max} টাকা</td>
                    <td>{Math.round((lowPrice + highPrice) / 2)} টাকা</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
