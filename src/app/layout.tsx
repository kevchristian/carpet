import type { Metadata } from "next";
import "./globals.css";
import { inter, work_sans, enriqueta } from "./components/fonts";

export const metadata: Metadata = {
  title: "Lung Victory Carpet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={work_sans.className}>
        {children}
      </body>
    </html>
  );
}