"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
 <Image
  src="/images/logo/promotinf-logo-new.png"
  alt="Promotinf Constructions"
  width={180}
  height={60}
  priority
  className="h-auto w-[150px] md:w-[170px]"
/>
</Link>

        {/* Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:block"
        >
         <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`transition-colors duration-300 ${
                    pathname === item.href
                      ? "font-semibold text-[#C9A227]"
                      : "text-gray-700 hover:text-[#C9A227]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}

          </ul>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <span className="hidden xl:block text-sm text-gray-600">
           +91 75400 66770
          </span>
 {/* Hamburger */}
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="lg:hidden text-[#0B2341] ml-1"
    aria-label="Toggle Menu"
  >
    {isOpen ? <X size={28} /> : <Menu size={28} />}
  </button>

           {!isOpen && (
  <Link
    href="/contact"
    className="rounded-xl bg-[#0B2341] px-3 py-2 text-sm font-medium text-white transition hover:bg-[#C9A227] hover:text-black lg:px-5 lg:py-3 lg:text-base"
  >
    Enquire Now
  </Link>
)}

        </div>

      </div>
      {isOpen && (
  <div className="absolute left-0 top-full w-full bg-white shadow-xl lg:hidden">
    <ul className="flex flex-col">

      {navItems.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            onClick={() => setIsOpen(false)}
            className={`block px-6 py-4 ${
              pathname === item.href
                ? "text-[#C9A227] font-semibold"
                : "text-gray-700"
            }`}
          >
            {item.label}
          </Link>
        </li>
      ))}

      <div className="border-t px-6 py-4">
        <p className="mb-4 text-gray-600">
          +91 75400 66770
        </p>

        <Link
          href="/contact"
          onClick={() => setIsOpen(false)}
          className="block rounded-xl bg-[#0B2341] py-3 text-center font-medium text-white"
        >
          Enquire Now
        </Link>
      </div>

    </ul>
  </div>
)}
    </header>
  );
}