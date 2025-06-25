type FAQType = {
  id: number
  question: string
  answer: string
  link?: string
}

export const PERGUNTAS_FREQUENTES: FAQType[] = [
  {
    id: 1,
    question: "Como jogar?",
    answer: "Para saberes como fazer a tua aposta basta clicares no link: ",
    link: "/como-jogar",
  },
  {
    id: 2,
    question: "Como saber se o meu bilhete foi premiado?",
    answer:
      "Para saberes se o teu bilhete foi premiado, é só dirigires-te a um dos nossos revendedores oficiais da Lotaria Nacional ou da Elephant Bet, consultares as nossas redes sociais, visitares o nosso website ou ainda pelo nosso canal no WhatsApp link: ",
    link: "https://whatsapp.com/channel/0029Vat2EYbJkK7IJJDVo728",
  },
  {
    id: 3,
    question: "Onde posso comprar os bilhetes?",
    answer:
      "Para comprares o teu bilhete do jogo Loto 5/90 é só localizares um dos pontos de venda da lotaria Nacional distribuídos pela cidade de Luanda ou ainda em todos os agentes da Elephant Bet.",
  },
  {
    id: 4,
    question: "Como funciona o Jogo Loto 5/90?",
    answer:
      "O jogo Loto 5/90 funciona da seguinte forma: máquina de lotaria mistura 90 bolas numeradas de 1 à 90. A máquina sorteia 5 bolas, caso 1 ou mais dos teus números escolhidos forem sorteados pela máquina, tu ganhas! Saiba mais em: ",
    link: "/como-jogar",
  },
  {
    id: 5,
    question: "Em que canal televisivo será transmitido?",
    answer:
      "Brevemente vamos anunciar todas as novidades! Fica ligado às nossas redes sociais!",
  },
  {
    id: 6,
    question: "Qual é o valor mínimo e máximo de uma aposta?",
    answer:
      "O valor mínimo para a compra do bilhete de apostas da lotaria Nacional é de 50 Kz e o valor máximo é de 1000 Kz.",
  },
  {
    id: 7,
    question: "Como se calculam os prémios?",
    answer:
      "Para mais informações sobre como calcular o teu prémio clique no link para acessar o nosso simular de chances e prémios.",
    link: "/chances-e-premios",
  },
  {
    id: 8,
    question: "A ordem dos números importa na aposta?",
    answer:
      "A ordem escolhida dos números não importa, caso algum dos teus números seja sorteado já és um vencedor!",
  },
  {
    id: 9,
    question: "Onde posso levantar o prémio?",
    answer:
      "Podes levantar o teu prémio em qualquer parceiro revendedor da Lotaria Nacional, nos parceiros da Elephant Bet ou na sede da lotaria nacional!",
  },
  {
    id: 10,
    question: "Qual é a forma de pagamento para os vencedores?",
    answer:
      "Os vencedores poderão receber o seu prémio por transferência bancária, em dinheiro espécie ou pelo serviço Afrimoney.",
  },
] as const
