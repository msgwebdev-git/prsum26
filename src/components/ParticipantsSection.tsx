import { useTranslations } from "next-intl";
import ScrollReveal, { ScrollRevealGroup, ScrollRevealItem } from "@/components/ScrollReveal";

const memberStates = [
  { code: "al", key: "albania" },
  { code: "ad", key: "andorra" },
  { code: "am", key: "armenia" },
  { code: "at", key: "austria" },
  { code: "az", key: "azerbaijan" },
  { code: "be", key: "belgium" },
  { code: "ba", key: "bosniaHerzegovina" },
  { code: "bg", key: "bulgaria" },
  { code: "hr", key: "croatia" },
  { code: "cy", key: "cyprus" },
  { code: "cz", key: "czechia" },
  { code: "dk", key: "denmark" },
  { code: "ee", key: "estonia" },
  { code: "fi", key: "finland" },
  { code: "fr", key: "france" },
  { code: "ge", key: "georgia" },
  { code: "de", key: "germany" },
  { code: "gr", key: "greece" },
  { code: "hu", key: "hungary" },
  { code: "is", key: "iceland" },
  { code: "ie", key: "ireland" },
  { code: "it", key: "italy" },
  { code: "lv", key: "latvia" },
  { code: "li", key: "liechtenstein" },
  { code: "lt", key: "lithuania" },
  { code: "lu", key: "luxembourg" },
  { code: "mt", key: "malta" },
  { code: "md", key: "moldova" },
  { code: "mc", key: "monaco" },
  { code: "me", key: "montenegro" },
  { code: "nl", key: "netherlands" },
  { code: "mk", key: "northMacedonia" },
  { code: "no", key: "norway" },
  { code: "pl", key: "poland" },
  { code: "pt", key: "portugal" },
  { code: "ro", key: "romania" },
  { code: "sm", key: "sanMarino" },
  { code: "rs", key: "serbia" },
  { code: "sk", key: "slovakia" },
  { code: "si", key: "slovenia" },
  { code: "es", key: "spain" },
  { code: "se", key: "sweden" },
  { code: "ch", key: "switzerland" },
  { code: "tr", key: "turkiye" },
  { code: "ua", key: "ukraine" },
  { code: "gb", key: "unitedKingdom" },
];

const observers = [
  { code: "ca", key: "canada" },
  { code: "va", key: "holySee" },
  { code: "jp", key: "japan" },
  { code: "mx", key: "mexico" },
  { code: "us", key: "unitedStates" },
];

function Flag({ code }: { code: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://hatscripts.github.io/circle-flags/flags/${code}.svg`}
      alt=""
      width={28}
      height={28}
      loading="lazy"
      crossOrigin="anonymous"
      className="w-7 h-7 rounded-full"
    />
  );
}

function CountryCard({ code, name }: { code: string; name: string }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-light-gray/40 hover:border-medium-blue/30 hover:shadow-sm transition-all">
      <Flag code={code} />
      <span className="text-sm font-medium text-deep-blue truncate">
        {name}
      </span>
    </div>
  );
}

export default function ParticipantsSection() {
  const t = useTranslations("Participants");

  return (
    <section id="participants" className="relative bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-deep-blue/5 text-deep-blue text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-deep-blue" />
            {t("badge")}
          </div>
          <h2 className="text-deep-blue text-3xl sm:text-4xl font-bold mb-4">
            {t("title")}
          </h2>
          <p className="text-dark-gray text-lg max-w-3xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </ScrollReveal>

        {/* Member States */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-deep-blue flex items-center justify-center text-white text-sm font-bold">
              46
            </div>
            <h3 className="text-deep-blue text-xl font-bold">
              {t("memberStates")}
            </h3>
          </div>
          <ScrollRevealGroup className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3" stagger={0.03}>
            {memberStates.map((country) => (
              <ScrollRevealItem key={country.code}>
                <CountryCard
                  code={country.code}
                  name={t(`countries.${country.key}`)}
                />
              </ScrollRevealItem>
            ))}
          </ScrollRevealGroup>
        </div>

        {/* Observers */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-medium-blue flex items-center justify-center text-white text-sm font-bold">
              5
            </div>
            <h3 className="text-deep-blue text-xl font-bold">
              {t("observerStates")}
            </h3>
          </div>
          <ScrollRevealGroup className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3" stagger={0.05}>
            {observers.map((country) => (
              <ScrollRevealItem key={country.code}>
                <CountryCard
                  code={country.code}
                  name={t(`countries.${country.key}`)}
                />
              </ScrollRevealItem>
            ))}
          </ScrollRevealGroup>
        </div>
      </div>
    </section>
  );
}
