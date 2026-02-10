import { motion } from 'framer-motion'

interface SectionTitleProps {
  children: string
  subtitle?: string
  className?: string
  light?: boolean
}

export function SectionTitle({ children, subtitle, className = '', light = false }: SectionTitleProps) {
  return (
    <div className={`mb-8 md:mb-12 ${className}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`font-display text-2xl font-bold leading-tight md:text-3xl lg:text-4xl ${
          light ? 'text-white' : 'text-text-primary'
        }`}
      >
        {children}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className={`mt-3 text-base md:text-lg ${
            light ? 'text-white/80' : 'text-text-secondary'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
