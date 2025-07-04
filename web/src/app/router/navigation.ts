import { ICONS } from "../constants/assets"
import { SiFacebook, SiX, SiLinkedin, SiWhatsapp } from "react-icons/si"

type NavigationOptions = {
  id: number
  label: string
  link: string
  submenu?: {
    id: number
    label: string
    link: string
  }[]
}

export const navigationLinks: NavigationOptions[] = [
  {
    id: 1,
    label: "Chances e prémios",
    link: "chances-e-premios",
  },
  {
    id: 2,
    label: "Como jogar",
    link: "como-jogar",
  },
  {
    id: 3,
    label: "Resultados",
    link: "resultados",
  },
  {
    id: 4,
    label: "Estatísticas",
    link: "estatisticas",
  },

  {
    id: 5,
    label: "Agências",
    link: "agencias",
  },
  {
    id: 6,
    label: "Carreira",
    link: "#",
    submenu: [
      {
        id: 1,
        label: "Torna-te revendedor",
        link: "carreira/revendedor",
      },
      {
        id: 2,
        label: "Vagas disponíveis",
        link: "carreira/vagas",
      },
    ],
  },
]

export const LINK_CARDS_NAVIGATION = [
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
] as const

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

export const FOOTER_NAVIGATION = [
  {
    id: 1,
    label: "Sobre nós",
    link: "/sobre-nos",
  },
  {
    id: 2,
    label: "Notícias",
    link: "/noticias",
  },
  {
    id: 3,
    label: "Carreira",
    link: "/carreira/vagas",
  },
  {
    id: 4,
    label: "Termos e condições gerais",
    link: "/termos-e-condicoes-gerais",
  },
  {
    id: 5,
    label: "Termos de Privacidade",
    link: "/termos-de-privacidade",
  },
] as const

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
] as const
