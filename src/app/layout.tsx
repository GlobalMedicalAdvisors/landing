import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Global Medical Advisors",
  description: "An all-in-one holiday and plastic surgery booking application",
  openGraph: {
    type: "website",
    description:
      "An all-in-one holiday and plastic surgery booking application",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.className} antialiased container mx-auto flex flex-col min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
