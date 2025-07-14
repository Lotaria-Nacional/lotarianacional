import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons/lib";

type Props = {
  icon: IconType;
  isActive: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function TiptapToolbarButton({
  icon: Icon,
  isActive,
  ...props
}: Props) {
  const buttonState = {
    active:
      "bg-LT-RED-100 text-white px-2 py-2 rounded-button hover:bg-LT-RED-200 cursor-pointer transition-bg duration-200",
    inactive:
      "bg-white text-black px-2 py-2 rounded-button hover:bg-LT-GRAY-100 cursor-pointer transition-bg duration-200",
  };
  return (
    <button
      type="button"
      {...props}
      className={`${isActive ? buttonState.active : buttonState.inactive}`}
    >
      {<Icon />}
    </button>
  );
}
