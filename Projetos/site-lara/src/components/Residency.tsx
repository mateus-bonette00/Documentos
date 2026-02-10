import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section } from './Section'
import { SectionTitle } from './SectionTitle'
import { GlassCard } from './GlassCard'
import { Lightbox } from './Lightbox'
import { superpowers, surgeryPhoto, surgeryIAPhotos, specialPhotos } from '../data/content'

export function Residency() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  return (
    <Section className="bg-gradient-to-b from-cream to-sunshine-100/50">
      <div className="mx-auto max-w-2xl">
        <SectionTitle subtitle="Cirurgia Geral. Nada menos.">
          Residencia
        </SectionTitle>

        <GlassCard className="mb-8">
          <p className="text-base leading-relaxed text-text-secondary md:text-lg">
            Voce escolheu uma das areas mais desafiadoras da Medicina e vai
            brilhar nela. Nao porque e facil, mas porque voce nunca precisou
            que fosse facil pra dar conta.
          </p>
        </GlassCard>

        <div className="mb-8">
          <p className="mb-4 text-sm font-medium text-text-muted">Checklist de superpoderes:</p>
          <div className="space-y-2">
            {superpowers.map((power, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.4 }}
                className="flex items-center gap-3 rounded-xl bg-white/50 px-4 py-3 backdrop-blur-sm"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 + 0.2, type: 'spring' }}
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-sunshine-300"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-sunshine-800">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <span className="text-sm font-medium text-text-primary">{power}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Foto de pijama cirurgico */}
        <div className="mb-8">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setLightboxSrc(surgeryPhoto.src)}
            className="group relative w-full overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sunshine-400"
          >
            <div className="aspect-[4/3]">
              <img
                src={surgeryPhoto.src}
                alt={surgeryPhoto.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-10">
              <p className="text-sm font-medium text-white/90">{surgeryPhoto.caption}</p>
            </div>
          </motion.button>
        </div>

        {/* Fotos especiais */}
        <div className="mb-8 grid grid-cols-2 gap-3">
          {specialPhotos.map((photo, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setLightboxSrc(photo.src)}
              className="group relative overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sunshine-400"
            >
              <div className="aspect-square">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              {photo.caption && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 pt-8">
                  <p className="text-xs font-medium text-white/90">{photo.caption}</p>
                </div>
              )}
            </motion.button>
          ))}
        </div>

        {/* Galeria IA - facilmente expandivel */}
        <div className="mt-10">
          <h3 className="mb-4 font-display text-lg font-bold text-text-primary">
            Lara cirurgia em versao IA
          </h3>
          <p className="mb-4 text-sm text-text-muted">
            Ate a inteligencia artificial sabe que voce e incrivel.
          </p>
          <div className="grid grid-cols-1 gap-4">
            {surgeryIAPhotos.map((photo, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setLightboxSrc(photo.src)}
                className="group relative overflow-hidden rounded-2xl border-2 border-sunshine-200 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sunshine-400"
              >
                <div className="aspect-[3/4] md:aspect-[4/3]">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12">
                  <p className="text-sm font-medium text-white">{photo.caption}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </Section>
  )
}
