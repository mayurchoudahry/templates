// components/Navbar.tsx

'use client'

import Link from 'next/link'
import { useTheme } from './ThemeContext'
import ThemeToggleButton from './ThemeToggleButton'

const Navbar = () => {
  return (
    <header className="fixed top-4 w-full z-50 flex justify-center">
      <nav className="bg-white/70 dark:bg-black/70 backdrop-blur-md rounded-full shadow-md px-6 py-2 flex items-center gap-6 text-sm font-light">
        {/* Logo */}
        {/* Theme Toggle Button */}
        <ThemeToggleButton />

        {/* Navigation Links */}
        <Link href="#about" className="hover:text-black text-neutral-700 transition">About</Link>
        <Link href="#showreels" className="hover:text-black text-neutral-700 transition">Show reels</Link>
        <Link href="#mywork" className="hover:text-black text-neutral-700 transition">My Work</Link>
        <Link href="#socialproof" className="hover:text-black text-neutral-700 transition">Social proof</Link>
        <Link href="#contact" className="hover:text-black text-neutral-700 transition">Contact</Link>
      </nav>
    </header>
  )
}

export default Navbar
