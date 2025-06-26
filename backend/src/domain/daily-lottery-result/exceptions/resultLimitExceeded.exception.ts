export class ResultLimitException extends Error {
  constructor() {
    super("Apenas 4 resultados são permitidos por dia.")
    this.name = this.constructor.name
  }
}
