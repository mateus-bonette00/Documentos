import { motion } from 'framer-motion'
import { Blob } from './Blob'

export function Hero() {
  return (
    <section className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-gradient-to-br from-sunshine-200 via-sunshine-100 to-warm-50 px-5">
      <Blob className="-left-32 top-10" color="bg-sunshine-300/40" size="w-96 h-96" />
      <Blob className="-right-20 bottom-20" color="bg-warm-200/30" size="w-80 h-80" delay={2} />
      <Blob className="left-1/3 top-2/3" color="bg-sunshine-400/20" size="w-64 h-64" delay={5} />

      <div className="relative z-10 mx-auto max-w-lg text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-display text-4xl font-extrabold leading-tight text-text-primary md:text-5xl lg:text-6xl">
            Lara, voce e{' '}
            <span className="bg-gradient-to-r from-sunshine-600 to-warm-500 bg-clip-text text-transparent">
              suficiente.
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-5 text-lg text-text-secondary md:text-xl"
        >
          Voce e a minha pessoa certa.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-2 text-base text-text-muted"
        >
          E esse site e so pra te lembrar disso.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center"
        >
          <motion.a
            href="#quando-te-vi"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block rounded-xl bg-gradient-to-r from-sunshine-400 to-sunshine-500 px-7 py-4 font-display text-base font-semibold text-text-primary shadow-lg shadow-sunshine-300/30"
          >
            Abrir um abraco
          </motion.a>
          <motion.a
            href="#lara-crianca"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block rounded-xl border-2 border-sunshine-300 bg-white/50 px-7 py-4 font-display text-base font-semibold text-text-primary backdrop-blur-sm"
          >
            Ver o que eu vejo em voce
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-1 text-text-muted"
        >
          <span className="text-xs">rola pra baixo</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 13l5 5 5-5M7 7l5 5 5-5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
