import Image from "next/image";
import NavItems from "./components/navBar/NavItems";
import { Suspense } from "react";
import PriceBased from "./components/priceBased/priceBased";
import HeroSection from "./components/heroSection/HeroSection";

export const getAllData = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  return res.json();
};

export default async function Home() {
  const products = await getAllData();
  return (
    <main className="container mx-auto">
      <section className="hero-section">
        <HeroSection />
      </section>
      <section>
        <PriceBased />
      </section>
    </main>
  );
}
