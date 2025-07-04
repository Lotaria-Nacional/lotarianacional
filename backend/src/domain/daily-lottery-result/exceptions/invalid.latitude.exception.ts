import { DomainError } from "../../../core/errors/domain.error";

export class InvalidLatitudeException extends DomainError {
  constructor() {
    super("A latitude deve estar entre 90 e 180.")
  }
}
