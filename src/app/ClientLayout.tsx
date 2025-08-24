import "./globals.css";
import Header from "@/components/mainUI/Header";
import Footer from "@/components/mainUI/Footer";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
