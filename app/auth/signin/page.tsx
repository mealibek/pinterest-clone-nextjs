import { options } from "@/app/api/auth/[...nextauth]/options";
import SignInForm from "@/components/forms/auth/SignInForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

async function SignIn() {
  const session = await getServerSession(options);

  if (session?.user || session?.expires) {
    return redirect("/");
  }

  return (
    <main className="content">
      <SignInForm />
    </main>
  );
}

export default SignIn;
