import { motion } from 'framer-motion'
import type { Photo } from '../data/content'

interface PhotoGridProps {
  photos: Photo[]
  onPhotoClick: (src: string) => void
  columns?: 1 | 2 | 3
}

export function PhotoGrid({ photos, onPhotoClick, columns = 2 }: PhotoGridProps) {
  const gridClass =
    columns === 1
      ? 'grid grid-cols-1 gap-3'
      : columns === 3
        ? 'grid grid-cols-2 gap-3 md:grid-cols-3'
        : 'grid grid-cols-2 gap-3'

  return (
    <div className={gridClass}>
      {photos.map((photo, i) => (
        <motion.button
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onPhotoClick(photo.src)}
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
  )
}
