export function formatToNumbers(date:Date){
    return date.toString().split("T")[0].split("-").reverse().join("/")
}