export type GameGuideProps = {
  id:number
  image:{
    desktop:string
    mobile:string
  }
  description:string
}

export const GAME_GUIDE_CONTENT: GameGuideProps[] = [
  {
    id: 1,
    image: {
    desktop:"/game-guide/images/desktop/manual-1.webp",
    mobile:"/game-guide/images/mobile/manual-1.webp",
    },
    description:
      "Escolhe a chance que queres jogar. Chance 2,3,4,5 (ou seja, se vais jogar escolhendo 2,3,4 ou 5 números).",
  },
  {
    id: 2,
    image: {
      desktop:"/game-guide/images/desktop/manual-2.webp",
      mobile:"/game-guide/images/mobile/manual-2.webp"
      },
    description:
      "Escolhe os teus números entre 1 e 90. Se escolheres jogar a Chance 2, escolhes 2 números, se optares pela Chance 5, escolhes 5 números.",
  },
  {
    id: 3,
    image: {
      desktop:"/game-guide/images/desktop/manual-3.webp",
      mobile:"/game-guide/images/mobile/manual-3.webp"
      },
    description:
      "Agora escolhe o valor da tua aposta. O valor mínimo é de 50 Kz e o valor máximo é de 1000 Kz.",
  },
  {
    id: 4,
    image: {
      desktop:"/game-guide/images/desktop/manual-4.webp",
      mobile:"/game-guide/images/mobile/manual-4.webp"
      },
    description:
      "Há 4 sorteios por dia: Às 10h, às 13h, às 16h, e às 19h. Escolhe em qual deles queres fazer a tua aposta.",
  },
  {
    id: 5,
    image: {
      desktop:"/game-guide/images/desktop/manual-5.webp",
      mobile:"/game-guide/images/mobile/manual-5.webp"
      },
    description:
      "Regista a tua aposta numa agente certificado, numa loja oficial da Lotaria Nacional ou agente Elephant Bet. Se tiver alguma dúvida, eles podem ajudar.",
  },
  {
    id: 6,
    image: {
      desktop:"/game-guide/images/desktop/manual-6.webp",
      mobile:"/game-guide/images/mobile/manual-6.webp",
      },
    description:
      "Acompanha os sorteios e/ou vê os resultados nas Redes Sociais. Para ganhar, independentemente da Chance em que apostaste, tens de acertar pelo menos 1 número.",
  },
  {
    id: 7,
    image: {
      desktop:"/game-guide/images/desktop/manual-7.webp",
      mobile:"/game-guide/images/mobile/manual-7.webp",
      },
    description:
      "Se fores um dos vencedores dirige-te com o teu bilhete premiado a uma loja Oficial da Lotaria Nacional ou da Elephant Bet para levantares o teu prémio. Parabéns.",
  },
]
// export const GAME_GUIDE_MOBILE = [
//   {
//     id: 1,
//     image: 'game-guide/images/mobile/manual-1.webp',
//     description:
//       "Escolhe a chance que queres jogar. Chance 2,3,4,5 (ou seja, se vais jogar escolhendo 2,3,4 ou 5 números).",
//   },
//   {
//     id: 2,
//     image: 'game-guide/images/mobile/manual-2.webp',
//     description:
//       "Escolhe os teus números entre 1 e 90. Se escolheres jogar a Chance 2, escolhes 2 números, se optares pela Chance 5, escolhes 5 números.",
//   },
//   {
//     id: 3,
//     image: 'game-guide/images/mobile/manual-3.webp',
//     description:
//       "Agora escolhe o valor da tua aposta. O valor mínimo é de 50 Kz e o valor máximo é de 1000 Kz.",
//   },
//   {
//     id: 4,
//     image: 'game-guide/images/mobile/manual-4.webp',
//     description:
//       "Há 4 sorteios por dia: Às 10h, às 13h, às 16h, e às 19h. Escolhe em qual deles queres fazer a tua aposta.",
//   },
//   {
//     id: 5,
//     image: 'game-guide/images/mobile/manual-5.webp',
//     description:
//       "Regista a tua aposta numa agente certificado, numa loja oficial da Lotaria Nacional ou agente Elephant Bet. Se tiver alguma dúvida, eles podem ajudar.",
//   },
//   {
//     id: 6,
//     image: 'game-guide/images/mobile/manual-6.webp',
//     description:
//       "Acompanha os sorteios e/ou vê os resultados nas Redes Sociais. Para ganhar, independentemente da Chance em que apostaste, tens de acertar pelo menos 1 número.",
//   },
//   {
//     id: 7,
//     image: 'game-guide/images/mobile/manual-7.webp',
//     description:
//       "Se fores um dos vencedores dirige-te com o teu bilhete premiado a uma loja Oficial da Lotaria Nacional ou da Elephant Bet para levantares o teu prémio. Parabéns.",
//   },
// ]
