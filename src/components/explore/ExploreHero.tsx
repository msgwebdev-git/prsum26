import { useTranslations } from "next-intl";

export default function ExploreHero() {
  const t = useTranslations("Explore.hero");

  return (
    <section className="relative h-[80vh] min-h-[550px] flex items-center justify-center overflow-hidden">
      {/* YouTube video background */}
      <div className="absolute inset-0 pointer-events-none">
        <iframe
          src="https://www.youtube-nocookie.com/embed/lSyVhcyzg9s?autoplay=1&mute=1&loop=1&playlist=lSyVhcyzg9s&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&iv_load_policy=3"
          title="Explore Moldova"
          allow="autoplay; encrypted-media"
          sandbox="allow-scripts allow-same-origin allow-presentation"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full min-h-full"
          style={{ aspectRatio: "16/9" }}
        />
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-[10%] w-32 h-32 rounded-full border border-white/10" />
      <div className="absolute bottom-20 left-[8%] w-24 h-24 rounded-full border border-white/10" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-[#FFD200]" />
          {t("badge")}
        </div>

        <h1 className="text-white text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6 drop-shadow-lg">
          {t("title")}
        </h1>

        <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          {t("subtitle")}
        </p>

        {/* CTA button */}
        <div className="mt-10">
          <a
            href="https://moldova.travel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-bold text-[#003DA5] bg-[#FFD200] rounded-full transition-all hover:bg-white hover:scale-105"
          >
            {t("explorMore")}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-8 animate-bounce">
          <svg className="w-6 h-6 text-white/50 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
          </svg>
        </div>
      </div>

      {/* Video credit */}
      <div className="absolute bottom-4 right-4 z-10">
        <a
          href="https://moldova.travel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/40 text-xs hover:text-white/70 transition-colors"
        >
          {t("videoCredit")} moldova.travel
        </a>
      </div>

      {/* Bottom flag accent */}
      <div className="absolute bottom-0 left-0 right-0 flex h-1.5 z-10">
        <div className="flex-1 bg-[#003DA5]" />
        <div className="flex-1 bg-[#FFD200]" />
        <div className="flex-1 bg-[#CC092F]" />
      </div>
    </section>
  );
}
