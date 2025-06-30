import { Either } from "./either";
import { Left } from "./left";
import { Right } from "./right";

export const left = <L, R>(value: L): Either<L, R> => {
  return new Left(value);
};
export const right = <L, R>(value: R): Either<L, R> => {
  return new Right(value);
};
