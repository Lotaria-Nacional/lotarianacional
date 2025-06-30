import { Left } from "./left";

export class Right<L, R> {
  public readonly value: R;

  constructor(value: R) {
    this.value = value;
  }

  public isLeft(): this is Left<L, R> {
    return false;
  }

  public isRight(): this is Right<L, R> {
    return true;
  }
}
