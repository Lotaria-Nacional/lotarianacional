import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Props = { className?: string } & PropsWithChildren;

export default function Box({ children, className }: Props) {
  return (
    <div
      className={twMerge(
        "flex bg-white gap-4 p-4 items-center justify-center rounded-card",
        className
      )}
    >
      {children}
    </div>
  );
}
