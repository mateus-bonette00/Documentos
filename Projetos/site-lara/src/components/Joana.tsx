import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section } from './Section'
import { SectionTitle } from './SectionTitle'
import { GlassCard } from './GlassCard'
import { VideoPlayer } from './VideoPlayer'
import { Lightbox } from './Lightbox'
import { joanaPhoto, joanaVideos } from '../data/content'

export function Joana() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const [approved, setApproved] = useState(false)

  return (
    <Section className="bg-gradient-to-b from-warm-100/30 to-cream">
      <div className="mx-auto max-w-2xl">
        <SectionTitle subtitle="A melhor companheira de quatro patas.">
          Joana, a doguinha
        </SectionTitle>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setLightboxSrc(joanaPhoto.src)}
          className="group relative mb-8 w-full overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sunshine-400"
        >
          <div className="aspect-square">
            <img
              src={joanaPhoto.src}
              alt={joanaPhoto.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-10">
            <p className="text-sm font-medium text-white/90">{joanaPhoto.caption}</p>
          </div>
        </motion.button>

        <GlassCard className="mb-8 text-center">
          <p className="text-base text-text-secondary md:text-lg">
            A Joana também concorda que você é incrível.
          </p>
        </GlassCard>

        <div className="mb-8 space-y-4">
          {joanaVideos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <VideoPlayer video={video} />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.button
            onClick={() => setApproved(!approved)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-full border-2 border-sunshine-300 bg-white/60 px-6 py-3 font-display text-sm font-semibold text-text-primary backdrop-blur-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sunshine-600">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12l3 3 5-5" />
            </svg>
            Selo Joana de aprovação
          </motion.button>

          <AnimatePresence>
            {approved && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="mt-4"
              >
                <div className="inline-block rounded-full bg-sunshine-200 px-5 py-2">
                  <p className="text-sm font-semibold text-sunshine-800">
                    Aprovada pela Joana. Sem recurso.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </Section>
  )
}
