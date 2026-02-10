import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section } from './Section'
import { SectionTitle } from './SectionTitle'
import { GlassCard } from './GlassCard'
import { PhotoGrid } from './PhotoGrid'
import { Lightbox } from './Lightbox'
import { childhoodPhotos, calouraPhoto } from '../data/content'

export function ChildhoodLara() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const [showPride, setShowPride] = useState(false)

  return (
    <Section id="lara-crianca" className="bg-gradient-to-b from-sunshine-50 to-cream">
      <div className="mx-auto max-w-2xl">
        <SectionTitle subtitle="Uma viagem ate aqui.">
          A Lara crianca
        </SectionTitle>

        <GlassCard className="mb-8">
          <p className="text-base leading-relaxed text-text-secondary md:text-lg">
            A Lara crianca imaginava onde ela estaria? Eu acho que ela ficaria
            encantada com a Lara medica. Ela olharia pra voce e pensaria:
            "entao e isso que eu vou ser? que demais."
          </p>
        </GlassCard>

        <div className="mb-8">
          <PhotoGrid
            photos={childhoodPhotos}
            onPhotoClick={setLightboxSrc}
          />
        </div>

        <div className="mb-8">
          <p className="mb-3 text-sm font-medium text-text-muted">A bixete de Medicina:</p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setLightboxSrc(calouraPhoto.src)}
            className="group relative w-full overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sunshine-400"
          >
            <div className="aspect-[4/3]">
              <img
                src={calouraPhoto.src}
                alt={calouraPhoto.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-10">
              <p className="text-sm font-medium text-white/90">{calouraPhoto.caption}</p>
            </div>
          </motion.button>
        </div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="cursor-pointer"
          onClick={() => setShowPride(true)}
        >
          <GlassCard className="border-sunshine-300/50 bg-sunshine-100/60 text-center">
            <h3 className="font-display text-xl font-bold text-text-primary md:text-2xl">
              Voce e suficiente sim, Lara.
            </h3>
            <p className="mt-2 text-sm text-text-muted">
              (toca aqui)
            </p>
            <AnimatePresence>
              {showPride && (
                <motion.p
                  initial={{ opacity: 0, y: 10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  className="mt-4 font-display text-lg font-semibold text-sunshine-700"
                >
                  Orgulho e pouco.
                </motion.p>
              )}
            </AnimatePresence>
          </GlassCard>
        </motion.div>
      </div>

      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </Section>
  )
}
