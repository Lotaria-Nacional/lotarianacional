import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  title: string;
};

export default function PageHeader({ title, className }: Props) {
  return <h1 className={cn("text-2xl font-bold", className)}>{title}</h1>;
}
