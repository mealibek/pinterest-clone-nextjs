import { options } from "@/app/api/auth/[...nextauth]/options";
import SignOutForm from "@/components/forms/auth/SignOutForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

async function SignOut() {
  const session = await getServerSession(options);

  if (!session?.user) {
    return redirect("/auth/signin");
  }

  return (
    <main className="content">
      <SignOutForm />
    </main>
  );
}

export default SignOut;
