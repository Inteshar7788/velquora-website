
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { GoogleAnalytics } from "@next/third-parties/google";
import StructuredData from "@/components/seo/StructuredData";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/loading/LoadingScreen";
import BackToTop from "@/components/common/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://velquora.com"),

  title: {
    default: "Velquora Technologies",
    template: "%s | Velquora Technologies",
  },

  description:
    "Velquora Technologies builds premium websites, web applications, UI/UX solutions and scalable digital products for startups and businesses.",

  keywords: [
    "Website Development",
    "Web Development",
    "Next.js",
    "React",
    "UI UX",
    "SEO",
    "Digital Agency",
    "Velquora Technologies",
  ],

  authors: [
    {
      name: "Velquora Technologies",
    },
  ],

  creator: "Velquora Technologies",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Velquora Technologies",
    description:
      "We build premium websites and modern digital experiences that grow businesses.",
    url: "https://velquora.com",
    siteName: "Velquora Technologies",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Velquora Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Velquora Technologies",
    description:
      "Premium Website Development & Digital Solutions.",
    images: ["/og-image.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <StructuredData />
        <LoadingScreen />
        {children}
        <BackToTop />
        <WhatsAppButton />
        <GoogleAnalytics gaId="G-0XLWM44SRQ" />
      </body>
    </html>
  );
}