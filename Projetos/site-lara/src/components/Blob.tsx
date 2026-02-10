import { motion } from 'framer-motion'

interface BlobProps {
  className?: string
  color?: string
  size?: string
  delay?: number
}

export function Blob({ className = '', color = 'bg-sunshine-300/30', size = 'w-72 h-72', delay = 0 }: BlobProps) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${color} ${size} ${className}`}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -20, 30, 0],
        scale: [1, 1.1, 0.95, 1],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
  )
}
