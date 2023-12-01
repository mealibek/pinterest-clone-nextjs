"use client";

import Input from "@/components/UI/Input";
import React, { useState } from "react";
import Pinterest from "@/assets/svg/pinterest.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";

function CreatePinForm() {
  const router = useRouter();
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  return (
    <div className="max-w-[400px] m-auto mt-10 rounded-lg border border-gray-200 p-4 space-y-4">
      <div className="grid place-items-center space-y-4">
        <Link href={"/"}>
          <Pinterest />
        </Link>
        <h2 className="text-3xl font-medium">Create your Pin</h2>

        {errorMessages.length > 0 &&
          errorMessages.map((error, index) => (
            <p className="text-red-700 text-xs" key={index}>
              {error}
            </p>
          ))}
      </div>
      <form action="" className="">
        <div className="mb-4">
          <Input type="text" label="Pin Title" id="pin_title" />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Pin Description
          </label>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-900"
            placeholder="Pin Description text here..."
          ></textarea>
        </div>

        <div className="w-full mb-4">
          <div className="mx-auto">
            <label
              htmlFor="example5"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Upload Pin Image
            </label>
            <label className="flex w-full cursor-pointer appearance-none items-center justify-center rounded-lg border-2 border-dashed border-gray-200 p-6 transition-all hover:border-blue-900">
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
                    className="font-medium text-gray-900 hover:text-blue-900"
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

        <div className="mb-4">
          <Input type="text" label="Pin Website" id="pin_website" />
        </div>
        <div className="mb-4">
          <Input type="text" label="Pin URL" id="pin_url" />
        </div>

        <div className="flex items-center gap-2">
          <button className="text-white bg-main-color hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-sm px-5 py-2 text-center font-bold w-full">
            Submit
          </button>
          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full text-sm px-5 py-2 font-bold"
            onClick={() => router.back()}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePinForm;
