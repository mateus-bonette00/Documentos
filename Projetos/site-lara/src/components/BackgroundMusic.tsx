import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import song1 from '../assets/Los Hermanos - Último Romance - Eduardo Piva (youtube).mp3'
import song2 from '../assets/3 X 4 (Ao Vivo)-Engenheiros-Do-Hawai.mp3'

const playlist = [song1, song2]

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.35
    audio.src = playlist[currentTrack]
    audio.play().catch(() => {
      setIsPlaying(false)
    })
  }, [currentTrack])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    function handleEnded() {
      setCurrentTrack((prev) => (prev + 1) % playlist.length)
    }

    audio.addEventListener('ended', handleEnded)
    return () => audio.removeEventListener('ended', handleEnded)
  }, [])

  function togglePlay() {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      audio.play()
      setIsPlaying(true)
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  return (
    <>
      <audio ref={audioRef} />
      <motion.button
        onClick={togglePlay}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/60 shadow-lg backdrop-blur-xl transition-colors hover:bg-white/80"
        aria-label={isPlaying ? 'Pausar música' : 'Tocar música'}
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.svg
              key="playing"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-sunshine-700"
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </motion.svg>
          ) : (
            <motion.svg
              key="paused"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-text-muted"
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
              <line x1="1" y1="1" x2="23" y2="23" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  )
}
