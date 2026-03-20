import Image from "next/image";
import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ScrollReveal";

export default function VenueSection() {
  const t = useTranslations("Venue");

  return (
    <section id="venue" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Image */}
          <ScrollReveal direction="left">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/exter.webp"
                alt="Palatul Republicii, Chișinău"
                width={800}
                height={530}
                className="w-full h-auto object-cover"
                priority={false}
              />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto">
                <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-deep-blue text-xs font-bold tracking-wide uppercase px-4 py-2.5 rounded-full shadow-lg">
                  <svg className="w-4 h-4 text-vibrant-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z" />
                  </svg>
                  Chișinău, Republic of Moldova
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Content */}
          <div>
            <ScrollReveal direction="right">
              <div className="inline-flex items-center gap-2 bg-deep-blue/5 text-deep-blue text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-deep-blue" />
                {t("badge")}
              </div>
              <h2 className="text-deep-blue text-3xl sm:text-4xl font-bold leading-[1.15] mb-6">
                {t("title")}
              </h2>
              <div className="w-16 h-1 bg-warm-yellow rounded-full mb-8" />
              <p className="text-dark-gray text-base leading-relaxed mb-6">
                {t("description")}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="bg-deep-blue/[0.03] border border-deep-blue/10 rounded-xl p-5 mb-6">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-deep-blue mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z" />
                  </svg>
                  <div>
                    <p className="text-deep-blue font-semibold text-sm">{t("addressLabel")}</p>
                    <p className="text-dark-gray text-sm mt-1">{t("address")}</p>
                  </div>
                </div>
              </div>
              <a
                href="https://www.palatulrepublicii.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-medium-blue font-semibold text-sm hover:text-deep-blue transition-colors"
              >
                palatulrepublicii.md
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
