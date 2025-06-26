export class InvalidException extends Error {
  constructor() {
    super("Os resultados devem ser adicionados no mesmo dia.")
    this.name = this.constructor.name
  }
}
