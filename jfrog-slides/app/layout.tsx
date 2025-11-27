import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JFrog Slides",
  description: "Presentation: How to Be a Better AI Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
