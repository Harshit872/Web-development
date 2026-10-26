import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between px-4 bg-slate-800 text-white py-4">
      <div className="font-bold text-xl">Facebook</div>
      <ul className="flex gap-6">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}