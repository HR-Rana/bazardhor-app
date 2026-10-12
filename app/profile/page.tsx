"use client";
import Image from "next/image";
import { toast } from "react-toastify";
import { authClient } from "../lib/auth-client";

export default function ProfilePage() {
  const { data: session } = authClient.useSession();
  const data = session?.user;

  const HandleSignoUt = async () => {
    try {
      const result = await authClient.signOut();

      if (result.error) {
        toast.error(result.error.message);
        return;
      }

      toast.success("User Sign Out successfully..!");
      window.location.href = "/";
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong!",
      );
    }
  };

  return (
    <main className="container mx-auto">
      <div className="py-10">
        <div className="profile-container w-[60%] mx-auto">
          <div className="title mb-5 my-10">
            <h3 className="text-2xl font-bold">আমার প্রোফাইল</h3>
            <p className="text-gray-500 font-semibold mt-2">
              আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
            </p>
          </div>
          <div className="profile-info bg-white py-7 px-6 rounded-lg flex justify-between">
            <div className="left flex items-center ">
              <span className="flex gap-2">
                {!data ? (
                  <svg
                    aria-hidden="true"
                    fill="none"
                    focusable="false"
                    height={40}
                    role="presentation"
                    viewBox="0 0 24 24"
                    width={60}
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                ) : (
                  <Image
                    src={data.image || "/default-avatar.png"}
                    width={30}
                    height={25}
                    alt="user-image"
                    className="mr-4"
                  ></Image>
                )}
              </span>
              <div>
                <h3 className="text-[24px] font-bold ">{data?.name}</h3>
                <p className="text-[14px] font-semibold text-gray-500">
                  {data?.email}
                </p>
              </div>
            </div>
            <div className="right flex items-center">
              <button
                className="text-red-500 px-3 py-2 cursor-pointer font-semibold"
                onClick={HandleSignoUt}
              >
                ↩ সাইন আউট
              </button>
            </div>
          </div>
          <div className="profile-update bg-white py-10 px-8 rounded-lg my-10">
            <span>
              <h4 className="text-xl font-semibold py-4">তথ্য</h4>
            </span>
            <div className="input block gap-4">
              <form action="" className=" shadow-none bg-white py-7 px-5">
                <label htmlFor="" className="font-semibold text-lg">
                  নাম{" "}
                </label>
                <br />
                <input
                  className="border-1 w-full my-3 py-3 rounded-lg border-gray-600  px-3"
                  type="text"
                  placeholder=""
                />
                <button className="text-white text-lg font-semibold cursor-pointer py-3 bg-green-600 rounded-lg w-full">
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
