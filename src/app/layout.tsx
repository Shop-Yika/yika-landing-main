import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Provider from "./Provider";
import PageWrapper from "./_components/pageWrapper";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const averiaLibreBold = localFont({
  src: "../Fonts/AveriaLibre-Bold.ttf",
  variable: "--font-averia-libre-bold",
});

const averiaLibreLight = localFont({
  src: "../Fonts/AveriaLibre-Light.ttf",
  variable: "--font-averia-libre-light",
});

const averiaLibreRegular = localFont({
  src: "../Fonts/AveriaSerifLibre-Regular.ttf",
  variable: "--font-averia-libre-regular",
});

const peristiwa = localFont({
  src: "../Fonts/Peristiwa.otf",
  variable: "--font-peristiwa",
});

const satoshiRegular = localFont({
  src: "../Fonts/Satoshi-Regular.otf",
  variable: "--font-satoshi-regular",
});

export const metadata: Metadata = {
  title: "Yíká Inc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`
          ${geistSans.variable} ${geistMono.variable} ${averiaLibreBold.variable} ${averiaLibreLight.variable} ${averiaLibreRegular.variable} ${satoshiRegular.variable} ${peristiwa.variable}
          antialiased
        `}
      >
        <Provider>
          <PageWrapper>{children}</PageWrapper>
        </Provider>
      </body>
    </html>
  );
}