import { getAllData } from "@/app/page";
import Link from "next/link";

import Marque from "./marque";
import BanglaDate from "../banglaDate/banglaDate";
// import "MarqueeText/styles.css";

export default async function NavItems() {
  const categoryIcons: Record<string, string> = {
    চাল: "🌾",
    ডাল: "🫘",
    তেল: "🛢️",
    সবজি: "🥬",
    মাছ: "🐟",
    মাংস: "🍗",
    ফল: "🍎",
    মসলা: "🌶️",
  };
  const getData = await getAllData();
  const navItems = [
    ...new Set(getData.map((item: any) => item.categoryNameBn)),
  ].map((category) => ({
    name: category,
    icon: categoryIcons[category] || "📦",
  }));

  const NavLink = [
    ...navItems.map((item: any) => (
      <li key={item.name}>
        <Link href={`#${item.name}`}>
          {item.icon} {item.name}
        </Link>
      </li>
    )),
  ];

  return (
    <main className="bg-white">
      <div className="container mx-auto">
        <div className="flex  justify-between items-center p-4">
          <div className="logo">
            <h1 className="text-2xl font-bold">
              <Link href={"/"}>BazarDhor</Link>
            </h1>
            <p>
              <BanglaDate />
            </p>
          </div>
          <div className="right-content">
            <span className="flex gap-4">
              <Link className="text-lg font-semibold" href="/login">
                <button className="bg-orange-800 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Login
                </button>
              </Link>
              <Link className="text-lg font-semibold " href="/register">
                <button className="bg-orange-700 text-white px-4 py-2 rounded hover:bg-orange-600">
                  {" "}
                  Sign Up
                </button>
              </Link>
            </span>
          </div>
        </div>

        <div className="menu-items">
          <div className="flex">
            {navItems.map((item: any) => (
              <Link
                key={item.name}
                href={`#${item.name}`}
                className="px-4 py-2 hover:bg-gray-300 rounded"
              >
                {item.icon} {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="marquee-text flex gap-3 py-2 bg-gray-100">
        <Marque />
      </div>
    </main>
  );
}
