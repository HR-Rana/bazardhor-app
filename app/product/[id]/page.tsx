import { Suspense } from "react";
import { getAllData } from "@/app/page";
import PriceExplain from "../PriceExplain";
import { ProductType } from "@/app/types/ProductTypes";

interface ParamsProps {
  params: Promise<{
    id: string;
  }>;
}

export default function DetailPage({ params }: ParamsProps) {
  return (
    <Suspense
      fallback={
        <main className="container mx-auto py-8">পণ্যের তথ্য লোড হচ্ছে...</main>
      }
    >
      <ProductContent params={params} />
    </Suspense>
  );
}

async function ProductContent({ params }: ParamsProps) {
  const { id } = await params;

  const products: ProductType[] = await getAllData();
  const data = products.find((item) => item.id === Number(id));

  if (!data) {
    return (
      <main className="container mx-auto py-8">
        <h2 className="text-xl font-bold">পণ্য পাওয়া যায়নি</h2>
      </main>
    );
  }

  return (
    <main className="container mx-auto">
      <div className="product-details my-8">
        <div className="product flex justify-between py-10 px-5 bg-white rounded-2xl">
          <div className="left flex gap-3">
            <span className="flex items-center gap-5">
              <p className="text-5xl">{data.image}</p>
            </span>
            <div className="flex-col items-center my-auto">
              <h5 className="text-3xl font-bold">{data.nameBn}</h5>
              <p className="text-gray-500 text-sm my-2">
                প্রতি কেজি {data.nameBn}
              </p>
              <p className="text-sm font-semibold">
                গতকালের তুলনায় আজ দাম বেড়েছে ২ টাকা
              </p>
            </div>
          </div>

          <div className="right text-center bg-gray-100 rounded-xl py-3 px-3">
            <p>আজকের দাম</p>
            <h4 className="text-3xl font-semibold">{data.today}</h4>
            <p>টাকা / কেজি</p>
            <p className="text-red-500">
              {data.change.dir === "up"
                ? "▲"
                : data.change.dir === "down"
                  ? "▼"
                  : "—"}
              {data.change.pct} %
            </p>
          </div>
        </div>

        <div>
          <PriceExplain
            data={{
              ...data,
              name: data.nameBn,
            }}
          />
        </div>
      </div>
    </main>
  );
}
