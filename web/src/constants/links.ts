import { ICONS } from "../constants/assets"
import { SiFacebook, SiX, SiLinkedin, SiWhatsapp } from "react-icons/si"

export const NAVIGATION_LINKS = [
  {
    id: 1,
    label: "Chances e prémios",
    link: "chances-e-premios",
  },
  {
    id: 2,
    label: "como jogar",
    link: "como-jogar",
  },
  {
    id: 3,
    label: "resultados",
    link: "resultados",
  },
  {
    id: 4,
    label: "estatísticas",
    link: "estatisticas",
  },

  {
    id: 5,
    label: "recrutamento",
    link: "recrutamento",
  },
]

export const MOBILE_NAVIGATION_LINKS = [
  {
    id: 1,
    label: "Chances e prémios",
    link: "/chances-e-premios",
  },
  {
    id: 2,
    label: "como jogar",
    link: "/como-jogar",
  },
  {
    id: 3,
    label: "resultados",
    link: "/resultados",
  },
  {
    id: 4,
    label: "estatísticas",
    link: "/estatisticas",
  },

  {
    id: 5,
    label: "Notícias",
    link: "/noticias",
  },
  {
    id: 6,
    label: "Agências",
    link: "/agencias",
  },
  {
    id: 7,
    label: "Sobre nós",
    link: "/sobre-nos",
  },

  {
    id: 8,
    label: "recrutamento",
    link: "recrutamento",
  },
]

export const DROPDOWN_MENU = [
  {
    id: 1,
    label: "Notícias",
    link: "/noticias",
  },
  {
    id: 2,
    label: "Agências",
    link: "/agencias",
  },
  {
    id: 3,
    label: "Sobre nós",
    link: "/sobre-nos",
  },
]

export const LINK_CARDS = [
  {
    id: 1,
    link: "/resultados",
    icon: ICONS.resultados,
    text: "Resultados",
  },
  {
    id: 2,
    link: "#",
    icon: ICONS.roleta,
    text: "horários dos próximos jogos",
  },
  {
    id: 3,
    link: "/estatisticas",
    icon: ICONS.newEstatistica,
    text: "estatísticas",
  },
]

export const SOCIAL_MEDIA = [
  {
    icon: SiFacebook,
    link: "#",
  },
  {
    icon: SiX,
    link: "#",
  },
  {
    icon: SiLinkedin,
    link: "#",
  },
  {
    icon: SiWhatsapp,
    link: "#",
  },
] as const
