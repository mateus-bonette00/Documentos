import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { EntryScreen } from './components/EntryScreen'
import { Hero } from './components/Hero'
import { WhenISawYou } from './components/WhenISawYou'
import { ChildhoodLara } from './components/ChildhoodLara'
import { Residency } from './components/Residency'
import { Italy } from './components/Italy'
import { Joana } from './components/Joana'
import { OurMemories } from './components/OurMemories'
import { Friends } from './components/Friends'
import { Verse } from './components/Verse'
import { EmergencyButton } from './components/EmergencyButton'
import { Footer } from './components/Footer'

function App() {
  const [entered, setEntered] = useState(false)

  return (
    <AnimatePresence mode="wait">
      {!entered ? (
        <motion.div
          key="entry"
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
        >
          <EntryScreen onEnter={() => setEntered(true)} />
        </motion.div>
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="min-h-dvh"
        >
          <Hero />
          <WhenISawYou />
          <ChildhoodLara />
          <Residency />
          <Italy />
          <Joana />
          <OurMemories />
          <Friends />
          <Verse />
          <EmergencyButton />
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default App
