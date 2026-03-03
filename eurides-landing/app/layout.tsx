import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/Motion";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Si luego conectas dominio propio, puedes definir NEXT_PUBLIC_SITE_URL en Vercel (Project → Settings → Environment Variables).
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://eurides-landing.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Traducción Inglés ↔ Español | Eurides Young",
  description:
    "Traducciones Inglés ↔ Español con atención directa. Traductora certificada y registrada. Cotiza por WhatsApp o email.",
  openGraph: {
    title: "Traducción Inglés ↔ Español | Eurides Young",
    description:
      "Traducciones Inglés ↔ Español con atención directa. Traductora certificada y registrada.",
    url: SITE_URL,
    siteName: "Eurides Young Traducciones",
    locale: "es_PA",
    type: "website",
    images: [
      {
        url: "/images/video-poster.webp",
        width: 1200,
        height: 630,
        alt: "Eurides Young Traducciones",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Traducción Inglés ↔ Español | Eurides Young",
    description:
      "Traducciones Inglés ↔ Español con atención directa. Traductora certificada y registrada.",
    images: ["/images/video-poster.webp"],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "name": "Eurides Melista Young Emanuel",
      "email": "emyoungab@gmail.com",
      "telephone": ["+50766167325", "+50760947295"],
      "jobTitle": "Traductora / Facilitadora de Inglés",
      "alumniOf": [
        { "@type": "CollegeOrUniversity", "name": "Universidad de Panamá" },
        { "@type": "CollegeOrUniversity", "name": "Universidad Latina" },
        { "@type": "CollegeOrUniversity", "name": "UDI" }
      ]
    },
    {
      "@type": "ProfessionalService",
      "name": "Eurides Young Traducciones",
      "description": "Servicios de traducción Inglés ↔ Español y traducción certificada según requisitos aplicables.",
      "telephone": ["+50766167325", "+50760947295"],
      "email": "emyoungab@gmail.com",
      "areaServed": "Panamá",
      "url": SITE_URL
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-white font-[family-name:var(--font-inter)] text-[var(--ink)] antialiased">
        <MotionProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
