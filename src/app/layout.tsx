import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prem Kumar | Full Stack Developer",
  description: "Building Scalable Software Solutions with Modern Technologies. Full Stack Developer specializing in Next.js, React, C#, ASP.NET MVC, and PostgreSQL.",
  keywords: ["Full Stack Developer", "Next.js", "React", "C#", "ASP.NET MVC", "PostgreSQL", "Web Development", "Software Engineer", "Chennai", "India"],
  authors: [{ name: "Prem Kumar" }],
  creator: "Prem Kumar",
  publisher: "Prem Kumar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://premkumar.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Prem Kumar | Full Stack Developer",
    description: "Building Scalable Software Solutions with Modern Technologies",
    type: "website",
    locale: 'en_US',
    siteName: "Prem Kumar Portfolio",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Prem Kumar | Full Stack Developer",
    description: "Building Scalable Software Solutions with Modern Technologies",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
