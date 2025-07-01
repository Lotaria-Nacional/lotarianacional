import { twMerge } from "tailwind-merge";
import { FieldsetHTMLAttributes, PropsWithChildren } from "react";

type Props = FieldsetHTMLAttributes<HTMLFieldSetElement> & {
  className?: string;
} & PropsWithChildren;

export default function Row({ children, className, ...rest }: Props) {
  return (
    <fieldset
      {...rest}
      className={twMerge(
        "flex lg:flex-row flex-col w-full items-center gap-3 lg:gap-4",
        className
      )}
    >
      {children}
    </fieldset>
  );
}
