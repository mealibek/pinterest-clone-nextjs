"use client";

import React, { useEffect, useState } from "react";
import Pinterest from "@/assets/svg/pinterest.svg";
import Link from "next/link";
import Search from "./Search";
import {
  IconBellFilled,
  IconMessageCircle2Filled,
  IconChevronDown,
  IconMoodKidFilled,
  IconUserFilled,
  IconSquareRoundedPlusFilled,
  IconLogout,
  IconBookmarksFilled,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import {
  CustomFlowbiteTheme,
  Dropdown,
  Flowbite,
  Tooltip,
} from "flowbite-react";
import { IconShieldLockFilled } from "@tabler/icons-react";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const customTheme: CustomFlowbiteTheme = {
  tooltip: {
    base: "absolute inline-block z-20 rounded-full py-2 px-3 text-sm font-medium shadow-sm",
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
  dropdown: {
    floating: {
      base: "z-10 w-fit rounded-xl divide-y divide-gray-100 shadow focus:outline-none",
    },
  },
};

function Header() {
  const pathName = usePathname();
  const { data: session } = useSession();
  const user = useSelector((state: RootState) => state.auth.user);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    !!(session?.user && user.id !== 0)
  );

  useEffect(() => {
    if (session?.user && user.id !== 0) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [session?.user, user.id]);

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
        {isLoggedIn && (
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
        )}
      </div>

      <Search />

      <div className="text-gray-600 flex items-center gap-2">
        <Flowbite theme={{ theme: customTheme }}>
          {isLoggedIn && (
            <Tooltip content="Notifications" placement="bottom" arrow={false}>
              <Link
                href="/profile/notifications"
                className="p-2 hover:bg-gray-200 rounded-full block"
              >
                <IconBellFilled width={25} height={25} />
              </Link>
            </Tooltip>
          )}

          {isLoggedIn && (
            <Tooltip content="Messages" placement="bottom" arrow={false}>
              <Link
                href="/profile/messages"
                className="p-2 hover:bg-gray-200 rounded-full block"
              >
                <IconMessageCircle2Filled width={25} height={25} />
              </Link>
            </Tooltip>
          )}

          {isLoggedIn && (
            <Tooltip content="Your profile" placement="bottom" arrow={false}>
              <Link
                href="/profile"
                className="p-2 hover:bg-gray-200 rounded-full block"
              >
                <IconMoodKidFilled width={25} height={25} />
              </Link>
            </Tooltip>
          )}

          {!isLoggedIn && (
            <>
              <Link
                href={"/auth/signin"}
                className="text-white bg-main-color hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full px-5 py-2 text-center font-medium whitespace-nowrap"
              >
                Log in
              </Link>

              <Link
                href={"/auth/signup"}
                className="text-black bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full px-5 py-2 text-center font-medium whitespace-nowrap"
              >
                Sign up
              </Link>
            </>
          )}

          {isLoggedIn && (
            <Dropdown
              label=""
              renderTrigger={() => (
                <div>
                  <Tooltip
                    content="Accounts & more options"
                    placement="bottom"
                    arrow={false}
                  >
                    <button className="p-0.5 hover:bg-gray-200 rounded-full block">
                      <IconChevronDown width={25} height={25} />
                    </button>
                  </Tooltip>
                </div>
              )}
            >
              <div className="w-[250px] font-medium grid">
                <Dropdown.Item>
                  <Link
                    href={"/profile"}
                    className="w-full flex items-center gap-2"
                  >
                    <IconUserFilled width={25} height={25} />
                    View Profile
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    href={"/profile/pins/create"}
                    className="w-full flex items-center gap-2"
                  >
                    <IconSquareRoundedPlusFilled width={25} height={25} />
                    Create Pin
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    href={"/profile/pins/saved"}
                    className="w-full flex items-center gap-2"
                  >
                    <IconBookmarksFilled width={25} height={25} />
                    View Saved Pins
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    href={"/profile/notifications"}
                    className="w-full flex items-center gap-2"
                  >
                    <IconBellFilled width={25} height={25} />
                    Notifications
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    href={"/profile/messages"}
                    className="w-full flex items-center gap-2"
                  >
                    <IconMessageCircle2Filled width={25} height={25} />
                    Messages
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    href={"/auth/signout"}
                    className="w-full flex items-center gap-2"
                  >
                    <IconShieldLockFilled width={25} height={25} />
                    Sign Out
                  </Link>
                </Dropdown.Item>
              </div>
            </Dropdown>
          )}
        </Flowbite>
      </div>
    </header>
  );
}

export default Header;
