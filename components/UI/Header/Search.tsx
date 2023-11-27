import { IconSearch } from "@tabler/icons-react";
import React from "react";

function Search() {
  return (
    <div className="w-full relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <IconSearch width={20} height={20} className="text-gray-700" />
      </div>

      <input
        type="search"
        id="default-search"
        className="w-full pl-10  p-3 text-sm font-medium text-black placeholder:text-gray-700 rounded-full bg-gray-200 focus:ring-blue-300 focus:ring-4 focus:border-blue-300 focus:outline-none focus:shadow-md border-none"
        placeholder="Search Mockups, Logos..."
        required
      />
    </div>
  );
}

export default Search;
