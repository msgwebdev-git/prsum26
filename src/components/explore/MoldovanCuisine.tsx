import Image from "next/image";
import { useTranslations } from "next-intl";
import ScrollReveal, { ScrollRevealGroup, ScrollRevealItem } from "@/components/ScrollReveal";

const dishes = [
  { key: "mamaliga", src: "/food/Mamaliga.webp" },
  { key: "placinte", src: "/food/placinte.webp" },
  { key: "wine", src: "/food/wine.jpg" },
  { key: "zeama", src: "/food/Zeama.webp" },
  { key: "sarmale", src: "/food/sarmale.webp" },
  { key: "coltunasi", src: "/food/coltunasi.webp" },
];

export default function MoldovanCuisine() {
  const t = useTranslations("Explore.cuisine");

  return (
    <section className="relative bg-[#003DA5] py-20 sm:py-28 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-[#FFD200]/10 blur-[100px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[400px] h-[400px] rounded-full bg-[#CC092F]/10 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD200]" />
            {t("badge")}
          </div>
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">
            {t("title")}
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </ScrollReveal>

        <ScrollRevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.1}>
          {dishes.map((dish) => (
            <ScrollRevealItem key={dish.key}>
              <div className="group bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors">
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src={dish.src}
                    alt={t(`dishes.${dish.key}.title`)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white font-bold mb-2">
                    {t(`dishes.${dish.key}.title`)}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {t(`dishes.${dish.key}.description`)}
                  </p>
                </div>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </div>

      {/* Bottom flag accent */}
      <div className="absolute bottom-0 left-0 right-0 flex h-1.5">
        <div className="flex-1 bg-[#003DA5]" />
        <div className="flex-1 bg-[#FFD200]" />
        <div className="flex-1 bg-[#CC092F]" />
      </div>
    </section>
  );
}
