import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Caveat } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const scriptFont = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["600", "700"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#063F6B",
};

export const metadata: Metadata = {
  title: "DHASVIKA TRAVELS | Journeys Beyond Boundaries",
  description:
    "Comfortable Rides. Memorable Journeys. DHASVIKA TRAVELS offers outstation and local rides across South India with 5+ premium sedans, transparent ₹15/km pricing, and minimum trip 130 km.",
  icons: {
    icon: "/assets/dhasvika/brand/dhasvika_mark_transparent.png",
    apple: "/assets/dhasvika/brand/dhasvika_mark_transparent.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sansFont.variable} ${bodyFont.variable} ${scriptFont.variable}`}>
      <body className="antialiased min-h-screen bg-[#F4FAFE] text-dt-text">
        {children}
      </body>
    </html>
  );
}
