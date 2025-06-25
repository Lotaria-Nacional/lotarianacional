import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
} & PropsWithChildren;
export default function PageTitle({ children, className }: Props) {
  return (
    <h1
      className={twMerge(
        "text-center uppercase font-bold text-[18px]",
        className
      )}
    >
      {children}
    </h1>
  );
}
