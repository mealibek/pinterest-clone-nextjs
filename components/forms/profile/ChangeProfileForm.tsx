"use client";

import Input from "@/components/UI/Input";
import { RootState } from "@/store";
import { IconShieldLockFilled } from "@tabler/icons-react";
import React from "react";
import { useSelector } from "react-redux";

function ChangeProfileForm() {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="max-w-[400px] m-auto mt-10">
      <h2 className="font-bold text-2xl mb-4">Profile Information</h2>
      <form className="w-full">
        <div className="grid grid-cols-2 place-items-start gap-2 mb-4">
          <div>
            <Input
              label="Email"
              value={user.email}
              type="email"
              id="email"
              disabled
            />
          </div>
          <div>
            <button
              type="button"
              className="py-2.5 px-5 text-sm w-full font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-main-color focus:z-10 focus:ring-4 focus:ring-gray-200 flex items-center gap-2 whitespace-nowrap"
            >
              <IconShieldLockFilled width={20} height={20} />
              Change Password
            </button>
          </div>
          <div>
            <Input
              label="First Name"
              value={user.first_name}
              type="text"
              id="first_name"
            />
          </div>
          <div>
            <Input
              label="Last Name"
              value={user.last_name}
              type="text"
              id="last_name"
            />
          </div>
        </div>
        <div className="w-full mb-4">
          <div className="mx-auto">
            <label
              htmlFor="example5"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Upload file
            </label>
            <label className="flex w-full cursor-pointer appearance-none items-center justify-center rounded-lg border-2 border-dashed border-gray-200 p-6 transition-all hover:border-main-color">
              <div className="space-y-1 text-center">
                <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    />
                  </svg>
                </div>
                <div className="text-gray-600">
                  <a
                    href="#"
                    className="font-medium text-gray-900 hover:text-main-color"
                  >
                    Click to upload
                  </a>{" "}
                  or drag and drop
                </div>
                <p className="text-sm text-gray-500">
                  PNG or JPG (max. 800x400px)
                </p>
              </div>
              <input id="example5" type="file" className="sr-only" />
            </label>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="text-white bg-main-color hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-sm px-5 py-2 text-center font-bold w-full">
            Save
          </button>
          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full text-sm px-5 py-2 font-bold"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChangeProfileForm;
