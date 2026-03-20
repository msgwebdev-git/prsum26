import type { Metadata } from "next";
import { Onest } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import "../globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["100", "400", "500", "700"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://prsum26.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Presidency of the Republic of Moldova of the Council of Europe",
    template: "%s | Presidency of Moldova — Council of Europe",
  },
  description:
    "The 135th Session of the Committee of Ministers — 14–15 May 2026, Chișinău. Presidency of the Republic of Moldova of the Council of Europe.",
  keywords: [
    "Council of Europe",
    "Committee of Ministers",
    "135th Session",
    "Republic of Moldova",
    "Presidency",
    "Chișinău",
    "human rights",
    "democracy",
    "rule of law",
  ],
  authors: [{ name: "Ministry of Foreign Affairs of the Republic of Moldova" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Presidency of the Republic of Moldova — Council of Europe",
    title: "Presidency of the Republic of Moldova of the Council of Europe",
    description:
      "The 135th Session of the Committee of Ministers — 14–15 May 2026, Chișinău.",
    url: SITE_URL,
    locale: "en",
    alternateLocale: "fr",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Presidency of the Republic of Moldova of the Council of Europe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Presidency of the Republic of Moldova of the Council of Europe",
    description:
      "The 135th Session of the Committee of Ministers — 14–15 May 2026, Chișinău.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      en: `${SITE_URL}/en`,
      fr: `${SITE_URL}/fr`,
    },
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={`${onest.variable} font-onest antialiased`}>
        <NextIntlClientProvider locale={locale}>
          <SplashScreen />
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
