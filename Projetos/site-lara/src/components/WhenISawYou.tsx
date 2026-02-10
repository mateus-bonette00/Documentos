import { motion } from 'framer-motion'
import { Section } from './Section'
import { SectionTitle } from './SectionTitle'
import { GlassCard } from './GlassCard'
import { firstImpressions } from '../data/content'

export function WhenISawYou() {
  return (
    <Section id="quando-te-vi" className="bg-gradient-to-b from-cream to-sunshine-50">
      <div className="mx-auto max-w-2xl">
        <SectionTitle subtitle="E eu soube.">
          Quando eu te vi...
        </SectionTitle>

        <GlassCard className="mb-8">
          <p className="text-base leading-relaxed text-text-secondary md:text-lg">
            Eu não acredito em coincidência. Quando eu te vi pela primeira vez,
            alguma coisa dentro de mim já sabia que você era a pessoa certa.
            Não foi mágica instantânea, foi mais como reconhecer alguém que
            eu já tava esperando sem saber.
          </p>
        </GlassCard>

        <div className="space-y-3">
          <p className="mb-4 text-sm font-medium text-text-muted">
            3 coisas que eu pensei na hora:
          </p>
          {firstImpressions.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              <GlassCard hover>
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sunshine-200 font-display text-sm font-bold text-sunshine-800">
                    {i + 1}
                  </span>
                  <p className="text-base font-medium text-text-primary">{text}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
