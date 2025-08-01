export default function TableInfoDesktop() {
  return (
    <div className="hidden lg:flex text-[14px] font-medium items-center gap-4">
      <div className="flex gap-[8px] items-center">
        <span className="size-[19px] rounded-full bg-LT_RED-300" />
        <span>Números sorteados</span>
      </div>
      <div className="flex gap-[8px] items-center">
        <span className="size-[19px] rounded-full bg-LT_GRAY-100" />
        <span>Números não sorteados</span>
      </div>
    </div>
  );
}
