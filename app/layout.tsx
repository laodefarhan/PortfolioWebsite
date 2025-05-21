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

// Metadata SEO-Optimized
export const metadata: Metadata = {
  title: "Laode F. Fadilah",
  description: "Portfolio Website by Laode F. Fadilah. Jelajahi keahlian saya dalam pengembangan aplikasi web dan Android.",
  keywords:
    "Laode Farhan Fadilah, full stack developer Indonesia, junior developer, pengembang web, portfolio pengembang aplikasi, frontend backend, aplikasi Android",
  authors: [{ name: "Laode Farhan Fadilah", url: "https://laodefarhan.vercel.app/" }],
  creator: "Laode Farhan Fadilah",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: 'id_ID',
    title: "Portfolio Junior Full Stack Developer",
    description:
      "Lihat keahlian dan pengalaman dalam membangun solusi digital end-to-end, dari frontend hingga backend, termasuk aplikasi Android.",
    url: "https://laodefarhan.vercel.app/",
    siteName: "Laode Farhan Fadilah Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
