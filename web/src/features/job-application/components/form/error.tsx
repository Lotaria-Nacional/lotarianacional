type Props = {
  error?: string;
};

export default function Error({ error }: Props) {
  return <span className="text-xs text-LT_RED-300">{error}</span>;
}
