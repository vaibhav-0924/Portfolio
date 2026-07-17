import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PORTFOLIO } from "@/data/portfolio";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(PORTFOLIO.site.url),
  title: {
    default: PORTFOLIO.site.name,
    template: `%s | ${PORTFOLIO.site.name}`,
  },
  description: PORTFOLIO.site.metaDescription,
  openGraph: {
    title: PORTFOLIO.site.name,
    description: PORTFOLIO.site.metaDescription,
    url: PORTFOLIO.site.url,
    siteName: PORTFOLIO.site.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: PORTFOLIO.site.name,
      },
    ],
  },
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
  twitter: {
    title: PORTFOLIO.site.name,
    card: "summary_large_image",
    creator: "@vbhvdev",
    images: ["/og.png"],
  },
  verification: {
    google: "",
    yandex: "",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider delayDuration={0}>
            <div className="relative overflow-x-hidden">
              <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_58%)]" />
              <Navbar />
              {children}
            </div>
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
