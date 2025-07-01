import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  htmlFor: string;
  icon?: string;
};

export default function InputFile({ icon, htmlFor, ...rest }: Props) {
  return (
    <label
      htmlFor={htmlFor}
      className="border p-4 flex-col cursor-pointer hover:border-LT_RED-300 duration-200 transition-colors ease-in-out flex items-center justify-center border-dashed rounded-[8px] border-zinc-300 w-full h-[118px]"
    >
      {icon && <img src={icon} alt="ícone de upload" />}
      <p className="text-sm text-zinc-500">
        Clique aqui para fazer o upload do currículum vitae
      </p>
      <input
        {...rest}
        accept="image/*"
        id={htmlFor}
        type="file"
        className="hidden"
      />
    </label>
  );
}
