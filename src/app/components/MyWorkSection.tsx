'use client'

import { motion } from 'framer-motion'
import LongFormVideoCarousel from '../components/LongFormVideoCarousel' // assuming the component is in the same directory

const MyWorkSection = () => {
  return (
    <motion.section
      id="mywork"
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
        My Work
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="mt-8 max-w-3xl mx-auto text-center text-[18px] leading-relaxed text-gray-700"
      >
        This is the My Work section. Showcase your projects or portfolio here.
      </motion.p>
      <div className="mt-12">
        {/* Long-form Video Carousel */}
        <LongFormVideoCarousel />
      </div>
    </motion.section>
  )
}

export default MyWorkSection
