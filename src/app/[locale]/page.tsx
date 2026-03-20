import { setRequestLocale } from "next-intl/server";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ParticipantsSection from "@/components/ParticipantsSection";
import VenueSection from "@/components/VenueSection";
import PrioritiesSection from "@/components/PrioritiesSection";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="pt-14">
      <HeroSection />
      <AboutSection />
      <ParticipantsSection />
      <VenueSection />
      <PrioritiesSection />
    </main>
  );
}
