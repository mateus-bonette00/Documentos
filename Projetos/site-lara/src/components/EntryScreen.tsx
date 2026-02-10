import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ACCESS_CODE } from '../data/content'
import { Blob } from './Blob'

interface EntryScreenProps {
  onEnter: () => void
}

export function EntryScreen({ onEnter }: EntryScreenProps) {
  const [code, setCode] = useState('')
  const [error, setError] = useState(false)
  const [showCode, setShowCode] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (code.toLowerCase().trim() === ACCESS_CODE) {
      onEnter()
    } else {
      setError(true)
      setTimeout(() => setError(false), 2000)
    }
  }

  return (
    <div className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-gradient-to-br from-sunshine-200 via-sunshine-100 to-warm-50 px-5">
      <Blob className="-left-20 -top-20" color="bg-sunshine-300/40" size="w-80 h-80" />
      <Blob className="-bottom-32 -right-20" color="bg-warm-200/30" size="w-96 h-96" delay={3} />
      <Blob className="left-1/2 top-1/3" color="bg-sunshine-400/20" size="w-64 h-64" delay={6} />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-sm"
      >
        <div className="rounded-3xl border border-white/40 bg-white/70 p-8 shadow-2xl backdrop-blur-2xl md:p-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8 text-center"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sunshine-200">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sunshine-700">
                <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.557 1.522 4.82 3.889 6.195l-.878 3.69 4.095-2.088c.614.1 1.246.153 1.894.153 4.97 0 9-3.186 9-7.115C21 6.185 16.97 3 12 3z" />
              </svg>
            </div>
            <h1 className="font-display text-xl font-bold text-text-primary md:text-2xl">
              Uma coisinha para quando o mundo pesar
            </h1>
            <p className="mt-3 text-sm text-text-secondary">
              Esse lugar e so seu.
            </p>
          </motion.div>

          {!showCode ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <motion.button
                onClick={() => setShowCode(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-xl bg-gradient-to-r from-sunshine-400 to-sunshine-500 px-6 py-4 font-display text-base font-semibold text-text-primary shadow-lg shadow-sunshine-300/30 transition-shadow hover:shadow-xl"
              >
                Entrar
              </motion.button>
            </motion.div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.form
                key="code-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div>
                  <label className="mb-2 block text-xs font-medium text-text-muted">
                    Qual o nome da doguinha?
                  </label>
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    autoFocus
                    placeholder="Digite aqui..."
                    className="w-full rounded-xl border border-sunshine-200 bg-white/80 px-4 py-3.5 text-base text-text-primary placeholder:text-text-muted/50 focus:border-sunshine-400 focus:outline-none focus:ring-2 focus:ring-sunshine-300/50"
                  />
                </div>

                <AnimatePresence>
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-sm text-warm-500"
                    >
                      Hmm, nao e esse nome. Tenta de novo.
                    </motion.p>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full rounded-xl bg-gradient-to-r from-sunshine-400 to-sunshine-500 px-6 py-4 font-display text-base font-semibold text-text-primary shadow-lg shadow-sunshine-300/30 transition-shadow hover:shadow-xl"
                >
                  Abrir
                </motion.button>
              </motion.form>
            </AnimatePresence>
          )}
        </div>
      </motion.div>
    </div>
  )
}
