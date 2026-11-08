import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rama Chiranjeevi | Engineering R&D × Applied AI",
  description: "The professional portfolio and writing space of Rama Chiranjeevi, covering automotive engineering, CAE simulation, applied AI and digital transformation."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
