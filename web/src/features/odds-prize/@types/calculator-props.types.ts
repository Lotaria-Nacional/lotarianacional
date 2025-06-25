import { ChangeEvent } from "react";

export type CalculatorProps = {
    handleValue: (e: ChangeEvent<HTMLInputElement>) => void;
    filterTableContent:
      | {
          multiplier: number[];
          correct_numbers: number[];
        }
      | undefined;
    value: string;
  };

export type OddsPrizesCalculatorData = {
  label: string
  multiplier: number[]
  correct_numbers: number[]
}
  