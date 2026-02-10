import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section } from './Section'
import { emergencyMessages } from '../data/content'
import { Blob } from './Blob'
import laraEEu from '../assets/lara-e-eu1.jpeg'

export function EmergencyButton() {
  const [open, setOpen] = useState(false)
  const [showPhoto, setShowPhoto] = useState(false)

  useEffect(() => {
    if (!open) {
      setShowPhoto(false)
      return
    }

    const timer = setTimeout(() => {
      setShowPhoto(true)
    }, 7000)

    return () => clearTimeout(timer)
  }, [open])

  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-cream to-sunshine-100/30">
      <Blob className="-left-20 bottom-0" color="bg-sunshine-200/20" size="w-72 h-72" delay={3} />

      <div className="relative z-10 mx-auto max-w-md text-center">
        <p className="mb-6 text-sm text-text-muted">
          Se você precisar, esse botão tá aqui.
        </p>

        <motion.button
          onClick={() => setOpen(true)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full rounded-2xl bg-gradient-to-r from-sunshine-300 to-warm-300 px-8 py-5 font-display text-lg font-bold text-text-primary shadow-xl shadow-sunshine-200/40"
        >
          Estou triste agora
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-5 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] w-full max-w-sm overflow-y-auto rounded-3xl border border-white/30 bg-white/95 p-8 shadow-2xl backdrop-blur-xl"
            >
              <AnimatePresence mode="wait">
                {!showPhoto ? (
                  <motion.div
                    key="messages"
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="space-y-5">
                      {emergencyMessages.map((msg, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.3, duration: 0.4 }}
                        >
                          <p
                            className={`text-base leading-relaxed ${
                              i === emergencyMessages.length - 1
                                ? 'font-display text-lg font-bold text-text-primary'
                                : i === 3
                                  ? 'italic text-text-muted'
                                  : 'text-text-secondary'
                            }`}
                          >
                            {msg}
                          </p>
                          {i < emergencyMessages.length - 1 && (
                            <div className="mx-auto mt-4 h-px w-8 bg-sunshine-200" />
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="photo"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                  >
                    <div className="mb-6 overflow-hidden rounded-2xl">
                      <img
                        src={laraEEu}
                        alt="Lara e Mateus"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="font-display text-base font-bold leading-relaxed text-amber-500 md:text-lg"
                    >
                      Eu sei que você não gosta desta foto, mas eu gostaria de te mostrar
                      que vai ser sempre eu e você JUNTOS! EU TE AMO!
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: showPhoto ? 0.8 : emergencyMessages.length * 0.3 + 0.3 }}
                onClick={() => setOpen(false)}
                className="mt-8 w-full rounded-xl bg-sunshine-200 py-3 font-display text-sm font-semibold text-sunshine-800"
              >
                Fechar
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
