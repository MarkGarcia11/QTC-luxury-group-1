import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://qtcluxurygroup.com"),
  title: {
    default: "QTC Luxury Group — Elegance in Motion",
    template: "%s | QTC Luxury Group",
  },
  description:
    "QTC Luxury Group offers premium black truck transportation, concierge care, and personalized lifestyle management. Elevated experiences, thoughtfully arranged around you.",
  keywords: [
    "luxury transportation",
    "black car service",
    "chauffeur service",
    "concierge care",
    "lifestyle management",
    "airport transfers",
    "corporate transportation",
    "premium SUV service",
  ],
  authors: [{ name: "QTC Luxury Group" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://qtcluxurygroup.com",
    title: "QTC Luxury Group — Elegance in Motion",
    description:
      "Premium transportation, concierge care, and lifestyle management — thoughtfully arranged around you.",
    siteName: "QTC Luxury Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "QTC Luxury Group — Elegance in Motion",
    description:
      "Premium transportation, concierge care, and lifestyle management.",
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
    <html lang="en">
      <body className="bg-ivory text-espresso antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
