"use client";

import Link from "next/link";
import React, { useState } from "react";
import Pinterest from "@/assets/svg/pinterest.svg";
import Input from "@/components/UI/Input";
import { useForm } from "react-hook-form";
import { SignInSchema, SignInSchemaType } from "@/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailCheckRequest } from "@/services/auth";
import { signIn } from "next-auth/react";

function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema as any),
    mode: "onBlur",
  });
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const extractErrorMessages = (error: any): string[] => {
    if (error.response) {
      if (error.response.status === 404) {
        return ["Oops, Email not registered."];
      } else if (error.response.data) {
        const errorObj = error.response.data;
        return Object.values(errorObj as string).flat();
      }
    }

    if (error.status === 401) {
      return ["Invalid email or password"];
    }

    return ["Server issue, please try again later"];
  };

  const onSubmit = async (data: SignInSchemaType) => {
    try {
      await emailCheckRequest(data.email);
      const req = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: true,
        callbackUrl: "/auth/signin/redirect",
      });

      if (req?.error && !req.ok) {
        setErrorMessages(["Invalid Email or password."]);
      }
    } catch (error: any) {
      setErrorMessages(extractErrorMessages(error));
    }
  };

  return (
    <div className="max-w-[400px] m-auto mt-10 rounded-lg border border-gray-200 p-4 space-y-4">
      <div className="grid place-items-center space-y-4">
        <Link href={"/"}>
          <Pinterest />
        </Link>
        <h2 className="text-3xl font-medium">Welcome to Pinterest!</h2>
        <h3 className="text-xl font-medium">Sign In</h3>

        {errorMessages.length > 0 &&
          errorMessages.map((error, index) => (
            <p className="text-red-700 text-xs" key={index}>
              {error}
            </p>
          ))}
      </div>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-4">
          <Input
            label="Email Address"
            id="email"
            type="email"
            error={errors.email?.message}
            {...register("email")}
          />
        </div>
        <div className="mb-4">
          <Input
            label="Password"
            id="password"
            type="password"
            error={errors.password?.message}
            {...register("password")}
          />
        </div>
        <div className="mb-4">
          <Link href={""} className="text-sm font-medium hover:underline">
            Forgot your password?
          </Link>
        </div>
        <div className="mb-4">
          <button
            type="submit"
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
