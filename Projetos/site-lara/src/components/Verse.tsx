import { motion } from 'framer-motion'
import { Section } from './Section'
import { Blob } from './Blob'

export function Verse() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-cream via-sunshine-100/50 to-cream">
      <Blob className="-left-20 top-0" color="bg-sunshine-200/30" size="w-64 h-64" delay={2} />
      <Blob className="-right-20 bottom-0" color="bg-warm-100/30" size="w-56 h-56" delay={5} />

      <div className="relative z-10 mx-auto max-w-xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-sunshine-200/50 bg-white/60 px-6 py-12 shadow-xl backdrop-blur-xl md:px-12 md:py-16"
        >
          <div className="mb-6 flex justify-center">
            <div className="h-px w-16 bg-sunshine-300" />
          </div>

          <blockquote>
            <p className="font-display text-xl font-semibold leading-relaxed text-text-primary md:text-2xl">
              &ldquo;Pedi, e dar-se-vos-a; buscai, e encontrareis; batei, e abrir-se-vos-a&rdquo;
            </p>
          </blockquote>

          <div className="mt-6 flex justify-center">
            <div className="h-px w-16 bg-sunshine-300" />
          </div>

          <p className="mt-6 text-sm font-medium text-text-muted">
            Mateus 7:7
          </p>
        </motion.div>
      </div>
    </Section>
  )
}
