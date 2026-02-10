import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section } from './Section'
import { SectionTitle } from './SectionTitle'
import { GlassCard } from './GlassCard'
import { PhotoGrid } from './PhotoGrid'
import { Lightbox } from './Lightbox'
import { couplePhotos } from '../data/content'

export function OurMemories() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const [showPhotos, setShowPhotos] = useState(false)

  return (
    <Section className="bg-gradient-to-b from-cream to-sunshine-50">
      <div className="mx-auto max-w-2xl">
        <SectionTitle subtitle="Só aparece se você quiser. Mas eu amo a gente.">
          Nossas lembranças
        </SectionTitle>

        <GlassCard className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-text-primary">Modo tímida</p>
              <p className="mt-1 text-xs text-text-muted">
                {showPhotos ? 'As fotos estão aparecendo' : 'As fotos estão escondidas'}
              </p>
            </div>
            <button
              onClick={() => setShowPhotos(!showPhotos)}
              className={`relative h-7 w-12 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sunshine-400 ${
                showPhotos ? 'bg-sunshine-400' : 'bg-gray-300'
              }`}
              aria-label={showPhotos ? 'Esconder fotos' : 'Mostrar fotos'}
            >
              <motion.div
                animate={{ x: showPhotos ? 20 : 2 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="absolute top-0.5 h-6 w-6 rounded-full bg-white shadow-md"
              />
            </button>
          </div>
        </GlassCard>

        <motion.div
          initial={false}
          animate={{
            height: showPhotos ? 'auto' : 0,
            opacity: showPhotos ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <PhotoGrid
            photos={couplePhotos}
            onPhotoClick={setLightboxSrc}
          />
          <p className="mt-4 text-center text-sm italic text-text-muted">
            Eu gosto da gente. Mesmo quando você faz careta na foto.
          </p>
        </motion.div>

        {!showPhotos && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-sm italic text-text-muted"
          >
            Quando estiver pronta, é só ligar o toggle ali em cima.
          </motion.p>
        )}
      </div>

      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </Section>
  )
}
