"use client";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", value: "/" },
    { label: "About", value: "/about" },
    { label: "Events", value: "/events" },
  ];

  return (
    <header className="sticky top-0 z-30 backdrop-blur-sm select-none">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-ourDarkBlue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#0D1B2A]">
                Empowered Pakistan
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                href={item.value}
                key={item.value}
                className={`transition-colors duration-200 text-nowrap ${
                  pathname === item.value
                    ? "text-ourDarkBlue font-semibold"
                    : "text-ourGray hover:text-ourDarkBlue"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Donate Button */}
          <div className="hidden lg:block">
            <Link
              href=""
              className="bg-ourOrange hover:bg-ourDarkOrange text-white px-5 py-[6px] rounded-full shadow-lg transition-all duration-200 text-nowrap"
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
                  className={`text-center transition-colors duration-200 ${
                    pathname === item.value
                      ? "text-ourDarkBlue font-semibold"
                      : "text-ourGray hover:text-ourDarkBlue"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="bg-ourOrange hover:bg-ourDarkOrange text-white px-6 py-2 rounded-full shadow-lg transition-all duration-200 w-fit mx-auto">
                Join Us
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
