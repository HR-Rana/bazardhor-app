"use client";

import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";

export default function RegistrationPage() {
  return (
    <main>
      <div className="page-title w-1/2 mx-auto text-center mt-10">
        <h3 className="text-2xl font-bold">অ্যাকাউন্ট তৈরি করুন</h3>
        <p className="text-md font-semibold text-gray-500 mt-2">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>
      </div>
      <div className="form-div-container w-1/3 mx-auto  bg-white shadow-sm shadow-gray-600 my-10 rounded-2xl py-10 text-black px-7">
        <Form
          className="flex  w-full flex-col text-black gap-8"
          render={(props) => <form {...props} data-custom="foo" />}
          onSubmit={(e) => console.log("it's working")}
        >
          <TextField
            isRequired
            name="name"
            type="text"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a Valid name";
              }
              return null;
            }}
          >
            <Label className="text-black text-lg">নাম</Label>
            <Input className={"text-lg"} placeholder="যেমন: রহিম উদ্দিন" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-black text-lg">ইমেইল</Label>
            <Input className={"text-lg"} placeholder="you@example.com" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label className="text-black text-lg">পাসওয়ার্ড</Label>
            <Input className={"text-lg"} placeholder="কমপক্ষে ৮ অক্ষর" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label className="text-black text-lg">
              পাসওয়ার্ড নিশ্চিত করুন
            </Label>
            <Input className={"text-lg"} placeholder="আবার লিখুন" />
            <FieldError />
          </TextField>
          <div className="flex gap-2">
            <Button
              type="submit"
              className={
                "min-w-full rounded-sm text-lg font-bold py-7 text-center bg-green-700"
              }
            >
              অ্যাকাউন্ট তৈরি করুন
            </Button>
          </div>
        </Form>
        <div className="or border-t-[1px] my-7 border-gray-300 relative">
          <p className="absolute top-[-21] left-[40%] bg-white rounded-full p-3 left-{50%}">
            অথবা
          </p>
        </div>
        <div className="others-option text-center">
          <div className="flex gap-2 mx-auto justify-center my-5">
            <Button className="bg-transparent rounded-lg text-black  border-[1px] border-gray-500 font-semibold">
              <svg
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                fill="currentColor"
              >
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17Z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24Z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27a7.2 7.2 0 0 1 0-4.54V6.58H1.25a11.98 11.98 0 0 0 0 10.84l4.03-3.15Z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z"
                />
              </svg>{" "}
              Google দিয়ে চালিয়ে যান
            </Button>
            <Button className="bg-transparent rounded-lg text-black border-[1px] border-gray-500 font-semibold">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
                />
              </svg>
              GitHub দিয়ে চালিয়ে যান
            </Button>
          </div>

          <p className="text-center">
            অ্যাকাউন্ট নেই?{" "}
            <Link href={"/login"} className=" font-semibold text-green-600">
              সাইন আপ করুন
            </Link>
          </p>
        </div>
      </div>
      <div className="homepage-link my-8 flex justify-center font-semibold text-gray-500">
        <Link href={"/"}>← হোম পেজে ফিরে যান</Link>
      </div>
    </main>
  );
}
