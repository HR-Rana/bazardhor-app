import Image from "next/image";
import React from "react";

export default function ProfilePage() {
  return (
    <main>
      <div>
        <div className="profile-container">
          <div className="title mb-5">
            <h3>আমার প্রোফাইল</h3>
            <p>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
          </div>
          <div className="profile-info">
            <div className="left">
              <span>
                <Image src={""} alt="user-image"></Image>
              </span>
              <div>
                <h3>Name of User</h3>
                <p>rezwanahmed@gmail.com</p>
              </div>
            </div>
            <div className="right">
              <button className="text-red-500 px-3 py-2">↩ সাইন আউট</button>
            </div>
          </div>
          <div className="profile-update">
            <span>
              <h4>তথ্য</h4>
            </span>
            <div className="input block gap-4">
              <form action="" className="block ">
                <label htmlFor="">নাম </label>
                <input
                  className="border-1 border-gray-600 py-1 rounded-sm px-3"
                  type="text"
                  placeholder=""
                />
                <button className="text-white bg-green-500 rounded-lg w-full">
                  আপডেট{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
