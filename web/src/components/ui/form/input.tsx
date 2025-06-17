import { twMerge } from "tailwind-merge";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & { className?: string; label: string };

export default function InputWrapper({ children, className, label }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold">{label}</label>
      <div
        className={twMerge(
          "bg-white flex items-center border rounded-lg",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
