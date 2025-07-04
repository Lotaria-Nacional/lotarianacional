import { SiFacebook, SiX, SiLinkedin, SiWhatsapp } from "react-icons/si"
import { ICONS } from "../constants/assets"

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
    label: "Recrutamento",
    link: "recrutamento",
    submenu: [
      {
        id: 1,
        label: "Torna-te parceiro",
        link: "recrutamento/parceiro",
      },
      {
        id: 2,
        label: "Vagas disponíveis",
        link: "recrutamento/vagas",
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
    label: "Recrutamento",
    link: "/recrutamento",
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
  // {
  //   id: 6,
  //   label: "Regulamentos do Loto 5/90",
  //   link: "/regulamentos-do-loto-5-90",
  // },
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
