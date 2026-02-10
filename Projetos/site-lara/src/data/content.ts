import laraJovem from '../assets/lara-jovem.jpeg'
import laraJovem2 from '../assets/lara-jovem2.jpeg'
import laraJovem3 from '../assets/lara-jovem3.jpeg'
import laraJovem4 from '../assets/lara-jovem4.jpeg'
import laraJovem5 from '../assets/lara-jovem5.jpeg'
import laraCaloura from '../assets/lara-caloura-MED.jpeg'
import laraEEu1 from '../assets/lara-e-eu1.jpeg'
import laraEEu2 from '../assets/lara-e-eu2.jpeg'
import laraEEu3 from '../assets/lara-e-eu3.jpeg'
import joana from '../assets/joana-doguinha-dela1.jpeg'
import laraFelizComAmiga from '../assets/lara-feliz-com-amiga.jpeg'
import laraEAmigos1 from '../assets/lara-e-amigos1.jpeg'
import laraEAmigos2 from '../assets/lara-e-amigos2.jpeg'
import laraEAmigos3 from '../assets/lara-e-amigos3.jpeg'
import laraEAmigos4 from '../assets/lara-e-amigos4.jpeg'
import laraEAmigos5 from '../assets/lara-e-amigos5.jpeg'
import laraEAmigos6 from '../assets/lara-e-amigos6.jpeg'
import laraEAmigos7 from '../assets/lara-e-amigos7.jpeg'
import laraEAmigos8 from '../assets/lara-e-amigos8.jpeg'
import laraEAmigos9 from '../assets/lara-e-amigos9.jpeg'
import laraEAmigos10 from '../assets/lara-e-amigos10.jpeg'
import laraTurma from '../assets/lara-turma-de-amigos.jpeg'
import laraComBuque from '../assets/lara-com-meu-buque.jpeg'
import laraFormatura from '../assets/lara-vestido-lindo-formatura.jpeg'
import laraPijamaCirurgico from '../assets/lara-com-Pijama cirúrgico.jpeg'
import laraCirurgiaIA from '../assets/lara-cirurgia-IA.png'
import videoBrincando from '../assets/lara-brincando-com-joana.mp4'
import videoPasseando from '../assets/lara-passeando-com-joana.mp4'

export interface Photo {
  src: string
  alt: string
  caption?: string
}

export interface Video {
  src: string
  title: string
  caption?: string
}

export const childhoodPhotos: Photo[] = [
  { src: laraJovem, alt: 'Lara jovem', caption: 'O comeco de tudo' },
  { src: laraJovem2, alt: 'Lara jovem', caption: 'Ja com esse brilho no olhar' },
  { src: laraJovem3, alt: 'Lara jovem', caption: 'Quem diria que ia virar medica?' },
  { src: laraJovem4, alt: 'Lara jovem' },
  { src: laraJovem5, alt: 'Lara jovem' },
]

export const calouraPhoto: Photo = {
  src: laraCaloura,
  alt: 'Lara caloura de Medicina',
  caption: 'A bixete que ia mudar tudo',
}

export const couplePhotos: Photo[] = [
  { src: laraEEu1, alt: 'Lara e Mateus', caption: 'A gente' },
  { src: laraEEu2, alt: 'Lara e Mateus' },
  { src: laraEEu3, alt: 'Lara e Mateus' },
]

export const joanaPhoto: Photo = {
  src: joana,
  alt: 'Joana, a doguinha',
  caption: 'Joana, a melhor doguinha do mundo',
}

export const joanaVideos: Video[] = [
  {
    src: videoBrincando,
    title: 'Lara brincando com a Joana',
    caption: 'Dois amores numa cena so',
  },
  {
    src: videoPasseando,
    title: 'Lara passeando com a Joana',
    caption: 'Passeio das melhores amigas',
  },
]

export const friendsPhotos: Photo[] = [
  { src: laraFelizComAmiga, alt: 'Lara feliz com amiga', caption: 'Risadas que curam' },
  { src: laraEAmigos1, alt: 'Lara e amigos' },
  { src: laraEAmigos2, alt: 'Lara e amigos' },
  { src: laraEAmigos3, alt: 'Lara e amigos' },
  { src: laraEAmigos4, alt: 'Lara e amigos' },
  { src: laraEAmigos5, alt: 'Lara e amigos' },
  { src: laraEAmigos6, alt: 'Lara e amigos' },
  { src: laraEAmigos7, alt: 'Lara e amigos' },
  { src: laraEAmigos8, alt: 'Lara e amigos' },
  { src: laraEAmigos9, alt: 'Lara e amigos' },
  { src: laraEAmigos10, alt: 'Lara e amigos' },
  { src: laraTurma, alt: 'Lara com a turma', caption: 'A turma toda' },
]

export const specialPhotos: Photo[] = [
  { src: laraComBuque, alt: 'Lara com buque', caption: 'Linda' },
  { src: laraFormatura, alt: 'Lara na formatura', caption: 'Formatura maravilhosa' },
]

export const surgeryPhoto: Photo = {
  src: laraPijamaCirurgico,
  alt: 'Lara de pijama cirurgico',
  caption: 'No ambiente dela',
}

// Galeria IA de cirurgia - facilmente expandivel
// Para adicionar mais imagens IA, basta importar acima e adicionar aqui
export const surgeryIAPhotos: Photo[] = [
  {
    src: laraCirurgiaIA,
    alt: 'Lara cirurgia em versao IA',
    caption: 'Lara cirurgia em versao IA -- a inteligencia artificial tambem sabe que ela e incrivel',
  },
  // Adicione mais imagens aqui:
  // { src: importedImage, alt: 'Descricao', caption: 'Legenda' },
]

export const superpowers = [
  'Maos firmes',
  'Coracao gigante',
  'Coragem',
  'Cafe como combustivel',
  'E um charme que desarma qualquer plantao',
]

export const italyCities = [
  {
    name: 'Roma',
    description: 'O Coliseu, a historia, e jogar moeda na Fontana di Trevi.',
    icon: '🏛️',
  },
  {
    name: 'Florenca',
    description: 'Arte, pontes e o melhor gelato que existe.',
    icon: '🌻',
  },
  {
    name: 'Veneza',
    description: 'Gondolas, canais e aquele entardecer que parece mentira.',
    icon: '🛶',
  },
  {
    name: 'Costa Amalfitana',
    description: 'Estradas na beira do mar, vilas coloridas e limoncello.',
    icon: '🍋',
  },
]

export const emergencyMessages = [
  'Voce ja passou por tanta coisa. E venceu todas.',
  'Nao precisa ser forte o tempo todo. Pode descansar.',
  'Eu estou aqui. Nao como solucao, mas como companhia.',
  'Curiosidade medica: sorrir libera serotonina. Entao faz de conta que eu contei uma piada boa.',
  'Voce e suficiente.',
  'Respira. Eu estou com voce.',
]

export const firstImpressions = [
  'Meu Deus, que sorriso.',
  'Ela e inteligente de um jeito absurdo.',
  'Eu vou fazer questao de cuidar desse coracao.',
]

export const ACCESS_CODE = 'joana'
