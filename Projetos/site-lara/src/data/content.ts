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
  { src: laraJovem, alt: 'Lara jovem', caption: 'O começo de tudo' },
  { src: laraJovem2, alt: 'Lara jovem', caption: 'Já com esse brilho no olhar' },
  { src: laraJovem3, alt: 'Lara jovem', caption: 'Quem diria que ia virar médica?' },
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
    caption: 'Dois amores numa cena só',
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
  { src: laraComBuque, alt: 'Lara com buquê', caption: 'Linda' },
  { src: laraFormatura, alt: 'Lara na formatura', caption: 'Formatura maravilhosa' },
]

export const surgeryPhoto: Photo = {
  src: laraPijamaCirurgico,
  alt: 'Lara de pijama cirúrgico',
  caption: 'No ambiente dela',
}

export const surgeryIAPhotos: Photo[] = [
  {
    src: laraCirurgiaIA,
    alt: 'Lara cirurgiã em versão IA',
    caption: 'Lara cirurgiã em versão IA — até a inteligência artificial sabe que ela é incrível',
  },
]

export const superpowers = [
  'Mãos firmes',
  'Coração gigante',
  'Coragem de sobra',
  'Café como combustível',
  'Determinação que não acaba',
  'E um charme que desarma qualquer plantão',
]

export const italyCities = [
  {
    name: 'Roma',
    description: 'Andar de mãos dadas pelas ruínas, jogando moeda na Fontana di Trevi e pedindo pra voltar juntos.',
    icon: '🏛️',
  },
  {
    name: 'Florença',
    description: 'Comer gelato sentados na beira do Arno enquanto o sol se põe devagar sobre as pontes.',
    icon: '🌻',
  },
  {
    name: 'Veneza',
    description: 'Uma gôndola, um entardecer dourado e o silêncio bom de quem não precisa dizer nada.',
    icon: '🛶',
  },
  {
    name: 'Costa Amalfitana',
    description: 'Estradas na beira do mar, vilas coloridas e o cheiro de limoncello misturado com brisa do mar.',
    icon: '🍋',
  },
  {
    name: 'Nápoles',
    description: 'A pizza mais honesta do mundo, ruas vivas e aquela energia que só o sul da Itália tem.',
    icon: '🍕',
  },
]

export const emergencyMessages = [
  'Você já passou por tanta coisa. E venceu todas.',
  'Não precisa ser forte o tempo todo. Pode descansar.',
  'Eu estou aqui. Não como solução, mas como companhia.',
  'Curiosidade médica: sorrir libera serotonina. Então faz de conta que eu contei uma piada boa.',
  'Você é suficiente.',
  'Respira. Eu estou com você.',
]

export const firstImpressions = [
  'Meu Deus, que sorriso.',
  'Ela é inteligente de um jeito absurdo.',
  'Eu vou fazer questão de cuidar desse coração.',
]

export const ACCESS_CODE = 'joana'
