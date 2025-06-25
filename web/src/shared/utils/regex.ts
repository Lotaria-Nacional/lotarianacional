export const regexPhoneNumber = (value: string) => {
  const onlyNumbers = value.replace(/\D/g, "")
  const limitedNumbers = onlyNumbers.slice(0, 9)
  const newPhone = limitedNumbers.replace(/(\d{1,3})(?=(\d{3})+(?!\d))/g, "$1-")
  return newPhone
}

export const regexIBAN = (value: string) => {
  const input = value.replace(/\D/g, "")
  const formattedValue =
    input
      .slice(0, 21)
      .match(/.{1,4}/g)
      ?.join(".") || ""

  return formattedValue
}
