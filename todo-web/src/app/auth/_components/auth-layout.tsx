"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { ReactNode } from "react";

import { paths } from "@/config/paths";

type LayoutProps = {
  children: ReactNode;
};

export const AuthLayout = ({ children }: LayoutProps) => {
  // const router = useRouter();
  const pathname = usePathname();
  const isLoginPage = pathname === paths.auth.login.getHref();
  const title = isLoginPage
    ? "Log in to your account"
    : "Register your account";

  // const searchParams = useSearchParams();
  // const redirectTo = searchParams?.get("redirectTo");

  return (
    <div
      id="auth-page"
      className="flex min-h-screen flex-col justify-center bg-gray-50 py-12 sm:px-6 lg:px-8"
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2
          id="auth-page-title"
          className="mt-3 text-center text-3xl font-extrabold text-gray-900"
        >
          {title}
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          {children}
        </div>
      </div>
    </div>
  );
};
