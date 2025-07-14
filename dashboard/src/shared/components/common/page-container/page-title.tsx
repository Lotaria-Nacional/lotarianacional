import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type Props = {
  className?: string;
} & PropsWithChildren;

export default function PageTitle({ children, className }: Props) {
  return (
    <h1 className={cn("w-full flex items-center justify-between", className)}>
      {children}
    </h1>
  );
}
