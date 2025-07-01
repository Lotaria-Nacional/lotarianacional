import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export default function Container({ children }: Props) {
  return (
    <section className="w-full flex border-b pb-3 items-center justify-between lg:px-0">
      {children}
    </section>
  );
}
