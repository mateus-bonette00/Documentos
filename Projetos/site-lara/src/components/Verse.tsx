import { motion } from 'framer-motion'
import { Section } from './Section'
import passagemBiblica from '../assets/passagem-biblica..png'

export function Verse() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-cream via-sunshine-100/50 to-cream">
      <div className="relative z-10 mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-3xl shadow-2xl"
        >
          {/* Imagem como fundo da seção */}
          <div className="relative">
            <img
              src={passagemBiblica}
              alt="Passagem bíblica ilustrada"
              className="w-full object-cover"
            />

            {/* Overlay escuro com o texto por cima */}
            <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent px-6 pb-8 pt-20 text-center md:px-12 md:pb-12">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="h-px w-12 bg-sunshine-300/80" />
                </div>

                <blockquote>
                  <p className="font-display text-lg font-semibold leading-relaxed text-white drop-shadow-lg md:text-2xl">
                    &ldquo;Pedi, e dar-se-vos-á; buscai, e encontrareis; batei, e abrir-se-vos-á&rdquo;
                  </p>
                </blockquote>

                <div className="mt-4 flex justify-center">
                  <div className="h-px w-12 bg-sunshine-300/80" />
                </div>

                <p className="mt-4 text-sm font-medium text-sunshine-200">
                  Mateus 7:7
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
