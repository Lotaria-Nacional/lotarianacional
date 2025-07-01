import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  inputLabel?: string;
  className?: string;
};

export default function Input({ inputLabel, className, ...rest }: Props) {
  return (
    <div className="flex flex-col w-full gap-2">
      <label className="text-[14px]" htmlFor={inputLabel}>
        {inputLabel}
      </label>
      <input
        {...rest}
        id={inputLabel}
        className={twMerge(
          "w-full h-[35px] text-sm rounded-[4px] border border-zinc-300 outline-LT_RED-300 px-2",
          className
        )}
      />
    </div>
  );
}
