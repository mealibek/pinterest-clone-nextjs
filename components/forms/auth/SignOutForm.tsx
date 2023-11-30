"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

function SignOutForm() {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signOut({ redirect: false });
    router.refresh();
  };

  return (
    <div className="max-w-[400px] m-auto mt-4">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center mb-4 text-lg font-bold">Выход из системы</h1>
        <h2 className="mb-4 text-sm text-gray-500 font-medium text-center">
          Вы уверены, что хотите выйти из учетной записи
        </h2>
        <button
          type="submit"
          className="w-full text-white bg-main-color hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full px-5 py-2 text-center font-bold"
        >
          Sign Out
        </button>
      </form>
    </div>
  );
}

export default SignOutForm;
