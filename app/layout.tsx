import type { Metadata } from "next";
import "./globals.css";
import "../public/fonts/cabinet-grotesk/cabinet-grotesk.css";
import "../public/fonts/comico/comico.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio website showcasing my work and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
