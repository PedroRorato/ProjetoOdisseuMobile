import Skeleton from "@/components/ui/Skeleton/Skeleton";

const HabitsGridSkeleton = () => {
  return (
    <>
      {Array.from({ length: 2 }).map((_, index) =>  <Skeleton key={index} height={200} marginBottom={25} />)}
    </>
  )
}



export default HabitsGridSkeleton;