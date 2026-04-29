import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simulacra Film Festival",
  description: "A sci-fi and simulation themed film festival.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
