"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useTransition } from "react";

const labels: Record<string, string> = {
  en: "EN",
  fr: "FR",
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function switchLocale(next: string) {
    if (next === locale) return;

    const scrollY = window.scrollY;

    startTransition(() => {
      router.replace(pathname, { locale: next, scroll: false });
    });

    // Restore scroll after navigation completes
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollY);
    });
  }

  return (
    <div
      className={`flex items-center gap-1 rounded-full border border-light-gray px-1 py-0.5 transition-opacity ${
        isPending ? "opacity-50" : ""
      }`}
    >
      {routing.locales.map((l) => (
        <button
          key={l}
          disabled={isPending}
          onClick={() => switchLocale(l)}
          className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
            l === locale
              ? "bg-deep-blue text-white"
              : "text-deep-blue/60 hover:text-deep-blue"
          }`}
        >
          {labels[l]}
        </button>
      ))}
    </div>
  );
}
