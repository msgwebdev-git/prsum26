import Image from "next/image";
import { useTranslations } from "next-intl";
import ScrollReveal, { ScrollRevealGroup, ScrollRevealItem } from "@/components/ScrollReveal";

const attractions = [
  { key: "stefan", src: "/explore/stefan.jpg" },
  { key: "triumphal", src: "/explore/triumphal.jpg" },
  { key: "cricova", src: "/explore/cricova.jpg" },
  { key: "orheiul", src: "/explore/orheiul.jpg" },
];

export default function WhatToSee() {
  const t = useTranslations("Explore.whatToSee");

  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#003DA5]/5 text-[#003DA5] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD200]" />
            {t("badge")}
          </div>
          <h2 className="text-deep-blue text-3xl sm:text-4xl font-bold mb-4">
            {t("title")}
          </h2>
          <p className="text-dark-gray text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </ScrollReveal>

        <ScrollRevealGroup className="grid sm:grid-cols-2 gap-8" stagger={0.15}>
          {attractions.map((item) => (
            <ScrollRevealItem key={item.key}>
              <div className="group">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={item.src}
                    alt={t(`attractions.${item.key}.title`)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="mt-5">
                  <h3 className="text-deep-blue text-lg font-bold mb-2 group-hover:text-medium-blue transition-colors">
                    {t(`attractions.${item.key}.title`)}
                  </h3>
                  <p className="text-dark-gray text-sm leading-relaxed">
                    {t(`attractions.${item.key}.description`)}
                  </p>
                </div>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}
