import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brandontate.info"),

  title: {
    default: "Brandon Tate | IT Leadership, Infrastructure & Security",
    template: "%s | Brandon Tate",
  },

  description:
    "Portfolio of Brandon Tate — IT leader, infrastructure builder, and cybersecurity practitioner focused on operations, identity, automation, private AI, and resilient systems.",

  keywords: [
    "Brandon Tate",
    "IT Leadership",
    "Cybersecurity",
    "Infrastructure",
    "Identity and Access Management",
    "IAM",
    "Microsoft Entra ID",
    "Cloud Security",
    "Security Operations",
    "Automation",
    "Private AI",
    "Linux",
    "IT Operations",
  ],

  authors: [{ name: "Brandon Tate" }],
  creator: "Brandon Tate",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.png",
    apple: "/apple-icon.png",
  },

  openGraph: {
    type: "website",
    url: "https://brandontate.info",
    siteName: "Brandon Tate",
    title: "Brandon Tate | IT Leadership, Infrastructure & Security",
    description:
      "IT leadership, infrastructure, cybersecurity, identity, automation, private AI, and hands-on technical projects.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Brandon Tate | IT Leadership, Infrastructure & Security",
    description:
      "IT leadership, infrastructure, cybersecurity, identity, automation, private AI, and hands-on technical projects.",
  },

  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}