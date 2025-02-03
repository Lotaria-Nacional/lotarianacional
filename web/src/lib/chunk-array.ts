import { IDailyResult } from "@/interfaces"

export const chunkArr = (array: IDailyResult[], size: number) => {
  const chunks: IDailyResult[][] = []

  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size))
  }

  if (chunks.length > 1 && chunks[chunks.length - 1].length < size) {
    const lastChunk = chunks[chunks.length - 1]
    const previousChunk = chunks[chunks.length - 2]

    while (lastChunk.length < size && previousChunk.length > 0) {
      lastChunk.unshift(previousChunk.pop()!)
    }
  }

  return chunks
}
