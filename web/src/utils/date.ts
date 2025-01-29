import { MONTHS } from "@/constants/months"

export const formatWeekDay = (value: string) => {
  const data = new Date(value)

  const formatter = new Intl.DateTimeFormat("pt-PT", {
    weekday: "long",
  })

  const diaDaSemana = formatter.format(data)
  return diaDaSemana
}
export const formatDate = (value: string) => {
  const dataOriginal = new Date(value)

  const dia = dataOriginal.getDate()
  const mes = dataOriginal.getMonth() + 1
  const ano = dataOriginal.getFullYear()

  const dataFormatada = `${dia.toString().padStart(2, "0")}/${mes
    .toString()
    .padStart(2, "0")}/${ano}`

  return dataFormatada
}

export const dateFormat = (date: string) => {
  const currDate = new Date(date)

  const day = currDate.getUTCDate()
  const month = MONTHS[currDate.getUTCMonth()]
  const year = currDate.getUTCFullYear()

  return `${day} ${month} ${year}`
}