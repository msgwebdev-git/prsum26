import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section className="relative bg-deep-blue overflow-hidden">
      {/* Animated gradient blobs — smaller on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full bg-medium-blue/30 blur-[80px] sm:blur-[120px] animate-float" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] rounded-full bg-light-blue/20 blur-[60px] sm:blur-[100px] animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] rounded-full bg-warm-yellow/10 blur-[50px] sm:blur-[80px] animate-float" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Symbol — desktop only */}
      <div className="hidden lg:block absolute top-1/2 right-[6vw] -translate-y-1/2 z-0 pointer-events-none">
        <div className="relative">
          <div className="absolute inset-0 bg-light-blue/20 rounded-full blur-[60px] scale-75" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/symbol.svg"
            alt=""
            aria-hidden="true"
            className="relative drop-shadow-2xl max-w-none h-auto w-[30vw] opacity-90"
          />
        </div>
      </div>


      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-14 sm:py-24 lg:py-28">
        {/* Mobile symbol — above content */}
        <div className="lg:hidden flex justify-center mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/symbol.svg"
            alt=""
            aria-hidden="true"
            className="w-32 sm:w-40 h-auto"
          />
        </div>

        <div className="lg:max-w-[55%] xl:max-w-[60%] animate-fade-up">
          {/* Date badges — stack on mobile */}
          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] sm:text-xs font-bold tracking-widest uppercase px-4 sm:px-5 py-2 sm:py-2.5 rounded-full">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#FFCA06] animate-pulse" />
              {t("date")}
            </div>
            <div className="inline-flex items-center gap-2 backdrop-blur-sm border border-[#FFCA06]/30 text-[#FFCA06] text-[10px] sm:text-xs font-bold tracking-widest uppercase px-4 sm:px-5 py-2 sm:py-2.5 rounded-full">
              <svg className="w-3 sm:w-3.5 h-3 sm:h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z" />
              </svg>
              {t("location")}
            </div>
          </div>

          {/* Title — responsive sizes */}
          <h1 className="text-white text-3xl sm:text-5xl xl:text-[3.5rem] font-bold leading-[1.1] mb-4">
            {t("title")}
          </h1>

          {/* Description — glassmorphism card */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-8 sm:mb-10 max-w-2xl">
            <p className="text-white/85 text-base sm:text-lg leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* CTA — full width on mobile */}
          <div className="flex">
            <Link
              href="#accreditation"
              className="inline-flex w-full sm:w-auto items-center justify-center px-12 py-5 text-lg sm:text-xl font-bold text-black bg-[#FFCA06] rounded-full transition-all hover:bg-[#e6b600] hover:scale-105"
            >
              {t("accreditation")}
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gradient strip */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-medium-blue via-warm-yellow to-dark-red" />
    </section>
  );
}
