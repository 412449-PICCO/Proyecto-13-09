import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hackathon Project",
  description: "Next.js Frontend + Python Backend for hackathon with v0 and ElevenLabs integration",
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
