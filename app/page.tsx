import Image from "next/image";
import NavItems from "./components/navBar/NavItems";
import { Suspense } from "react";

export const getAllData = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  return res.json();
};

export default async function Home() {
  const products = await getAllData();
  return (
    <main>
      <div className="navigation-area">
        <NavItems />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        total products: {products.length}
      </Suspense>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Get started by editing&nbsp;
            <code className="font-mono font-bold">app/page.tsx</code>
          </p>
        </div>
      </div>
    </main>
  );
}
