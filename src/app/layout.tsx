import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SARGAM - CUSAT ArtFest 2024",
  description: "Experience the biggest cultural festival of CUSAT – SARGAM. Music, dance, art, and creativity come alive in Kochi, Kerala!",
  keywords: "SARGAM, CUSAT, CUSAT Kalolsavam, ArtFest, Kerala, Kochi, College Fest, Cultural Festival, Music, Dance, Drama, Fine Arts, Literary Fest, Kalotsavam, CUSAT Events, Youth Festival, Cochin University, Performing Arts, Creative Arts, College Cultural Fest, CUSAT Annual Fest, CUSAT Competitions, Kerala College Fest, University Art Festival",
  authors: [{ name: "CUSAT SARGAM Team", url: "https://sargam.cusat.ac.in" }],
  openGraph: {
    type: "website",
    url: "https://sargam.cusat.ac.in",
    title: "SARGAM - CUSAT ArtFest 2024",
    description: "Experience the biggest cultural festival of CUSAT – SARGAM. Music, dance, art, and creativity come alive in Kochi, Kerala!",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SARGAM ArtFest" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SARGAM - CUSAT ArtFest 2024",
    description: "Experience the biggest cultural festival of CUSAT – SARGAM. Music, dance, art, and creativity come alive in Kochi, Kerala!",
    images: ["/twitter-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="classical-text">
        {children}
      </body>
    </html>
  );
}
