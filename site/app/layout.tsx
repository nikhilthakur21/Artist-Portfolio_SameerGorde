import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Edu_NSW_ACT_Cursive } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import PageTransition from "@/components/page-transition";
import { site } from "@/app/lib/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const script = Edu_NSW_ACT_Cursive({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.fullName} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  openGraph: {
    title: `${site.fullName} — ${site.role}`,
    description: site.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${script.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-cream text-cocoa">
        <SmoothScroll>
          <SiteNav />
          <main className="flex-1 overflow-x-clip">
            <PageTransition>{children}</PageTransition>
          </main>
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
