import Image from "next/image";
import NavItems from "./components/navBar/NavItems";
import { cache, Suspense } from "react";
import PriceBased from "./components/priceBased/priceBased";
import HeroSection from "./components/heroSection/HeroSection";

export const getAllData = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products",
    {
      next: {
        revalidate: 300,
      },
    },
  );
  return res.json();
};

export default async function Home() {
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
