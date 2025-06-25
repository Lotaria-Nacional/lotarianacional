import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Props = PropsWithChildren & { className?: string };

export default function Field({ children, className }: Props) {
  return (
    <fieldset
      className={twMerge(
        "grid w-full grid-cols-1 md:grid-cols-2 gap-4",
        className
      )}
    >
      {children}
    </fieldset>
  );
}
