"use client";

import { RootState } from "@/store";
import { IconBrandPinterest } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

function ProfileBlock() {
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <div className="w-full grid place-items-start mt-10">
      <div className="m-auto grid place-items-center">
        <Image
          className="p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 m-auto mb-4"
          width={100}
          height={100}
          src={
            user.profile_image ??
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          }
          alt="Profile Avatar Image"
          style={{ objectFit: "contain", objectPosition: "center" }}
        />

        <h2 className="font-bold text-2xl text-gray-800 mb-2">
          {user.first_name} {user.last_name}
        </h2>
        <div className="flex items-center gap-1 font-medium text-gray-800 mb-2">
          <IconBrandPinterest width={20} height={20} />
          {user.email}
        </div>

        <p className="font-medium text-gray-800 mb-4">No following.</p>

        <div className="flex items-center gap-2">
          <Link
            href="/profile/pins/create"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full text-sm px-5 py-2.5 font-bold"
          >
            Create Pin
          </Link>
          <Link
            href="/profile/details"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full text-sm px-5 py-2.5 font-bold"
          >
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileBlock;
