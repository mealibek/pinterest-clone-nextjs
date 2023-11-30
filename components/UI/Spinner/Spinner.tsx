import React from "react";
import { HashLoader } from "react-spinners";
function Spinner() {
  return (
    <div className="w-full">
      <div>
        <HashLoader color="#647C90" size={30} className="mt-10 m-auto" />
      </div>
    </div>
  );
}

export default Spinner;
