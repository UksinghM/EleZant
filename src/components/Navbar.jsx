'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-3 flex items-center justify-between">
      
      {/* LOGO */}
      <div className="flex items-center">
        <div className="relative w-36 h-10 md:w-44 md:h-12">
          <Image
            src="/Homepage/logo.png"
            alt="Elegantize Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* NAV LINKS */}
      <ul className="hidden md:flex gap-7 text-[15px] font-medium">
        <li><Link href="/" className="hover:text-[#c6a062] transition">Home</Link></li>
        <li><Link href="/about" className="hover:text-[#c6a062] transition">About</Link></li>
        <li><Link href="/services" className="hover:text-[#c6a062] transition">Services</Link></li>
        <li><Link href="/gallery" className="hover:text-[#c6a062] transition">Gallery</Link></li>
        <li><Link href="/portfolio" className="hover:text-[#c6a062] transition">Portfolio</Link></li>
        <li><Link href="/blog" className="hover:text-[#c6a062] transition">Blog</Link></li>
        <li><Link href="/faqs" className="hover:text-[#c6a062] transition">FAQs</Link></li>
        <li><Link href="/contact" className="hover:text-[#c6a062] transition">Contact</Link></li>
      </ul>

      {/* MOBILE MENU BUTTON */}
      <div className="md:hidden">
        <button className="text-2xl leading-none">☰</button>
      </div>

    </nav>
  );
}
