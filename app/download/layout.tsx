import type { Metadata } from "next";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Baixar E-book: Libido Sem Pausa",
};

export default function DownloadLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        {children}
      </>
    );
  }