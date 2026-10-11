import { getAllData } from "@/app/page";
import Link from "next/link";
import logo from "@/app/img/logo-icon.png";
import Marque from "./marque";
import BanglaDate from "../banglaDate/banglaDate";
import Image from "next/image";
import ProfileIcon from "../profileIcon/ProfileIcon";
import AuthNav from "./AuthNav";
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
    ...new Map(
      getData?.map((item: any) => [
        item.category,
        {
          name: item.categoryNameBn,
          slug: item.category,
          icon: item.categoryIcon || "📦",
        },
      ]),
    ).values(),
  ];

  return (
    <main className="bg-white">
      <div className="container mx-auto">
        <div className="flex  justify-between items-center p-4">
          <div className="logo flex items-center gap-5">
            <span>
              <Image src={logo} width={30} className="text-2xl" alt="logo" />
            </span>
            <div>
              <h1 className="text-2xl font-bold">
                <Link href={"/"}>BazarDhor</Link>
              </h1>
              <p>
                <BanglaDate />
              </p>
            </div>
          </div>
          {
            // navbar authenticate
            <AuthNav />
          }
        </div>

        <div className="menu-items">
          <div className="flex">
            {navItems?.map((item: any) => (
              <Link
                key={item.name}
                href={`/category/${item.slug}`}
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
