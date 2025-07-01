import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export default function Actions({ children }: Props) {
  return <div className="flex items-center gap-2">{children}</div>;
}
