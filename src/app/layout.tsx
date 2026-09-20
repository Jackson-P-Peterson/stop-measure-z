import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Source_Sans_3 } from "next/font/google";
import { AnalyticsScript } from "@/components/AnalyticsScript";
import { Footer } from "@/components/Footer";
import { SiteJsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { StickyBallotBar } from "@/components/StickyBallotBar";
import { UtmProvider } from "@/components/UtmProvider";
import { brandTitle, defaultDescription, defaultTitle, searchKeywords } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const serif = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const sans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: defaultTitle,
    template: `%s · ${brandTitle}`,
  },
  description: defaultDescription,
  applicationName: brandTitle,
  authors: [{ name: site.committeeName, url: site.url }],
  creator: site.committeeName,
  publisher: site.committeeName,
  category: "Politics",
  keywords: [...searchKeywords],
  referrer: "origin-when-cross-origin",
  formatDetection: { telephone: false, email: false, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: site.url,
    siteName: brandTitle,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  appleWebApp: {
    title: brandTitle,
    capable: true,
    statusBarStyle: "default",
  },
  other: {
    "geo.region": "US-CA",
    "geo.placename": "Berkeley",
    "geo.position": "37.8715;-122.2730",
    ICBM: "37.8715, -122.2730",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-US"
      className={`${serif.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink">
        <AnalyticsScript />
        <UtmProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-eucalyptus focus:px-3 focus:py-2 focus:text-paper"
          >
            Skip to content
          </a>
          <Nav />
          <div id="main">{children}</div>
          <Footer />
          <StickyBallotBar />
          <SiteJsonLd />
        </UtmProvider>
      </body>
    </html>
  );
}
