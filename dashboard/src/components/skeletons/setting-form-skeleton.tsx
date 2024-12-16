import { Skeleton } from "../ui/skeleton"

const SettingFormSkeleton = () => {
  return (
    <div className="w-[552px] p-20 items-center justify-start pt-20 mx-auto flex flex-col gap-8">
      <div className="flex flex-col gap-2 w-full">
        <Skeleton className="w-[140px] h-[20px]" />
        <Skeleton className="w-full h-[40px]" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <Skeleton className="w-[140px] h-[20px]" />
        <Skeleton className="w-full h-[40px]" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <Skeleton className="w-[140px] h-[20px]" />
        <Skeleton className="w-full h-[40px]" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <Skeleton className="w-[140px] h-[20px]" />
        <Skeleton className="w-full h-[40px]" />
      </div>
      <Skeleton className="w-full h-[40px]" />
    </div>
  )
}

export default SettingFormSkeleton
