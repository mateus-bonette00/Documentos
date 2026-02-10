import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section } from './Section'
import { SectionTitle } from './SectionTitle'
import { GlassCard } from './GlassCard'
import { italyCities } from '../data/content'

export function Italy() {
  const [stamped, setStamped] = useState(false)

  return (
    <Section className="overflow-hidden bg-gradient-to-b from-sunshine-100/50 via-sunshine-200/30 to-warm-100/30">
      <div className="mx-auto max-w-2xl">
        <SectionTitle subtitle="O seu sonho. O nosso plano.">
          Itália
        </SectionTitle>

        <GlassCard className="mb-8">
          <p className="text-base leading-relaxed text-text-secondary md:text-lg">
            Eu sei que a Itália mora dentro de você. Cada vez que você fala das ruas de
            Roma, dos canais de Veneza, seus olhos brilham de um jeito que me faz querer
            te levar pra lá agora. E pode guardar essa promessa: a gente vai. Vai pisar
            naquelas pedras juntos, vai comer a melhor pizza da vida, vai ver o pôr do sol
            mais bonito do mundo de mãos dadas. Você merece cada segundo disso.
          </p>
        </GlassCard>

        <div className="mb-8">
          <p className="mb-4 text-sm font-medium text-text-muted">Mini roteiro dos sonhos:</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {italyCities.map((city, i) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
              >
                <GlassCard hover className="h-full">
                  <div className="mb-2 text-2xl">{city.icon}</div>
                  <h4 className="font-display text-base font-bold text-text-primary">
                    {city.name}
                  </h4>
                  <p className="mt-1 text-sm text-text-secondary">
                    {city.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <motion.button
            onClick={() => setStamped(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-block rounded-xl bg-gradient-to-r from-sunshine-400 to-warm-400 px-8 py-4 font-display text-base font-semibold text-text-primary shadow-lg shadow-sunshine-300/30"
            disabled={stamped}
          >
            {stamped ? 'Passaporte carimbado!' : 'Carimbar passaporte'}
          </motion.button>

          <AnimatePresence>
            {stamped && (
              <motion.div
                initial={{ opacity: 0, scale: 0.3, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: -6 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="mx-auto mt-8 inline-block"
              >
                <div className="rounded-xl border-4 border-dashed border-sunshine-600 px-8 py-5">
                  <p className="font-display text-3xl font-extrabold tracking-widest text-sunshine-700 md:text-4xl">
                    ITÁLIA
                  </p>
                  <p className="mt-1 text-xs font-semibold tracking-wider text-sunshine-600">
                    APROVADO — LARA & MATEUS
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-base italic text-text-secondary"
          >
            A gente vai. E vai ser lindo demais.
          </motion.p>
        </div>
      </div>
    </Section>
  )
}
