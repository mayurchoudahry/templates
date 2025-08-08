'use client'

import { motion } from 'framer-motion'
import { SkiperMarquee } from '@/components/ui/skiper-marquee'
import Image from 'next/image'

const SocialProofSection = () => {
  return (
    <motion.section
      id="socialproof"
      className="relative px-6 md:px-20 py-24 bg-white dark:bg-black text-gray-700 dark:text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-[56px] font-semibold leading-tight tracking-tight text-center"
      >
        Social Proof
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="mt-12 text-2xl font-bold text-center"
      >
        Clients I worked for
      </motion.h2>
      <div className="mt-8">
        <SkiperMarquee className="flex gap-12 items-center" pauseOnHover repeat={2}>
          {/* <Image src="/brand-logos/Tata_logo.svg" alt="Tata" width={64} height={64} className="h-16 w-auto grayscale hover:grayscale-0 transition" /> */}
          <Image src="/brand-logos/apple.svg" alt="Apple" width={64} height={64} className="h-16 w-auto grayscale hover:grayscale-0 transition" />
          <Image src="/brand-logos/samsung.svg" alt="Samsung" width={64} height={64} className="h-16 w-auto grayscale hover:grayscale-0 transition" />
          <Image src="/brand-logos/google.svg" alt="Google" width={64} height={64} className="h-16 w-auto grayscale hover:grayscale-0 transition" />
          <Image src="/brand-logos/facebook.svg" alt="Facebook" width={64} height={64} className="h-16 w-auto grayscale hover:grayscale-0 transition" />
          <Image src="/brand-logos/amazon.svg" alt="Amazon" width={64} height={64} className="h-16 w-auto grayscale hover:grayscale-0 transition" />
        </SkiperMarquee>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="mt-8 max-w-3xl mx-auto text-center text-[18px] leading-relaxed text-gray-700"
      >
        This is the Social Proof section. Add testimonials, reviews, or media mentions here.
      </motion.p>
    </motion.section>
  )
}

export default SocialProofSection
