import { useState } from 'react'
import { Section } from './Section'
import { SectionTitle } from './SectionTitle'
import { GlassCard } from './GlassCard'
import { PhotoGrid } from './PhotoGrid'
import { Lightbox } from './Lightbox'
import { friendsPhotos } from '../data/content'

export function Friends() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  return (
    <Section className="bg-gradient-to-b from-sunshine-50 to-cream">
      <div className="mx-auto max-w-2xl">
        <SectionTitle subtitle="Você tem pessoas que te amam.">
          Amigos e momentos felizes
        </SectionTitle>

        <GlassCard className="mb-8">
          <p className="text-base leading-relaxed text-text-secondary md:text-lg">
            Você tem pessoas que te amam. Eu sou só uma delas,
            mas eu faço questão.
          </p>
        </GlassCard>

        <PhotoGrid
          photos={friendsPhotos}
          onPhotoClick={setLightboxSrc}
          columns={2}
        />
      </div>

      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </Section>
  )
}
