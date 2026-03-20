import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Explore Moldova",
  description:
    "Discover the Republic of Moldova — practical information, attractions, cuisine, and travel tips for delegates attending the 135th Session in Chișinău.",
  openGraph: {
    title: "Explore Moldova | Presidency of Moldova — Council of Europe",
    description:
      "Your guide to exploring Moldova during the 135th Session of the Committee of Ministers.",
  },
};
import ExploreHero from "@/components/explore/ExploreHero";
import AboutMoldova from "@/components/explore/AboutMoldova";
import GettingThere from "@/components/explore/GettingThere";
import PracticalInfo from "@/components/explore/PracticalInfo";
import WhatToSee from "@/components/explore/WhatToSee";
import MoldovanCuisine from "@/components/explore/MoldovanCuisine";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ExplorePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="pt-14">
      <ExploreHero />
      <AboutMoldova />
      <GettingThere />
      <PracticalInfo />
      <WhatToSee />
      <MoldovanCuisine />
    </main>
  );
}
