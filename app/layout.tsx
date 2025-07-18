import type { Metadata } from "next";
import "./globals.css";

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
      <head>
        <link rel="stylesheet" href="/fonts/cabinet-grotesk/cabinet-grotesk.css" />
        <link rel="stylesheet" href="/fonts/comico/comico.css" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
