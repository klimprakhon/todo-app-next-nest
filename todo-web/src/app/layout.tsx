"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import "../styles/globals.css";
import en from "@/dict/en.json";
import th from "@/dict/th.json";
import { useLanguageStore } from "@/store/use-language-store";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const languageMap = { en, th };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const language = useLanguageStore((state) => state.lang);
  const dict = languageMap[language] || languageMap.en;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <NextIntlClientProvider locale={language} messages={dict}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
