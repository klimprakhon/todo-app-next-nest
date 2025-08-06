import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type InputProps = {
  label: string;
  type?: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
};

export const Input = ({
  label,
  type = "text",
  registration,
  error,
}: InputProps) => {
  const id = registration.name;

  return (
    <div className="space-y-1">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        {...registration}
        className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error && <p className="text-sm text-red-600">{error.message}</p>}
    </div>
  );
};
