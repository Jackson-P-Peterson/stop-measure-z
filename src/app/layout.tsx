import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Source_Sans_3 } from "next/font/google";
import { AnalyticsScript } from "@/components/AnalyticsScript";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { StickyBallotBar } from "@/components/StickyBallotBar";
import { UtmProvider } from "@/components/UtmProvider";
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

const title = "No on Measure Z | Berkeley shouldn’t bankroll the East Bay";
const description =
  "Measure Z would tax Berkeley homes $58 million to capitalize a regional public bank that doesn’t exist. Oakland is paying $0. See your cost. Vote No on Nov 3.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  alternates: { canonical: site.url },
  openGraph: {
    title,
    description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  keywords: [
    "Measure Z Berkeley",
    "Berkeley public bank tax",
    "No on Z Berkeley",
    "Public Bank East Bay tax",
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
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
          <JsonLd />
        </UtmProvider>
      </body>
    </html>
  );
}
