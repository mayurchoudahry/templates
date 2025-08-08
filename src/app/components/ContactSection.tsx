'use client'

import { motion } from 'framer-motion'

const ContactSection = () => {
  return (
    <motion.section
      id="contact"
      className="relative px-6 md:px-20 py-24"
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
        Contact
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="mt-8 max-w-3xl mx-auto text-center text-[18px] leading-relaxed text-gray-700"
      >
        This is the Contact section. Add your contact form or contact details here.
      </motion.p>
    </motion.section>
  )
}

export default ContactSection
