'use client'

import { motion } from 'framer-motion'
import FlipLink from '@/components/ui/text-effect-flipper'


const AboutSection = () => {
  return (
    <section id="about" className="relative px-6 md:px-20 py-24 bg-white dark:bg-black text-gray-700 dark:text-white">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-[56px] font-semibold leading-tight tracking-tight text-center"
      >
        <FlipLink href="">About </FlipLink>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="mt-8 max-w-3xl mx-auto text-center"
      >
        <img
          src="/images/profile.png"
          alt="Profile of Mayur Choudhary"
          className="mx-auto mb-8 w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white dark:border-gray-700"
        />
        <div className="flex justify-center gap-6 mb-4 text-lg">
          <span title="Location" className="flex items-center gap-2"><span role="img" aria-label="Globe">🌐</span> India</span>
          <span title="Language" className="flex items-center gap-2"><span role="img" aria-label="Language">🗣️</span> English</span>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-[18px] leading-relaxed text-gray-700 mb-8 font-[Montserrat,sans-serif]"
        >
          Hi! I'm <span className="font-extrabold text-black" style={{ fontFamily: 'Montserrat, sans-serif' }}>Mayur Choudhary</span>, a passionate Cinematographer and Video Editor dedicated to crafting visually stunning stories. I love experimenting with new techniques and pushing creative boundaries in every project I take on.
        </motion.p>
        <div className="flex flex-col md:flex-row justify-center gap-12">
          {/* Software Section */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 justify-center">
              <span>Editing Software</span>
            </h2>
            <div className="relative w-full max-w-lg mx-auto h-20 flex items-center">
              {/* Gradient overlays */}
              <div className="absolute left-0 top-0 h-full w-12 z-10 pointer-events-none" style={{background: 'linear-gradient(to right, #fff 75%, transparent)'}} />
              <div className="absolute right-0 top-0 h-full w-12 z-10 pointer-events-none" style={{background: 'linear-gradient(to left, #fff 75%, transparent)'}} />
              {/* Marquee bar */}
              <div className="overflow-hidden w-full">
                <div className="flex gap-12 animate-marquee whitespace-nowrap">
                  {/* Repeat icons for seamless loop */}
                  {[...Array(2)].flatMap((_, i) => [
                    <div className="flex flex-col items-center" key={`pr-${i}`}>
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="8" fill="#1D1D1D"/><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="16" fontFamily="Arial" dy=".3em">Pr</text></svg>
                      <span className="mt-2 text-xs text-gray-600">Premiere Pro</span>
                    </div>,
                    <div className="flex flex-col items-center" key={`ae-${i}`}>
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="8" fill="#2C2C2C"/><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="16" fontFamily="Arial" dy=".3em">Ae</text></svg>
                      <span className="mt-2 text-xs text-gray-600">After Effects</span>
                    </div>,
                    <div className="flex flex-col items-center" key={`ps-${i}`}>
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="8" fill="#222"/><text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="16" fontFamily="Arial" dy=".3em">PS</text></svg>
                      <span className="mt-2 text-xs text-gray-600">Photoshop</span>
                    </div>
                  ])}
                </div>
              </div>
            </div>
          </div>
          {/* Camera Section */}
          <div className="flex-1 mt-10 md:mt-0">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 justify-center">
              <span>Current Camera</span>
            </h2>
            <div className="flex flex-col items-center">
              {/* Placeholder camera icon */}
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="12" fill="#333"/><circle cx="24" cy="24" r="10" fill="#fff"/><circle cx="24" cy="24" r="6" fill="#333"/></svg>
              <span className="mt-2 text-xs text-gray-600">Sony A7 III</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutSection
