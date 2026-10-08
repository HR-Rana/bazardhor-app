import Image from "next/image";
import React from "react";

export default async function PriceBased() {
  const productData = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
    { cache: "no-store" },
  );
  const data = await productData.json();

  const priceIncreaseProducts = data.filter(
    (product: any) => product.change.dir == "up",
  );

  const priceDiscreaseProducts = data.filter(
    (product: any) => product.change.dir == "down",
  );

  return (
    <div className="my-5">
      <section className="my-20">
        <h3 className="text-xl font-semibold first-letter:text-red-600">
          ▲ আজ দাম বেড়েছে
        </h3>

        <div className="product-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {priceIncreaseProducts.map((product: any) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-3xl bg-gray-200 rounded-2xl py-2 px-4">
                  {product.image}
                </span>
                <h4 className="text-lg font-semibold">
                  {product.nameBn}{" "}
                  <p className="text-sm text-gray-500">প্রতি কেজি</p>
                </h4>
              </div>
              <br />
              <div className="flex justify-between items-center">
                <p className="text-gray-600">
                  <p className="text-sm">আজকের দাম</p>
                  <span className="font-bold text-2xl">
                    {" "}
                    {product.today}
                  </span>{" "}
                  টাকা
                </p>
                <p>
                  <p className="text-sm bg-gray-100 rounded-2xl py-2 px-2 text-red-500 font-semibold">
                    ▲ {product.change.pct} %
                  </p>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="my-20">
        <h3 className="text-xl font-semibold first-letter:text-green-700">
          ▼ আজ দাম কমেছে
        </h3>

        <div className="product-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {priceDiscreaseProducts.map((product: any) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-3xl bg-gray-200 rounded-2xl py-2 px-4">
                  {product.image}
                </span>
                <h4 className="text-lg font-semibold">
                  {product.nameBn}{" "}
                  <p className="text-sm text-gray-500">প্রতি কেজি</p>
                </h4>
              </div>
              <br />
              <div className="flex justify-between items-center">
                <p className="text-gray-600">
                  <p className="text-sm">আজকের দাম</p>
                  <span className="font-bold text-2xl">
                    {" "}
                    {product.today}
                  </span>{" "}
                  টাকা
                </p>
                <p>
                  <p className="text-sm bg-gray-100 rounded-2xl py-2 px-2 text-green-500 font-semibold">
                    ▼ {product.change.pct} %
                  </p>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
