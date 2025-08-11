"use client";

import { useLanguageStore } from "@/store/use-language-store";
import { useTranslations } from "next-intl";

export default function Home() {
  const { lang, setLang } = useLanguageStore();
  const t = useTranslations();
  return (
    <div id="main-page">
      <div className="w-full h-full px-10 py-8 flex flex-col gap-4">
        <span>This is the homepage of the Todo Application</span>
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value as "en" | "th")}
        >
          <option value="en">English</option>
          <option value="th">Thai</option>
        </select>
        <span>{t("auth.password")}</span>
      </div>
    </div>
  );
}
