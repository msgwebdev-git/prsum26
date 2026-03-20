import { useTranslations } from "next-intl";
import { Handshake, ScrollText, ShieldAlert } from "lucide-react";
import ScrollReveal, { ScrollRevealGroup, ScrollRevealItem } from "@/components/ScrollReveal";

const priorities = [
  {
    key: "ukraine",
    icon: <Handshake className="w-7 h-7" strokeWidth={1.5} />,
  },
  {
    key: "democracy",
    icon: <ScrollText className="w-7 h-7" strokeWidth={1.5} />,
  },
  {
    key: "disinformation",
    icon: <ShieldAlert className="w-7 h-7" strokeWidth={1.5} />,
  },
];

export default function PrioritiesSection() {
  const t = useTranslations("Priorities");

  return (
    <section id="priorities" className="relative bg-deep-blue py-20 sm:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-medium-blue/20 blur-[100px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[400px] h-[400px] rounded-full bg-light-blue/10 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-warm-yellow" />
            {t("badge")}
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-6">
            {t("title")}
          </h2>
          <div className="w-16 h-1 bg-warm-yellow rounded-full mx-auto mb-8" />
          <p className="text-white/75 text-lg max-w-3xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </ScrollReveal>

        {/* Intro text */}
        <ScrollReveal delay={0.1}>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 mb-12 max-w-4xl mx-auto">
            <p className="text-white/80 text-base leading-relaxed mb-4">
              {t("intro1")}
            </p>
            <p className="text-white/80 text-base leading-relaxed">
              {t("intro2")}
            </p>
          </div>
        </ScrollReveal>

        {/* Motto */}
        <ScrollReveal direction="none" delay={0.2}>
          <div className="text-center mb-14">
            <p className="text-warm-yellow text-xl sm:text-2xl font-bold italic">
              &ldquo;{t("motto")}&rdquo;
            </p>
          </div>
        </ScrollReveal>

        {/* Three priorities */}
        <ScrollRevealGroup className="grid md:grid-cols-3 gap-6" stagger={0.15}>
          {priorities.map((p, i) => (
            <ScrollRevealItem key={p.key}>
              <div className="bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-colors h-full">
                <div className="w-14 h-14 rounded-xl bg-warm-yellow/15 text-warm-yellow flex items-center justify-center mb-6">
                  {p.icon}
                </div>
                <div className="text-white/40 text-sm font-bold mb-2">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-white text-lg font-bold mb-4">
                  {t(`priorities.${p.key}.title`)}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {t(`priorities.${p.key}.description`)}
                </p>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>

        {/* Link */}
        <div className="text-center mt-12">
          <a
            href="https://search.coe.int/cm/eng?i=09125948802922d3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-warm-yellow font-semibold text-sm hover:text-white transition-colors"
          >
            {t("learnMore")}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
