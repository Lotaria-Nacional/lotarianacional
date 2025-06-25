export default function TableInfoMobile() {
  return (
    <div className="lg:hidden  flex self-center flex-col text-[14px] font-medium items-center mt-4 gap-4">
      <div className="flex  gap-[8px] items-center">
        <span className="size-[19px]  rounded-full bg-LT_RED-300" />
        <span>Números sorteados</span>
      </div>
      <div className="flex gap-[8px] items-center">
        <span className="size-[19px] rounded-full bg-LT_GRAY-100" />
        <span>Números não sorteados</span>
      </div>
    </div>
  );
}
