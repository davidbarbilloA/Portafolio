import type { Metadata } from "next";
import { Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { SITE } from "@/constants/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { BackToTop } from "@/components/layout/BackToTop";
import { MotionProvider } from "@/components/layout/MotionProvider";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.portfolioUrl),
  title: `${SITE.name} — ${SITE.shortRole}`,
  description: SITE.description,
  keywords: [
    "Desarrollador Full Stack",
    "Full Stack Developer",
    "Frontend Developer",
    "Full Stack Java",
    "React Developer",
    "Spring Boot",
    "TypeScript",
    "Portafolio David Barbillo",
  ],
  authors: [{ name: SITE.name, url: SITE.portfolioUrl }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: SITE.portfolioUrl,
    title: `${SITE.name} — ${SITE.shortRole}`,
    description: SITE.description,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.shortRole}`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${GeistSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <MotionProvider>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </MotionProvider>
      </body>
    </html>
  );
}
