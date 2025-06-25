export const currentDateFormated = () => {
  const currentDate = new Date()
  return `${currentDate.getDate().toString().padStart(2, "0")}/${(
    currentDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${currentDate.getFullYear()}`
}
