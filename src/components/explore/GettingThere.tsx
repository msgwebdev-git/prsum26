import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ScrollReveal";

export default function GettingThere() {
  const t = useTranslations("Explore.gettingThere");

  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — content */}
          <div>
            <ScrollReveal direction="left">
              <div className="inline-flex items-center gap-2 bg-[#003DA5]/5 text-[#003DA5] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
                {t("badge")}
              </div>
              <h2 className="text-deep-blue text-3xl sm:text-4xl font-bold leading-[1.15] mb-6">
                {t("title")}
              </h2>
              <div className="w-16 h-1 bg-[#FFD200] rounded-full mb-8" />
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.15}>
              <div className="bg-white border border-light-gray/40 rounded-2xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#003DA5] flex items-center justify-center text-white text-xs font-bold">
                    KIV
                  </div>
                  <div>
                    <p className="text-deep-blue font-bold text-sm">{t("airport.name")}</p>
                    <p className="text-dark-gray text-xs">{t("airport.distance")}</p>
                  </div>
                </div>
                <p className="text-dark-gray text-sm leading-relaxed">
                  {t("airport.description")}
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-3">
              {(["taxi", "bus", "transfer"] as const).map((key, i) => (
                <ScrollReveal key={key} delay={0.25 + i * 0.1}>
                  <div className="flex items-center gap-3 bg-white border border-light-gray/40 rounded-xl px-5 py-4">
                    <div className="w-2 h-2 rounded-full bg-[#FFD200]" />
                    <span className="text-deep-blue text-sm font-medium">
                      {t(`transport.${key}.label`)}
                    </span>
                    <span className="text-dark-gray text-sm ml-auto">
                      {t(`transport.${key}.detail`)}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right — Google Map */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden border border-light-gray/40 aspect-square">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d43640.!2d28.82!3d47.01!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x40c97d6d1c46cec7%3A0x8e3b3b3a42e4e7e2!2sChișinău+International+Airport!3m2!1d46.9277!2d28.9313!4m5!1s0x40c97c45b3a6f5a1%3A0x5e1e5e0b0b0b0b0b!2sPalatul+Republicii%2C+Strada+Maria+Cebotari+16%2C+Chișinău!3m2!1d47.0245!2d28.8326!5e0!3m2!1sen!2s!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                sandbox="allow-scripts allow-same-origin allow-popups allow-presentation"
                title="Chișinău — Airport to Palatul Republicii"
                className="absolute inset-0"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
