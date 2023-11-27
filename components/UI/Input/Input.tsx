"use client";

import React, { InputHTMLAttributes, forwardRef } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: string;
}

type Ref = HTMLInputElement;

const Input = forwardRef<Ref, Props>((props, ref) => {
  return (
    <>
      <div className="relative">
        <input
          {...props}
          id={props.id}
          className={`block px-2 pb-2.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-blue-800 peer ${props.className}`}
          ref={ref}
          placeholder=""
        />

        <label
          htmlFor={props.id}
          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          {props.label}
        </label>
      </div>
      {props.error && (
        <p className="text-xs text-red-600 mt-2 font-medium">{props.error}</p>
      )}
    </>
  );
});

export default Input;
