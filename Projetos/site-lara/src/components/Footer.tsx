import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Footer() {
  const [easterEgg, setEasterEgg] = useState(false)

  return (
    <footer className="relative px-5 py-12 text-center">
      <div className="mx-auto max-w-md">
        <p className="text-sm text-text-muted">
          Feito com cuidado, por quem te admira.
        </p>
        <p className="mt-1 text-xs text-text-muted/60">
          — Mateus
        </p>

        <div className="mt-6 flex justify-center">
          <motion.button
            onClick={() => setEasterEgg(!easterEgg)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-sunshine-300/40 transition-colors hover:text-sunshine-400 focus:outline-none"
            aria-label="Surpresa"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.button>
        </div>

        <AnimatePresence>
          {easterEgg && (
            <motion.div
              initial={{ opacity: 0, y: 10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              className="mt-4 overflow-hidden"
            >
              <div className="rounded-xl bg-sunshine-100/60 px-4 py-3 backdrop-blur-sm">
                <p className="text-sm font-medium text-text-primary">
                  Diagnóstico: você é incrível.
                </p>
                <p className="mt-1 text-sm font-medium text-sunshine-700">
                  Prognóstico: eu te amo.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </footer>
  )
}
