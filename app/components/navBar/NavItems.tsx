import { getAllData } from "@/app/page";
import Link from "next/link";

import Marque from "./marque";
// import "MarqueeText/styles.css";

export default async function NavItems() {
  const date = new Date();

  const banglaDate = new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);

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
  console.log(navItems);
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
    <main>
      <div className="flex  justify-between items-center p-4 bg-gray-200">
        <div className="logo">
          <h1 className="text-2xl font-bold">BazarDhor</h1>
          <p>{banglaDate}</p>
        </div>
        <div className="right-content">
          <span>
            <Link className="text-lg font-semibold" href="/login">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Login
              </button>
            </Link>
            <Link className="text-lg font-semibold " href="/register">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
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

      <div className="marquee-text flex gap-3 py-2 bg-gray-100">
        <Marque />
      </div>
    </main>
  );
}
