export function formatToNumbers(date:Date){
    return date.toString().split("T")[0].split("-").reverse().join("/")
}

export function formatDateToNumber(date:Date){
    const currDate = new Date(date)
    const day = currDate.getDate().toString().padStart(1)
    const month = (currDate.getMonth() + 1).toString().padStart(2,"0")
    const year = currDate.getFullYear().toString()
    return `${day}/${month}/${year}`
}