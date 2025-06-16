import { Skeleton } from "../ui/skeleton";

const AgencySkeleton = () => {
  return (
    <div className="flex w-full justify-between">
      {Array.from({ length: 4 }).map((_, index) => (
        <Skeleton
          key={index}
          className="w-full lg:w-[305px] h-[181px] rounded-[20px]"
        />
      ))}
    </div>
  );
};

export default AgencySkeleton;
