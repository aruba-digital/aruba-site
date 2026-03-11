import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ArubaWebProvider } from "aruba-web-ds";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aruba Digital — Tecnología, marcas y productos digitales",
  description:
    "Aruba Digital es un estudio de tecnología donde viven marcas propias, productos como Luna Finanzas Digitales, proyectos para clientes y un laboratorio constante de nuevas ideas.",
  openGraph: {
    title: "Aruba Digital — Tecnología, marcas y productos digitales",
    description:
      "Estudio de tecnología para marcas propias, productos digitales, tiendas online y sistemas a medida.",
    type: "website",
    url: "https://aruba.digital",
    siteName: "Aruba Digital",
    locale: "es_CL",
  },
  alternates: {
    canonical: "https://aruba.digital",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ArubaWebProvider>{children}</ArubaWebProvider>
      </body>
    </html>
  );
}
