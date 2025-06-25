type Props = { error?: string };

export default function Error({ error }: Props) {
  return <span className="text-xs text-red-600">{error}</span>;
}
