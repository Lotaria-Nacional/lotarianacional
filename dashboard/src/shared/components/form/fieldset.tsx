import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  children: React.ReactNode;
};

function Fieldset({ children, className }: Props) {
  return (
    <fieldset
      className={cn("grid grid-cols-1 lg:grid-cols-2 gap-6", className)}
    >
      {children}
    </fieldset>
  );
}

export default Fieldset;
