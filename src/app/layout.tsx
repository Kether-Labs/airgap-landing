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
  title: "Airgap - Peer-to-Peer Messaging",
  description: "Airgap is a secure, private, and censorship-resistant peer-to-peer messaging application",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: 'Airgap - Peer-to-Peer Messaging',
    description: 'Airgap is a secure, private, and censorship-resistant peer-to-peer messaging application',
    url: 'https://airgap.ketherlabs.com',
    siteName: 'AirGap',
    images: [
      {
        url: '/logo.png', // Place cette image dans ton dossier /public
        width: 1200,
        height: 630,
        alt: 'Aperçu de l’interface Airgap',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Airgap | AirGap',
    description: 'Airgap is a secure, private, and censorship-resistant peer-to-peer messaging application',
    images: ['/logo.png'],
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
