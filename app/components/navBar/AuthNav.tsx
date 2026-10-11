"use client";

import { useState } from "react";
import Link from "next/link";
import ProfileIcon from "../profileIcon/ProfileIcon";

export default function AuthNav() {
  const [profile, setProfile] = useState(false);

  return (
    <>
      {profile ? (
        <ProfileIcon />
      ) : (
        <div className="right-content flex gap-3">
          <Link
            href="/login"
            className="border border-gray-400 text-black px-4 py-2 rounded hover:bg-green-600"
          >
            সাইন ইন
          </Link>

          <Link
            href="/registration"
            className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-600 shadow-b shadow-green-400"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </>
  );
}
