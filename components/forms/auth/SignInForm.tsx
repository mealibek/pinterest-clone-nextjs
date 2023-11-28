"use client";

import Link from "next/link";
import React, { useState } from "react";
import Pinterest from "@/assets/svg/pinterest.svg";
import Input from "@/components/UI/Input";
import { useForm } from "react-hook-form";
import { SignInSchema, SignInSchemaType } from "@/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { emailCheckRequest } from "@/services/auth";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { signIn, useSession } from "next-auth/react";

function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema as any),
    mode: "onBlur",
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth);
  const { data: session } = useSession();

  const onSubmit = async (data: SignInSchemaType) => {
    try {
      await emailCheckRequest(data.email);

      const signInResponse = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
        callbackUrl: callbackUrl ?? "/",
      });

      if (
        signInResponse?.ok &&
        !signInResponse.error &&
        signInResponse.status === 200
      ) {
        router.refresh();
      } else if (signInResponse?.error) {
        setErrorMessages(["Неверный email или пароль"]);
      }
    } catch (error: any) {
      if (error.response?.status == 404) {
        setErrorMessages(["Упс, Email не зарегистрирован."]);
      } else if (error.response?.data) {
        const errorObj = error.response.data;
        let errors: string[] = [];
        for (const key in errorObj) {
          errors.push(errorObj[key][0]);
        }
        setErrorMessages(errors);
      } else {
        setErrorMessages(["Проблема с сервером, попробуйте позже"]);
      }
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
