"use client";
import "./globals.css";
import Header from "@/components/mainUI/Header";
import { Footer } from "@/components/mainUI/Footer";
import { useState } from "react";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [currentPage, setCurrentPage] = useState("/");

  return (
    <div>
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      {children}
      <Footer />
    </div>
  );
}
