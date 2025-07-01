import { twMerge } from "tailwind-merge";
import { ButtonHTMLAttributes } from "react";
import { buttonVariants, ButtonVariants } from "./button.cva";

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants;

const Button = ({
  children,
  intent,
  size,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className={twMerge(buttonVariants({ intent, size }), className)}
    >
      {children}
    </button>
  );
};

export default Button;
