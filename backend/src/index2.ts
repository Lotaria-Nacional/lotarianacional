import path from "path"
import * as XLSX from "xlsx"

function generateExcel(data: any, filePath: string) {
  const worksheet = XLSX.utils.aoa_to_sheet(data)
  console.log("STEP 1 --> ", worksheet)

  const workbook = XLSX.utils.book_new()
  console.log("STEP 2 --> ", workbook)

  XLSX.utils.book_append_sheet(workbook, worksheet, "Resultados Teste")
  console.log("STEP 3 --> ", workbook)
  console.log("STEP 4 --> ", worksheet)

  XLSX.writeFile(workbook, filePath)
}

const data = [
  ["Data", "Fezada", "Kazola", "Aqueceu", "Eskebra"],
  [
    "20-12-2024",
    "12,10,11,28,09",
    "98,17,12,77,23",
    "1,23,66,14,6",
    "8,43,64,19,23",
  ],
  [
    "20-12-2024",
    "12,10,11,28,09",
    "98,17,12,77,23",
    "1,23,66,14,6",
    "8,43,64,19,23",
  ],
  [
    "20-12-2024",
    "12,10,11,28,09",
    "98,17,12,77,23",
    "1,23,66,14,6",
    "8,43,64,19,23",
  ],
  [
    "20-12-2024",
    "12,10,11,28,09",
    "98,17,12,77,23",
    "1,23,66,14,6",
    "8,43,64,19,23",
  ],
]

// generateExcel(data, "resultados-teste.xlsx")

function readExcel(file: string) {
  const workbook = XLSX.readFile(file)
  console.log("STEP 1 ---> ", workbook)

  const sheetName = workbook.SheetNames[0]
  console.log("STEP 2 ---> ", sheetName)

  const worksheet = workbook.Sheets[sheetName]
  console.log("STEP 3 ---> ", worksheet)

  const data = XLSX.utils.sheet_to_json(worksheet)
  console.log("STEP 4 -->  ", data)
}

const file = path.join(__dirname, "../resultados-teste.xlsx")
readExcel(file)