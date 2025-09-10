"use client";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", value: "/" },
    { label: "About", value: "/about" },
    { label: "Events", value: "/events" },
    { label: "Oppurtunities", value: "/oppurtunities" },
    { label: "Gallery", value: "/gallery" },
  ];

  return (
    <header className="sticky top-0 z-30 backdrop-blur-sm select-none">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/cropLogo.png"
              alt="Logo"
              width={50}
              height={50}
              className="w-[50px] h-[50px]"
            />
            <div>
              <h1 className="text-xl font-bold text-ourBlack">
                EmpowerED Pakistan
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                href={item.value}
                key={item.value}
                className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                  pathname === item.value
                    ? "bg-ourDarkBlue text-white"
                    : "text-ourGray hover:bg-ourDarkBlue hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Join Us Button */}
          <div className="hidden lg:block">
            <Link
              href=""
              className="bg-ourOrange hover:bg-ourDarkOrange text-white px-3 py-[9px] rounded-lg transition-all duration-200 text-nowrap"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <Link
                  href={item.value}
                  key={item.value}
                  onClick={() => setIsMenuOpen(false)}
                  className={`w-fit px-3 py-2 rounded-lg mx-auto transition-all duration-300 ${
                    pathname === item.value
                      ? "bg-ourDarkBlue text-white"
                      : "text-ourGray hover:bg-ourDarkBlue hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="bg-ourOrange hover:bg-ourDarkOrange text-white px-6 py-2 rounded-lg shadow-lg transition-all duration-200 w-fit mx-auto">
                Join Us
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
