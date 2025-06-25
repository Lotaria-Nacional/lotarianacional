import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export default function PoliticContentWrapper({ children }: Props) {
  return <div className="flex flex-col gap-2">{children}</div>;
}
