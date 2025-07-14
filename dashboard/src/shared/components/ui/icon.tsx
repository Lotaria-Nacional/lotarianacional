import { ICON } from "@/assets";
import { ImgHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export type IconNameType = keyof typeof ICON;

type Props = {
  name: IconNameType;
  className?: string;
} & ImgHTMLAttributes<HTMLImageElement>;

export default function Icon({ className, name, ...props }: Props) {
  return (
    <img
      {...props}
      alt={name}
      src={ICON[name]}
      className={twMerge("size-[18px] md:size-[24px]", className)}
    />
  );
}
