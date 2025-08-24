import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ourBlack text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl mb-6 text-ourSkyBlue">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-ourSkyBlue" />
                <Link
                  href="mailto:contact.empowered.pakistan@gmail.com"
                  className="text-nowrap hover:underline underline-offset-2"
                  title="email contact.empowered.pakistan@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email Us
                </Link>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-ourSkyBlue" />
                <span>+923179992812</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-ourSkyBlue" />
                <span>Karachi, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-2xl mb-6 text-ourSkyBlue">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="#"
                className="hover:text-ourSkyBlue transition-colors duration-200"
              >
                About Us
              </a>
              <a
                href="#"
                className="hover:text-ourSkyBlue transition-colors duration-200"
              >
                Programs
              </a>
              <a
                href="#"
                className="hover:text-ourSkyBlue transition-colors duration-200"
              >
                Opportunities
              </a>
              <a
                href="#"
                className="hover:text-ourSkyBlue transition-colors duration-200"
              >
                Events
              </a>
              <a
                href="#"
                className="hover:text-ourSkyBlue transition-colors duration-200"
              >
                Volunteer
              </a>
              <a
                href="#"
                className="hover:text-ourSkyBlue transition-colors duration-200"
              >
                Contact
              </a>
              <a
                href="#"
                className="hover:text-ourSkyBlue transition-colors duration-200"
              >
                Gallery
              </a>
              <a
                href="#"
                className="hover:text-ourSkyBlue transition-colors duration-200"
              >
                Partners
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-2xl mb-6 text-ourSkyBlue">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.instagram.com/empowered.pakistan/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 hover:text-ourSkyBlue cursor-pointer transition-colors duration-200"
              >
                <Instagram className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/company/empowered-pakistan/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 hover:text-ourSkyBlue cursor-pointer transition-colors duration-200"
              >
                <Linkedin className="w-8 h-8" />
              </a>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-400 mb-1">Linktree:</p>
                <Link
                  href="https://linktr.ee/empoweredpakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ourSkyBlue hover:text-white transition-colors duration-200 text-sm"
                >
                  linktr.ee/empoweredpakistan
                </Link>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-1">
                  WhatsApp Community:
                </p>
                <Link
                  href="https://chat.whatsapp.com/GdwY20sHbOX60eVYndzKta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ourSkyBlue hover:text-white transition-colors duration-200 text-sm"
                >
                  Join our WhatsApp group
                </Link>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-gray-400 leading-relaxed text-sm">
                Stay connected with our community and get updates on the latest
                opportunities for student empowerment and educational equity.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Empowered Pakistan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
