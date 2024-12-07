export class InvalidPassword extends Error {
  public readonly name = "InvalidPasswordError"

  constructor(message = "Palavra-passe incorreta.") {
    super(message)
    Object.setPrototypeOf(this, InvalidPassword.prototype)
  }
}
