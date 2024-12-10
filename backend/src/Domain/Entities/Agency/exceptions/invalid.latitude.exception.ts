import { DomainError } from "../../../../shared/errors/domain.error"

export class InvalidLatitudeException extends DomainError {
  constructor() {
    super("A latitude deve estar entre 90 e 180.")
  }
}
