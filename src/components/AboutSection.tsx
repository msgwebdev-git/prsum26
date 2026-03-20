import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutSection() {
  const t = useTranslations("About");

  return (
    <section id="about" className="relative bg-white py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Title & accent */}
          <ScrollReveal direction="left">
            <div className="inline-flex items-center gap-2 bg-deep-blue/5 text-deep-blue text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-deep-blue" />
              {t("badge")}
            </div>
            <h2 className="text-deep-blue text-3xl sm:text-4xl xl:text-[2.75rem] font-bold leading-[1.15] mb-6">
              {t("title")}
            </h2>
            <div className="w-16 h-1 bg-warm-yellow rounded-full mb-8" />
            <p className="text-dark-gray text-lg leading-relaxed">
              {t("intro")}
            </p>
          </ScrollReveal>

          {/* Right — Details */}
          <div className="space-y-6">
            <ScrollReveal direction="right" delay={0.1}>
              <p className="text-dark-gray text-base leading-relaxed">
                {t("paragraph1")}
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <p className="text-dark-gray text-base leading-relaxed">
                {t("paragraph2")}
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.3}>
              <div className="bg-deep-blue/[0.03] border-l-4 border-deep-blue rounded-r-xl p-6 mt-8">
                <p className="text-deep-blue font-semibold text-base leading-relaxed">
                  {t("highlight")}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
