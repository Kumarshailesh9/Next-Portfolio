'use client';

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/project", label: "Projects" },
    { href: "/skill", label: "Skills" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full background1 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:py-4 text-white">
        
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-lg md:text-xl font-semibold tracking-wide hover:size-bold transition-colors whitespace-nowrap"
        >
          Shailesh Kumar
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center space-x-8 text-sm font-medium">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-white hover:text-gray-600 transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-slate-700 focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-3 py-4 text-sm font-medium">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-slate-700 hover:text-gray-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
