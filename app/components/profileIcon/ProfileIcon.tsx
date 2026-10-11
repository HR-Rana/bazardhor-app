import { Button, Dropdown, Label } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default function ProfileIcon() {
  return (
    <main className="">
      <Dropdown>
        <Button aria-label="Menu" variant="secondary">
          <div className="profile-icon flex gap-1 items-center">
            <span>
              {/* <Image src={} alt="profile-img"></Image> */}{" "}
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
            </span>
            <h4>{"Rezwan"} </h4>
          </div>
        </Button>
        <Dropdown.Popover>
          <Dropdown.Menu
            className="px-3 py-5 gap-4"
            onAction={(key) => console.log(`Selected: ${key}`)}
          >
            <Dropdown.Item isDisabled>
              <div>
                <h4 className="text-[17px] font-semibold">Rizwan Ahamed </h4>
                <p className="text-[12px] font-semibold text-gray-500">
                  Rizawan@gmai.com
                </p>
              </div>
            </Dropdown.Item>
            <Dropdown.Item id="copy-link" textValue="Copy link">
              <Link href={"/profile"}>
                {" "}
                <p>👤 আমার প্রোফাইল</p>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item id="edit-file" textValue="Edit file">
              <button className="text-red-500 cursor-pointer">
                ↩ সাইন আউট
              </button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown>
    </main>
  );
}
