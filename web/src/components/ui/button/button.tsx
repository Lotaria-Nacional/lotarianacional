import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  variant?: "red" | "default";
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  className,
  variant = "default",
  ...rest
}: Props) => {
  return (
    <button
      {...rest}
      className={twMerge(
        `flex items-center rounded-[8px] gap-[8px] text-[14px] cursor-pointer justify-center h-[40px] px-4 w-fit ${
          variant === "default"
            ? "bg-LT_WHITE text-LT_RED-300 border-LT_RED-300 border"
            : "bg-LT_RED-300 text-white"
        }`,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
