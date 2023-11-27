"use client";

import React from "react";
import Pinterest from "@/assets/svg/pinterest.svg";
import Link from "next/link";
import Search from "./Search";
import {
  IconBellFilled,
  IconMessageCircle2Filled,
  IconChevronDown,
  IconMoodKidFilled,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { CustomFlowbiteTheme, Flowbite, Tooltip } from "flowbite-react";

const customTheme: CustomFlowbiteTheme = {
  tooltip: {
    base: "absolute inline-block z-10 rounded-full py-2 px-3 text-sm font-medium shadow-sm",
    style: {
      dark: "bg-black text-white",
    },
    arrow: {
      base: "absolute z-10 h-2 w-2 rotate-45",
      style: {
        dark: "bg-black",
      },
      placement: "-4px",
    },
  },
};

function Header() {
  const pathName = usePathname();
  return (
    <header className="px-6 py-3 w-full flex items-center gap-4 min-w-[1024px]">
      <div className="flex items-center gap-2 text-sm">
        <Link href="/" className={`p-2 hover:bg-gray-200 rounded-full`}>
          <Pinterest />
        </Link>

        <Link
          href="/"
          className={`${
            pathName == "/" ? "bg-black text-white" : " hover:bg-gray-200"
          } p-3 px-5 rounded-full font-medium`}
        >
          Home
        </Link>
        <Link
          href="/profile/pins/create"
          className={`${
            pathName == "/profile/pins/create"
              ? "bg-black text-white"
              : " hover:bg-gray-200"
          } p-3 px-5 rounded-full font-medium`}
        >
          Create
        </Link>
      </div>

      <Search />

      <div className="text-gray-500 flex items-center gap-2">
        <Flowbite theme={{ theme: customTheme }}>
          <Tooltip content="Notifications" placement="bottom">
            <Link
              href="/profile/notifications"
              className="p-2 hover:bg-gray-200 rounded-full block"
            >
              <IconBellFilled width={25} height={25} />
            </Link>
          </Tooltip>

          <Tooltip content="Messages" placement="bottom">
            <Link
              href="/profile/messages"
              className="p-2 hover:bg-gray-200 rounded-full block"
            >
              <IconMessageCircle2Filled width={25} height={25} />
            </Link>
          </Tooltip>
          <Tooltip content="Your profile" placement="bottom">
            <Link
              href="/profile"
              className="p-2 hover:bg-gray-200 rounded-full block"
            >
              <IconMoodKidFilled width={25} height={25} />
            </Link>
          </Tooltip>
          <Tooltip content="Accounts & more options" placement="bottom">
            <button className="p-0.5 hover:bg-gray-200 rounded-full block">
              <IconChevronDown width={25} height={25} />
            </button>
          </Tooltip>
        </Flowbite>
      </div>
    </header>
  );
}

export default Header;
