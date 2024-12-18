import { Skeleton } from "../ui/skeleton"

const EditAgencyFormSkeleton = () => {
  return (
    <div className="grid grid-cols-2 w-[450px] gap-4">
      <div className="col-span-2 gap-2 flex items-center">
        <div className="w-full flex flex-col gap-2">
          <Skeleton className="w-[100px] h-[20px]" />
          <Skeleton className="w-full h-[40px]" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <Skeleton className="w-[100px] h-[20px]" />
          <Skeleton className="w-full h-[40px]" />
        </div>
      </div>

      <div className="flex col-span-2 flex-col gap-2">
        <Skeleton className="w-[100px] h-[20px]" />
        <Skeleton className="w-full h-[40px]" />
      </div>
      <div className="col-span-2 gap-2 flex items-center">
        <div className="w-full flex flex-col gap-2">
          <Skeleton className="w-[100px] h-[20px]" />
          <Skeleton className="w-full h-[40px]" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <Skeleton className="w-[100px] h-[20px]" />
          <Skeleton className="w-full h-[40px]" />
        </div>
      </div>
      <Skeleton className="col-span-2 h-[50px]" />
    </div>
  )
}

export default EditAgencyFormSkeleton
