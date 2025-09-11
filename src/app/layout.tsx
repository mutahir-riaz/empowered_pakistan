import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const merriweather = Merriweather({
  variable: "--font-meri",
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400", "900"],
});

export const metadata: Metadata = {
  title: "EmpowerED Pakistan",
  description: "EmpowerED Pakistan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
