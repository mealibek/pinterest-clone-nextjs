import { options } from "@/app/api/auth/[...nextauth]/options";
import SignUpForm from "@/components/forms/auth/SignUpForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

async function SignUp() {
  const session = await getServerSession(options);

  if (session && session.user) {
    return redirect("/");
  }

  return (
    <main className="content">
      <SignUpForm />
    </main>
  );
}

export default SignUp;
