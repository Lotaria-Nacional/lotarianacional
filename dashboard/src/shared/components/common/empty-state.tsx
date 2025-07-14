import { twMerge } from "tailwind-merge";

type EmptyStateProps = {
  message?: string;
  className?: string;
};

export default function EmptyState({
  message = "Nenhum resultado disponível.",
  className = "",
}: EmptyStateProps) {
  return (
    <div
      className={twMerge(
        "w-full flex items-center justify-center text-gray-500 text-sm p-4",
        className
      )}
    >
      {message}
    </div>
  );
}
