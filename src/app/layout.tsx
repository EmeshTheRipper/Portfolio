import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
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
  title: "Emesh Lamichhane | Cybersecurity Specialist & Full-Stack Developer",
  description:
    "Portfolio of Emesh Lamichhane — BSc (Hons) Ethical Hacking & Cybersecurity graduate. Specializing in penetration testing, vulnerability assessment, and full-stack development.",
  keywords: [
    "cybersecurity",
    "penetration testing",
    "ethical hacking",
    "full-stack developer",
    "Emesh Lamichhane",
    "web security",
    "Kali Linux",
    "burp suite",
  ],
  authors: [{ name: "Emesh Lamichhane" }],
  creator: "Emesh Lamichhane",
  metadataBase: new URL("https://www.emeshlamichhane.com.np"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.emeshlamichhane.com.np",
    siteName: "Emesh Lamichhane",
    title: "Emesh Lamichhane | Cybersecurity Specialist & Full-Stack Developer",
    description:
      "Portfolio of Emesh Lamichhane — Penetration tester, ethical hacker, and full-stack developer.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emesh Lamichhane | Cybersecurity Specialist & Full-Stack Developer",
    description:
      "Portfolio of Emesh Lamichhane — Penetration tester, ethical hacker, and full-stack developer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
