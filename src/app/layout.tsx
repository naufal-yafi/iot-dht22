import { inter } from "@config/fonts";
import Providers from "@config/providers";
import "@style";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hydroponic Monitoring",
  description: "IoT using DHT22 sensor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}