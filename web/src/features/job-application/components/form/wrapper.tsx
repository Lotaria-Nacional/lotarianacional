import { cn } from "@/lib/utils";
import { HTMLAttributes, PropsWithChildren, ReactNode } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
  inputLabel: string;
} & PropsWithChildren;

export default function Wrapper({ inputLabel, children, className }: Props) {
  return (
    <div className={cn("flex flex-col w-full gap-2", className)}>
      <label className="text-[14px]" htmlFor={inputLabel}>
        {inputLabel}
      </label>
      {children}
    </div>
  );
}
