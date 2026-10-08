import { getAllData } from "@/app/page";
import React from "react";

export default async function CategoryPage({ params }) {
  const { name } = await params;

  const data = await getAllData();
  const categoryName = data.find((data) => data.category === name);
  const categoryFind = data.filter((items) => items.category === name);
  console.log(categoryName);

  return (
    <div className="container mx-auto">
      <section className="p-7 bg-white rounded-2xl  my-5">
        <div className="category-title-card flex items-center gap-3">
          <span className="text-3xl">{categoryName.categoryIcon}</span>
          <div>
            <h4 className="text-2xl font-bold">
              {categoryName.categoryNameBn}
            </h4>
            <p>
              {categoryName.categoryNameBn} {categoryFind.length} পণ্যের আজকের
              দাম ও পরিবর্তন
            </p>
          </div>
        </div>
      </section>

      <section className="p-4 bg-white my-5 rounded-xl flex justify-end">
        <div className="flex gap-2">
          <p>সাজান</p>
          <details>
            <summary>ডিফল্ট </summary>
            <option value="low-to-high"> দাম: কম থেকে বেশি </option>
            <option value="high-to-low"> দাম: বেশি থেকে কম </option>
          </details>
        </div>
      </section>

      <section className="my-15">
        <h4 className="text-gray-600 font-semibold text-md">
          মোট {categoryFind.length} টি পণ্য দেখানো হচ্ছে
        </h4>
        <div className="category-caontainer grid grid-cols-3 gap-4 my-7">
          {categoryFind.map((items) => (
            <div key={items.id} className="bg-white rounded-2xl py-7 px-5">
              <div className="category-title-card flex items-center gap-3">
                <span className="text-3xl">{items.categoryIcon}</span>
                <div>
                  <h4 className="text-md font-bold">{items.nameBn}</h4>
                  <p className="text-sm">প্রতি কেজি</p>
                </div>
              </div>

              <div className="mt-5 flex justify-between">
                <div>
                  <p className="text-[12px]">আজকের দাম</p>
                  <h4 className="text-xl font-bold">
                    {items.today} <span className="text-sm">টাকা</span>
                  </h4>
                </div>
                <div className="flex items-center">
                  <p className="text-red-600 bg-gray-200 rounded-full p-2 font-semibold">
                    ▲ {items.change.pct} %
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
