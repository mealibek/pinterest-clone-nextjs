import Link from "next/link";
import React from "react";

function Profile() {
  return (
    <main className="content">
      <div>
        <Link
          href={"/auth/signout"}
          type="button"
          className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-main-color focus:z-10 focus:ring-4 focus:ring-gray-200"
        >
          Sign Out
        </Link>
      </div>
    </main>
  );
}

export default Profile;
