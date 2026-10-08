import { getAllData } from "@/app/page";
import PriceExplain from "../PriceExplain";

interface paramsProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DetailPage({ params }: paramsProps) {
  const { id } = await params;

  const products = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  const res = await products.json();
  const data = res.find((item) => item.id === Number(id));

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
            <p className="text-red-500">▲{data.change.pct} %</p>
          </div>
        </div>

        <div>
          <PriceExplain data={data} />
        </div>
      </div>
    </main>
  );
}
