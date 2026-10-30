import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { TanStackProvider } from "@/providers/TanStackProvider";
import Navbar2Organism from "@/components/ui/navbars/Navbar2.organism";
import { cn } from "@/lib/utils";
import Footer1Organism from "@/components/ui/footers/Footer1.organism";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trip Planner",
  description:
    "Create Trip Itineraries , Trip Plan, View Recommend Hotels All With The Help Of AI",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <TanStackProvider>
      <Navbar2Organism />
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <html
        lang="en"
        className={cn(
          "h-full",
          "antialiased",
          "dark",
          geistSans.variable,
          geistMono.variable,
          "font-sans",
          inter.variable,
        )}
      >
        <body className="min-h-full md:px-4 flex flex-col">{children}</body>
      </html>
      <Footer1Organism />
    </TanStackProvider>
  );
}
