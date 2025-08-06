import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
};

export const Button = ({ children, isLoading, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50 ${
        props.className || ""
      }`}
      disabled={props.disabled || isLoading}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};
