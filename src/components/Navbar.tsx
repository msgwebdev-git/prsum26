"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const navKeys = [
  { key: "about", href: "/#about" },
  { key: "priorities", href: "/#priorities" },
  { key: "participants", href: "/#participants" },
  { key: "venue", href: "/#venue" },
  { key: "explore", href: "/explore" },
] as const;

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b ${
        scrolled ? "shadow-md border-light-gray" : "border-transparent"
      }`}
    >
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            id="navbar-logo"
            src="/logo.svg"
            alt="Presidency of the Republic of Moldova of the Council of Europe"
            width={56}
            height={40}
            priority
            unoptimized
          />
        </Link>

        {/* Desktop nav — centered links */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <ul className="flex items-center">
            {navKeys.map((link, i) => (
              <li key={link.href} className="flex items-center">
                <Link
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-deep-blue transition-colors hover:text-medium-blue"
                >
                  {t(link.key)}
                </Link>
                {i < navKeys.length - 1 && (
                  <span className="w-px h-4 bg-light-gray" />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right side — language + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <Link
            href="#accreditation"
            className="inline-flex items-center px-7 py-2.5 text-base font-bold text-black bg-[#FFCA06] rounded-full transition-all hover:bg-[#e6b600] hover:scale-105"
          >
            {t("accreditation")}
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="lg:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button
            type="button"
            className="flex flex-col justify-center items-center w-10 h-10 rounded-md transition-colors hover:bg-deep-blue/5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <div className="relative w-5 h-5">
              <span
                className={`absolute left-0 top-1/2 block h-0.5 w-5 bg-deep-blue transition-all duration-300 ${
                  mobileOpen ? "rotate-45" : "-translate-y-[5px]"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-0.5 w-5 bg-deep-blue transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-0.5 w-5 bg-deep-blue transition-all duration-300 ${
                  mobileOpen ? "-rotate-45" : "translate-y-[5px]"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[56px] z-40 bg-white transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-0"
        }`}
      >
        <ul className="flex flex-col px-6 pt-6">
          {navKeys.map((link, i) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-base font-medium text-deep-blue transition-colors hover:text-medium-blue"
              >
                {t(link.key)}
              </Link>
              {i < navKeys.length - 1 && (
                <div className="mx-4 h-px bg-light-gray/50" />
              )}
            </li>
          ))}
          <li className="mt-6 px-4">
            <Link
              href="#accreditation"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-full px-7 py-3.5 text-lg font-bold text-black bg-[#FFCA06] rounded-full transition-all hover:bg-[#e6b600] hover:scale-105"
            >
              {t("accreditation")}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
