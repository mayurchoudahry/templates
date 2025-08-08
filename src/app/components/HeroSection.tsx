// components/HeroSection.tsx

'use client'

import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
  return (
    
    <section className="min-h-screen w-full flex items-center justify-between px-10 md:px-20 bg-white relative overflow-hidden" style={{backgroundImage: 'url(/images/background.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      {/* Feather gradient at bottom for smooth blend */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 z-10" style={{background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fff 100%)'}} />
      {/* Left Content */}
      <div className="max-w-xl space-y-6">
        {/* <h2 className="text-lg font-medium text-gray-800">CINEMETOGRAPHER / VIDEO EDITOR</h2>
        <h1 className="font-caudex text-5xl md:text-6xl font-semibold text-black leading-tight">
          MAYUR <br /> CHOUDHARY
        </h1> */}

      </div>

      {/* Right Image */}
      <div className="hidden md:flex w-1/2 justify-center items-center">
        <Image
          src="/hero.png" // place the image in /public/hero.png
          alt="Human Head"
          width={600}
          height={800}
          className="object-contain opacity-90 blur-sm"
        />
      </div>

      {/* Scroll Indicator (optional) */}
      <div className="absolute bottom-10 left-10 animate-bounce text-gray-400 text-xl">↓</div>

</section>
  )
}

export default HeroSection
