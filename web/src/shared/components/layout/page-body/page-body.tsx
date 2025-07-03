import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import "./page-body.css";

type Props = {
  className?: string;
  defaultClasses?: boolean;
  children: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Container = ({
  children,
  className,
  defaultClasses = true,
  ...rest
}: Props) => {
  return (
    <div
      {...rest}
      className={twMerge(
        "flex items-center px-6 lg:w-full w-full mx-auto gap-8 flex-col justify-center h-full pt-8 pb-12 container",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
