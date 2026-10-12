import React from "react";

export default function Footer() {
  return (
    <div className="bg-white py-4 px-8 container mx-auto">
      <div className="block gap-3 md:flex justify-between">
        <p className="text-[11px] md:text-md">
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </p>
        <p className="text-[11px] md:text-md">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </div>
  );
}
