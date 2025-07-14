import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function InputContainer({ children, className }: Props) {
  return (
    <div className={cn("flex w-full flex-col gap-2", className)}>
      {children}
    </div>
  );
}

export default InputContainer;
