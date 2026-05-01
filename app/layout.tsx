import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simulacra Film Festival",
  description: "A sci-fi and simulation themed film festival.",
  icons: {
    icon: "/assets/logo/simulacra-logo.png",
    shortcut: "/assets/logo/simulacra-logo.png",
    apple: "/assets/logo/simulacra-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
