"use client";

import Spinner from "@/components/UI/Spinner";
import { getAuthInfo } from "@/services/auth";
import { setAuthentication } from "@/store/auth/auth.slice";
import { AuthUserType } from "@/types/redux/auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

function AuthRedirect() {
  const { data: session, status } = useSession();
  const dispatch = useDispatch();
  const router = useRouter();

  const getUserData = async (token: string) => {
    try {
      const req = await getAuthInfo(token);
      const { id, email, first_name, last_name, profile_image } = req.data;
      const data: AuthUserType = {
        user: {
          id,
          email,
          first_name,
          last_name,
          profile_image,
        },
      };

      dispatch(setAuthentication(data));
      router.push("/profile");
    } catch (error: any) {
      console.log(error);
      console.log(session?.user);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      getUserData(session?.user.access ?? "");
    } else {
      router.push("/auth/signin");
    }
  }, [dispatch, status]);
  return (
    <main className="content">
      <Spinner />
    </main>
  );
}

export default AuthRedirect;
