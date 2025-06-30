import { Right } from "./right";

export class Left<L, R> {
  public readonly value: L;

  constructor(value: L) {
    this.value = value;
  }

  public isLeft(): this is Left<L, R> {
    return true;
  }

  public isRight(): this is Right<L, R> {
    return false;
  }
}
