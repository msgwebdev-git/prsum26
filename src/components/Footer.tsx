"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";

function FooterAccordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-light-gray/30 lg:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden flex items-center justify-between w-full py-3 text-left"
      >
        <span className="text-xs font-bold tracking-widest uppercase text-medium-gray">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-medium-gray transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {/* Desktop: always visible */}
      <h4 className="hidden lg:block text-xs font-bold tracking-widest uppercase text-medium-gray mb-5">
        {title}
      </h4>
      {/* Mobile: accordion */}
      <div
        className={`lg:!max-h-none overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 pb-4" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default function Footer() {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-light-gray/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="grid lg:grid-cols-4 gap-0 lg:gap-8">
          {/* Logo & description */}
          <div className="mb-6 lg:mb-0">
            <div className="flex items-center gap-3 lg:block">
              <Image
                src="/logo.svg"
                alt="Presidency of the Republic of Moldova"
                width={48}
                height={34}
                unoptimized
                className="lg:w-16 lg:h-auto lg:mb-5"
              />
              <p className="text-dark-gray text-xs lg:text-sm leading-relaxed max-w-xs">
                {t("description")}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <FooterAccordion title={t("quickLinks")}>
            <ul className="space-y-2 lg:space-y-3">
              {(["about", "priorities", "participants", "venue"] as const).map(
                (key) => (
                  <li key={key}>
                    <a
                      href={`#${key}`}
                      className="text-deep-blue/70 text-sm hover:text-deep-blue transition-colors"
                    >
                      {t(`links.${key}`)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </FooterAccordion>

          {/* Resources */}
          <FooterAccordion title={t("resources")}>
            <ul className="space-y-2 lg:space-y-3">
              <li>
                <a href="https://www.coe.int" target="_blank" rel="noopener noreferrer" className="text-deep-blue/70 text-sm hover:text-deep-blue transition-colors">
                  Council of Europe
                </a>
              </li>
              <li>
                <a href="https://www.coe.int/en/web/cm" target="_blank" rel="noopener noreferrer" className="text-deep-blue/70 text-sm hover:text-deep-blue transition-colors">
                  Committee of Ministers
                </a>
              </li>
              <li>
                <a href="https://www.palatulrepublicii.md" target="_blank" rel="noopener noreferrer" className="text-deep-blue/70 text-sm hover:text-deep-blue transition-colors">
                  Palatul Republicii
                </a>
              </li>
            </ul>
          </FooterAccordion>

          {/* Contact */}
          <FooterAccordion title={t("contact")}>
            <ul className="space-y-2 lg:space-y-3">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-medium-gray mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z" />
                </svg>
                <span className="text-dark-gray text-sm">
                  Maria Cebotari Street 16, Chișinău
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-medium-gray mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:presidency@mfa.gov.md" className="text-deep-blue/70 text-sm hover:text-deep-blue transition-colors">
                  presidency@mfa.gov.md
                </a>
              </li>
            </ul>
          </FooterAccordion>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-light-gray/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-center justify-between">
          <p className="text-medium-gray text-[10px] sm:text-xs">
            &copy; {year} {t("copyright")}
          </p>
          <div className="flex items-center gap-1">
            <span className="w-3 h-1 rounded-full bg-medium-blue" />
            <span className="w-3 h-1 rounded-full bg-warm-yellow" />
            <span className="w-3 h-1 rounded-full bg-dark-red" />
          </div>
        </div>
      </div>
    </footer>
  );
}
