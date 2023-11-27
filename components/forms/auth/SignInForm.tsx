"use client";

import Link from "next/link";
import React from "react";
import Pinterest from "@/assets/svg/pinterest.svg";
import Input from "@/components/UI/Input";

function SignInForm() {
  return (
    <div className="max-w-[400px] m-auto mt-10 rounded-lg border border-gray-200 p-4 space-y-4">
      <div className="grid place-items-center space-y-4">
        <Link href={"/"}>
          <Pinterest />
        </Link>
        <h2 className="text-3xl font-medium">Welcome to Pinterest!</h2>
      </div>
      <form className="w-full">
        <div className="mb-4">
          <Input label="Email Address" id="email" type="email" />
        </div>
        <div className="mb-4">
          <Input label="Password" id="password" type="password" />
        </div>
        <div className="mb-4">
          <Link href={"/#"} className="text-sm font-medium hover:underline">
            Forgot your password?
          </Link>
        </div>
        <div className="mb-4">
          <button
            type="button"
            className="w-full text-white bg-main-color hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full px-5 py-2 text-center font-bold"
          >
            Log in
          </button>
        </div>
        <div className="text-center">
          <Link
            href={"/auth/signup"}
            className="hover:underline font-semi-bold text-sm font-medium text-gray-700"
          >
            Not Pinterest yet? Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;