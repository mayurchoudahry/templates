'use client'

import { motion } from 'framer-motion'
import VideoCarousel from './VideoCarousel'

const ShowReelsSection = () => {
  return (
    <motion.section
      id="showreels"
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
        Show Reels
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="mt-8 max-w-3xl mx-auto text-center text-[18px] leading-relaxed text-gray-700"
      >
        Here are some of my favorite short-form video edits. 
      </motion.p>
      <div className="mt-12">
        {/* Video Carousel */}
        <VideoCarousel />
      </div>
    </motion.section>
  )
}

export default ShowReelsSection
