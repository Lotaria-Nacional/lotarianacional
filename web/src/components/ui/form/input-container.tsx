type Props = {
  children: React.ReactNode;
  labelName: string;
  required?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const InputContainer = ({
  required = true,
  children,
  labelName,
  ...rest
}: Props) => {
  return (
    <div {...rest} className="flex flex-col w-full gap-2">
      <label htmlFor={labelName} className="font-semibold">
        {labelName}{" "}
        {required && <span className="text-xs text-red-600">*</span>}
      </label>
      {children}
    </div>
  );
};

export default InputContainer;
