import { JobOppening } from "../@types/job-oppening.types";

export const jobsList:JobOppening[] = [
  {
    id:1,
    department:"sorteio",
    title:"chefe adjunto de sorteio",
    description:"",
    requirements:[
      "Mínimo 3 anos de experiência na área",
      "Entender, interpretar normas ISO",
      "Tratamento e gestão de NC (Não Conformidade",
      "Noções de Controles Internos." 
    ],
    responsabilities:[],
    createdAt:new Date("2025-05-29")
  },
  
  {
    id:2,
    department:"transporte",
    title:"motorista",
    description:"",
    requirements:[
      "Viver no centro da cidade",
      "Carta de condução válida",
      "Experiência mínima de 2 anos",
      "Conhecimento básico de mecânica automotiva" 
    ],
    responsabilities:[],
    createdAt:new Date("2025-05-02")
  },
]
