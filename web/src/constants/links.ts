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
    label: "agências",
    link: "agencias",
  },
] as const

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
    label: "Agências",
    link: "/agencias",
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

export const FOOTER_NAVIGATION_LINKS = [
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
