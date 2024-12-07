import { DomainError } from "../../../../Shared/Errors/DomainError"

export class InvalidLatitudeException extends DomainError {
  constructor() {
    super("A latitude deve estar entre 90 e 180.")
  }
}
