import "./globals.css";
import { Toaster } from "react-hot-toast";
import Header from "@/components/mainUI/Header";
import Footer from "@/components/mainUI/Footer";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="overflow-x-hidden">
      <Toaster position="bottom-right" reverseOrder={false} />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
