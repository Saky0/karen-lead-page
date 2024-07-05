import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "E-book gratuito: Libido Sem Pausa",
  description: "Mais que um manual, Libido Sem Pausa é um convite para uma jornada de autoconhecimento, aceitação e amor-próprio.",
  viewport: "width=device-width, initial-scale=1.0, user-scalable=0",
  icons: {
    icon: [
      { url: "/images/K-icon.ico", type: "image/x-icon" },
    ],
    shortcut: [
      { url: "/images/K-icon.ico", type: "image/x-icon" },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
      </Head>
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
